import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import '../assets/home.css'
function Sidebar() {
    const [Select, setSelect] = useState('home')
    const history = useHistory();
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
    const [Product, setProduct] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/category/')
            .then(data => {
                const res = data.data.data.results
                setProduct(res)
            })
    }, [])
    function handleclick(category_in) {
        console.log(category_in);
        history.push(`/product/${category_in}/`)
    }
    return (
        <div className="side-des">
            <Menu vertical style={{ width: '100%' }}>
                <Menu.Item active={Select === 'Home'} onClick={handleItemClick}>Home</Menu.Item>
                <Menu.Item active={Select === 'Product'} onClick={handleItemClick}>Product</Menu.Item>
                <Dropdown text='Category' pointing='left' className='link item'>
                    <Dropdown.Menu>
                        {Product.map(datas => (
                            <Dropdown.Item key={datas.id} onClick={() => handleclick(datas.id)}>{datas.name}</Dropdown.Item>
                        )
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    )
}
export default Sidebar