import React, { useReducer } from 'react'
import axios from 'axios'
import { GithubContext } from './GithubContext'
import { githubReducer } from './githubReducer'
import { CLEAR_USERS, GET_REPOS, SEARCH_USERS, GET_USER, SET_LOADING } from '../types'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({ children }) => {

    const initialState = {
        loading: false,
        user: {},
        users: [],
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => { // Получаем всех пользователей, у которы в нике присутствует value - вводимое в компоненте Search
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`) // Получаем всех юзеров по value = никнейму
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => { // Получаем конкретного пользователя
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        )

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => { // Получаем репозитории конкретного пользователя
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`) // per_page = ограничивает количество, в данном случае репозиториев
        )

        // console.log(response.data)
        
        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clear = () => dispatch({ type: CLEAR_USERS })
    const setLoading = () => dispatch({ type: SET_LOADING })

    const { user, users, repos, loading } = state

    return (
        <GithubContext.Provider value={{
            search, setLoading, clear, getRepos, getUser,
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}