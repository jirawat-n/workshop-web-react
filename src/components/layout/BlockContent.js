import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Sidebar from './Sidebar'
import '../assets/blockcontent.css'
import Product from '../content/Product'

export default function BlockContent() {
    return (
        <div className="block">
            <Grid columns='equal'>
                <Grid.Column className="sideblock">
                    <Sidebar />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                        <Product />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>3</Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

