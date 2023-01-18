import { useState } from 'react'
import { Modal, InputGroup, InputGroupText, Input, Button } from 'reactstrap'
import SITE_API from '../../utils/ApiConfig'


export default function Login() {
    const [toggleLogin, setToggleLogin] = useState(true)

    function login() {

    }

    function signup() {

    }

    function changeView() {
        setToggleLogin(!toggleLogin)
    }

    return (
        <Modal>
            {toggleLogin ? (
                <div>
                    <h3>Login</h3>
                    <br />
                    <InputGroup>
                        <InputGroupText>
                            Username
                        </InputGroupText>
                        <Input placeholder="username" />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupText>
                            Password
                        </InputGroupText>
                        <Input placeholder="username" />
                    </InputGroup>
                    <br />
                    <Button onClick={login}>Login</Button>
                    <br />
                    Don't have an account?
                    <br />
                    <Button onClick={changeView}>Signup</Button>
                </div>
            ) : (
                <div>
                    <h3>Signup</h3>
                    <br />
                    <InputGroup>
                        Enter a username
                        <Input placeholder="username" />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        Enter a password
                        <Input placeholder="password" />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        Confirm your password
                        <Input placeholder="confirm password" />
                    </InputGroup>
                    <br />
                    <Button onClick={signup}>Signup</Button>
                    <br />
                    Already have an account?
                    <br />
                    <Button onClick={changeView}>Login</Button>
                </div>
            )}
        </Modal>
    )
}