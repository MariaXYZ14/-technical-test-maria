import React, { useState, useEffect } from 'react'
import { UsersGrid, User, Name, Email, Image, Button } from './styles'
import Axios from 'axios'

const Users = () => {
  const [listOfUsers, setListOfUsers] = useState([])
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=5').then(response => {
      setListOfUsers(response.data.results)
    })
  }, [])

  const newUser = () => {
    if (counter > 4) {
      setCounter(1)
    } else {
      setCounter(counter + 1)
    }
  }
  if (listOfUsers.length === 0) {
    return <></>
  }
  return (
    <>
      <UsersGrid>
        {listOfUsers.filter((user, index) => index < counter).map(({ email, name, picture }) => (
          <User key={email}>
            <Image src={picture.large} />
            <Name>{name.first} {name.last}</Name>
            <Email>{email}</Email>
          </User>
        ))}
      </UsersGrid>
      <Button onClick={newUser}>ADD</Button>
    </>
  )
}
export default Users
