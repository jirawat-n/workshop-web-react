import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthAsync } from '../actions/AuthActions'
import { Loader } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { Button, Form, Container } from 'semantic-ui-react'
export default function Login() {
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
            <Container>
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input type="text" name='username' value={username} required onChange={e => setUsername(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" name='password'  value={password} required onChange={e => setPassword(e.target.value)} />
                    </Form.Field>
                    <Button onClick={() => dispatch(fetchAuthAsync(username, password))}>
                        {loading ? <Loader active inline /> : 'Submit'}
                    </Button>
                    {error && <p style={{ color: 'red', fontSize: '12px' }}>{error.msg}</p>}
                </Form>
            </Container>
        </div>
    )
}