import React, { Component } from "react";
import './form.css';

class Form extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
    }

    state = {
        amount: "",
        currency: "USD"
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'amount') {
            this.props.setAmount(e.target.value);
        } else {
            this.props.setCurrency(e.target.value);
        }
    };

    render() {
        // const pStyle = {
        //     backgroundImage: `url(./assets/${elem.currency}.png`
        // };

        // let teste = this.props.currencyList.map(item => (
        //     <option style={
        //         `backgroundImage: url(./assets/${item}.png`
        //     } key={item} value={item}>{item}</option>
        // ));

        return (
        <form >
            <input
                type="number"
                className="input-text"
                placeholder="0.00"
                value={this.state.amount}
                name="amount"
                onChange={this.onChange}
            />
            
            <select
                name="currency"
                value={this.state.currency}
                onChange={this.onChange}>
                {this.props.currencyList.map(item => (
                    // <option  key={item} value={item}><img src={`./assets/${item}.png`}/>{item}</option>
                    
                    <option
                        key={item}
                        value={item}
                        style={{ backgroundImage: `url(./assets/${item}.png)`}}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </form>
        );
    }
}
export default Form;