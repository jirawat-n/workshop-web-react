import React from 'react'
import { Dropdown } from 'semantic-ui-react'
// import { useDispatch } from 'react-redux'

// const dispatch = useDispatch();
// const action = (type, payload, token) => dispatch({ type, payload, token })

function Sort() {
    return (
        <Dropdown text='Sort' floating labeled button className='icon'>
            <Dropdown.Menu className='right'>
                <Dropdown.Item>
                    <span className='text'>จากน้อยไปมาก</span>
                </Dropdown.Item>
                <Dropdown.Item>
                    <span className='text'>จากมากไปน้อย</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default Sort