The DataGrid component meets a variety of <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> compliance standards. Known exceptions:  

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.1.1 Non-text Content (Level A)</td>
        <td>
            <ul>
                <li>Drag icons do not have <code>alt</code> and <code>aria-label</code> attributes.</li>
                <li>AI Assistant: Message status icons and command-result indicators have no <code>alt</code>/<code>aria-label</code> attributes.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.3.1 Info and Relationships (Level A)</td>
        <td>The filter menu button in filter row does not supply any accessibility information.</td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.3 Contrast (Minimum) (Level AA) <br> 1.4.11 Non-text Contrast (Level AA 2.1 and 2.2)</td>
        <td>DataGrid does not support Windows High Contrast themes.</td>
    </tr>
    <tr>
        <td>11.5.2.12 Execution of available actions</td>
        <td>2.1.1 Keyboard (Level A)</td>
        <td>
            <ul>
                <li>ColumnChooser items in 'drag' mode do not support keyboard navigation.</li>
                <li>Users cannot resize columns using the keyboard (when <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnResizing">allowColumnResizing</a> is enabled).</li>
                <li>AI Assistant: The "Regenerate" button is not focusable and cannot be clicked using a keyboard.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>2.4.3 Focus Order (Level A)</td>
        <td>
            <ul>
                <li>AI Assistant: Focus is not returned to the toolbar button after the popup is closed.</li>
                <li>AI Assistant: Focus is not returned to the chat input after a request is completed.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.4.11 Focus Not Obscured (Minimum) (Level AA 2.2 only)</td>
        <td>ColumnChooser and HeaderFilter in DataGrid do not meet this criterion.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.5.7 Dragging Movements (Level AA 2.2 only)</td>
        <td>ColumnChooser in 'drag' mode.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.5.8 Target Size (Minimum) (Level AA 2.2 only)</td>
        <td>
            <ul>
                <li>Command buttons and icons.</li>
                <li>Column separators when <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnResizing">allowColumnResizing</a> is enabled.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>4.1.2 Name, Role, Value (Level A)</td>
        <td>AI Assistant: The "Regenerate" button does not expose a name or role to assistive technologies.</td>
    </tr>
    <tr>
        <td>11.5.2.15 Change notification </td>
        <td>4.1.3 Status Messages (Level AA 2.1 and 2.2)</td>
        <td>DataGrid summaries when <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#recalculateWhileEditing">recalculateWhileEditing</a> is enabled. </td>
    </tr>
    <tr>
        <td>504.2.2 PDF Export</td>
        <td>-</td>
        <td>If you export a DataGrid to PDF, the following issues occur in the resulting document: 
            <ul>
                <li>No document ‘title’ tag.</li>
                <li>Pictures are exported without ‘alt’ attributes.</li>
                <li>Pages do not have language settings. Languages of individual phrases also cannot be set at the grid export level.</li>
                <li>No tags for table structures.</li>
            </ul>
        </td>
    </tr>
</table>

The component also complies with the [European Accessibility Act (EAA)](https://eur-lex.europa.eu/eli/dir/2019/882/oj) and [Americans with Disabilities Act (ADA)](https://www.ada.gov/law-and-regs/ada/) directives.