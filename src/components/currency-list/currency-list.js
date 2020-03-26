import './currency-list.css';
import React from "react";

class CurrencyList extends React.Component {
    render() {
        if (this.props.amount > 0) {
            return (
                <div className="center">
                    {this.props.currencyList.map(elem => (
                        <div className="teste" key={elem.pair}>
                            <div className="column">{(this.props.amount > 0) ? elem.ask * this.props.amount: elem.ask }</div>
                            <div className="column-img"><img src={`./${elem.currency}.png`} alt={elem.currency} /></div>
                            
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="sentence">Enter an amount</div>
            );
        }
    }
}

export default CurrencyList;