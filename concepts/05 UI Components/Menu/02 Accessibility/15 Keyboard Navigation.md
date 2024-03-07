A user can use the following keys to interact with the Menu component: 

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>&larr;</td>
        <td>Moves focus to the previous item. Closes the submenu and focuses on its parent item.</td>
    </tr>
    <tr>
        <td>&rarr;</td>
        <td>Moves focus to the next item. Opens the submenu of the focused item.</td>
    </tr>
    <tr>
        <td>&uarr;</td>
        <td>Moves focus to the previous item.</td>
    </tr>
    <tr>
        <td>&darr;</td>
        <td>Moves focus to the next item.</td>
    </tr>
    <tr>
        <td>Home</td>
        <td>Sets focus to the first item in the menu/submenu.</td>
    </tr>
    <tr>
        <td>End</td>
        <td>Sets focus to the last item in the menu/submenu.</td>
    </tr>
    <tr>
        <td>Space</td>
        <td>Switches the focused item to the selected state.</td>
    </tr>
    <tr>
        <td>Enter</td>
        <td>Chooses the focused item.</td>
    </tr>
</table>

If you set [adaptivityEnabled](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#adaptivityEnabled') to `true`, the Menu acts as a [TreeView](/concepts/05%20UI%20Components/TreeView/03%20Accessibility/15%20Keyboard%20Navigation.md '/Documentation/Guide/UI_Components/TreeView/Accessibility/#Keyboard_Navigation').

#include common-code-register-key-handler