import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/CartActions'
function All_users() {
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/token/')
            .then(data => {
                const res = data.data.results
                console.log(res)
                setProduct(res)
            })
    }, [])
    return (
        <div>
           
        </div>
    )
}
export default All_users