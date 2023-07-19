import { Link } from "react-router-dom";

function NavBar() {

    return (
        <header>
            <nav>
                <Link to="/">Chat</Link>
                <Link to="/conversations/:username">Conversations</Link>
            </nav>
        </header>
    )
}

export default NavBar;