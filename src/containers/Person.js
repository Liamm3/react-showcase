import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'

import PersonList from '../components/PersonList'
import FlexContentContainer from '../components/layout/FlexContentContainer'
import PersonFilter from '../components/PersonFilter'

export default function Person() {
  const [users, setUsers] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState()

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://randomuser.me/api/?results=50')
      const jsonResponse = await response.json()
      const jsonUsers = jsonResponse.results
      setUsers(jsonUsers)
      setFilteredUsers(jsonUsers)
    }
    setTimeout(fetchUsers, 500)
  }, [])

  const handleUserInput = e => {
    const input = e.target.value.trim()
    setSearchInput(input)
  }

  const searchUsers = e => {
    e.preventDefault()
    const filteredUsers = users.filter(user =>
      user.name.first.toLowerCase().includes(searchInput)
    )
    setFilteredUsers(filteredUsers)
  }

  let center = true
  let content = <HashLoader css={{ display: 'block' }} />

  if (filteredUsers) {
    center = false
    content = (
      <>
        <PersonFilter
          searchInput={searchInput}
          handleUserInput={handleUserInput}
          searchUsers={searchUsers}
        />
        <PersonList users={filteredUsers} />
      </>
    )
  }

  return <FlexContentContainer center={center}>{content}</FlexContentContainer>
}
