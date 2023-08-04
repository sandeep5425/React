import '../styling/Header.css'
function Header(){
    return(
        <div className="header"> 
            <div className="navigationItems">
                <div><p>Logo</p></div>
                <div><p>Explore</p></div>
                <div><p>Problems</p></div>
                <div><p>Discuss</p></div>
            </div>
            <div className="loginItems">
                <div><a>Premium</a></div>
                <div><a>pegister</a></div>
                <div><a>Sign In</a></div>
            </div>
        </div>
    );
}

export default Header;