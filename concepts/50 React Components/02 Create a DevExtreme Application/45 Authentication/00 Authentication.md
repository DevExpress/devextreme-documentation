A DevExtreme React application includes authentication UI and API. Based on the user's authentication status, the application can be divided into two parts: public pages and protected pages.

Unauthenticated users can access only public pages. These pages provide authentication functionality (sign in, create a new account, reset password). They are rendered by the `NonAuthenticatedContent.js` component.

Protected pages include the rest of the application and can be viewed by authenticated users only. These pages are rendered by the `Content.js` component.