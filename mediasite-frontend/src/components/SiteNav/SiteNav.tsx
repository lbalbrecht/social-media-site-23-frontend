import { useContext, useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Input, NavLink } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Context'
import Login from '../Login/Login'
import './SiteNav.css'

interface navProps {
    passedFunc: ()=> void
}

export default function SiteNav({passedFunc}: navProps) {
    const token = useContext(AuthContext)
    const currentPage = window.location.pathname
    const navigate = useNavigate();
    const [loginDisplay, setLoginDisplay] = useState(true)
    const [profileDisplay, setProfileDisplay] = useState(false)

    if (token !== null) {
        setLoginDisplay(false)
        setProfileDisplay(true)
    }

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

    function logout() {
        console.log("Logged out")
    }

    return (
        <div className="navbar">
            <Navbar>
                <NavbarBrand onClick={refresh} style={{ color: "rgb(209, 209, 209)" }}>Name Pending</NavbarBrand>
                <Nav>
                    <NavItem>
                        {loginDisplay ? (
                            <NavItem>
                                <NavLink onClick={() => passedFunc()} style={{ color: "rgb(209, 209, 209)" }}>Login</NavLink>
                            </NavItem>
                        ) : (
                            <NavItem>
                                <NavLink onClick={logout} style={{ color: "rgb(209, 209, 209)" }}>Logout</NavLink>
                            </NavItem>
                        )}
                    </NavItem>
                    <NavItem>
                    {profileDisplay ? (
                            <NavItem>
                                <NavLink onClick={profile} style={{ color: "rgb(209, 209, 209)" }}>Username</NavLink>
                            </NavItem>
                        ) : (
                            <></>
                        )}
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={home} style={{ color: "rgb(209, 209, 209)"}}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <Input placeholder="Search" />
                    </NavItem>
                </Nav>
            </Navbar>
        </div >
    )
}