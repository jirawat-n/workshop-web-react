import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_AUTH_REQ } from '../saga/actionTypes'
import { Loader, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import '../assets/navbar.css'
export default function Login(props) {
    const action = (type, payload) => dispatch({ type, payload })
    const [username, setUsername] = useState('')
    const history = useHistory();
    const [password, setPassword] = useState('')
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.status)
    if (user) {
        history.push('/')
    }
    return (
        <div className='form'>
            <Grid textAlign='center' style={{ height: '40vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo.png' /> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' value={username} required onChange={e => setUsername(e.target.value)} iconPosition='left' placeholder='Username' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password' value={password} required onChange={e => setPassword(e.target.value)}
                            />
                            <Button onClick={() => action(FETCH_AUTH_REQ, { username, password })} color='teal' fluid size='large'>
                                {loading ? <Loader active inline /> : 'Submit'}
                            </Button>
                            {error && <p style={{ color: 'red', fontSize: '12px' }}>{error.msg}</p>}
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
            <div className="footer-nav"></div>
        </div>
    )
}