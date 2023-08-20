import { Link } from 'react-router-dom';
import '../styling/Header.css'
import { useState } from 'react';
function Header() {
    const [userlogged, setUserLogged] = useState(localStorage.getItem('userLogin'))
    console.log(localStorage.getItem('userLogin'));

    const logout = () => {
        setUserLogged('false')
        localStorage.setItem('userLogin', 'false')
    }

    return (
        <div className="header">
            <div className="navigationItems">
                <p>Logo</p>
                <p>Explore</p>
                <p>Problems</p>
                <p>Discuss</p>
            </div>
            {
                userlogged === 'true' ?
                    <div>
                        <b>Hello,{localStorage.getItem('username')}</b>
                        <button onClick={logout} >Logout</button>
                    </div>
                    :
                    <div className="loginItems">
                        <button>Premium</button>
                        <Link to={'/signup'}  >Register</Link >
                        <Link to={'/signin'}>SignIn</Link >
                    </div>
            }
        </div>
    );
}

export default Header;