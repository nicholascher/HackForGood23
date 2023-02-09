import React, {useState} from 'react';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value = {email} onChange = {inputEmail} type = "email" placeholder='Insert Your Email'/>
            </form>
        </div>
    )
}

export default LoginPage