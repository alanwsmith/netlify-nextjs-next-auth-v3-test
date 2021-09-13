import { useSession, signOut } from 'next-auth/client'

export default function ProtectedPage() {
  const [session] = useSession()
  console.log('PING')

  return (
    <div>
      Access granted.
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

ProtectedPage.auth = true
