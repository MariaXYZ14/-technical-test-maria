import React, { useState } from 'react'
import { UsersGrid, User, Name, Email, Image, Button } from './styles'
import { GetUserList } from '../GetUserList/getUser'

const UserList = () => {
  const listOfUsers = GetUserList()
  const [showUserState, setUserState] = useState(0)

  const newUser = () => {
    if (showUserState > listOfUsers.length) {
      setUserState(0)
    } else {
      setUserState(showUserState + 1)
    }
  }
  if (listOfUsers.length === 0) {
    return null
  }
  return (
    <>
      <UsersGrid>
        {listOfUsers.filter((user, index) => index < showUserState).map(({ email, name, picture }) => (
          <User key={email}>
            <Image src={picture.large} />
            <Name>{name.first} {name.last}</Name>
            <Email>{email}</Email>
          </User>
        ))}
      </UsersGrid>
      <Button onClick={newUser} key='add'>ADD</Button>
    </>
  )
}
export default UserList
