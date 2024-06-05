A user can use the following keys to interact with the DataGrid component: 

<table class="dx-table full-width">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>&larr; &rarr; &uarr; &darr;</td>
        <td>
        <ul>
            <li>Navigates through cells if no cell is in an editing state.</li>
            <li>In the editing state, moves the cursor inside a cell or increases/decreases cell value (depending on the editor).</li>
        </ul>
        </td>
    </tr>
    <tr>
        <td>Shift + Mouse Wheel</td>
        <td>Scrolls content left/right if horizontal scrolling is active.</td>
    </tr>
    <tr>
        <td>Enter</td>
        <td>
        <ul>
            <li>Switches a cell to the editing state.<sup>1</sup></li>
            <li>Moves focus to the next cell.<sup>2</sup></li>
            <li>Saves changes made in a cell or row, and switches that cell/row back to its normal state.</li>
            <li>Executes an action on a focused element.</li>
        </ul>
        </td>        
    </tr>
    <tr>
        <td>F2</td>
        <td>Switches a cell to the editing state.<sup>3</sup></td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>Cancels changes made in a cell or row, and switches that cell/row back to its normal state.</td>
    </tr>
    <tr>
        <td>Alt + &#8595;</td>
        <td>Opens a drop-down editor (a select box<sup>4</sup>, a calendar<sup>5</sup>, etc.) in the editing state.</td>
    </tr>
    <tr>
        <td>Space</td>
        <td><ul>
            <li>Selects the focused row and clears the selection of previously selected rows.<sup>3</sup></li>
            <li>Changes sorting order if a column header is focused.</li>
        </ul></td>        
    </tr>
    <tr>
        <td>Ctrl + &uarr; &darr;</td>
        <td>Navigates between a column header, filter row, data area, filter panel, and pager.</td>
    </tr>
    <tr>
        <td>Ctrl + Space or Ctrl + Click</td>
        <td>Selects or clears the selection of the focused row.<br />
            Previously selected rows remain selected.<sup>7</sup>
        </td>        
    </tr>
    <tr>
        <td>Shift + Space or Shift + Click</td>
        <td>Selects or clears the selection of a range of rows between the last selected/deselected and the focused rows.<sup>7,8</sup></td>
    </tr>
    <tr>
        <td>Ctrl + A</td>
        <td>Selects all rows.<sup>6,9</sup></td>
    </tr>
    <tr>
        <td>Ctrl + F</td>
        <td>Focuses the search panel.<sup>10</sup>
    </tr>
    <tr>
        <td>PageUp / PageDown</td>
        <td>Navigates to the previous/next page. If <b>scrolling</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#mode">mode</a> is <i>"virtual"</i>, DataGrid scrolls to the value of DataGrid's row viewport height.
    </tr>
    <tr>
        <td>Tab / Shift + Tab</td>
        <td>Moves the focus one element forward/back.<br /> Focuses the first/last element in the next/previous row if there are no more elements in the current row.</td>
    </tr>
    <tr>
        <td>
        Shift + Click / Ctrl + Click<br/>
        on a column header
        </td>
        <td>Applies/clears column sorting settings.<sup>11</sup></td>
    </tr>
</table>

<div class="footnotes">
    <ol>
        <li>If the <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/keyboardNavigation/#enterKeyAction">enterKeyAction</a> is <i>"startEdit"</i>.</li>
        <li>If the <b>edititng</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode">mode</a> is <i>"cell"</i> or <i>"batch"</i> and the <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/keyboardNavigation/#enterKeyAction">enterKeyAction</a> is <i>"moveFocus"</i>.</li>
        <li>The <b>editing</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode">mode</a> should be <i>"cell"</i> or <i>"batch"</i>.</li>
        <li>A select box appears in a cell of a <a href="/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Lookup_Columns/">lookup column</a>.</li>
        <li>A calendar appears in a data cell when a column contains <i>"date"</i> <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType">type</a> data.</li>
        <li>The <b>selection</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode">mode</a> should be different from <i>"none"</i>.</li>
        <li>The <b>selection</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode">mode</a> should be <i>"multiple"</i>.</li>
        <li>If the <b>scrolling</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#mode">mode</a> is <i>"virtual"</i>, the rows should be visible simultaneously. If the mode is <i>"standard"</i>, the rows should be on one page.</li>
        <li><b>selection</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#allowSelectAll">allowSelectAll</a> should be <i>true</i>.</li>
        <li>The <a href="/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#Search_Panel">search panel</a> should be visible.</li>
        <li>The <b>sorting</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sorting/#mode">mode</a> should be <i>"multiple"</i>.</li>
    </ol>
</div>

You can override these shortcuts or create your own. Refer to the following help topic for more information: [Custom Keyboard Navigation](/concepts/05%20UI%20Components/DataGrid/70%20Custom%20Keyboard%20Navigation/00%20Custom%20Keyboard%20Navigation.md '/Documentation/Guide/UI_Components/DataGrid/Custom_Keyboard_Navigation/').
