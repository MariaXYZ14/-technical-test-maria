import React, { useState } from 'react'
import { UsersGrid, User, Name, Email, Image, Button } from './styles'

const Users = ({ Usersdata = [] }) => {
  let InitialArray = []

  const [listOfUsers, setListOfUsers] = useState(InitialArray)
  const [counter, setCounter] = useState(1)

  const newUser = () => {
    if (counter > 5) {
      InitialArray = []
      setCounter(1)
    } else {
      InitialArray = Usersdata.slice(0, counter)
      setCounter(counter + 1)
    }

    setListOfUsers(InitialArray)
  }
  if (!InitialArray) {
    return <></>
  }
  return (
    <>
      <UsersGrid>
        {listOfUsers.map(({ email, name, picture }) => (
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
