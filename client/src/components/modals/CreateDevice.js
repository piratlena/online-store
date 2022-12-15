import React, { useContext, useState }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Context } from "../../index";
import { Dropdown, Row, Col } from "react-bootstrap";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title:'', description:'', number: Date.now()}])
    }
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a new type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
               <Dropdown className="mt-3 mb-2">
                    <Dropdown.Toggle>Click on type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => 
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                    </Dropdown.Menu>
               </Dropdown>
               <Dropdown className="mt-3 mb-2">
                    <Dropdown.Toggle>Click on brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => 
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                    </Dropdown.Menu>
               </Dropdown>
               <Form.Control
               className="mt-3"
               placeholder="Type the name"
               />
               <Form.Control
               className="mt-3"
               placeholder="Type the price"
               type="number"
               />
              <Form.Control
               className="mt-3"
               type="file"
               />
               <hr></hr>
               <Button 
               onClick={addInfo}
               variant="outline-info">
                Add new property
                </Button>
                {
                    info.map(i=> 
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                placeholder="Type the property"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                 placeholder="Type the description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                variant="outline-danger">
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                        )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Close</Button>
          <Button variant="outline-success" onClick={onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
    )
}
export default CreateDevice;