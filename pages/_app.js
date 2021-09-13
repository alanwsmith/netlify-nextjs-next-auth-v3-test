import LayoutWithSessionCheck from '../components/LayoutWithSessionCheck/LayoutWithSessionCheck'
import '../styles/globals.css'
import { Provider, useSession, signIn } from 'next-auth/client'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  // Secure pages by default
  const securePage = Component.secure !== undefined ? Component.secure : true
  console.log(`Secure Page Initial State: ${securePage}`)
  return (
    <Provider session={pageProps.session}>
      <LayoutWithSessionCheck securePage={securePage}>
        <Component {...pageProps} />
      </LayoutWithSessionCheck>
    </Provider>
  )
}
