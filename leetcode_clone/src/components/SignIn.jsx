import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        // For now we use local storage to store elements
        const storedUsername = localStorage.getItem('username')
        const storedPassword = localStorage.getItem('password')
        if (username === storedUsername && password == storedPassword) {
            localStorage.setItem('userLogin', 'true')
            setErrorMessage('')
            navigate("/")
            window.location.reload();
        }
        else {
            setErrorMessage('Invalid username or password')
        }
    }

    return (
        <div>
            <center>
                <div className="signin_form">
                    <form onSubmit={handleSubmit}>
                        <input value={username} placeholder="Username or Email" type="text" onChange={(e) => setUserName(e.currentTarget.value)} /> <br />
                        <input value={password} placeholder="Password" type="password" onChange={(e) => setPassword(e.currentTarget.value)} /> <br />
                        <span>{errorMessage}</span> <br />
                        <input type="submit" /><br />
                    </form>
                </div>
                <div className="signin_footer">
                    <Link to='/' >Forgot Password</Link>
                    <Link to={'/signup'} >SignUp</Link>
                </div>
            </center>
        </div>
    )
}

export default SignIn;