import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import '../assets/blockcontent.css'
import Category from '../content/Category'
function CategoryPage() {
    return (
        <div className="block">
            <Container>
                <Grid.Row>
                    <Category />
                </Grid.Row>
            </Container>
        </div>
    )
}
export default CategoryPage;