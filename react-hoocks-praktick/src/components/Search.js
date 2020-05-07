import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/AlertContext'
import {GithubContext} from '../context/github/GithubContext'

export const Search = () => {
    const {show, hide} = useContext(AlertContext)
    const github = useContext(GithubContext)
    const [value, setValue] = useState('')

    const onSubmit = event => {
        if (event.key !== 'Enter') { // Если была нажата любая кнопка, но не Enter
            return
        }

        github.clear() // Очищает страницу после нажатия Enter, елси данные не были введены, сработает если была нажата Enter

        if (value.trim()) {
            github.search(value.trim())
            hide() // Чистит алерт, если данные были введены
        } else {
            show('Введите данные пользователя')
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                placeholder="Введите ник пользователя"
                className="form-control"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}