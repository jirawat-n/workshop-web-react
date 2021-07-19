import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Icon, Loader, Dimmer, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination_Foot from '../layout/Pagination'
import ProductHomeRec from './Recommend'
import '../assets/home.css'
function ProductHome() {
    // ใช้ SAGA
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const counterReducer = useSelector(({ counterReducer }) => counterReducer)
    const { user } = useSelector(state => state.auth)
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();

    const sections = [
        { key: 'Home', content: 'Home', link: true },
        { key: 'Store', content: 'Store', link: true },
        { key: 'Shirt', content: 'T-Shirt', active: true },
    ]
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/')
            .then(data => {
                const res = data.data.data.results

                setProduct(res)
                document.title = "Snerker : Home"
            })
    }, [])
    console.log('Product All', Product);

    return (
        <div>
            {Product.length === 0 ?
                <div className="loader-h">
                    <Loader active inline='centered' size='massive' />
                </div> :
                <Grid>
                    <h1>Category</h1>
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
                                            {user ?

                                                <Button floated='right' onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...datas, quantity: 1 }, user.data.access)}>Here</Button>
                                                :
                                                <Button floated='right' animated='fade' messages="Please Login" onClick={() => detailhistory.push(`/login`)}>
                                                    <Button.Content hidden>Add Cart</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='shop' />
                                                    </Button.Content>
                                                </Button>
                                            }

                                            {user ?

                                                <Button floated='right' animated='vertical' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
                                                    <Button.Content hidden>View</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='shop' />
                                                    </Button.Content>
                                                </Button>
                                                :
                                                <Button floated='right' animated='vertical' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
                                                    <Button.Content hidden>View</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='shop' />
                                                    </Button.Content>
                                                </Button>
                                            }

                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <br />
                            </Grid.Column>
                        )
                        )}
                    </Grid.Row>
                </Grid>}
        </div >
    )
}
export default ProductHome