import React, { useContext } from 'react'
import githubContext from "../Context/githubContext";

export default function Alert() {
    const context = useContext(githubContext)
    return (
        <div>
            {context.alert !== null && 
            <div className={`alert alert-${context.alert.type}`} style={{display:'flex',justifyContent:'space-between'}}>
                <i className='fas fa-info-circle'>{' '} {context.alert.msg}</i>
                <span style={{cursor:'pointer'}} onClick={()=>context.removeAlert()}>x</span>
            </div>
            }
        </div>
    )
}
