import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
export default function Breadcumb() {
    return (
        <div>
            <Breadcrumb size='large'>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Store</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>
                    Search for: <a href='#'>paper towels</a>
                </Breadcrumb.Section>
            </Breadcrumb>
        </div>
    )
}
