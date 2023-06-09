import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from 'react';
import LoginContext from "../LightLayout/LoginContext";
import axios from 'axios';
import './LoginMenu.css';
import Session from 'react-session-api'

function LoginMenu(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hydrospar.onrender.com/login', { email, password });///połączenie do api na backendzie
      console.log(response.data); // tak wyciagasz co chcesz zeby ci wypisalo dane z requesta  
      console.log(response)
      Session.set("UserId", response.data)
      navigate('/user', { state: { id: response.data } });//navigacja gdzie pozniej
    } catch (error) {
      setErrorMessage('Rejestracja nie powiodla sie. Sprawdz podane dane.');
    }
  };
  
  return (
    <div id='LoginMenu'>
      <p className="loginTitle">LOG IN</p>
      <form className='loginForm' onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="errorParagraph">{errorMessage}</p>}
        <button id='LoginButtonForm' type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default LoginMenu;