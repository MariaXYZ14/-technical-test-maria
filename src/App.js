import './App.css'
import Users from './components/Users'
import data from './resources/data'

function App () {
  return (
    <Users Usersdata={data} />
  )
}

export default App
