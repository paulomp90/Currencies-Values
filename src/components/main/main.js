import React from "react";
import './main.css';
import Form from "../form/form";
import CurrencyList from "../currency-list/currency-list";
import { debounce } from 'lodash';
import { getCurrency } from "../../services/services";

class MainContainer extends React.Component {

    constructor() {
        super();

        this.setAmount = this.setAmount.bind(this);
        this.setCurrency = this.setCurrency.bind(this);
    }

    state = {
        amount: 0,
        currency: "USD",
        simpleCurrencyList: ['USD'],
        currencyList: []
    };

    componentDidMount() {
        getCurrency(this.state.currency).then((data) => {
            this.setState({
                simpleCurrencyList: [...new Set(data.map(x => x.currency))],
                currencyList: data.filter(x => x.currency !== this.state.currency)
            })
        });
    }

    setAmount = debounce((newAmount) => {
        this.setState({amount: newAmount})
    }, 1000);

    setCurrency = newCurrency => {
        this.setState({
            currency: newCurrency
        });
        getCurrency(newCurrency).then((data) => {
            this.setState({currencyList: data.filter(x => x.currency !== newCurrency)})
        });
    };

    render() {
        return (
            <div className="container">
                <Form
                    setAmount={this.setAmount}
                    setCurrency={this.setCurrency}
                    currencyList={this.state.simpleCurrencyList}
                />
                <CurrencyList
                    amount={this.state.amount}
                    currencyList={this.state.currencyList}
                />
            </div>
        );
    }
}
export default MainContainer;