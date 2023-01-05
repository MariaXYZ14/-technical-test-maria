import React, { useState } from 'react'
import { UsersGrid, User, Name, Email, Image, Button } from './styles'

const UserList = ({ Usersdata = [] }) => {
  const [showUserState, setUserState] = useState(0)

  const newUser = () => {
    if (showUserState > Usersdata.length) {
      setUserState(0)
    } else {
      setUserState(showUserState + 1)
    }
  }
  if (Usersdata.length === 0) {
    return null
  }
  const filter = () => {
    return Usersdata.slice(0, showUserState)
  }
  return (
    <>
      <UsersGrid>
        {filter().map(({ email, name, picture }) => (
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

export default UserList
