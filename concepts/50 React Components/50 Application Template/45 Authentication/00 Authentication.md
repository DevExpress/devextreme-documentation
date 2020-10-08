A DevExtreme React application includes authentication UI and API. Client-side routing is configured so that unauthenticated users can navigate to authentication pages only. These pages allow the users to sign in, create a new account, or reset the password.

Authentication pages are rendered by the `UnauthenticatedContent.js` component. The rest of the application is rendered by the `Content.js` component.

[important] Do not rely on client-side routing to protect your application from unauthorized access. Always verify user credentials on the back end.
