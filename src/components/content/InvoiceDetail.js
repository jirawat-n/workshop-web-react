import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ADD_PRODUCT_AND_AUTH_REQ, SORT_PRODUCT_REQ, FETCH_PRODUCT_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Item, Grid, Segment, Button, Icon, Dropdown, List, Label, Tab } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination_Foot from '../layout/Pagination'
import Breadcumb from '../layout/Breadcumb'
import Status from '../layout/Status'
import '../assets/home.css'

import PlaceHoldersProduct from '../layout/placeholder/PlaceHoldersProdut'
import { useParams } from 'react-router-dom'

function InvoiceDetail() {
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
    const { InvoiceDetail } = useParams();
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/invoice/${InvoiceDetail}/`, config)
            .then(data => {
                const res = data.data.data
                console.log('ใหม่', res);
                setInvoice(res)
            })

    }, [])
    console.log(Invoice);
    return (
        <div className="body-des2">

            <Grid columns='equal'>
                <Grid.Column width={5}>
                    <h1>Invoice Detail</h1>
                    <Breadcumb />
                </Grid.Column>
                <Grid.Column width={8}>
                </Grid.Column>
            </Grid>
            <br></br>
            <Status />
            {Invoice.status === "cancle" ?
                <Segment>
                    <Label ribbon color="red"><i className="fas fa-clock" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{Invoice.status}</Label><br></br>
                    <br></br>
                    <Item.Header as='a'>ID : {Invoice.id}</Item.Header>
                    <Item.Meta>
                        <span style={{ color: "red" }}>Status : {Invoice.status}</span>
                    </Item.Meta>
                    <Item.Description>Create : {Invoice.created_datetime}</Item.Description>
                    <Item.Description>Update : {Invoice.updated_datetime}</Item.Description>
                    <Item.Extra>
                        <br></br>
                        <Label>Total : {Invoice.total}</Label>
                    </Item.Extra>
                </Segment>
                :
                <div></div>}
            {Invoice.status === "wait" ?
                <Segment>
                    <Label ribbon color="blue"><i className="fas fa-clock" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{Invoice.status}</Label><br></br>
                    <br></br>
                    <Item.Header as='a'>ID : {Invoice.id}</Item.Header>
                    <Item.Meta>
                        <span style={{ color: "blue" }}>Status : {Invoice.status}</span>
                    </Item.Meta>
                    <Item.Description>Create : {Invoice.created_datetime}</Item.Description>
                    <Item.Description>Update : {Invoice.updated_datetime}</Item.Description>
                    <Item.Description>Description :  {Invoice.invoice_item.map(item =>
                        <p>{item.product}</p>
                    )}</Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                            Submit Void
                            <Icon name='right chevron' />
                        </Button>
                        <br></br>
                        <Label>Total : {Invoice.total}</Label>
                    </Item.Extra>
                </Segment> : <div></div>}
            {Invoice.status === "sended" ?
                <Segment>
                    <Label ribbon color="green"><i className="fas fa-clock" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{Invoice.status}</Label><br></br>
                    <br></br>
                    <Item.Header as='a'>ID : {Invoice.id}</Item.Header>
                    <Item.Meta>
                        <span style={{ color: "blue" }}>Status : {Invoice.status}</span>
                    </Item.Meta>
                    <Item.Description>Description : ซวว   {Invoice.invoice_item.map(item =>
                        <p>Thisis{item.created_datetime}</p>
                    )}</Item.Description>
                    <Item.Description>Update : {Invoice.updated_datetime}</Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                            Submit Void
                            <Icon name='right chevron' />
                        </Button>
                        <br></br>
                        <Label>Total : {Invoice.total}</Label>
                    </Item.Extra>
                </Segment> : <div></div>}

        </div >
    )
}
export default InvoiceDetail