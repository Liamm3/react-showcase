import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'

import PersonList from '../components/PersonList'
import FlexContentContainer from '../components/layout/FlexContentContainer'

export default function Person() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://randomuser.me/api/?results=10')
      const jsonResponse = await response.json()
      setUsers(jsonResponse.results)
    }
    setTimeout(fetchUsers, 500)
  }, [])

  if (!users) {
    return (
      <FlexContentContainer center>
        <HashLoader
          css={{
            display: 'block'
          }}
        />
      </FlexContentContainer>
    )
  }

  return (
    <FlexContentContainer>
      <PersonList users={users} />
    </FlexContentContainer>
  )
}
