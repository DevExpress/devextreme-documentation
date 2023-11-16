A user can use the following keys to interact with the List component: 

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>&uarr; / &darr;</td>
        <td>Moves focus to the previous/next item.</td>
    </tr>
    <tr>
        <td>Page Up / Page Down</td>
        <td>Moves focus to the item located a screen above/below the current one.</td>
    </tr>
    <tr>
        <td>Home / End</td>
        <td>Moves focus to the first/last item.</td>
    </tr>
    <tr>
        <td>Enter or Space</td>
        <td><a href="/Documentation/Guide/UI_Components/List/Selection/#User_Interaction">Selects</a> the focused item.</td>
    </tr>
    <tr>
        <td>Shift + &uarr; / &darr;</td>
        <td>Shifts the focused item one item up/down. Active if the <a href="/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemReordering">allowItemReordering</a> property is set to <i>true</i>.</td>
    </tr>
    <tr>
        <td>Delete</td>
        <td>Removes the focused item. Active if the <a href="/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemDeleting">allowItemDeleting</a> property is set to <i>true</i>.</td>
    </tr>
</table>

#include common-code-register-key-handler