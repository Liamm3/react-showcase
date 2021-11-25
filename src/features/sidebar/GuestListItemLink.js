import { useSelector } from 'react-redux'

import ListItemLink from './ListItemLink'
import { selectToken } from '../auth/authSlice'

export default function GuestListItemLink(props) {
  const token = useSelector(selectToken)
  if (!token) {
    return <ListItemLink {...props} />
  }

  return null
}
