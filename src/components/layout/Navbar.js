import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Icon, Button, Dropdown, Input, Grid, Image, Container } from 'semantic-ui-react'
import '../assets/navbar.css'
function Navbar() {
    const { user } = useSelector(state => state.auth)
    const { cart } = useSelector((state) => state.cart)
    const [Select, setSelect] = useState('home')
    const history = useHistory();
    const detailhistory = useHistory();
console.log(cart);
    const handleItemClick = (event) => {
        const selected = event.target.textContent;
        setSelect(selected)
        if (selected === "Home") {
            setSelect(selected)
            return history.push("/")
        }
        history.push(`/${selected}/`)

    }
    const [Product, setProduct] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/category/?is_enabled=true/')
            .then(data => {
                const res = data.data.data.results
                setProduct(res)
            })
    }, [])
    return (
        <div>
            <Menu fixed='top' className="navbar-nav" inverted>
                <Container>
                    <Menu.Item
                        name='home'
                        active={Select === 'home'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='product'
                        active={Select === 'product'}
                        onClick={handleItemClick}
                    />
                    <Dropdown text='Shopping' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Categories</Dropdown.Header>
                            {Product.map(datas => (
                                <Dropdown.Item key={datas.id} onClick={() => detailhistory.push(`/category/${datas.id}/`)}>{datas.name}</Dropdown.Item>
                            )
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                        {user &&
                            <Menu.Item onClick={() => detailhistory.push(`/Cart/`)}>
                                <Icon name="cart" color="white" />{' '}
                                <span color="black">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            </Menu.Item>
                        }
                        <Menu.Item>
                            {user ?
                                <h4>{user.data.user}</h4>
                                :
                                <h4>Welcome</h4>
                            }
                        </Menu.Item>
                        <Menu.Item>
                            {user ?
                                <Button animated='fade' color="red" onClick={() => {
                                    localStorage.clear();
                                    window.location.reload();
                                }
                                }>
                                    <Button.Content visible><Icon name="sign out" /></Button.Content>
                                    <Button.Content hidden>Sign Out</Button.Content>
                                </Button>
                                :
                                <Button animated='fade' primary onClick={() => detailhistory.push(`/login`)}>
                                    <Button.Content visible><Icon name="sign in" /></Button.Content>
                                    <Button.Content hidden>Sign in</Button.Content>
                                </Button>}
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu >
        </div>
    )
}

export default Navbar;

