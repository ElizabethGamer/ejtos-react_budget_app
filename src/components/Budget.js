import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
                alert("The budget cannot exceed £20000");
                return;
        }


        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
        setNewBudget(event.target.value);

        if (event.target.value < budget - remaining) {
            alert("The budget cannot be lower than spending");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
