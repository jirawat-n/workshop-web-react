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
function ProductHome() {
    // ใช้ SAGA
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
        <div className="body-des">
            <h1>Category</h1>
            {Product.length === 0 ?
                <div className="loader-h" >
                   <PlaceHoldersProductHome/>
                </div> :
                <Grid>                    
                    <Grid.Row columns={3}>
                        {Product.map(datas => (
                            <Grid.Column key={datas.id}>
                                <Card centered>
                                    <Image className="zoom" src={datas.image} onClick={() => detailhistory.push(`/product/${datas.id}/`)} />
                                    <Card.Content>
                                        <Card.Header>{datas.name}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{datas.detail}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            <Button floated='right' animated='fade' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
                                                <Button.Content hidden>View</Button.Content>
                                                <Button.Content visible>
                                                    <Icon name='arrow right' />
                                                </Button.Content>
                                            </Button>
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