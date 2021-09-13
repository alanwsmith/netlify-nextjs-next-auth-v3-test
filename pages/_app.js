import LayoutWithSessionCheck from '../components/LayoutWithSessionCheck/LayoutWithSessionCheck'
import '../styles/globals.css'
import { Provider, useSession, signIn } from 'next-auth/client'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <LayoutWithSessionCheck>
        <Component {...pageProps} />
      </LayoutWithSessionCheck>
    </Provider>
  )

  return (
    <Provider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Layout isAuthenticated={true}>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      ) : (
        <SessionWrapper>
          <Layout isAuthenticated={false}>
            <Component {...pageProps} />
          </Layout>
        </SessionWrapper>
      )}
    </Provider>
  )
}

// This is designed to make sure the session
// is loaded before a render occurs. Not
// totally sure of the approach...
function SessionCheck({ children }) {
  const [session, loading] = useSession()
  useEffect(() => {
    if (loading) {
      return null
    }
  }, [loading])

  if (loading) {
    return null
  }
  return children
}

function Auth({ children }) {
  const [session, loading] = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (loading) return
    if (!isUser) signIn()
  }, [isUser, loading])

  if (isUser) {
    return children
  }

  return null
}
