import React from 'react'
import { Grid } from 'semantic-ui-react'
import Sidebar from '../layout/Sidebar'
import '../assets/blockcontent.css'

function HomePage() {
    return (
        <div>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <h1>Welcome to Food Shop</h1>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <h2>This is Home Page </h2>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    )
}
export default HomePage;