CardView offers different keyboard controls depending on the focused component area and the action users want to perform.

### Toolbar

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab<br/>Shift + Tab</td>
        <td>Moves focus between toolbar controls and other CardView areas.</td>
    </tr>
    <tr>
        <td>Enter<br/>Space</td>
        <td>Triggers focused toolbar controls.</td>
    </tr>
</table>

### Header Panel

##### Navigation

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab<br/>Shift + Tab</td>
        <td>Moves focus between the header panel and other CardView areas.</td>
    </tr>
    <tr>
        <td>Left Arrow Right Arrow</td>
        <td>Moves focus between header panel items.</td>
    </tr>
    <tr>
        <td>Shift + Right Arrow<br/>Shift + Left Arrow</td>
        <td>Reorders the focused header item if <a href="/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#allowColumnReordering">allowColumnReordering</a> is "true".</td>
    </tr>
</table>

##### Sorting and Filtering

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Enter</td>
        <td>Enables/cycles between focused header sorting options (ascending/descending).</td>
    </tr>
    <tr>
        <td>Shift + Enter<br/>Shift + Click</td>
        <td>Enables/cycles between focused header sorting without clearing previous sorting options if <b>sorting</b>.<a href="/Documentation/ApiReference/UI_Components/dxCardView/Configuration/sorting/#mode">mode</a> is "multiple".</td>
    </tr>
    <tr>
        <td>Ctrl + Enter<br/>Ctrl + Click</td>
        <td>Disables focused header sorting. Does not clear previous sorting options if <b>sorting</b>.<b>mode</b> is "multiple".</td>
    </tr>
    <tr>
        <td>Alt + Down Arrow</td>
        <td>Triggers the focused header filter popup.</td>
    </tr>
</table>

### Content View

##### Navigation

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Arrow Keys</td>
        <td>Moves focus between cards.</td>
    </tr>
    <tr>
        <td>PageUp<br/>PageDown</td>
        <td>Moves focus to the previous/next page if <b>paging</b>.<a href="/Documentation/ApiReference/UI_Components/dxCardView/Configuration/paging/#enabled">enabled</a> is "true".</td>
    </tr>
    <tr>
        <td>Home<br/>End</td>
        <td>Moves focus to the first/last card of the focused row.</td>
    </tr>
    <tr>
        <td>Ctrl + Home<br/>Ctrl + End</td>
        <td>Moves focus to the first card of the first row/last card of the last row.</td>
    </tr>
</table>

##### Selection and Searching

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Space</td>
        <td>Toggles selection of the focused card and clears previous selection if <b>selection</b>.<a href="/Documentation/ApiReference/UI_Components/dxCardView/Configuration/selection/#mode">mode</a> is "single".</td>
    </tr>
    <tr>
        <td>Ctrl + Click</td>
        <td>Toggles selection of the focused card without clearing previous selection if <b>selection</b>.<b>mode</b> is "multiple" and <b>selection</b>.<a href="/Documentation/ApiReference/UI_Components/dxCardView/Configuration/selection/#showCheckBoxesMode">showCheckBoxesMode</a> is "onClick".</td>
    </tr>
    <tr>
        <td>Shift + Space<br/>Shift + Click</td>
        <td>Toggles selection of all cards between the last selected card and the focused card if <b>selection</b>.<b>mode</b> is "multiple".</td>
    </tr>
    <tr>
        <td>Ctrl + A</td>
        <td>Selects all cards if <b>selection</b>.<b>mode</b> is "multiple".</td>
    </tr>
    <tr>
        <td>Ctrl + F</td>
        <td>Moves focus to the search panel if <b>searchPanel</b>.<a href="/Documentation/ApiReference/UI_Components/dxCardView/Configuration/searchPanel/#visible">visible</a> is enabled.</td>
    </tr>
</table>

##### Card Interaction

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Shift + Enter</td>
        <td>Edits the focused card.</td>
    </tr>
    <tr>
        <td>Delete</td>
        <td>Deletes the focused card.</td>
    </tr>
    <tr>
        <td>Enter</td>
        <td>When focused on a card, moves focus to the first focusable card item.<br/>When focused on a card item, triggers the item.</td>
    </tr>
    <tr>
        <td>Tab<br/>Shift + Tab</td>
        <td>Moves focus between card items.</td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>When focused on a card item, moves focus to the parent card.</td>
    </tr>
</table>

### Filter Panel

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab<br/>Shift + Tab</td>
        <td>Moves focus between filter panel items and other CardView areas.</td>
    </tr>
    <tr>
        <td>Enter<br/>Space</td>
        <td>Triggers focused filter panel item.</td>
    </tr>
</table>

### Pager

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab<br/>Shift + Tab</td>
        <td>Moves focus between pager items and other CardView areas.</td>
    </tr>
    <tr>
        <td>Enter<br/>Space</td>
        <td>Triggers focused pager item.</td>
    </tr>
    <tr>
        <td>Up Arrow / Down Arrow</td>
        <td>When focused on TBA, switches the component to the next/previous page.</td>
    </tr>
    <tr>
        <td>Alt + Down Arrow</td>
        <td>When focused on TBA, opens the dropdown.</td>
    </tr>
</table>

### Popups

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab<br/>Shift + Tab</td>
        <td>Moves focus between popup items.</td>
    </tr>
    <tr>
        <td>Enter<br/>Space</td>
        <td>Triggers focused controls.</td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>Closes the active popup.</td>
    </tr>
</table>

#include common-code-register-key-handler
