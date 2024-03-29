import React, { useEffect, useState } from 'react'
import { Pagination } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { PAGINATION_PRODUCT_REQ } from '../saga/actionTypes'
import { useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate';
function Pagination_Foot() {
    const history = useHistory();
    const dispatch = useDispatch();

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
        <div>
            <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
            />
        </div>
    )
}

export default Pagination_Foot;