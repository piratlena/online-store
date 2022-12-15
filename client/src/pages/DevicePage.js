import React, { useContext } from 'react';
import { Container, Col, Image, Row, Card, Button} from 'react-bootstrap';
import bigstar from '../assets/big_star.png';



const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 Pro', price: '109000', rating: '5', img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-silver.png?v=11'}
    const description = [
        {id: 1, title: 'RAM', description: '5 gb'},
        {id: 2, title: 'Camera', description: '19 mp'},
        {id: 3, title: 'CPU', description: 'razer'},
        {id: 4, title: 'Number of core', description: '2'},
        {id: 3, title: 'Battery', description: '4000'},

    ]
        return (
        
                <Container className="mt-3">
                    <Row>
                        <Col md={4}>
                            <Image width={300} height={300} src={device.img}/>
                    </Col>

                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
                            <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigstar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                            >
                                {device.rating}
                            </div>
                        </Row>

                        </Col>

                        <Col md={4}>
                            <Card className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                                <h3>Starting from {device.price}</h3>
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-column m-3">
                        <h1>Description</h1>
                        {description.map((info, index) => 
                            <Row 
                            key={info.id}
                            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                            >
                                {info.title}: {info.description}
                            </Row>
                            )}
                    </Row>
                 </Container>
            
            
        )
    }
export default DevicePage;