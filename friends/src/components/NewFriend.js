import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialFormValues = {

    id: '',
    name: '',
    age: '',
    email: '',

}

const NewFriend = () => {

    const [newFriend, setNewFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState(initialFormValues)


    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
      }

    const handleSubmit = e => {
        e.preventDefault();
        let makeNewFriend = {
            id: formValues.id,
            name: formValues.name,
            age: formValues.name,
            email: formValues.name,
        }
        axiosWithAuth()
            .post('/friends', makeNewFriend)
            .then(res => {
                setNewFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            setFormValues(initialFormValues)
    }  
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='age'
                        value={formValues.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default NewFriend
