The DataGrid component complies to all <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> standards criteria except the following:

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>-</td>
        <td>1.1.1 Non-text Content (Level A)</td>
        <td>Drag icons do not have <code>alt</code> and aria-label attributes.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>1.3.1 Info and Relationships (Level A)</td>
        <td>
            <ul>
                <li>Delete confirmation messages are not pronounced.</li>
                <li>The column fixing feature does not meet this criterion.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>1.3.2 Meaningful Sequence (Level A) <br> 2.4.3 Focus Order (Level A)</td>
        <td>The column fixing feature in DataGrid does not meet this criterion.</td>
    </tr>
    <tr>
        <td>302.3 Without Perception of Color</td>
        <td>1.4.1 Use of Color (Level A)</td>
        <td>DataGrid has only visual means of conveying information for the following elements:
            <ul>
                <li>Modified cells and deleted rows in batch edit mode.</li>
                <li>Cells in invalid state.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>11.5.2.12 Execution of available actions</td>
        <td>2.1.1 Keyboard (Level A)</td>
        <td><ul>
                <li>Keyboard navigation is not supported for ColumnChooser items in 'drag' mode.</li>
                <li>The master-detail feature does not support keyboard navigation.</li>
                <li>Group footer summary and total summary are not supported.</li>
                <li>Adaptive rows cannot be expanded/collapsed using keyboard navigation.</li>
            </ul>    
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.1.2 No Keyboard Trap (Level A)</td>
        <td>A group footer summary causes a keyboard trap.</td>
    </tr>
    <tr>
        <td>11.5.2.5 Object information</td>
        <td>3.3.1 Error Identification (Level A) <br> 3.3.3 Error Suggestion (Level AA) <br> 4.1.2 Name, Role, Value (Level A)</td>
        <td>The validation state and error message of DataGrid are not pronounced when users focus the control or edit data.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>3.3.2 Labels or Instructions (Level A)</td>
        <td>Cells in batch edit mode do not supply any instructions.</td>
    </tr>
    <tr>
        <td>502.3.3 Row, Column, and Headers</td>
        <td>-</td>
        <td>DataGrid does not convey information about headers if the column fixing feature is enabled.</td>
    </tr>
    <tr>
        <td>502.3.14 Event Notification <br> 11.5.2.15 Change notification</td>
        <td>-</td>
        <td><ul>
                <li>Validation frame and sort indexes in the toolbar are not accessible.</li>
                <li>Delete confirmation messages are not pronounced.</li>
            </ul>    
        </td>
    </tr>
</table>