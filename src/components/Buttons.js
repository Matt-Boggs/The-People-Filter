import React from "react";
import { useEffect } from "react";
import {Col} from "react-bootstrap"

const Buttons = (props)=>{
    const empArray = props.empArray
    useEffect(()=>{
        console.log(props.sortNum)
    },[props.sortNum])

    // list.sort((a, b) => (a.color > b.color) ? 1 : -1)

    // console.log([...testArray].sort((a,b)=>(a.name > b.name) ? 1 : -1))

    // Clicking the same button should reverse the sort

    // sort by firstname
    const nameSort = ()=>{
        var newArr = [...empArray].sort((a,b)=>(a.name > b.name) ? (props.sortNum) : -(props.sortNum))
        var newSort = (props.sortNum) * -1
        // const revArr = newArr.reverse()
        props.setEmpArrState({
            employees: newArr,
            sortNum: newSort
        })

    }

    // sort by lastname

    // sort by unemployed status; change bg color of card for unemployed?

    // some other sort?
    return(
        <>
        <Col xs={3} >
            <button className="btn btn-primary" onClick={nameSort} >
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