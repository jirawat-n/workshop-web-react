import React, { useEffect, useState } from 'react'
import { Pagination } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { PAGINATION_PRODUCT_REQ } from '../saga/actionTypes'
import { useSelector, useDispatch } from 'react-redux'
function Pagination_Foot() {
    const history = useHistory();
    const dispatch = useDispatch();
    const action = (type, page) => dispatch({ type, page })
    const [Page, setPage] = useState(1)
    function handleclick(page) {
        history.push(`/product/${page}/`)
    }
    function handlePaginationChange({ activePage }) {
        setPage(activePage)
        history.push(`/product/${Page}/`)
    }
    console.log(Page);
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