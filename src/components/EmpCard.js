import React from "react";
import { useEffect } from "react";

const EmpCard = (props)=>{

    useEffect(()=>{
        console.log(props.result)
    },[])

    return(
        <>
            <div className="card-body">
                <div className="card-title">
                    {props.result.name}
                </div>
                <div className="card-text">
                    Job: {props.result.job}
                </div>
                <div className="card-text">
                    Gender: {props.result.gender}
                </div>
                <div className="card-text">
                    kids: {props.result.kids}
                </div>
            </div>
        </>
    )
}

export default EmpCard;