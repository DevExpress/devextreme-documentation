Authentication functions for back-end requests are located in `src\app\actions\auth.jsx`. You must update these functions to make requests to your server, such as to add or verify users.

Each function returns an object with the following fields:

<table class="dx-table">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>isOk</td>
        <td>A Boolean value that represents whether the request was successful.</td>
    </tr>
    <tr>
        <td>message</td>
        <td>An error message (if an error occurred).</td>
    </tr>
</table>