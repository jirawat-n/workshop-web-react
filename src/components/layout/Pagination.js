import React, { useEffect } from 'react'
import { Pagination } from 'semantic-ui-react'
import axios from 'axios'

function Pagination_Foot() {
    return (
        <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={3}
        />
    )
}

export default Pagination_Foot;