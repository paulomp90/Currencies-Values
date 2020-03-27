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
    }, 400);

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
                <h2>Currency Converter</h2>
                <h4>Receive a competitive and transparent pricing with no hidden spreads. See how we compare</h4>
                <Form
                    setAmount={this.setAmount}
                    setCurrency={this.setCurrency}
                    currencyList={this.state.simpleCurrencyList}
                />
                <CurrencyList
                    amount={this.state.amount}
                    currencyList={this.state.currencyList}
                />
                {/* <div style={{
                    backgroundImage: `url(assets/${this.state.simpleCurrencyList[5]}.png)`,
                    height: '100px',
                    width: '100px',
                }}>
                </div> */}
            </div>
        );
    }
}
export default MainContainer;