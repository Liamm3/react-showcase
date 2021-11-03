import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export default function Person() {
  const [users, setUsers] = useState()

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://randomuser.me/api/?results=10')
      setUsers(await response.json())
    }
    fetchUsers()
  }, [])

  return <h1>Persons</h1>
}
