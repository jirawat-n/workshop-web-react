import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'
import { Grid, Button, Icon, Image, Loader } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcumb from '../layout/Breadcumb'
import '../assets/navbar.css'
import '../assets/home.css'
import PlaceHoldersProductDetail from '../layout/placeholder/PlaceHoldersProductDetail'
function ProductDetail() {
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const { productId } = useParams();
    const { user } = useSelector(state => state.auth)
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

    return (
        <div className="detail-des">
            <h1 text>Product</h1>
            <Grid columns='equal'>
                <Grid.Column width={5}>
                    <Breadcumb />
                </Grid.Column>
                <Grid.Column width={8}>

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
                                <legend className="legendhaed">Description</legend>
                                <p>ID : {Product.data.id}</p>
                                <p>Name : {Product.data.name}</p>
                                <p>Price : {Product.data.price} Bath.</p>
                                {user ?
                                    <Button fluid onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...Product.data, quantity: 1 }, user.data.access)}>Add Cart</Button>
                                    :
                                    <div className="button-buy">
                                        <Button fluid circular color='black' animated='fade' messages="Please Login" onClick={() => detailhistory.push(`/login`)}>
                                            <Button.Content hidden>Add Cart</Button.Content>
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