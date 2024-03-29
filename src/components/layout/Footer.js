import React from 'react'
import '../assets/footer.css'
import { Container, Divider, Grid, Header, List, Segment, } from 'semantic-ui-react'

function Footer() {
    return (
        <div className="footer-fixed">
            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                    <Grid divided inverted stackable>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>About Us</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Category' />
                            <List link inverted>
                                <List.Item as='a'>Lense</List.Item>
                                <List.Item as='a'>Movie</List.Item>
                                <List.Item as='a'>Mirrorless</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Authentation' />
                            <List link inverted>
                                <List.Item as='a'>Sign In</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header inverted as='h4' content='License' />
                            <p>
                                Copyright © 2021 Intelligent Bytes Co., Ltd. All Rights Reserved.
                            </p>
                        </Grid.Column>
                    </Grid>

                    <Divider inverted section />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    )
}
export default Footer;