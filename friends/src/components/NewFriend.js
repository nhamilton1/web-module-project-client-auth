import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialFormValues = {

    id: '',
    name: '',
    age: '',
    email: '',

}

const NewFriend = (props) => {

    const [newFriend, setNewFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState(initialFormValues)

    console.log(newFriend)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
      }



      useEffect(() => {
        fetchFriends()
      },[])


    const fetchFriends = () => {
        setIsLoading(true)
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setNewFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        let makeNewFriend = {
            id: Date.now(),
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
            props.history.push('/home')
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
                        placeholder='name'
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='age'
                        value={formValues.age}
                        onChange={handleChange}
                        placeholder='age'
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder='email'
                    />
                </label>
                <button>Submit</button>
            </form>
            {
                newFriend.map((friend, index) => {
                    return(
                        <div key={index}>
                        <h1>{friend.name}</h1>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default NewFriend
