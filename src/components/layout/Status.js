import React from 'react'
import { useHistory } from "react-router-dom"
import { Step } from 'semantic-ui-react'
export default function Status() {
    const history = useHistory();
    function handleclick(slug) {
        history.push(`/invoice/${slug}/`)
    }
    return (
        <div>
            <Step.Group fluid>
                <Step link onClick={() => history.push(`/invoice`)}>
                    <i className="fas fa-list-ol" style={{ fontSize: "50px", color: 'gray' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>ทั้งหมด</Step.Title>
                        <Step.Description>แสดง ใบคำสั่งซื้อทั้งหมด</Step.Description>
                    </Step.Content>
                </Step>

                <Step link onClick={() => handleclick('wait')}>
                    <i className="fas fa-clock" style={{ fontSize: "50px", color: '#1163af' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>รอ</Step.Title>
                        <Step.Description>แสดงเฉพาะสถานะ "รอ"</Step.Description>
                    </Step.Content>
                </Step>
                <Step link onClick={() => handleclick('sended')}>
                    <i className="fas fa-truck" style={{ fontSize: "50px", color: 'green' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>ส่งแล้ว</Step.Title>
                        <Step.Description>แสดงเฉพาะสถานะ "ส่งแล้ว"</Step.Description>
                    </Step.Content>
                </Step>
                <Step link onClick={() => handleclick('cancle')}>
                    <i className="fas fa-window-close" style={{ fontSize: "50px", color: 'red' }}>&nbsp;&nbsp;</i>
                    <Step.Content>
                        <Step.Title>ยกเลิก</Step.Title>
                        <Step.Description>แสดงเฉพาะสถานะ "ยกเลิก"</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        </div>
    )
}
