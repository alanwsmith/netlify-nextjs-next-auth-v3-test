export default function UnprotectedPage() {
  return (
    <div>
      <ul>
        <li>This is the unprotected page</li>
        <li>You can get to it without being logged in </li>
        <li>If you&apos;re not logged in, the sign in button appears</li>
        <li>If you are signed in, the sign out button appears</li>
      </ul>
    </div>
  )
}

UnprotectedPage.secure = false
