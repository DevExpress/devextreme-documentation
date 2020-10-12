User information is stored in a context declared in the `contexts\auth.js` module.

To access user information from any part of the application, use the `useAuth` hook. This hook returns an object with the following fields:

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
        <td>setUser</td>
        <td>A function that updates information about the current user; accepts an object with new user information.</td>
    </tr>
    <tr>
        <td>loading</td>
        <td>A Boolean value that is <b>true</b> while user information is being loaded (an HTTP request is in progress).</td>
    </tr>
</table>

The following code uses the `useAuth` hook to access user information:

    <!-- tab: JSX -->
    import { useAuth } from './contexts/auth'; 

    export default function() { 
        const { user } = useAuth(); 
        if (user) { 
            // User is authenticated 
            ...
        } 
        ... 
    } 