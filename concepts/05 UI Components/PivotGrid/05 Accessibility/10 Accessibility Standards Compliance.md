The PivotGrid component meets a variety of <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> compliance standards. Known exceptions:  

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.3 Contrast (Minimum) (Level AA) <br> 1.4.11 Non-text Contrast (Level AA 2.1 and 2.2)</td>
        <td>PivotGrid does not support Windows High Contrast themes.</td>
    </tr>
    <tr>
        <td>11.5.2.12 Execution of available actions</td>
        <td>2.1.1 Keyboard (Level A)</td>
        <td>
            <ul>
                <li>Users cannot move fields between areas or reorder fields within an area using the keyboard (in the field chooser and the field panel).</li>
                <li>Users cannot navigate between data cells using arrow keys.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.4.11 Focus Not Obscured (Minimum) (Level AA 2.2 only)</td>
        <td>The field chooser and HeaderFilter in PivotGrid do not meet this criterion.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.5.7 Dragging Movements (Level AA 2.2 only)</td>
        <td>Field chooser and field panel (when <a href="/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#allowFieldDragging">fieldPanel.allowFieldDragging</a> is enabled).</td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.5.8 Target Size (Minimum) (Level AA 2.2 only)</td>
        <td>
            <ul>
                <li>Expand/collapse icons in header cells.</li>
                <li>Sort and filter icons in area fields.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>11.5.2.15 Change notification</td>
        <td>4.1.3 Status Messages (Level AA 2.1 and 2.2)</td>
        <td>PivotGrid does not provide accessibility information about status changes.</td>
    </tr>
</table>

The component also complies with the [European Accessibility Act (EAA)](https://eur-lex.europa.eu/eli/dir/2019/882/oj) and [Americans with Disabilities Act (ADA)](https://www.ada.gov/law-and-regs/ada/) directives.