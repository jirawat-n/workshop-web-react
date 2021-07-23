import React, { Component, } from 'react';
import axios from "axios";
import { Button, Form, Container } from 'semantic-ui-react'
class SignIn2 extends Component {
    state = {
        username: '',
        password: '',
    };
    handleSubmit = event => {
        event.preventDefault();
        const username = {
            username: this.state.username,
            password: this.state.password,
        }
        axios.post('http://127.0.0.1:8000/api/token/', username)
            .then(res => {
                const datas = res.status                       
            })
    }
    handleChange = event => {
        this.setState({
            username: event.target.value,
            // password: event.target.value,
        });
    }
    handleChange_2 = event => {
        this.setState({
            // username: event.target.value,
            password: event.target.value,
        });
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Username</label>
                        <input name="username" onChange={this.handleChange} placeholder='username' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input name="password" type="password" onChange={this.handleChange_2} placeholder='password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>

                </Form>
            </Container>
        );
    }
}
export default SignIn2;