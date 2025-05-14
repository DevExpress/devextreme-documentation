Authentication functions for backend requests are in `src\api\auth.js`. You must update these functions to make requests to your server. For example, add users or verify their credentials. 

Each function returns an object with the following fields:

<table class="dx-table">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>isOk</td>
        <td>A Boolean value that indicates whether the request was successful.</td>
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