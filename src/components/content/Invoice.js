import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ, SORT_PRODUCT_REQ, FETCH_PRODUCT_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Item, Grid, Image, Button, Icon, Segment, List, Label, Tab } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination_Foot from '../layout/Pagination'
import Breadcumb from '../layout/Breadcumb'
import Status from '../layout/Status'
import '../assets/home.css'

import PlaceHoldersProduct from '../layout/placeholder/PlaceHoldersProdut'
import { useParams } from 'react-router-dom'

function Invoice() {
    // ใช้ SAGA
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const actionProduct = (type, payload) => dispatch({ type, payload })
    const sorted = (type, sort) => dispatch({ type, sort })
    const { user } = useSelector(state => state.auth)
    const [Invoice, setInvoice] = useState([])
    const dispatch = useDispatch();

    const detailhistory = useHistory();
    const { sort, search } = useSelector(state => state.sort)

    const token = user.data.access
    const { id } = useParams();
    let config = {}
    console.log('สลัก', id);
    if (id) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                status: id,
            }
        }
    }
    else {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/invoice/', config)
            .then(data => {
                const res = data.data.data.results
                setInvoice(res)
            })

    }, [id])

    console.log(Invoice);
    return (
        <div className="body-des2">

            <Grid columns='equal'>
                <Grid.Column width={5}>
                    <h1>Invoice</h1>
                    <Breadcumb />
                </Grid.Column>
                <Grid.Column width={8}>
                </Grid.Column>
            </Grid>
            <br></br>
            <Status />

            {Invoice.map(datas => (
                <Segment key={datas.id}>
                    {datas.status === "wait" ?

                        <Item.Content>
                            <Label ribbon color="blue"><i className="fas fa-clock" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{datas.status}</Label><br></br>
                            <br></br>
                            <Item.Header as='a'>ID : {datas.id}</Item.Header>
                            <Item.Meta>
                                <span style={{ color: "blue" }}>Status : {datas.status}</span>
                            </Item.Meta>
                            <Item.Description>Create : {datas.created_datetime}</Item.Description>
                            <Item.Description>Update : {datas.updated_datetime}</Item.Description>
                            <Item.Extra>
                                <Button primary floated='right' onClick={() => detailhistory.push(`/invoicedetail/${datas.id}/`)}>
                                    View
                                    <Icon name='right chevron' />
                                </Button>
                                <br></br>
                                <Label>Total : {datas.total}</Label>
                            </Item.Extra>
                        </Item.Content>

                        : <item></item>}
                    {datas.status === "sended" ?

                        <Item.Content>
                            <Label ribbon color="green"><i className="fas fa-clock" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{datas.status}</Label><br></br>
                            <br></br>
                            <Item.Header as='a'>ID : {datas.id}</Item.Header>
                            <Item.Meta>
                                <span style={{ color: "blue" }}>Status : {datas.status}</span>
                            </Item.Meta>
                            <Item.Description>Create : {datas.created_datetime}</Item.Description>
                            <Item.Description>Update : {datas.updated_datetime}</Item.Description>
                            <Item.Extra>
                                <Button primary floated='right' onClick={() => detailhistory.push(`/invoicedetail/${datas.id}/`)}>
                                    View
                                    <Icon name='right chevron' />
                                </Button>
                                <br></br>
                                <Label>Total : {datas.total}</Label>
                            </Item.Extra>
                        </Item.Content>
                        :
                        <item>
                        </item>
                    }
                    {datas.status === "cancle" ?
                        <Item.Content>
                            <Label ribbon color="red"><i className="fas fa-window-close" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{datas.status}</Label><br></br>
                            <br></br>
                            <Item.Header as='a'>ID : {datas.id}</Item.Header>
                            <Item.Meta>
                                <span style={{ color: "red" }}>Status : {datas.status}</span>
                            </Item.Meta>
                            <Item.Description>Create : {datas.created_datetime}</Item.Description>
                            <Item.Description>Update : {datas.updated_datetime}</Item.Description>
                            <Item.Extra>
                                <Button primary floated='right' onClick={() => detailhistory.push(`/invoicedetail/${datas.id}/`)}>
                                    View
                                    <Icon name='right chevron' />
                                </Button>
                                <br></br>
                                <Label>Total : {datas.total}</Label>
                            </Item.Extra>
                        </Item.Content>
                        :
                        <item>
                        </item>
                    }
                </Segment>)
            )}

        </div >
    )
}
export default Invoice