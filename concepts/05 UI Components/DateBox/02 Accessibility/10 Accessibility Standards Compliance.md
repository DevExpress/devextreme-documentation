The DateBox component complies to all <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> standards criteria except the following:

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>-</td>
        <td>2.1.2 No Keyboard Trap (Level A)</td>
        <td>If you set <code><a href="/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#applyValueMode">applyValueMode</a> = 'useButtons'</code>, the focus loop includes not only the elements inside the drop-down window, but also the input.</td>
    </tr>
    <tr>
        <td>11.5.2.13 Tracking of focus and selection attributes</td>
        <td>2.4.7 Focus Visible (Level AA) </td>
        <td>DateBox with the 'rollers' <a href="/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#pickerType">pickerType</a> does not have a focus indicator for rollers.</td>
    </tr>
    <tr>
        <td>11.5.2.9 Parent-child relationships</td>
        <td>502.3.7 Hierarchical Relationships</td>
        <td>The roller picker in DateBox is not accessible.</td>
    </tr>
</table>