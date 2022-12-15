import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container className="d-flex flex-column">
            <Button variant="outline-dark" 
            onClick={() => setTypeVisible(true)}
            className="mt-4 p-2">
                Add type
                </Button>
            <Button 
            onClick={() => setBrandVisible(true)}
            variant="outline-dark" 
            className="mt-4 p-2">
                Add brand
            </Button>
            <Button 
            onClick={() => setDeviceVisible(true)}
            variant="outline-dark" 
            className="mt-4 p-2">
                Add device
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType  show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    )
}
export default Admin;