import React from 'react';

const Button = ({
    btnClass ='actionButton',
    btnText ='ADD TO CART'
}) => {

    //define our event handlers
    const addItemHandler = (e) => {
        console.log(e.target);
    }

    return(
        <button 
            className={btnClass}
            onClick={addItemHandler}
        >
            {btnText}
        </button>
    );
}

export default Button;