import React from 'react'
import { Grid } from 'semantic-ui-react'
import Sidebar from '../layout/Sidebar'
import '../assets/blockcontent.css'
import Product from '../content/Product'
import ProductDetail from '../content/ProductDetail'
function ProductPageDetails() {
    return (
        <div className="block">
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <ProductDetail />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <h2>This is Product Detail Page</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default ProductPageDetails;
