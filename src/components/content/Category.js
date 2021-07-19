import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Image, Grid, Button, Icon } from 'semantic-ui-react'
import '../assets/item.css'
import { useHistory } from 'react-router-dom'
function Category() {
    const [Product, setProduct] = useState([])
    const detailhistory = useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/category/?is_enabled=true/')
            .then(data => {
                const res = data.data.data.results
                setProduct(res)
            })
    }, [])
    return (
        <div>
            <Grid>
                <Grid.Row columns={3}>
                    {Product.map(datas => (
                        <Grid.Column key={datas.id}>
                            <Card centered>
                                <Image src={datas.image} />
                                <Card.Content>
                                    <Card.Header>{datas.id}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{datas.detail} Bath.</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Button animated='vertical' onClick={() => detailhistory.push(`/category/${datas.id}/`)}>
                                            <Button.Content hidden>Shop</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                </Card.Content>
                            </Card>
                            <br />
                        </Grid.Column>

                    )
                    )}
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default Category