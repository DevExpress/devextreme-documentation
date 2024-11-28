The TreeList component meets a variety of <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> compliance standards. Known exceptions:  

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.1.1 Non-text Content (Level A)</td>
        <td>Drag icons do not have <code>alt</code> and aria-label attributes.</td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.3.1 Info and Relationships (Level A)</td>
        <td>The filter menu button in filter row does not supply any accessibility information.</td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.3 Contrast (Minimum) (Level AA) <br> 1.4.11 Non-text Contrast (Level AA 2.1 and 2.2)</td>
        <td>TreeList does not support Windows High Contrast themes.</td>
    </tr>
    <tr>
        <td>11.5.2.12 Execution of available actions</td>
        <td>2.1.1 Keyboard (Level A)</td>
        <td>Keyboard navigation is not supported for ColumnChooser items in 'drag' mode.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.5.7 Dragging Movements (Level AA 2.2 only)</td>
        <td>
            <ul>
                <li>ColumnChooser in 'drag' mode.</li>
                <li>Node drag and drop.</li>
                <li>Column reordering.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.5.8 Target Size (Minimum) (Level AA 2.2 only)</td>
        <td>
            <ul>
                <li>Selection checkboxes and ‘Select all’ checkbox.</li>
                <li>Command buttons and icons.</li>
            </ul>    
        </td>
    </tr>
        <tr>
        <td>11.5.2.15 Change notification </td>
        <td>4.1.3 Status Messages (Level AA 2.1 and 2.2)</td>
        <td>TreeList summaries when <a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/summary/#recalculateWhileEditing">recalculateWhileEditing</a> is enabled. </td>
    </tr>
</table>