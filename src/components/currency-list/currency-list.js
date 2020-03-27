import './currency-list.css';
import React from "react";

class CurrencyList extends React.Component {
    render() {
        if (this.props.amount > 0) {
            return (
                <div className="center">
                    {this.props.currencyList.map(elem => (
                        <div className="currency-row" key={elem.pair}>
                            <div className="column">
                                {(this.props.amount > 0) ?
                                    Math.round((elem.ask * this.props.amount)*10000) / 10000:
                                    Math.round(elem.ask * 10000) /10000 }
                            </div>
                            <div className="column-currency">{elem.currency}</div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="sentence">Enter an amount to check the rates</div>
            );
        }
    }
}

export default CurrencyList;