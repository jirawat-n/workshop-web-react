import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ, SORT_PRODUCT_REQ, FETCH_PRODUCT_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Card, Grid, Image, Button, Icon, Dropdown, Breadcrumb, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination_Foot from '../layout/Pagination'
import Breadcumb from '../layout/Breadcumb'
import '../assets/home.css'
import '../assets/sass/productAll.scss'
import PlaceHoldersProduct from '../layout/placeholder/PlaceHoldersProdut'
import { useParams } from 'react-router-dom'
function Product() {
    // ใช้ SAGA
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const actionProduct = (type, payload) => dispatch({ type, payload })
    const sorted = (type, sort) => dispatch({ type, sort })
    const { user } = useSelector(state => state.auth)
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();
    const { sort, search } = useSelector(state => state.sort)
    let { category_in, page } = useParams();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/', {

            params: {
                page: page,
                category_in: category_in,
                is_enabled: true,
                sort: sort,
                search: search,
            }
        })
            .then(data => {
                const res = data.data.data.results
                setProduct(res)
                actionProduct(FETCH_PRODUCT_REQ, res)
            })
    }, [sort, category_in, search, page])
    return (
        <div className="body-des">
            <Grid columns='equal'>
                <Grid.Column >
                    <h1>Product</h1>
                    <Segment>
                        <Grid.Column width={1}>
                            <Breadcrumb size='large'>
                                <Breadcrumb.Section><Link to="/">Home</Link></Breadcrumb.Section>
                                <Breadcrumb.Divider />
                                <Breadcrumb.Divider icon='right angle' />
                                <Breadcrumb.Section active>Product</Breadcrumb.Section>
                            </Breadcrumb>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                    </Segment>
                </Grid.Column>
            </Grid>
            <p>
            </p>
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column width={14}>
                        {search ? <h4>ค้นหา : {search}</h4> : <div></div>}

                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Dropdown text='Sort' icon='filter' floating labeled button className='icon'>
                            <Dropdown.Menu>
                                <Dropdown.Header icon='tags' content='Sort by price' />
                                <Dropdown.Divider />
                                <Dropdown.Item icon='sort amount up' text='จากน้อยไปมาก' onClick={() => sorted(SORT_PRODUCT_REQ, 'asc')} />
                                <Dropdown.Item icon='sort amount down' text='จากมากไปน้อย' onClick={() => sorted(SORT_PRODUCT_REQ, 'desc')} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid.Row className="body-des3">
                {Product.length === 0 ?
                    <PlaceHoldersProduct />
                    :
                    <div className="div-prod">
                        <Grid>
                            <Grid.Row columns={3}>
                                {Product.map(datas => (
                                    <Grid.Column key={datas.id}>
                                        <Card centered className="image-border-all" style={{ width: '90%' }}>
                                            <Image className="img-pro fade-in-image main-image" src={datas.image.medium_square_crop} onClick={() => detailhistory.push(`/product/detail/${datas.id}/`)} />
                                            <Card.Content>
                                                <Card.Header className="head-Content"><h5>ชื่อสินค้า {datas.name}</h5></Card.Header>
                                                <Card.Header className="head-Content"><h5>ประเภท : {datas.category}</h5></Card.Header>
                                            </Card.Content>
                                            <Card.Content extra className="text-right">
                                                ราคา <span style={{ color: 'blue' }}>{datas.price} </span>บาท
                                            </Card.Content>
                                            <Card.Content extra className="text-right">
                                                {user ?
                                                    <Button floated='right' style={{ width: '50%' }} animated='fade' onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...datas, quantity: 1 }, user.data.access)}>
                                                        <Button.Content hidden>เพิ่มลงตะกร้า</Button.Content>
                                                        <Button.Content visible>
                                                            <Icon name='shop' />
                                                        </Button.Content>
                                                    </Button>

                                                    :
                                                    <Button floated='right' style={{ width: '50%' }} animated='fade' messages="Please Login" onClick={() => detailhistory.push(`/login`)}>
                                                        <Button.Content hidden>เพิ่มลงตะกร้า</Button.Content>
                                                        <Button.Content visible>
                                                            <Icon name='shop' />
                                                        </Button.Content>
                                                    </Button>
                                                }

                                                {user ?

                                                    <Button floated='right' style={{ width: '30%' }} animated='fade' onClick={() => detailhistory.push(`/product/detail/${datas.id}/`)}>
                                                        <Button.Content hidden >ดูสินค้า</Button.Content>
                                                        <Button.Content visible>
                                                            <Icon name='arrow right' />
                                                        </Button.Content>
                                                    </Button>
                                                    :
                                                    <Button floated='right' style={{ width: '30%' }} animated='fade' onClick={() => detailhistory.push(`/product/detail/${datas.id}/`)}>
                                                        <Button.Content hidden>ดูสินค้า</Button.Content>
                                                        <Button.Content visible>
                                                            <Icon name='arrow right' />
                                                        </Button.Content>
                                                    </Button>
                                                }
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
                    </div>
                }
            </Grid.Row>
        </div >
    )
}
export default Product