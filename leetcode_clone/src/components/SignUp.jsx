import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
    const [username, setUserName] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            setErrorMessage("Password doesn't match")
        }
        else {
            localStorage.setItem('username', username)
            localStorage.setItem('password', password1)
            localStorage.setItem('userLogin', 'true')
            setErrorMessage('')
            navigate("/")
            window.location.reload();
        }
    }
    return (
        <div>
            <center>
                <div className="signup_form">
                    <form onSubmit={handleSubmit}>
                        <input value={username} placeholder="Username" type="text" onChange={(e) => setUserName(e.currentTarget.value)} /> <br />
                        <input value={password1} placeholder="Password" type="password" onChange={(e) => setPassword1(e.currentTarget.value)} /> <br />
                        <input value={password2} placeholder="Password" type="password" onChange={(e) => setPassword2(e.currentTarget.value)} /> <br />
                        <input value={email} placeholder="Email" type="text" onChange={(e) => setEmail(e.currentTarget.value)} /> <br />
                        <span>{errorMessage}</span> <br />
                        <input type="submit" /><br />
                    </form>
                </div>
                <div className="signup_footer">
                    Already have account?<Link to={'/signin'} >SignIn</Link>
                </div>
            </center>
        </div>
    )
}

export default SignUp;