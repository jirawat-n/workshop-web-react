import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

function Sidebar() {
    const [Select, setSelect] = useState('home')
    const history = useHistory();
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
        <div>
            <Menu pointing secondary vertical>
                <Menu.Item
                    name='Home'
                    active={Select === 'Home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Product'
                    active={Select === 'Product'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Category'
                    active={Select === 'Category'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    )
}
export default Sidebar