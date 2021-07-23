import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from "react-router-dom"
import { STATUS_INVOICE_REQ } from '../saga/actionTypes'
import { useDispatch, useSelector } from 'react-redux'
import { Step, Icon } from 'semantic-ui-react'
export default function Status() {
    const status = (type, status) => dispatch({ type, status })
    const history = useHistory();
    const dispatch = useDispatch();
    function handleclick(slug) {
        console.log('หน้าสเตตัส', slug);
        history.push(`/invoice/${slug}/`)
    }
    return (
        <div>
            <Step.Group fluid>
                <Step link onClick={() => history.push(`/invoice`)}>
                    <i className="fas fa-list-ol" style={{ fontSize: "50px", color: 'gray' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>ALL</Step.Title>
                        <Step.Description>All invoice</Step.Description>
                    </Step.Content>
                </Step>

                <Step link onClick={() => handleclick('wait')}>
                    <i className="fas fa-clock" style={{ fontSize: "50px", color: '#1163af' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>Wait</Step.Title>
                        <Step.Description>Status "Wait" Only</Step.Description>
                    </Step.Content>
                </Step>
                <Step link onClick={() => handleclick('sended')}>
                <i class="fas fa-truck" style={{ fontSize: "50px", color: 'green' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>Sended</Step.Title>
                        <Step.Description>Status "Sended" Only</Step.Description>
                    </Step.Content>
                </Step>
                <Step link onClick={() => handleclick('cancle')}>
                    <i className="fas fa-window-close" style={{ fontSize: "50px", color: 'red' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>Cancel</Step.Title>
                        <Step.Description>Status "Cancel" Only</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        </div>
    )
}
