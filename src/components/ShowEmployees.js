import React from "react";
import { Container, Row, Col, Card,  } from "react-bootstrap"
const ShowEmployees = ()=>{


    return (
        <Container>
            <button className="btn btn-success">button</button>
            <Row>
                <Col xs={1}></Col>

                <Col className="card">
                    <div className="card-body">
                        <div className="card-title">
                            bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                    </div>
                </Col>
                <Col className="card">
                    <div className="card-body">
                        <div className="card-title">
                            bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                    </div>
                </Col>
                {/* <div className="card col-2">
                    <div className="card-body">
                        <div className="card-title">
                            bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                    </div>
                </div>
                <div className="card col-2">
                    <div className="card-body">
                        <div className="card-title">
                            bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                    </div>
                </div>
                <div className="card col-2">
                    <div className="card-body">
                        <div className="card-title">
                            bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                    </div>
                </div>
                <div className="card col-2">
                    <div className="card-body">
                        <div className="card-title">
                            bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                        <div className="card-text">
                            stuff about bob
                        </div>
                    </div>
                </div> */}

                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}


export default ShowEmployees