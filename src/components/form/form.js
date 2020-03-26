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
        return (
        <form >
            <input
                type="number"
                className="input-text"
                placeholder="Enter amount"
                value={this.state.amount}
                name="amount"
                onChange={this.onChange}
            />
            <select
                name="currency"
                value={this.state.currency}
                onChange={this.onChange}>
                {this.props.currencyList.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </form>
        );
    }
}
export default Form;