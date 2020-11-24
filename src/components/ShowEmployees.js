import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card,  } from "react-bootstrap"
import EmpCard from "./EmpCard";
import EmpJSON from "../employees.json"
import { useEffect } from "react";


const ShowEmployees = ()=>{
    const[empArr, setEmpArrState] = useState({
        employees: EmpJSON
    })
    
    useEffect(()=>{
        console.log(empArr)
    },[])

    return (
        <Container>
            <Row>
                <Col className="card">
                    <EmpCard />
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
            </Row>
        </Container>
    )
}


export default ShowEmployees