import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthAsync } from '../actions/AuthActions'
import { Loader } from 'semantic-ui-react'
import { Button, Form, Container } from 'semantic-ui-react'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.status)

    return (
        <div className='form'>
            <Container>
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Field>
                    <Button onClick={() => dispatch(fetchAuthAsync(email, password))}>
                        {loading ? <Loader active inline /> : 'Submit'}
                    </Button>
                    {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
                </Form>
            </Container>
        </div>
    )
}