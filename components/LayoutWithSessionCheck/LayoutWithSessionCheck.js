import { useSession, signIn, signOut } from 'next-auth/client'
import Link from 'next/link'
import { useEffect } from 'react'

function TheLayout({ session, children }) {
  if (session) {
    return (
      <>
        <div>
          Current User: {session.user.name}{' '}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
        {children}
      </>
    )
  } else {
    return (
      <>
        <div>
          User is not logged in:{' '}
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </>
    )
  }
}

// This is how your checking to see if the user is logged in
// at the layout level. One improvement would be to setup
// so that you can flag pages that requrie auth and have them
// kick over to pages that don't need it that way. A
// requries login flag, of sorts, or just kick over to
// the signin pages.
export default function LayoutWithSessionCheck({ children }) {
  const [session, loading] = useSession()
  useEffect(() => {
    if (loading) {
      return null
    }
  }, [loading, session])

  if (loading) {
    return null
  }
  if (session === undefined) {
    return null
  }
  if (session !== undefined && loading === false) {
    return <TheLayout session={session}>{children}</TheLayout>
  }

  return null
}
