import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DELETE_PRODUCT_AND_AUTH_REQ, FETCT_CHECKOUT_REQ, UPDATE_PRODUCT_REQ } from '../saga/actionTypes'
import { Icon, Label, Button, Table, Image, Grid, Form, Modal, Header, Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Breadcumb from '../layout/Breadcumb'
import '../assets/table.css'
import '../assets/home.css'
function TableCart() {
    const invoiceHistory = useHistory();
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const actioncheckout = (type, token) => dispatch({ type, token })
    const update = (type, payload, quantity, token) => dispatch({ type, payload, quantity, token })
    const { cart } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false)
    const [InvoiceList, setInvoiceList] = useState({})
    function handleupdateAddIncreate(id, quantity) {
        update(UPDATE_PRODUCT_REQ, id, quantity + 1, user.data.access)
    }
    function handleupdateAddDecreate(id, quantity) {
        update(UPDATE_PRODUCT_REQ, id, quantity - 1, user.data.access)
    }
    function handleupdateCart(e, id) {
        update(UPDATE_PRODUCT_REQ, e, id, user.data.access)
    }
    const token = user.data.access
    const handleCheckout = () => {
        actioncheckout(FETCT_CHECKOUT_REQ, token)
        invoiceHistory.push('/invoice')
    }
    return (
        <div className="cart-b">
            <br></br><br></br><br></br><br></br><br></br>
            <Grid columns='equal'>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column width={10}>
                    <h1>Cart</h1>
                    <Breadcumb />
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid>
            <div>
                <Grid columns='equal'>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Table celled>
                            <Table.Header>
                                <Table.Row style={{ textAlign: "center" }}>
                                    <Table.HeaderCell>Number</Table.HeaderCell>
                                    <Table.HeaderCell width={5}>Product</Table.HeaderCell>
                                    <Table.HeaderCell width={2}>image</Table.HeaderCell>
                                    <Table.HeaderCell width={3}>Quantity</Table.HeaderCell>
                                    <Table.HeaderCell width={2}>Price</Table.HeaderCell>
                                    <Table.HeaderCell width={5}>Manage</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            {cart.length === 0 ? <Table.Cell colSpan={6}><h3 style={{ textAlign: "center" }}>Cart is Empthy</h3></Table.Cell> : cart.map(item =>
                                <Table.Body key={item.id}>
                                    <Table.Row>
                                        <Table.Cell >
                                            <Label ribbon>{item.id}</Label>
                                        </Table.Cell>
                                        <Table.Cell>{item.product.name}</Table.Cell>
                                        <Table.Cell width={4}>
                                            <Image centered src={"http://127.0.0.1:8000" + item.product.image.thumbnail} />
                                        </Table.Cell>
                                        <Table.Cell style={{ textAlign: "center" }}>
                                            <Form.Group widths='equal'>
                                                <Button circular onClick={() => handleupdateAddDecreate(item.id, item.quantity)}>-</Button >
                                                <Input style={{ width: "100px", textAlign: "center" }}
                                                    value={item.quantity} onChange={(e) => handleupdateCart(e.target.value, item.id)}></Input>&nbsp;
                                                <Button circular onClick={() => handleupdateAddIncreate(item.id, item.quantity)}>+</Button>
                                            </Form.Group >
                                        </Table.Cell>
                                        <Table.Cell style={{ textAlign: "center" }}>{item.product.price}</Table.Cell>
                                        <Table.Cell style={{ textAlign: "center" }} width={3}>
                                            <div className="zoom">
                                                <Icon name="trash" color="red" size="large" onClick={() => action(DELETE_PRODUCT_AND_AUTH_REQ, item.id, user.data.access)}></Icon>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>

                            )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='3'>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ textAlign: 'center' }}>

                                        {cart.length === 0 ? <div></div>
                                            : <span> {cart.reduce((sum, item) => sum + (item.quantity), 0)} Piece</span>
                                        }
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ textAlign: 'center' }}>
                                        {cart.length === 0 ? <div></div>

                                            : <div>
                                                Total
                                                <span style={{ color: 'blue' }}> {cart.reduce((sum, item) => sum + (item.total), 0)}</span> Bath.
                                            </div>
                                        }
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ textAlign: 'right' }} colSpan='2'>
                                        {cart.length === 0 ? <div></div>
                                            : <Modal
                                                closeIcon
                                                open={open}
                                                trigger={<Button fluid primary>Check Out</Button>}
                                                onClose={() => setOpen(false)}
                                                onOpen={() => setOpen(true)}
                                            >
                                                <Header icon='archive' content='Messages' />
                                                <Modal.Content>
                                                    <p>
                                                        Confirm Check out ?
                                                    </p>
                                                </Modal.Content>
                                                <Modal.Actions>
                                                    <Button color='red' onClick={() => setOpen(false)}>
                                                        <Icon name='remove' /> No
                                                    </Button>
                                                    <Button color='green' onClick={() => handleCheckout()}   >
                                                        <Icon name='checkmark' /> Yes
                                                    </Button>
                                                </Modal.Actions>
                                            </Modal>
                                        }
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table >
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>

            <br></br>

        </div>
    )
}

export default TableCart;