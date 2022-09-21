import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const[registerFirstName, setRegisterFirstName] = useState('');
    const[registerLastName, setRegisterLastName] = useState('');
    const[registerPassword, setRegisterPassword] = useState('');

    const[loginFirstName, setLoginFirstName] = useState('');
    const[loginLastName, setLoginLastName] = useState('');
    const[loginPassword, setLoginPassword] = useState('');

    const register = () => {
        axios({
            method:'post',
            data:
                {
                    "firstName":registerFirstName,
                    "lastName":registerLastName,
                    "password":registerPassword
                },
            withCredentials: true,
            url:'http://localhost:5000/register',
        })
            .then((res) => console.log(res));
    };
    const login = () =>{

    };
    const getUser = () =>{

    };

    return (
        <div className="App">
            <div>
                <h1>Register</h1>
                <input placeholder='firstName' onChange={e => setRegisterFirstName(e.target.value)}/>
                <input placeholder='lastName' onChange={e => setRegisterLastName(e.target.value)}/>
                <input placeholder='password' onChange={e => setRegisterFirstName(e.target.value)}/>
                <button onClick={register}>Submit</button>
            </div>
            <div>
                <h1>Login</h1>
                <input placeholder='firstName' onChange={e => setLoginFirstName(e.target.value)}/>
                <input placeholder='password' onChange={e => setLoginPassword(e.target.value)}/>
                <button onClick={login}>Submit</button>
            </div>
            <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Submit</button>
            </div>
        </div>
    );
}

export default App;
