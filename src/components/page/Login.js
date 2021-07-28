import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_AUTH_REQ } from '../saga/actionTypes'
import { Loader, Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import '../assets/navbar.css'
import '../assets/home.css'
export default function Login() {
    const action = (type, payload) => dispatch({ type, payload })
    const [username, setUsername] = useState('')
    const history = useHistory();
    const [password, setPassword] = useState('')
    const { user, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.status)
    console.log(loading)
    if (user) {
        history.push('/')
    }
    return (
        <div className="detail-des">
            <Grid textAlign='center' style={{ height: '40vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' value={username} required
                                onChange={e => setUsername(e.target.value)} iconPosition='left' placeholder='Username' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password' value={password} required onChange={e => setPassword(e.target.value)}
                            />
                            <Button onClick={() => action(FETCH_AUTH_REQ, { username, password })} color='blue' fluid size='large'>
                                {loading ? <Button loading primary>
                                    Loading
                                </Button> : 'Sign in'}
                            </Button>
                            {error && <div>
                                <br></br>
                                <p style={{ color: 'red', fontSize: '16px' }}>{error.msg}</p>
                            </div>}
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
            <div className="footer-nav"></div>
        </div>
    )
}