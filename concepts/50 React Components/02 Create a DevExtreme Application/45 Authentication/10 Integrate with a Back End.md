Stub authentication functions for back-end requests are located in the `src\api\auth.js` file. Update these functions to make actual requests to your back end.

Each function returns an object with the following fields:

<table class="dx-table">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>isOk</td>
        <td>A Boolean value that is <b>true</b> if the request was successful and <b>false</b> otherwise.</td>
    </tr>
    <tr>
        <td>message</td>
        <td>An error message (if an error occurred).</td>
    </tr>
    <tr>
        <td>data</td>
        <td>The request result (user information).</td>
    </tr>
</table>
