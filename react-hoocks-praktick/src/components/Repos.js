import React from 'react'

export const Repos = ({ repos }) => (
    <>
        {repos.map(repo => (
            <div className="card mb-3" key={repo.id}>
                <div className="card-body">
                    <h5 className="card-title">
                        <a
                            href={repo.html_url}
                            target="blank"
                            rel="noopener noreferrer"
                        >{repo.name}</a>
                    </h5>
                </div>
            </div>
        ))}

    </>
)