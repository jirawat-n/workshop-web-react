import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { Breadcrumb } from 'semantic-ui-react'
export default function Breadcumb() {
    const history = useHistory();
    return (
        <div>
            <Breadcrumb size='large'>
                <Breadcrumb.Section><Link to="/">Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>Product</Breadcrumb.Section>
            </Breadcrumb>
        </div>
    )
}
