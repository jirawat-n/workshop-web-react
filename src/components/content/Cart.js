import React from 'react'
import { DELETE_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'
import { Icon, Label, Button, Table, Image, Grid } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Breadcumb from '../layout/Breadcumb'
import '../assets/table.css'
import '../assets/home.css'
function TableCart() {
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const { cart } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    // const updateProduct = () => {
    //     axios.patch(`http://127.0.0.1:8000/product/${}`)
    //     .then
    // }
    return (
        <div className="cart-b">
            <br></br><br></br><br></br><br></br><br></br>
            <Grid columns='equal'>
                <Grid.Column>

                </Grid.Column>
                <Grid.Column width={8}>
                    <Breadcumb />
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns='equal'>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row style={{ textAlign: "center" }}>
                                <Table.HeaderCell width={1}>Number</Table.HeaderCell>
                                <Table.HeaderCell width={2}>Product</Table.HeaderCell>
                                <Table.HeaderCell width={3}>image</Table.HeaderCell>
                                <Table.HeaderCell width={4}>Quantity</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Price</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Manage</Table.HeaderCell>
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
                                    <Table.Cell style={{ textAlign: "center" }}><Button circular >-</Button>&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;&nbsp;<Button circular >+</Button></Table.Cell>
                                    <Table.Cell style={{ textAlign: "center" }}>{item.product.price}</Table.Cell>
                                    <Table.Cell style={{ textAlign: "center" }} width={3}>
                                        <Button color='red' animated onClick={() => action(DELETE_PRODUCT_AND_AUTH_REQ, item.id, user.data.access)}>
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
                                <Table.HeaderCell colSpan='3'>
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ textAlign: 'center' }}>

                                    {cart.length === 0 ? <div></div>
                                        : <span>  ทั้งหมด {cart.reduce((sum, item) => sum + (item.quantity), 0)} ชิ้น</span>
                                    }
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ textAlign: 'center' }}>
                                    {cart.length === 0 ? <div></div>
                                        : <span> {cart.reduce((sum, item) => sum + (item.total), 0)} Bath.</span>
                                    }
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ textAlign: 'right' }} colSpan='2'>
                                    {cart.length === 0 ? <div></div>
                                        : <Button color='olive' size='small'>Check Out</Button>
                                    }
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table >
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid>

            <br></br>

        </div>
    )
}

export default TableCart;