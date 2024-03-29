import React from 'react'
import { Grid } from 'semantic-ui-react'
import '../assets/blockcontent.css'
import ProductHome from '../content/ProductHome'
import ProductHomeRec from '../content/Recommend'
function HomePage() {
    return (
        <div>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <div className="body-dess">
                            <ProductHome />
                        </div>
                        <div className="home-co">
                            <ProductHomeRec />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    )
}
export default HomePage;