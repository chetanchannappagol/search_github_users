import React, { useState } from 'react'
import Repo from './Repo'

export default function Repos(props) {
    const [showMore,setShowMore] = useState(false)
    return (
        <div>
            {
              showMore === false ? (<React.Fragment>
                  {
                      props.repos.slice(0,3).map((repo)=><Repo repo={repo}/>)
                  }
              </React.Fragment>) :
              (<React.Fragment>
                {
                    props.repos.map((repo)=><Repo repo={repo}/>)
                }
            </React.Fragment>)
            }
            <div style={{display:'flex',justifyContent:'center'}}>
            <button className='btn btn-dark' onClick={()=>setShowMore(!showMore)}>{showMore ? 'Show More' : "Show Less"}</button>

            </div>
        </div>
    )
}

// props.repos.slice(0,3).map((repo)=><Repo repo={repo}/>
