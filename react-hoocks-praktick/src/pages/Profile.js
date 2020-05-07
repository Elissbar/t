import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/GithubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ({ match }) => {
  const { getRepos, getUser, user, repos, loading } = useContext(GithubContext)
  const userName = match.params.name

  useEffect(() => { // Аналог componentDidthMount, в массиве нужно указываеть переменные, кототрые будут изменяться
    getRepos(userName)
    getUser(userName)
  }, []) // В случае единичного изменения переменной, указывается пустой массив

  const {
    avatar_url, bio, company,
    followers, following, location,
    name, blog, login, html_url, public_repos,
    public_gists
  } = user

  if (loading) {
    return (
      <p className="text-center">Загрузка...</p>
    )
  }

  return (
    <>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img style={{ width: '150px' }} src={avatar_url} alt={name} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio &&
                <>
                  <h5>BIO</h5>
                  <p>{bio}</p>
                </>
              }
              <a
                href={html_url}
                target="_blank"
                className="btn btn-dark"
                rel="noopener noreferrer"
              >Открыть профиль</a>
              <ul>
                {login &&
                  <li>
                    <strong>Username: </strong>{login}
                  </li>
                }
                {company &&
                  <li>
                    <strong>Компания: </strong>{company}
                  </li>
                }
                {blog &&
                  <li>
                    <strong>Website: </strong>{blog}
                  </li>
                }
              </ul>

              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подписки: {following}</div>
              <div className="badge badge-info">Репозитории: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  )
}