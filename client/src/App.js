import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {
    const[registerFirstName, setRegisterFirstName] = useState('');
    const[registerLastName, setRegisterLastName] = useState('');
    const[registerPassword, setRegisterPassword] = useState('');

    const[loginFirstName, setLoginFirstName] = useState('');
    const[loginLastName, setLoginLastName] = useState('');
    const[loginPassword, setLoginPassword] = useState('');
    const[users, setUsers] = useState({})

    const register = () => {
        Axios.post('http://localhost:5000/register',{
            firstName:registerFirstName,
            lastName:registerLastName,
            password:registerPassword
        },{withCredentials:true})
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err.response))
    };
    const login = () =>{

    };
    const getUser = async() =>{
        const res = await Axios.get('http://localhost:5000/users' )
        console.log(res)
        setUsers(res.data)
        console.log(res)
    };

    return (
        <div className="App">
            <div>
                <h1>Register</h1>
                <input placeholder='firstName' onChange={e => setRegisterFirstName(e.target.value)}/>
                <input placeholder='lastName' onChange={e => setRegisterLastName(e.target.value)}/>
                <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
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
                <textarea aria-valuetext={users}></textarea>
                <button onClick={()=>{
                    console.log('12312312313');getUser()}}>Submit</button>
            </div>
        </div>
    );
}

export default App;
