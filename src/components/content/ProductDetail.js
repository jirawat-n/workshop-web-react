import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react'
function ProductDetail() {
    const [Product, setProduct] = useState([])
    const { productId } = useParams();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/product/${productId}/`)
            .then(data => {
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

    return (
        <div>
            <Grid>
                <Grid.Row columns={1} centered>
                    <Image src={Product.data.image.medium_square_crop} />
                    <p>{Product.data.name}</p>
                    <p>{Product.data.price}</p>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default ProductDetail