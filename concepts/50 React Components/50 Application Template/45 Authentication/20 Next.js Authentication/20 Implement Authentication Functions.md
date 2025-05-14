Authentication functions for back-end requests are located in `src\app\actions\auth.jsx`. You must update these functions to access your authentication backend (add users or verify their credentials).

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
</table>