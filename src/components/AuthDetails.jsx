import { onAuthStateChanged, signOut} from 'firebase/auth';
import React, {useEffect,useState} from 'react';
import {auth} from '../config/firebase.js';
import { WeatherApp } from './WeatherApp/WeatherApp.jsx';
import { UserInfo } from './UserInfo.jsx';

export const AuthDetails = () => {
    const [authUser,setAuthUser]= useState(null);
    useEffect(()=>{
        const listen =onAuthStateChanged(auth, (user) =>{
           if(user){
            setAuthUser(user)
           }else{
            setAuthUser(null);
           }
        });
         
        return ()=>{
            listen();

        }


    },[]);
    const userSignOut =()=>{
        signOut(auth).then(()=>{
            console.log('Sign out successfully')
        }).catch(error=>console.log(error))

    }
  return (
    <div >
        { authUser ? <><WeatherApp/><p>{`Signed In as ${authUser.email} `}</p><button onClick={userSignOut}>Sign Out</button></>:<><UserInfo/> <p>Signed Out</p></>}
        </div>
  )
};
export default AuthDetails;