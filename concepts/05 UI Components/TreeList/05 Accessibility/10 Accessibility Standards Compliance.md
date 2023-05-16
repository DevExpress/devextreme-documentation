The TreeList component complies to all <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> standards criteria except the following:

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>-</td>
        <td>1.1.1 Non-text Content (Level A)</td>
        <td>
            <ul>
                <li>HeaderFilter icons do not have <code>alt</code> attributes.</li>
                <li>Filter icons in the filter row do not have aria-label attributes.</li>
                <li>Drag icons do not have <code>alt</code> and aria-label attributes.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>1.3.1 Info and Relationships (Level A)</td>
        <td>
            <ul>
                <li>Delete confirmation messages are not pronounced.</li>
                <li>The column fixing feature does not meet this criterion.</li>
                <li>Summaries are not pronounced.</li>
                <li>FilterRow may lose the <code>aria-describedby</code> attribute.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>1.3.2 Meaningful Sequence (Level A) <br> 2.4.3 Focus Order (Level A)</td>
        <td>The column fixing feature in TreeList does not meet this criterion.</td>
    </tr>
    <tr>
        <td>302.3 Without Perception of Color</td>
        <td>1.4.1 Use of Color (Level A)</td>
        <td>TreeList has only visual means of conveying information for the following elements:
            <ul>
                <li>Modified cells and deleted rows in batch edit mode.</li>
                <li>Current page size and index.</li>
                <li>Cells in invalid state.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>11.5.2.12 Execution of available actions</td>
        <td>2.1.1 Keyboard (Level A)</td>
        <td><ul>
                <li>Keyboard navigation does not work properly in <code>repaintChangesOnly</code> mode.</li>
                <li>The column fixing and column visibility customization features cause accessibility issues.</li>
                <li>Users cannot export data.</li>
                <li>The master-detail feature does not support keyboard navigation.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.1.2 No Keyboard Trap (Level A)</td>
        <td><ul>
            <li>Users must use the 'Shift+Tab' shortcut to move focus from the Column Chooser in TreeList.</li>
            <li>The column fixing feature in TreeList might cause a keyboard trap.</li>
        </ul></td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.1.4 Character Key Shortcuts (Level A 2.1 only)</td>
        <td>Adaptive rows cannot be expanded/collapsed using keyboard navigation.</td>
    </tr>
    <tr>
        <td>11.5.2.5 Object information</td>
        <td>3.3.1 Error Identification (Level A) <br> 3.3.3 Error Suggestion (Level AA) <br> 4.1.2 Name, Role, Value (Level A)</td>
        <td>The validation state and error message of TreeList are not pronounced when users focus the control or edit data.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>3.3.2 Labels or Instructions (Level A)</td>
        <td>
            <ul>
                <li>Cells in batch edit mode do not supply any instructions.</li>
                <li>The sorting and export buttons, HeaderFilter, and FilterRow do not supply any instructions.</li>
                <li>The ‘Select All’ checkbox does not supply instructions.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>502.3.3 Row, Column, and Headers</td>
        <td>-</td>
        <td>TreeList does not convey information about headers if the column fixing feature is enabled.</td>
    </tr>
    <tr>
        <td>502.3.7 Hierarchical Relationships</td>
        <td>-</td>
        <td>TreeList only conveys information about the nesting level (aria-level).</td>
    </tr>
    <tr>
        <td>502.3.14 Event Notification <br> 11.5.2.15 Change notification</td>
        <td>-</td>
        <td><ul>
                <li>TreeView in ColumnChooser and HeaderFilter applies redundant aria-expanded attributes to these elements.</li>
                <li>Validation frame, sort indexes, and the export button in the toolbar are not accessible.</li>
                <li>Delete confirmation messages are not pronounced.</li>
                <li>The column fixing feature does not meet this criterion.</li>
                <li>TreeList does not convey information about expandable/collapsible nodes.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>11.5.2.13 Tracking of focus and selection attributes</td>
        <td>-</td>
        <td><ul>
            <li>The column fixing feature in TreeList does not meet this criterion.</li>
            <li>Adaptive command column might not be accessible with the keyboard.</li>
        </ul></td>
    </tr>
</table>