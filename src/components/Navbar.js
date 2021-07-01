// import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {

    return (
        <div>

            <header class="header">
                <nav class="navbar">
                    <a href="/" class="nav-logo">Career Builder</a>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="/" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/userslist" class="nav-link">Users</a>
                        </li>
                        <li class="nav-item">
                            <a href="/about" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="/signup" class="nav-link">Sign Up</a>
                        </li>
                    </ul>
                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>
            </header>

        </div>
    )
}
export default NavBar;