import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Grid, Image } from 'semantic-ui-react'
function CategoryDetail() {
    const [Product, setProduct] = useState([])
    const { categoryId } = useParams();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/category/${categoryId}/`)
            .then(data => {
                const res = data.data
                console.log('Category Naja', res)
                setProduct(res)

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
                    <p>{Product.data.id}</p>
                    <Image src={Product.data.image} />
                    <p>{Product.data.name}</p>
                    <p>{Product.data.detail}</p>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default CategoryDetail