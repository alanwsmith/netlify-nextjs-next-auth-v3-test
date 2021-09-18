import { useSession, signIn, signOut } from 'next-auth/client'
import { useEffect } from 'react'
import Link from 'next/link'

function TheLayout({ securePage, session, children }) {
  return (
    <>
      <h2>Next.js NextAuth (v3) Layout Props Example</h2>
      <div>
        Test Links:{' '}
        <Link href="/">
          <a>Home Page</a>
        </Link>
        {' -- '}
        <Link href="/unprotected-page">
          <a>Unprotected Page</a>
        </Link>
        {' -- '}
        <Link href="/protected-page">
          <a>Protected Page</a>
        </Link>
      </div>
      <p>
        {session ? (
          <div>
            Current User: {session.user.name} ~{' '}
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <div>
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        )}
      </p>
      {children}
    </>
  )
}

export default function LayoutWithSessionCheck({ securePage, children }) {
  const [session, loading] = useSession()
  const isUser = !!session?.user

  useEffect(() => {
    if (loading) return

    // Lock down pages and require user access
    if (session === null && loading === false && securePage) {
      signIn()
    }
  }, [loading, session, securePage])

  // Remove flash of unauthenticated content
  if (session === null && loading === false && securePage) {
    return null
  }

  if (session !== undefined && loading === false) {
    return (
      <TheLayout securePage={securePage} session={session}>
        {children}
      </TheLayout>
    )
  }

  return null
}
