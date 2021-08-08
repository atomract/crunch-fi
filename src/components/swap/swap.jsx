import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import '../../App.css'

const Swap = () => {
    return ( 
        <div className="bgBlue bottomSpacing" >
            <Container>

                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Crunch-Fi</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Swap</Nav.Link>
                        <Nav.Link href="#pricing">Lending</Nav.Link>
                        <Nav.Link href="#pricing">Farms</Nav.Link>
                        <Nav.Link href="#pricing">Governance</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <div className="bgBlue">
                    <div className="d-lg-flex justify-content-center topMargin" >
                        <div className="d-lg-flex">
                            <div className="d-lg-flex">
                                <button className='swapPoolBtn' >
                                    SWAP
                                </button>
                                <button className='swapPoolBtn' >
                                    Pools
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-center topMargin h-10">
                        <Container className=" topMargin w-50 bgBlk roundContainer">
                            <Row className="mainFont">
                                <Col>Swap</Col>
                                <Col>Setting</Col>
                            </Row>
                            <Row>
                                <Container className="d-lg-flex justify-content-center">
                                    <Container>
                                        <div className="customContainer">
                                            <Row>
                                                <Col className="mainFont">
                                                    <p>USDC^</p> 
                                                    <p className="greyFont">Bal:-</p>
                                                </Col>
                                                <Col className="customPadding">
                                                    <input 
                                                        type="text" 
                                                        id="input"
                                                        placeholder="0.0"
                                                        className="inputSwap"
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </Container>
                                <Row className="justify-content-center">
                                    <Button variant="secondary" className="w-50 mtop">Swap</Button>
                                </Row>
                                <Container className="d-lg-flex justify-content-center">
                                    <Container>
                                        <div className="customContainer">
                                            <Row>
                                                <Col className="mainFont">
                                                    <p>USDT^</p> 
                                                    <p className="greyFont">Bal:-</p>
                                                </Col>
                                                <Col className="customPadding">
                                                    <input 
                                                        type="text" 
                                                        id="input"
                                                        placeholder="0.0"
                                                        className="inputSwap"
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </Container>
                                <Row className="customPadding">
                                    <Button variant="secondary" className="mtop">Connect Wallet</Button>
                                </Row>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default Swap;