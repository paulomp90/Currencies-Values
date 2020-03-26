import {sdk} from './sdk'

export const getCurrency = (currency) => {
    return sdk.getTicker(currency)
        .then((res) => res);
}
