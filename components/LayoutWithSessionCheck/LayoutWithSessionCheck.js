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
  console.log('Start render LayoutWithSessionCheck')

  const [session, loading] = useSession()
  // const [loadPage, setLoadPage] = useState(false)
  const isUser = !!session?.user

  console.log(`Session 1: ${session}`)
  console.log(`Loading 1: ${loading}`)
  // console.log(`loadPage 1: ${loadPage}`)
  console.log(`isUser 1: ${isUser}`)

  useEffect(() => {
    console.log('Caught Use effect')
    console.log(`Session 2: ${session}`)
    console.log(`Loading 2: ${loading}`)
    // console.log(`loadPage 2: tmp removed`)
    console.log(`isUser 2: tmp removed`)

    if (loading) return

    // if (session !== undefined && loading === false) {
    //   console.log(`### setLoadPage = true`)
    //   setLoadPage(true)
    // }

    // if (session !== undefined && loading === false) {
    //   ;<TheLayout securePage={securePage} session={session}>
    //     {children}
    //   </TheLayout>
    //   // setLoadPage(true)
    // }

    // Lock down pages and require user access
    if (session === null && loading === false && securePage) {
      signIn()
    }
  }, [loading, session, securePage])

  // Atempting to prevent flash of conent before redirect
  if (session === null && loading === false && securePage) {
    return null
  }

  if (session !== undefined && loading === false) {
    console.log('Caught loadPage')
    console.log(`Session 3: ${session}`)
    console.log(`Loading 3: ${loading}`)
    // console.log(`loadPage 3: ${loadPage}`)
    console.log(`isUser 3: ${isUser}`)
    // setLoadPage(false)
    // console.log(`### setLoadPage = false`)
    return (
      <TheLayout securePage={securePage} session={session}>
        {children}
      </TheLayout>
    )
  }

  console.log('At end of the funciton')

  return null
}
