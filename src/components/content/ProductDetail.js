import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'
import { useParams, useHistory } from 'react-router'
import { Grid, Button, Icon, Image, Breadcrumb } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcumb from '../layout/Breadcumb'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'
import '../assets/home.css'
function ProductDetail() {
    const [Product, setProduct] = useState([])
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const detailhistory = useHistory();
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const { productId } = useParams();
    const { user } = useSelector(state => state.auth)
    const { cart } = useSelector(state => state.cart)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/product/${productId}/`)
            .then(data => {
                const title = data.data.data.name
                document.title = "Product :" + " " + title
                const res = data.data
                setProduct(res)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    if (!Product.data) {
        return (
            <div className="detail-des">
            </div>
        )
    }

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
        if (value !== 0) {
            setValue(value - 1);
        } else if (value === 0) {
            alert("please add value more than 0");
        }
    }
    return (
        <div className="detail-des">
            <h1 text>Product</h1>
            <Grid columns='equal'>
                <Grid.Column width={8}>
                    <Breadcrumb size='large'>
                        <Breadcrumb.Section><Link to="/">Home</Link></Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section ><Link to="/products">Product</Link></Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section active>{Product.data.name}</Breadcrumb.Section>
                    </Breadcrumb>
                </Grid.Column>
                <Grid.Column width={5}>

                </Grid.Column>
                <Grid.Column width={3} style={{ textAlign: 'right' }}>

                </Grid.Column>
            </Grid>
            <div style={{ height: '100%' }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Image className="fieldset-img" centered src={Product.data.image.full_size} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <fieldset className="fieldset-main">
                                <legend className="legendhaed">รายละเอียดสินค้า</legend>
                                <p>รหัสสินค้า : {Product.data.id}</p>
                                <p>ชื่อสินค้า : {Product.data.name}</p>
                                <p>ประเภทสินค้า : {Product.data.category}</p>
                                <p>ราคาสินค้า : {Product.data.price} บาท</p>
                                <br></br>  <br></br>
                                <p>{cart.quantity}</p>
                                {user ?
                                    <div>
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                    <Button circular fluid
                                                        textAlign="center"
                                                        className="btnn"
                                                        size="small"
                                                        color='black'
                                                        onClick={decrement}
                                                    >
                                                        <i className="fas fa-minus"></i>
                                                    </Button>
                                                </Grid.Column>
                                                <Grid.Column width={6}>
                                                    <input className="input-style"
                                                        type="value"
                                                        value={value}
                                                        onChange={(e) => setValue(e.target.value)}></input>&nbsp;
                                                </Grid.Column>
                                                <Grid.Column width={5}>
                                                    <Button circular fluid
                                                        textAlign="center"
                                                        onClick={increment}
                                                        className="btnn"
                                                        color='black'
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        <Button fluid circular color='black' animated='fade' messages="Please Login"
                                            onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...Product.data, quantity: value }, user.data.access)}>
                                            <Button.Content hidden>เพิ่มลงตะกร้า</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button>
                                    </div>
                                    :
                                    <div className="button-buy">
                                        <Button fluid circular color='black' animated='fade' messages="Please Login" onClick={() => detailhistory.push(`/login`)}>
                                            <Button.Content hidden>เพิ่มลงตะกร้า</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button>
                                    </div>
                                }
                            </fieldset>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}
export default ProductDetail