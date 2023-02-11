import React from 'react'
import '../../style.css'
import errorIcon from '../../images/icon-error.svg'

const Right = () => {

    const formData = document.getElementById('signUp');

    const sendEmail = (e) => {
        e.preventDefault();

        const first = formData['Fname'].value;
        const last = formData['Lname'].value;
        const email = formData['Email'].value;
        const password = formData['Pass'].value;

        const icon = document.getElementById('nameF');
        const icon2 = document.getElementById('nameL');
        const icon3 = document.getElementById('mailI');
        const icon4 = document.getElementById('passwordI');

        if (first === ""){
            addErrorTo('Fname', 'First name cannot be empty');
            icon.style.display = 'block';
        } 
        else{
            removeErrorFrom('Fname');
            icon.style.display = 'none';
        }

        if (last === ""){
            addErrorTo('Lname', 'last name cannot be empty');
            icon2.style.display = 'block';
        } 
        else {
            removeErrorFrom('Lname');
            icon2.style.display = 'none';
        }

        if (email === ""){
            addErrorTo('Email', 'email cannot be empty');
            icon3.style.display = 'block';
        } 
        else if (!isValid(email)){
            addErrorTo('Email', 'Looks like this is not an email');
            icon3.style.display = 'block';
        } 
        else {
            removeErrorFrom('Email');
            icon3.style.display = 'none';
        }

        if (password === ""){
            addErrorTo('Pass', 'password cannot be empty');
            icon4.style.display = 'block';
        } else {
            removeErrorFrom('Pass');
            icon4.style.display = 'none';
        }
        
    };

    function addErrorTo(field, message){
        const inputControl = formData[field].parentNode;
        inputControl.classList.add('error-input');

        const small = inputControl.querySelector('small');
        small.innerText = message;
        small.style.display = 'block';
    }

    function removeErrorFrom(field){
        const inputControl = formData[field].parentNode;
        inputControl.classList.remove('error-input');

        const small = inputControl.querySelector('small');
        small.style.display = 'none';
    }

    function isValid(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div className='right'>
            <h2 className='right-top'>Try it free 7 days<span className="right-top_change">then $20/mo. thereafter </span></h2>
            <form action="" className='right-form' id="signUp" onSubmit={sendEmail}>
                <div className='right-form_input-field'>
                    <input type="text" id='Fname' placeholder='First Name'/>
                    <img src={errorIcon} className="error" id="nameF" alt="" />
                    <small></small>
                </div>
                <div className='right-form_input-field'>
                    <input type="text" id='Lname' placeholder='Last Name' />
                    <img src={errorIcon} className="error" id="nameL" alt="" />
                    <small ></small>
                </div>
                <div className='right-form_input-field'>
                    <input type="email" id='Email' placeholder='Email Address' />
                    <img src={errorIcon} className="error" id='mailI' alt="" />
                    <small></small>
                </div>
                <div className='right-form_input-field'>
                    <input type="password" id='Pass' placeholder='Password' />
                    <img src={errorIcon} className="error" id='passwordI' alt="" />
                    <small></small>
                </div>
                <button type='submit' className='right-form_submit' >Claim your free trial</button>
                <p className='right-form_para'>By clicking the button, you are agreeing to our <span className='red-para'>Terms and Services</span></p>
            </form>
        </div>
    )
}

export default Right
