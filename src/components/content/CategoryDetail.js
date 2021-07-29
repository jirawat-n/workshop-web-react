import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ, SORT_PRODUCT_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Loader, Icon, Dropdown, Container, GridRow } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination_Foot from '../layout/Pagination'
import Breadcumb from '../layout/Breadcumb'
import '../assets/home.css'
function CategoryDetail() {
    // ใช้ SAGA
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const { user } = useSelector(state => state.auth)
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();
    const { sort, search } = useSelector(state => state.sort)

    useEffect(() => {
        axios.get('http://0.0.0.0:8000/product/', {

            params: {
                is_enabled: true,
                sort: sort,
                search: search,
            }
        })
            .then(data => {
                const title = data.data.data.results
                document.title = "Category :" + " " + title
                const res = data.data.data.results
                setProduct(res)
            })


    }, [sort, search])
    return (
        <div className="body-des ">
            <h1>Category</h1>
            <Grid columns='equal'>
                <Grid.Column width={5}>
                    <Breadcumb />
                </Grid.Column>
                <Grid.Column width={8}>
                </Grid.Column>
                <Grid.Column width={3} style={{ textAlign: 'right' }}>
                    <Dropdown text='Sort' floating labeled button className='icon'>
                        <Dropdown.Menu className='right'>
                            <Dropdown.Item>
                                <span className='text' onClick={() => sort(SORT_PRODUCT_REQ, 'asc')}> จากน้อยไปมาก</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <span className='text' onClick={() => sort(SORT_PRODUCT_REQ, 'desc')}>จากมากไปน้อย</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid.Column>
            </Grid>
            {Product.length === 0 ?
                <div className="loader-p">
                    <h2>No Product</h2>
                </div> :
                <Grid>
                    <Grid.Row columns={3}>
                        {Product.map(datas => (
                            <Grid.Column key={datas.id}>
                                <Card centered>
                                    <Image className="zoom" src={datas.image.medium_square_crop} onClick={() => detailhistory.push(`/product/${datas.id}/`)} />
                                    <Card.Content>
                                        <Card.Header>{datas.name}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{datas.price} Bath.</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {user ?

                                                <Button floated='right' animated='fade' messages="Please Login" onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...datas, quantity: 1 }, user.data.access)}>
                                                    <Button.Content hidden>Add Cart</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='cart arrow down' />
                                                    </Button.Content>
                                                </Button>
                                                :
                                                <Button floated='right' animated='fade' messages="Please Login" onClick={() => detailhistory.push(`/login`)}>
                                                    <Button.Content hidden>Add Cart</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name="cart arrow down"></Icon>
                                                    </Button.Content>
                                                </Button>
                                            }
                                            {user ?
                                                <Button floated='right' animated='fade' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
                                                    <Button.Content hidden>View</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='arrow right' />
                                                    </Button.Content>
                                                </Button>
                                                :
                                                <Button floated='right' animated='fade' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
                                                    <Button.Content hidden>View</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='arrow right' />
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
                    <Grid columns='equal'>
                        <Grid.Column floated='left' >
                            <Pagination_Foot />
                        </Grid.Column>
                    </Grid>
                </Grid>
            }
        </div >
    )
}
export default CategoryDetail