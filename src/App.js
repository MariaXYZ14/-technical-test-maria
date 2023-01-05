import './App.css'
import UserList from './components/UserList'
import data from './resources/data'

function App () {
  return (
    <UserList Usersdata={data} />
  )
}

export default App
