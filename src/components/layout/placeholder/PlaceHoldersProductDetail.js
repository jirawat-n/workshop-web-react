import React from 'react'
import { Card, Grid, Image, Button, Icon, Dropdown, Placeholder } from 'semantic-ui-react'
export default function PlaceHoldersProductDetail() {
    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    <Card>
                        <Card.Content>
                            <Placeholder>
                                <Placeholder.Image rectangular />
                            </Placeholder>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}
