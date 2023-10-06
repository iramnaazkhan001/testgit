import React from 'react'
import Card from 'react-bootstrap/Card'
import { Chart } from "react-google-charts";
import Table from 'react-bootstrap/Table'
export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
];
function Home() {
    return (
        <>
            <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                <div>
                    <Card style={{ width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text>
                                Total :
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Shops</Card.Title>
                            <Card.Text>
                                Total:
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Revenue</Card.Title>
                            <Card.Text>
                                Total:
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Employee</Card.Title>
                            <Card.Text>
                                Total:
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            {/* Google Chart */}
            <hr />
            <div style={{ display: 'flex',marginTop:'5%' }}>

                <div>
                    <Chart
                        chartType="Bar"
                        width="130%"
                        height="400px"
                        data={data}
                    />
                </div>

                <div style={{ border: "2px", fontSize: '11px',gap:'20px' }}>
                    <Table striped bordered hover variant='light' style={{ borderColor: 'rgb(1,184,170)' }}>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Order Time</th>
                                <th>Customer</th>
                                <th>Satus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id00001</td>
                                <td>20</td>
                                <td>$80.00</td>
                                <td>27-08-2018 1:22:12</td>
                                <td>Patric J. King</td>
                                <td>InTransit</td>
                            </tr>
                            <tr>
                                <td>id00002</td>
                                <td>12</td>
                                <td>$180.00</td>
                                <td>25-08-2018 21:12:56</td>
                                <td>Rachel j. Wicker</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>
                                <td>id00003</td>
                                <td>23</td>
                                <td>$820.00</td>
                                <td>24-08-2018 14:12:19</td>
                                <td>Michael K. Ledford</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>
                                <td>id00004</td>
                                <td>34</td>
                                <td>$340.00</td>
                                <td>23-08-2018 09:12:35</td>
                                <td>Michael K. Ledford</td>
                                <td>Delivered</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Home


