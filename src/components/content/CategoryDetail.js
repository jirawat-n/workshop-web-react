import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react'
function CategoryDetail() {
    const [Product, setProduct] = useState([])
    const { categoryId } = useParams();
    console.log(categoryId)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/product/${categoryId}/`)
            .then(data => {
                const res = data.data
                setProduct(res)
                console.log(res)
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
                  
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default CategoryDetail