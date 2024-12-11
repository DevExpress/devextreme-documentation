A user can use the following keys to interact with the TreeView component: 

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Shift + Mouse Wheel</td>
        <td>Scrolls the content left/right if the <a href="/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#scrollDirection">scrollDirection</a> property is <i>"horizontal"</i> or <i>"both"</i>.</td>
    </tr>
    <tr>
        <td>&uarr; / &darr;</td>
        <td>Moves focus to the previous/next node.</td>
    </tr>
    <tr>
        <td>Home / End</td>
        <td>Moves focus to the first/last node.</td>
    </tr>
    <tr>
        <td>&rarr;</td>
        <td>Expands the node.</td>
    </tr>
    <tr>
        <td>&larr;</td>
        <td>Collapses the node.</td>
    </tr>
    <tr>
        <td>Asterisk Sign (*)</td>
        <td>Expands all nodes. Available only if <a href="/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#expandAllEnabled">expandAllEnabled</a> is set to <i>true</i>.</td>
    </tr>
    <tr>
        <td>Minus Sign (-)</td>
        <td>Collapses all nodes. Available only if <a href="/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#expandAllEnabled">expandAllEnabled</a> is set to <i>true</i>.</td>
    </tr>
    <tr>
        <td>Enter or Space</td>
        <td>Selects the node.</td>
    </tr>
    <tr>
        <td>Shift + &uarr; / Shift + &darr;</td>
        <td>Extends selection up/down by one node.<sup>1</sup></td>
    </tr>
    <tr>
        <td>Shift + Home</td>
        <td>Extends selection up to the first node.<sup>1</sup></td>
    </tr>
    <tr>
        <td>Shift + End</td>
        <td>Extends selection down to the last node.<sup>1</sup></td>
    </tr>
</table>

<div class="footnotes">
    <ol>
        <li>If <a href="/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode">showCheckBoxesMode</a> is set to <i>"none"</i>, this action has no effect.</li>
    </ol>
</div>

#include common-code-register-key-handler