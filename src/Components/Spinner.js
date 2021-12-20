import React,{Fragment} from 'react'
import Spin from './spinner.gif'

export default function Spinner() {
    return (
        <Fragment>
            <img src={Spin} alt='loading' style={{width:'250px', margin:'auto',display:'block'}} />
        </Fragment>
    )
}
