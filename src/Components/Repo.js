import React from 'react'

export default function Repo({repo}) {
    return (
        <div className='card'>
            <h3>
                <a href={repo.html_url} >{repo.name}</a>
            </h3>
        </div>
    )
}
