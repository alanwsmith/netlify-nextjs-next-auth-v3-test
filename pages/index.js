import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

export default function HomePage() {
  const [session, loading] = useSession()

  return (
    <>
      {!session && (
        <>
          <p>
            Status: Not signed in ~{' '}
            <button onClick={() => signIn()}>Sign in</button>
          </p>
        </>
      )}
      {session && (
        <>
          <p>
            Current User: {session.user.name} ~{' '}
            <button onClick={() => signOut()}>Sign out</button>
          </p>
        </>
      )}
      <hr />

      <p>
        This is an example of version 3 of{' '}
        <a href="https://next-auth.js.org">NextAuth.js</a> running on Netlify to
        verify basic functionality
      </p>

      <p>This is default behavoior with no extra options set</p>

      <p>There are two providers setup: GitHub and Twitch</p>

      <p>
        The example was setup via{' '}
        <a href="https://next-auth.js.org/v3/getting-started/example">
          these version instructions for v3.
        </a>{' '}
        As of Sept. 2021, the docs say v3 is no longer maintained but v4
        isn&apos;t out of beta. Version 3 is what installs with `npm i
        next-auth`. So, make your own decisions there
      </p>

      <p>
        The GitHub project this site is built from{' '}
        <a href="https://github.com/alanwsmith/netlify-nextjs-next-auth-v3-test">
          is here
        </a>
      </p>

      <p>
        Besides the code, OAuth apps were setup in{' '}
        <a href="https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app">
          GitHub
        </a>{' '}
        and on <a href="https://dev.twitch.tv/docs/api/">Twitch</a>. The Client
        ID and Client Secret for each were added as environmental variables.
      </p>

      <p>
        Note that I setup the callback URL as just the domain name for GitHub
        (i.e. `https://aws-netlify-nextjs-next-auth-v3-test.netlify.app`), but
        Twitch requried this format
        `https://aws-netlify-nextjs-next-auth-v3-test.netlify.app/api/auth/callback/twitch`.
        Note that I did not put the trailing slash on the NEXTAUTH_URL
        environmental variable.
      </p>

      <p>
        And the final env variable is the `NEXTAUTH_URL` with the domain that
        gets called back to. (e.g. `http://localhost:8888` when testing)
      </p>

      <p>Click the `Sign in` button above to give it a try</p>
    </>
  )
}

HomePage.secure = false
// HomePage.secure = true
