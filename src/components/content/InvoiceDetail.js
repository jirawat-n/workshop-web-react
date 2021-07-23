import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FETCT_SUBMIT_REQ } from '../saga/actionTypes'
import { useHistory } from 'react-router'
import { Item, Grid, Segment, Button, Icon, Table, List, Label, Tab } from 'semantic-ui-react'
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
    const actioncheckout = (type, payload, token) => dispatch({ type, payload, token })
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/invoice/${InvoiceDetail}/`, config)
            .then(data => {
                const res = data.data.data

                setInvoice(res)
            })

    }, [])
    const handleVoid = (payload) => {
        actioncheckout(FETCT_SUBMIT_REQ, payload, token)
        detailhistory.push(`/invoice/cancle`)
    }
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
                        <span style={{ color: "blue" }}>Status : {Invoice.status}</span>
                    </Item.Meta>
                    <Item.Description>Create : {Invoice.created_datetime}</Item.Description>
                    <Item.Description>Update : {Invoice.updated_datetime}</Item.Description>
                    <p></p>
                    <Item.Description>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Product</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Quantity</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Total</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            {Invoice.invoice_item.map(item =>
                                <Table.Body key={item.id}>
                                    <Table.Row>
                                        <Table.Cell>{item.product}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.quantity}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.total}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell textAlign="center"></Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">{Invoice.total} Bath.</Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                    </Item.Description>
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
                    <p></p>
                    <Item.Description>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Product</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Quantity</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Total</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            {Invoice.invoice_item.map(item =>
                                <Table.Body key={item.id}>
                                    <Table.Row>
                                        <Table.Cell>{item.product}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.quantity}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.total}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell textAlign="center">{Invoice.total}</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">{Invoice.total} Bath.</Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                    </Item.Description>

                    <Item.Extra>
                        <br></br>
                        <Button primary floated='right' onClick={() => handleVoid(Invoice.id)}>
                            Submit Void
                            <Icon name='right chevron' />
                        </Button>
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
                    <Item.Description>Create : {Invoice.created_datetime}</Item.Description>
                    <Item.Description>Update : {Invoice.updated_datetime}</Item.Description>
                    <p></p>
                    <Item.Description>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Product</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Quantity</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Total</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            {Invoice.invoice_item.map(item =>
                                <Table.Body key={item.id}>
                                    <Table.Row>
                                        <Table.Cell>{item.product}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.quantity}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.total}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell textAlign="center">{Invoice.total}</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">{Invoice.total} Bath.</Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                    </Item.Description>
                    <Item.Extra>
                        <br></br>
                        <Button primary floated='right'>
                            Submit Void
                            <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                </Segment> : <div></div>}

        </div >
    )
}
export default InvoiceDetail