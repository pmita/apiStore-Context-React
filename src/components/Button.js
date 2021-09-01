import React from 'react';

const Button = ({
    btnClass ='actionButton',
    btnText ='ADD TO CART'
}) => {
    return(
        <button className={btnClass}>
            {btnText}
        </button>
    );
}

export default Button;