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
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    if (!Product.data) {
        return (
            <div>
            </div>
        )
    }
    console.log('เท่านี้', Product.data);
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

                </Grid.Column>
            </Grid>
            {Product.data ===0 ?
                <div className="loader-pd">
                    <Loader active inline='centered' size='massive' />
                </div> :
                <div className="detail-p">
                    <Grid>
                        <Grid.Column width={10}>
                            <Image centered src={Product.data.image.full_size} /><br></br>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <p >{Product.data.name}</p>
                            <p >{Product.data.name}</p>
                            <p >{Product.data.name}</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <p >{Product.data.price}</p>
                            {user ?

                                <Button floated='right' onClick={() => action(ADD_PRODUCT_AND_AUTH_REQ, { ...Product.data.id, quantity: 1 }, user.data.access)}>Add Cart</Button>
                                :
                                <Button floated='right' animated='fade' messages="Please Login" onClick={() => detailhistory.push(`/login`)}>
                                    <Button.Content hidden>Add Cart</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='shop' />
                                    </Button.Content>
                                </Button>
                            }
                        </Grid.Column>
                    </Grid>
                </div>
            }
            <div className="footer-nav"></div>
        </div>
    )
}
export default ProductDetail