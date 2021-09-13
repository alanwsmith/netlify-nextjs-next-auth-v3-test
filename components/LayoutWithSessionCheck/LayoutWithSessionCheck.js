import { useSession, signIn, signOut } from 'next-auth/client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function TheLayout({ securePage, session, children }) {
  console.log(session)
  if (session) {
    return (
      <>
        <div>
          Current User: {session.user.name}{' '}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
        <div>
          Test Links:{' '}
          <Link href="/">
            <a>Home Page</a>
          </Link>{' '}
          ~{' '}
          <Link href="/unprotected-page">
            <a>Unprotected Page</a>
          </Link>
          <Link href="/protected-page">
            <a>Protected Page</a>
          </Link>
        </div>
        {children}
      </>
    )
  } else {
    return (
      <>
        <div style={{ background: 'blue' }}>
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
export default function LayoutWithSessionCheck({ securePage, children }) {
  const [session, loading] = useSession()
  const [loadPage, setLoadPage] = useState(false)
  const isUser = !!session?.user
  useEffect(() => {
    if (loading) return
    if (session !== undefined && loading === false) {
      setLoadPage(true)
    }
    // Lock down pages and require user access
    if (session !== undefined && loading === false && !isUser && securePage) {
      signIn()
    }
  }, [loading, session, isUser, securePage])

  if (loadPage) {
    setLoadPage(false)
    return (
      <TheLayout securePage={securePage} session={session}>
        {children}
      </TheLayout>
    )
  }

  return null
}
