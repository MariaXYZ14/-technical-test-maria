import { useState, useEffect } from 'react'
import Axios from 'axios'

export const GetUserList = () => {
  const [listOfUsers, setListOfUsers] = useState([])
  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=5').then(response => {
      setListOfUsers(response.data.results)
    })
  }, [])

  return (listOfUsers)
}
