TreeList offers different keyboard controls depending on what action users wish to perform.

### Navigation

[note] When **scrolling**.[columnRenderingMode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/scrolling/#columnRenderingMode) is *"virtual"*, the [filter row](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/) does not support keyboard navigation.

<table class="dx-table full-width">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>&larr; &rarr; &uarr; &darr;</td>
        <td>Moves focus between cells.</td>
    </tr>
    <tr>
        <td>Tab<br/>Shift + Tab</td>
        <td>Moves focus forward/backward between all TreeList items.</td>
    </tr>
    <tr>
        <td>Ctrl + &rarr;<br/>Ctrl + &larr;</td>
        <td>Expands/collapses the focused row.</td>
    </tr>
    <tr>
        <td>Ctrl + &uarr;<br/>Ctrl + &darr;</td>
        <td>Moves focus between the component's areas, such as the data area, column headers area, group panel, and others.</td>
    </tr>
    <tr>
        <td>Shift + Mouse Wheel</td>
        <td>Scrolls content left/right if horizontal scrolling is active.</td>
    </tr>
    <tr>
        <td>Enter</td>
        <td>When focused on a cell, moves focus to the next cell if <b>keyboardNavigation</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/keyboardNavigation/#enterKeyAction">enterKeyAction</a> is "moveFocus". The next cell is determined by <b>keyboardNavigation</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/keyboardNavigation/#enterKeyDirection">enterKeyDirection</a>.</td>
    </tr>
    <tr>
        <td>Home<br/>End</td>
        <td>Moves focus to the first/last cell of the current row.</td>
    </tr>
    <tr>
        <td>Ctrl + Home<br/>Ctrl + End</td>
        <td>Moves focus to the first cell of the first row/last cell of the last row.</td>
    </tr>
    <tr>
        <td>PageUp<br/>PageDown</td>
        <td>Navigates to the component's previous/next page.</td>
    </tr>
    <tr>
        <td>Ctrl + F</td>
        <td>When focused on a cell, moves focus to the search panel if <b>searchPanel</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/#visible">visible</a> is "true".</td>
    </tr>
</table>

### Column Sorting and Reordering

<table class="dx-table full-width">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Enter<br/>Space</td>
        <td>When focused on a column header, enables/cycles between sorting options (ascending/descending).</td>
    </tr>
    <tr>
        <td>Shift + Enter<br/>Shift + Space<br/>Shift + Click</td>
        <td>Enables/cycles focused column sorting without clearing previous sorting options if <b>sorting</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/sorting/#mode">mode</a> is "multiple".</td>
    </tr>
    <tr>
        <td>Ctrl + Enter<br/>Ctrl + Space<br/>Ctrl + Click</td>
        <td>Disables focused column sorting. Does not clear previous sorting options if <b>sorting</b>.<b>mode</b> is "multiple".</td>
    </tr>
    <tr>
        <td>Ctrl + &rarr;<br/>Ctrl + &larr;</td>
        <td>Moves the focused column header right/left if <b>columns[]</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowReordering">allowReordering</a> is enabled.</td>
    </tr>
</table>

### Editing

<table class="dx-table full-width">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Enter</td>
        <td>
            When focused on a cell in normal mode, switches the component to edit mode if <b>keyboardNavigation</b>.<b>enterKeyAction</b> is "startEdit".<br/>
            When focused on a cell in edit mode, saves changes and switches the component to normal mode.<br/>
            When focused on a button in a command column, triggers the focused command button.
        </td>
    </tr>
    <tr>
        <td>F2</td>
        <td>When focused on a cell in normal mode, switches the component to edit mode unless the focused cell's <b>editing</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode">mode</a> is "popup".</td>
    </tr>
    <tr>
        <td>Alt + &darr;</td>
        <td>Opens drop-down editors such as select boxes in edit mode.</td>
    </tr>
    <tr>
        <td>&larr; &rarr; &uarr; &darr;</td>
        <td>When focused on a cell in edit mode, moves the cursor in the focused cell or increases/decreases its value.</td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>When in edit mode, cancels unsaved changes and switches to normal mode.</td>
    </tr>
</table>

### Selection

<table class="dx-table full-width">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Space</td>
        <td>Selects the focused cell's row if <b>selection</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#mode">mode</a> is "multiple" or "single".</td>
    </tr>
    <tr>
        <td>Shift + Space<br/>Shift + Click</td>
        <td>Selects all items between the last selected row and the focused cell's row if <b>selection</b>.<b>mode</b> is "multiple".</td>
    </tr>
    <tr>
        <td>Ctrl + A</td>
        <td>Selects all rows if <b>selection</b>.<b>mode</b> is "multiple" and <b>selection</b>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#allowSelectAll">allowSelectAll<a> is "true".</td>
    </tr>
</table>

You can override these shortcuts or create your own shortcuts using the [onKeyDown](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onKeyDown.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onKeyDown') event handler.

[note] On macOS, Cmd replaces the Ctrl key.
