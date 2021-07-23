import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/CartActions'
export default function Item() {
    const dispatch = useDispatch();
    const [Product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/')
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
                                <Image src={datas.image.medium_square_crop} />
                                <Card.Content>
                                    <Card.Header>{datas.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{datas.price} Bath.</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Button animated='vertical' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
                                            <Button.Content hidden>View</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button>
                                        <Button animated='vertical' onClick={() => dispatch(addToCart({ ...datas, quantity: 1 }))}>
                                            <Button.Content hidden>Add to Cart</Button.Content>
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
