import React from 'react'
import {Nav} from 'react-bootstrap';

function Navbar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey="1" href="#/home"> Home </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" title="Item"> About </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" > Portfolio </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link eventKey="3" > Contact  </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}



export default Navbar
