export default function ProtectedPage() {
  return (
    <div>
      <ul>
        <li>
          This is a <em>client-side</em> protected page.
        </li>
        <li>
          <strong>IMPORTANT:</strong> Because it&apos;s client-side, users can
          hack around the authentication to see any content that&apos;s directly
          on the page. Any sensitive data/information needs to be pulled from a
          secure API call.
        </li>
        <li>
          If you try to access it without beign signed in, you&apos;ll be
          redirected to the login page
        </li>
        <li>
          If you are signed in, you can see this content and the sign out
          button. (Since you&apos;re reading this, you have either signed in or
          hacked around the client-side auth. Which again, is why all sensitive
          content needs to be secured behind server-side
          authenticated/authorized pages.)
        </li>
        <li>
          The propose of this authenticaiton flow is to faciliate the login
          which provides credentails which can then be used to make the actual
          API calls for secure data
        </li>
      </ul>
    </div>
  )
}
ProtectedPage.secure = true
