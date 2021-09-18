import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

export default function HomePage() {
  const [session, loading] = useSession()

  return (
    <>
      <hr />
      <p>
        This is an example of version 3 of{' '}
        <a href="https://next-auth.js.org">NextAuth.js</a> running on Netlify to
        verify basic functionality
      </p>
      <p>
        A single call to the NextAuth `useSession()` function is made in the
        layout file and then the session object is passed down from there.
      </p>
      <p>
        The code from the{' '}
        <a href="https://next-auth.js.org/v3/getting-started/example">
          original example
        </a>{' '}
        on the NextAuth site results in a flash of unauthenticted content before
        switching to authenticated content when the user is logged in. I setup
        this code to avoid that.
      </p>
      <p>
        I&apos;ve setup so all pages are secure by default. To remove the need
        for authentication, add `ComponentName.secure = false` after the page
        component (e.g. `HomePage.secure = false` on this page)
      </p>
      <p>
        <strong>IMPORTANT</strong> NextAuth does both client-site and
        server-side authentication and authorization. The example here is
        client-side which should only be used for non-sensitive content (e.g
        layouts). Any sensitive conenent must be placed behind secure server
        side pages (
        <a href="https://next-auth.js.org/v3/tutorials/securing-pages-and-api-routes#server-side">
          see here for details
        </a>
        ){' '}
      </p>
      <p>
        The OAuth authentication provider is{' '}
        <a href="https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app">
          GitHub OAuth app
        </a>{' '}
        . Other providers are listed under{' '}
        <a href="https://next-auth.js.org/v3/getting-started/introduction">
          the docs
        </a>
      </p>
      <p>
        As of Sept. 2021, the docs say v3 is no longer maintained but v4
        isn&apos;t out of beta. Version 3 is what installs with `npm i
        next-auth`. So, make your own decisions based off that
      </p>
      <p>
        The GitHub project this site is built from{' '}
        <a href="https://github.com/alanwsmith/nextjs--next-auth-v3-layout-props-example">
          is here
        </a>
      </p>
      <p>
        You&apos;ll see an error with `jwt_auto_generated_signing_key` in the
        terminal when running the example. Details on how to deal with it are on{' '}
        <a href="https://next-auth.js.org/warnings">this page</a>
      </p>

      <p>
        If you want to say hi, my site is{' '}
        <a href="https://www.alanwsmith.com/">alanwsmith.com</a> and I&apos;m on
        twitter as <a href="https://twitter.com/theidofalan">TheIdOfAlan</a>
      </p>
      <p>Click the `Sign in` button above to give it a try</p>
    </>
  )
}

HomePage.secure = false
