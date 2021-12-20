import React from 'react'

export default function Alert({alert}) {
    console.log(alert)
    return (
        <div>
            {alert !== null && 
            <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle' /> {alert.msg}
            </div>
            }
        </div>
    )
}
