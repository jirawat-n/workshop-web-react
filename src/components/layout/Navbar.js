import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { setAuth } from '../actions/AuthActions'
import { clearCart } from '../actions/CartActions'
function Navbar() {
    const { cart } = useSelector((state) => state.cart)
    const { user } = useSelector(state => state.auth)
    const [Select, setSelect] = useState('home')
    const history = useHistory();
    const dispatch = useDispatch()
    const detailhistory = useHistory();
    const handleItemClick = (event) => {
        const selected = event.target.textContent;
        setSelect(selected)
        if (selected === "Home") {
            setSelect(selected)
            return history.push("/")
        }
        history.push(`/${selected}/`)

    }
    return (

        <Menu pointing>
            <Menu.Item
                name='home'
                active={Select === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='about'
                active={Select === 'about'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='product'
                active={Select === 'product'}
                onClick={handleItemClick}
            />
             <Menu.Item
                name='token'
                active={Select === 'token'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='category'
                active={Select === 'category'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='alluser'
                active={Select === 'alluser'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
            </Menu.Menu>
            <Menu.Menu position='right'>
                {user &&
                    <Menu.Item onClick={() => detailhistory.push(`/Cart/`)}>
                        <Icon name="cart" color="black" />{' '}
                        <span color="black">
                            {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                    </Menu.Item>
                }
                <Menu.Item>
                    {user ?
                        <Button animated='fade' color="red" onClick={() => {
                            detailhistory.push(`/login`)
                            dispatch(setAuth(null))
                            dispatch(clearCart())
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
        </Menu>
    )
}

export default Navbar;

