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
                <>
                {empArr.employees.map(employee=>{
                    return(<Col className="card">
                        <EmpCard key={employee.id} result={employee} />
                    </Col>)
                })}
                </>
            </Row>
        </Container>
    )
}


export default ShowEmployees