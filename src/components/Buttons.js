import React from "react";
import {Col} from "react-bootstrap"

const Buttons = (props)=>{
    console.log(props.empArray)
    return(
        <>
        <Col xs={3} >
            <button className="btn btn-primary">
                sort by bla
            </button>
        </Col>
        <Col xs={3} >
            <button className="btn btn-secondary">
                sort by bla
            </button>
        </Col>
        <Col xs={3} >
            <button className="btn btn-danger">
                sort by bla
            </button>
        </Col>
        <Col xs={3} >
            <button className="btn btn-success">
                sort by bla
            </button>
        </Col>
        </>
    )
}

export default Buttons;