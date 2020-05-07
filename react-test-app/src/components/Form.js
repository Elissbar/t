import React from 'react';

const Form = (props) => {
    return (
        <div className="left">
            <form className='main-form' onSubmit={props.submitForm}>
                <input className="price" />
                <input className="model" />
                <button className="primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;