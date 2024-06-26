import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from '../../config/firebase.js';
import WeatherApp from '../WeatherApp/WeatherApp.jsx';

const SignIn = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
           
            console.log(userCredential);
        })
        .catch((error)=>{
            console.log(error);
        });
 
    };

  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn}>
            <h1>Log In to your Account</h1>

            <input type='email' placeholder='Enter our email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             >

             </input>
            <input type='password' placeholder='Enter our password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
            ></input>
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default SignIn;