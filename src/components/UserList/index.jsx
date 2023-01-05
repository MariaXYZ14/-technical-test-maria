import React from 'react'
import { UsersGrid, User, Name, Email, Image } from './styles'

const Users = ({ Usersdata = [] }) => {
  return (
    <UsersGrid>
      {Usersdata.map(({ email, name, picture }) => (
        <User key={email}>
          <Image src={picture.large} />
          <Name>{name.first} {name.last}</Name>
          <Email>{email}</Email>
        </User>
      ))}
    </UsersGrid>
  )
}

export default Users
