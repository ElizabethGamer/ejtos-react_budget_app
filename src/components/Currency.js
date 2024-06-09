import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [newCurr, setNewCurr] = useState(currency);

    const handleCurrChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })

        setNewCurr(event.target.value);
    }

    return(
        <div className="currency">
        <div className="currency-prepend">
            <label className="input-text" htmlFor="currencyy">Currency</label>
        </div>
        <select className="custom-select" id="currencyy" onChange={handleCurrChange}>
            <option defaultValue>{newCurr}</option>
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>

        </div>
    );
};

export default Currency;