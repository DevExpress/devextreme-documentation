The TextBox component meets a variety of <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> compliance standards. Known exceptions:  

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.3 Contrast (Minimum) (Level AA) <br> 1.4.11 Non-text Contrast (Level AA 2.1 and 2.2)</td>
        <td>TextBox does not support Windows High Contrast themes.</td>
    </tr>
    <tr>
        <td>-</td>
        <td>2.1.1 Keyboard</td>
        <td>The <a href="/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#showClearButton">Clear button</a> cannot be focused.</td>
    </tr>
</table>