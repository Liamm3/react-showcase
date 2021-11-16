export default function AuthOnly({ loggedIn, children }) {
  if (loggedIn) {
    return children
  }

  return null
}
