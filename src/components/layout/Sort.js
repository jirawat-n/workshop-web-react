import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const Sort = () => (
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

export default Sort