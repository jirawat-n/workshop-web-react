import React from 'react'
import { DELETE_CART_REQ } from '../saga/actionTypes'
import { Icon, Label, Button, Table, Image, Container } from 'semantic-ui-react'
import { deleteCart } from '../actions/CartActions'
import { useSelector, useDispatch } from 'react-redux'

import '../assets/table.css'
function TableCart() {
    const action = (type, payload) => dispatch({ type, payload })
    const { cart } = useSelector(state => state.cart)
    const price = 0;
    console.log(cart)
    const dispatch = useDispatch();
    return (
        <Container>
            <Table celled>
                <Table.Header>
                    <Table.Row style={{ textAlign: "center" }}>
                        <Table.HeaderCell width={1}>Number</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Product</Table.HeaderCell>
                        <Table.HeaderCell width={4}>image</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Quantity</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Price</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Manage</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {cart.length === 0 ? <Table.Cell colSpan={6}><h3 style={{ textAlign: "center" }}>Cart is Empthy</h3></Table.Cell> : cart.map(item =>
                    <Table.Body key={item.id}>
                        <Table.Row>
                            <Table.Cell >
                                <Label ribbon>{item.id}</Label>
                            </Table.Cell>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell width={4}>
                                <Image centered src={item.image.thumbnail} />
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: "center" }}>{item.quantity}</Table.Cell>
                            <Table.Cell style={{ textAlign: "center" }}>{item.price * item.quantity}</Table.Cell>
                            <Table.Cell style={{ textAlign: "center" }} >
                                <Button color='red' animated onClick={() => dispatch(deleteCart(item.id))}>
                                    <Button.Content visible>
                                        <Icon name='delete' /></Button.Content>
                                    <Button.Content hidden>
                                        Delete
                                    </Button.Content>
                                </Button>
                                <Button color='red' animated onClick={() => action(DELETE_CART_REQ, item.id)}>
                                    <Button.Content visible>
                                        <Icon name='delete' /></Button.Content>
                                    <Button.Content hidden>
                                        Delete
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                )}
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ textAlign: 'center' }}>
                            {cart.length === 0 ? <div></div>
                                : <span>Total : {price} Bath.</span>
                            }
                        </Table.HeaderCell>
                        <Table.HeaderCell >
                            {cart.length === 0 ? <Button floated='right' color='red' disabled size='small'>No Product</Button>
                                : <Button floated='right' color='olive' size='small'>Check Out</Button>
                            }
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table >
        </Container>
    )
}

export default TableCart;