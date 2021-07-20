import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Loader, Icon, Breadcrumb, Container } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination_Foot from '../layout/Pagination'
import Breadcumb from '../layout/Breadcumb'
import Sort from '../layout/Sort'
import '../assets/home.css'
function Product() {
    // ใช้ SAGA
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const counterReducer = useSelector(({ counterReducer }) => counterReducer)
    const { user } = useSelector(state => state.auth)
    // console.log(token);
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/')
            .then(data => {
                const res = data.data.data.results
                setProduct(res)
            })
    }, [])
    return (
        <div>
            <h1 text>Product</h1>
            <Grid columns='equal'>
                <Grid.Column width={5}>
                    <Breadcumb />
                </Grid.Column>
                <Grid.Column width={8}>

                </Grid.Column>
                <Grid.Column width={3} style={{ textAlign: 'right' }}>
                    <Sort />
                </Grid.Column>
            </Grid>
            {Product.length === 0 ?
                <div className="loader-p">
                    <Loader active inline='centered' size='massive' />
                </div> :
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
                                            {user ?
                                                // <Button animated='vertical' onClick={() => dispatch(addToCart({ ...datas, quantity: 1 }))}>
                                                //     <Button.Content hidden>Add to Cart</Button.Content>
                                                //     <Button.Content visible>
                                                //         <Icon name='shop' />
                                                //     </Button.Content>
                                                // </Button>
                                                <Button floated='right' onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...datas, quantity: 1 }, user.data.access)}>Add Cart</Button>
                                                :
                                                <Button floated='right' animated='fade' messages="Please Login" onClick={() => detailhistory.push(`/login`)}>
                                                    <Button.Content hidden>Add Cart</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='shop' />
                                                    </Button.Content>
                                                </Button>
                                            }
                                            {/* <Button animated='vertical' onClick={() => dispatch(addToCart({ ...datas, quantity: 1 }))}>
                                            <Button.Content hidden>Add to Cart</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button> */}
                                            {user ?
                                                // <Button animated='vertical' onClick={() => dispatch(addToCart({ ...datas, quantity: 1 }))}>
                                                //     <Button.Content hidden>Add to Cart</Button.Content>
                                                //     <Button.Content visible>
                                                //         <Icon name='shop' />
                                                //     </Button.Content>
                                                // </Button>
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
                                            {/* <Button animated='vertical' onClick={() => dispatch(addToCart({ ...datas, quantity: 1 }))}>
                                            <Button.Content hidden>Add to Cart</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button> */}

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
                    <Container>
                        <Pagination_Foot />
                    </Container>
                </Grid>

            }
        </div >
    )
}
export default Product