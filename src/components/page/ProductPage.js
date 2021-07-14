import React from 'react'
import { Grid } from 'semantic-ui-react'
import Sidebar from '../layout/Sidebar'
import '../assets/blockcontent.css'
import Product from '../content/Product'

function ProductPage() {
    return (
        <div className="block">
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Product />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <h2>This is Product Page</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default ProductPage;
