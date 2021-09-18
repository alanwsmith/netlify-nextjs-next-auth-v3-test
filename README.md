# Nextjs NextAuth V3 Layout Props Example

This is a basic exapmle showing how to use
a Layout wrapper component with NextAuth V3
in Nextjs.

You can see a live example [here](https://aws-nextjs-nextauth-v3-layout-props-example.netlify.app)

Checkout the index.js file for more details

---

To run it, clone the repo, then install the
node modules with

```
npm i
```

Create a `.env.local` file and set a
`NEXTAUTH_URL` variable with your localhost
path (e.g. `http://localhost:3000` or
`http://localhost:8888` if your using
`netlify dev` for testing.

Authentication for this example is avaialbe
via Github. You'll a GitHub account and then
you'll need to setup an OAuth App
under your Settings ~ Developer settings ~
[OAuth Apps](https://github.com/settings/developers)
page.

For the callback URL use the same URL you used for
the `NEXTAUTH_URL` variable (e.g. `http://locahost:3000`
or `http://localhost:8888`)

When you first register the app, it will show you
a Client ID along with a button to "Generate a new
client secret". Click that button to get the secret.
You'll only see the secret one time, so make sure to
put it in your password manager.

Add your GitHub Client ID and Client Secret to the
`.env.local` file as `GITHUB_ID` and `GITHUB_SECRET`
respectively.
