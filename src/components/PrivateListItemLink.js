import { connect, useSelector } from 'react-redux'

import ListItemLink from './ListItemLink'

function PrivateListItemLink(props) {
  const { token } = useSelector(state => state.auth)
  if (token) {
    return <ListItemLink {...props} />
  }

  return null
}

export default connect()(PrivateListItemLink)
