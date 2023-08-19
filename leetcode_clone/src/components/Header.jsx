import '../styling/Header.css'
function Header() {
    return (
        <div className="header">
            <div className="navigationItems">
                <p>Logo</p>
                <p>Explore</p>
                <p>Problems</p>
                <p>Discuss</p>
            </div>
            <div className="loginItems">
                <button>Premium</button>
                <button>Register</button>
                <button>Sign In</button>
            </div>
        </div>
    );
}

export default Header;