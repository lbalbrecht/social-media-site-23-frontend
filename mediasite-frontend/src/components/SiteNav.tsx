import { Navbar, NavbarBrand, Nav, NavItem, Input, NavLink } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import '../css/SiteNav.css'


export default function SiteNav() {
    const currentPage = window.location.pathname
    const navigate = useNavigate();

    function refresh() {
        if (currentPage !== '/') {
            navigate('/')
        }
        window.location.reload()
    }

    // Need to change to send to specific user profile
    function profile() {
        if (currentPage !== '/profile') {
            navigate('/profile')
            window.location.reload()
        }
    }

    function home() {
        if (currentPage !== '/') {
            navigate('/')
            window.location.reload()
        }
    }

    return (
        <div className="navbar">
            <Navbar>
                <NavbarBrand onClick={refresh} style={{color: "rgb(209, 209, 209)"}}>Name Pending</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Input />
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={profile} style={{color: "rgb(209, 209, 209)"}}>Username</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={home} style={{color: "rgb(209, 209, 209)"}}>Home</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    )
}