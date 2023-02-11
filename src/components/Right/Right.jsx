import React from 'react'
import '../../style.css'
import errorIcon from '../../images/icon-error.svg'

const Right = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        const first = document.getElementById('Fname').value;
        const last = document.getElementById('Lname').value;
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Pass').value;

        if (first === ""){
            const changer = document.getElementById('Fname').parentNode;
            changer.classList.add('error-input');
        } 
        else{
            const changer = document.getElementById('Fname').parentNode;
            changer.classList.remove('error-input');
        }

        if (last === ""){
            const changer = document.getElementById('Lname').parentNode;
            changer.classList.add('error-input');
        } 
        else {
            const changer = document.getElementById('Lname').parentNode;
            changer.classList.remove('error-input');
        }

        if (email === ""){
            const changer = document.getElementById('Email').parentNode;
            changer.classList.add('error-input');
        } 
        else if (!isValid(email)){
            const changer = document.getElementById('Email').parentNode;
            changer.classList.add('error-input');

            const chgText = document.getElementById('chgText');
            chgText.innerText = "This is not a valid email";
        } 
        else {
            const changer = document.getElementById('Email').parentNode;
            changer.classList.remove('error-input');
        }

        if (password === ""){
            const changer = document.getElementById('Pass').parentNode;
            changer.classList.add('error-input');
        } else {
            const changer = document.getElementById('Pass').parentNode;
            changer.classList.remove('error-input');
        }
        
    };

    function isValid(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div className='right'>
            <h2 className='right-top'>Try it free 7 days<span className="right-top_change">then $20/mo. thereafter </span></h2>
            <form className='right-form' id="signUp" onSubmit={sendEmail}>
                <div className='right-form_input-field'>
                    <input type="text" id='Fname' placeholder='First Name'/>
                    <img src={errorIcon} className="error" id="nameF" alt="" />
                    <small>First name cannot be empty</small>
                </div>
                <div className='right-form_input-field'>
                    <input type="text" id='Lname' placeholder='Last Name' />
                    <img src={errorIcon} className="error" id="nameL" alt="" />
                    <small >last name cannot be empty</small>
                </div>
                <div className='right-form_input-field'>
                    <input type="email" id='Email' placeholder='Email Address' />
                    <img src={errorIcon} className="error" id='mailI' alt="" />
                    <small id="chgText">Email cannot be empty</small>
                </div>
                <div className='right-form_input-field'>
                    <input type="password" id='Pass' placeholder='Password' />
                    <img src={errorIcon} className="error" id='passwordI' alt="" />
                    <small>Password cannot be empty</small>
                </div>
                <button type='submit' className='right-form_submit' >Claim your free trial</button>
                <p className='right-form_para'>By clicking the button, you are agreeing to our <span className='red-para'>Terms and Services</span></p>
            </form>
        </div>
    )
}

export default Right
