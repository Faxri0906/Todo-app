import "./Header.scss";
import rocket from "../../assets/rocket.png";
function Header() {
  return (
    <header className="header">
        <div className="header-logo">
            <div className="img">
                <img src={rocket}/>
            </div>
            <h1>to<span>do</span></h1>
        </div>
    </header>
  )
}

export default Header;