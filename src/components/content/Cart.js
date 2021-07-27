import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DELETE_PRODUCT_AND_AUTH_REQ, FETCT_CHECKOUT_REQ, UPDATE_PRODUCT_REQ } from '../saga/actionTypes'
import { Icon, Label, Button, Table, Image, Grid, Breadcrumb, Modal, Header, Input, Container } from 'semantic-ui-react'
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
    const [openModal, setopenModal] = React.useState(false)
    const [InvoiceList, setInvoiceList] = useState({})
    function handleupdateAddIncreate(id, quantity) {
        update(UPDATE_PRODUCT_REQ, id, quantity + 1, user.data.access)
    }
    function handleupdateAddDecreate(id, quantity) {
        update(UPDATE_PRODUCT_REQ, id, quantity - 1, user.data.access)
    }
    function handleupdateModal(id) {
        action(DELETE_PRODUCT_AND_AUTH_REQ, id, user.data.access)
        setopenModal(false)
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
        <div className="cart-body">
            <br></br><br></br><br></br><br></br><br></br>
            <Grid columns='equal'>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column width={10}>
                    <h1>Cart</h1>
                    <Breadcrumb size='large'>
                        <Breadcrumb.Section><Link to="/">Home</Link></Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section active>Cart</Breadcrumb.Section>
                    </Breadcrumb>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid>
            <div>
                <Grid columns='equal'>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div className="asdasdasd">
                            <Table celled>
                                <Table.Header>
                                    <Table.Row style={{ textAlign: "center" }}>
                                        <Table.HeaderCell>ID</Table.HeaderCell>
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
                                                <Button circular onClick={() => handleupdateAddDecreate(item.id, item.quantity)}>-</Button >
                                                <Input style={{ width: "100px", textAlign: "center" }}
                                                    value={item.quantity}
                                                    onChange={(e) => update(UPDATE_PRODUCT_REQ, item.id, e.target.value, token)}>
                                                </Input>&nbsp;
                                                <Button circular onClick={() => handleupdateAddIncreate(item.id, item.quantity)}>+</Button>
                                            </Table.Cell>
                                            <Table.Cell style={{ textAlign: "center" }}>{item.product.price}</Table.Cell>
                                            <Table.Cell style={{ textAlign: "center" }} width={3}>
                                                <div className="zoom">
                                                    <Modal
                                                        closeIcon
                                                        open={openModal}
                                                        trigger={<Icon name="trash" color="red" size="large" ></Icon>}
                                                        onClose={() => setopenModal(false)}
                                                        onOpen={() => setopenModal(true)}
                                                    >
                                                        <Header icon='delete' content='Alert' />
                                                        <Modal.Content>
                                                            <p>
                                                                Confirm delete ?
                                                            </p>
                                                        </Modal.Content>
                                                        <Modal.Actions>
                                                            <Button color='red' onClick={() => setopenModal(false)}>
                                                                <Icon name='remove' /> No
                                                            </Button>
                                                            <Button color='green' onClick={() => handleupdateModal(item.id)}>
                                                                <Icon name='checkmark' /> Yes
                                                            </Button>
                                                        </Modal.Actions>
                                                    </Modal>
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
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>
        </div >
    )
}

export default TableCart;