import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Pagination_Foot = () => (
    <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={3}
    />
)

export default Pagination_Foot