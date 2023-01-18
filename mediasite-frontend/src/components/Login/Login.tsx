import { useState } from 'react'
import { Modal, InputGroup, Input, Button } from 'reactstrap'
import SITE_API from '../../utils/ApiConfig'
import './Login.css'

interface modalProps {
    showModal: boolean
}

export default function Login({ showModal }: modalProps) {
    const [toggleLogin, setToggleLogin] = useState(true)

    function login() {
        window.location.reload()
    }

    function signup() {
        window.location.reload()
    }

    function changeView() {
        setToggleLogin(!toggleLogin)
    }

    return (
        <Modal isOpen={showModal} className="loginModal" fade={true}>
            <div className="inputGroup">
                {toggleLogin ? (
                    <div className="loginGroup">
                        <h3>Login</h3>
                        <br />
                        <InputGroup>
                            <Input placeholder="username" />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <Input placeholder="password" />
                        </InputGroup>
                        <br />
                        <div className="modalButtons">
                            <Button onClick={login} className="topBtn">Login</Button>
                            <p className="changeText">Don't have an account?</p>
                            <Button onClick={changeView} className="btmBtn">Signup</Button>
                        </div>
                    </div>
                ) : (
                    <div className="loginGroup">
                        <h3>Signup</h3>
                        <br />
                        Enter a username
                        <br />
                        <InputGroup>
                            <Input placeholder="username" />
                        </InputGroup>
                        <br />
                        Enter a password
                        <br />
                        <InputGroup>
                            <Input placeholder="password" />
                        </InputGroup>
                        <br />
                        Confirm your password
                        <br />
                        <InputGroup>
                            <Input placeholder="confirm password" />
                        </InputGroup>
                        <br />
                        <div className="modalButtons">
                            <Button onClick={signup} className="topBtn">Signup</Button>
                            <br />
                            <p className="changeText">Already have an account?</p>
                            <br />
                            <Button onClick={changeView} className="btmBtn">Login</Button>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    )
}