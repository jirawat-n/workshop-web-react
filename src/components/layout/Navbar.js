import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Menu, Icon, Input } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
function Navbar() {
    const cart = useSelector(state => state.cart)
    const [Select, setSelect] = useState('home')
    const history = useHistory();
    const detailhistory = useHistory();
    const handleItemClick = (event) => {
        const selected = event.target.textContent;
        console.log(selected)
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
                name='category'
                active={Select === 'category'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item onClick={() => detailhistory.push(`/Cart/`)}>
                    <Icon name="cart" />{' '}
                    <span className='cart-num'>
                        {cart.reduce(
                            (sum, item) => sum + item.quantity,
                            0
                        )}
                    </span>
                </Menu.Item>
                <Menu.Item onClick={() => detailhistory.push(`/Signin/`)}>
                    Sign In
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar;

