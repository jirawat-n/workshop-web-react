import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Icon, Loader, Dimmer, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination_Foot from '../layout/Pagination'
import ProductHomeRec from './Recommend'
import PlaceHoldersProductHome from '../layout/placeholder/PlaceHoldersProdutHome'
import '../assets/home.css'
import '../assets/sass/product.scss'
function ProductHome() {
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/category/')
            .then(data => {
                const res = data.data.data.results
                setProduct(res)
                document.title = "Mirrorless : Home"
            })
    }, [])

    return (
        <div className="body">
            <h1>ประเภท</h1>
            {Product.length === 0 ?
                <div className="loader-h" >
                    <PlaceHoldersProductHome />
                </div> :
                <Grid>
                    <Grid.Row columns={3}>
                        {Product.map(datas => (
                            <Grid.Column key={datas.id}>
                                <div className="image-border">
                                    <div class="main-image">
                                        <Image className="img-pro fade-in-image" src={datas.image} onClick={() => detailhistory.push(`/products/${datas.id}/`)} />
                                    </div>
                                    <p className="title">{datas.name}</p>
                                </div>
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