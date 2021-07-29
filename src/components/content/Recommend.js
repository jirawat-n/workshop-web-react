import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Icon, Loader, Dimmer, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import PlaceHoldersProduct from '../layout/placeholder/PlaceHoldersProdut'
import '../assets/home.css'
import '../assets/sass/productAll.scss'
function ProductHomeRec() {
    // ใช้ SAGA
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const counterReducer = useSelector(({ counterReducer }) => counterReducer)
    const { user } = useSelector(state => state.auth)
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();
    const TITLE = 'My Page Title'
    const sections = [
        { key: 'Home', content: 'Home', link: true },
        { key: 'Store', content: 'Store', link: true },
        { key: 'Shirt', content: 'T-Shirt', active: true },
    ]
    useEffect(() => {
        axios.get('http://0.0.0.0:8000/product/?recommend=true')
            .then(data => {
                const res = data.data.data.results
                setProduct(res)
            })
    }, [])
    return (
        <div>
            {Product.length === 0 ?
                <div>
                    <div></div>
                </div> :
                <Grid text style={{ marginTop: '1em' }}>
                    <h1>สินค้าแนะนำ</h1>
                    <Grid.Row columns={4}>
                        {Product.map(datas => (
                            <Grid.Column key={datas.id}>
                                <Card centered className="image-border-all">
                                    <Image className="img-pro fade-in-image main-image" src={datas.image.medium_square_crop}
                                        onClick={() => detailhistory.push(`/product/detail/${datas.id}/`)} />
                                    <Card.Content>
                                        <div style={{ height: '100px' }}>
                                            <Card.Header>{datas.name}</Card.Header>
                                        </div>
                                    </Card.Content>
                                    <Card.Content extra className="text-right">
                                        <i className="fas fa-tags"></i> ราคา <span className="content-titkl">{datas.price} </span>บาท
                                    </Card.Content>
                                    <Card.Content extra>
                                        {user ?
                                            <Button floated='right' primary style={{ width: '50%' }} animated='fade' onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...datas, quantity: 1 }, user.data.access)}>
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
                                            <Button floated='right' style={{ width: '30%' }} animated='fade' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
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
                </Grid>}

        </div >
    )
}
export default ProductHomeRec