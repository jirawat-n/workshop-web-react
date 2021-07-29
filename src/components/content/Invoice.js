import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Item, Grid, Breadcrumb, Button, Icon, Segment, Label } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Status from '../layout/Status'
import '../assets/home.css'
import { useParams, Link } from 'react-router-dom'

function Invoice() {
    // ใช้ SAGA
    const { user } = useSelector(state => state.auth)
    const [Invoice, setInvoice] = useState([])
    const detailhistory = useHistory();
    const token = user.data.access
    const { id } = useParams();
    let config = {}
    if (id) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                status: id,
            }
        }
    }
    else {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }
    }

    useEffect(() => {
        axios.get('http://0.0.0.0:8000/invoice/', config)
            .then(data => {
                const res = data.data.data.results
                setInvoice(res)
            })

    }, [id])

    return (
        <div className="body-des2">
            <Grid columns='equal'>
                <Grid.Column width={5}>
                    <h1>Invoice</h1>
                    <Breadcrumb size='large'>
                        <Breadcrumb.Section><Link to="/">Home</Link></Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section active>Invoice</Breadcrumb.Section>
                    </Breadcrumb>
                </Grid.Column>
                <Grid.Column width={8}>
                </Grid.Column>
            </Grid>
            <br></br>
            <Status />
            {Invoice.map(datas => (
                <div className="invoice-segment" onClick={() => detailhistory.push(`/invoicedetail/${datas.id}/`)} key={datas.id}>
                    <Segment >
                        {datas.status === "wait" ?
                            <Item.Content>
                                <Label ribbon color="blue"><i className="fas fa-clock" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{datas.status}</Label><br></br>
                                <br></br>
                                <Item.Header as='a'>รหัสใบคำสั่งซื้อ : {datas.id}</Item.Header>
                                <Item.Meta>
                                    <span style={{ color: "blue" }}>สถานะ : {datas.status}</span>
                                </Item.Meta>
                                <Item.Description>สร้างเมื่อ : {datas.created_datetime}</Item.Description>
                                <Item.Description>อัพเดตล่าสุด : {datas.updated_datetime}</Item.Description>
                                <Item.Extra>
                                    <Button primary floated='right' onClick={() => detailhistory.push(`/invoicedetail/${datas.id}/`)}>
                                        ดูรายละเอียด
                                        <Icon name='right chevron' />
                                    </Button>
                                    <br></br>
                                    <Label>ราคารวม : {datas.total} บาท</Label>
                                </Item.Extra>
                            </Item.Content>

                            : <item></item>}
                        {datas.status === "sended" ?
                            <Item.Content>
                                <Label ribbon color="green"><i className="fas fa-truck" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{datas.status}</Label><br></br>
                                <br></br>
                                <Item.Header as='a'>รหัสใบคำสั่งซื้อ : {datas.id}</Item.Header>
                                <Item.Meta>
                                    <span style={{ color: "green" }}>สถานะ : {datas.status}</span>
                                </Item.Meta>
                                <Item.Description>สร้างเมื่อ : {datas.created_datetime}</Item.Description>
                                <Item.Description>อัพเดตล่าสุด : {datas.updated_datetime}</Item.Description>
                                <Item.Extra>
                                    <Button primary floated='right' onClick={() => detailhistory.push(`/invoicedetail/${datas.id}/`)}>
                                        ดูรายละเอียด
                                        <Icon name='right chevron' />
                                    </Button>
                                    <br></br>
                                    <Label>ราคารวม : {datas.total} บาท</Label>
                                </Item.Extra>
                            </Item.Content>
                            :
                            <item>
                            </item>
                        }
                        {datas.status === "cancle" ?
                            <Item.Content>
                                <Label ribbon color="red"><i className="fas fa-window-close" style={{ fontSize: "10px", color: 'white' }}>&nbsp;&nbsp;</i>{datas.status}</Label><br></br>
                                <br></br>
                                <Item.Header as='a'>รหัสใบคำสั่งซื้อ : {datas.id}</Item.Header>
                                <Item.Meta>
                                    <span style={{ color: "red" }}>สถานะ : {datas.status}</span>
                                </Item.Meta>
                                <Item.Description>สร้างเมื่อ : {datas.created_datetime}</Item.Description>
                                <Item.Description>อัพเดตล่าสุด : {datas.updated_datetime}</Item.Description>
                                <Item.Extra>
                                    <Button primary floated='right' onClick={() => detailhistory.push(`/invoicedetail/${datas.id}/`)}>
                                        ดูรายละเอียด
                                        <Icon name='right chevron' />
                                    </Button>
                                    <br></br>
                                    <Label>ราคารวม : {datas.total} บาท</Label>
                                </Item.Extra>
                            </Item.Content>
                            :
                            <item>
                            </item>
                        }

                    </Segment>
                </div>)
            )}

        </div >
    )
}
export default Invoice