import React from 'react'
import { Grid } from 'semantic-ui-react'
import '../assets/blockcontent.css'
import Invoice from '../content/Invoice'
function InvoicePage() {
    return (
        <div>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Invoice />
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    )
}
export default InvoicePage;