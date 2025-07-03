User information is stored in a context declared in the `contexts\auth.js` module.

To access user information from any part of the application, use the `useAuth` hook from `contexts\auth-hooks.js`. This hook returns an object with the following fields:

<table class="dx-table">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>user</td>
        <td>An object with information about the current user; undefined if the user is not authenticated.</td>
    </tr>
    <tr>
        <td>signIn</td>
        <td>A function that sends a sign-in request to the server and saves received user information. Accepts user email and password as parameters.</td>
    </tr>
    <tr>
        <td>signOut</td>
        <td>A function that clears current user information.</td>
    </tr>
    <tr>
        <td>loading</td>
        <td>A Boolean value that is <b>true</b> while user information is being loaded (an HTTP request is in progress).</td>
    </tr>
</table>

The following code uses the `useAuth` hook to access user information:

    <!-- tab: JSX -->
    import { useAuth } from './contexts/auth-hooks'; 

    export default function() { 
        const { user } = useAuth(); 
        if (user) { 
            // User is authenticated 
            ...
        } 
        ... 
    } 