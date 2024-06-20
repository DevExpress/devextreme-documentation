The DropDownBox component meets a variety of <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> compliance standards. Known exceptions:  

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.3 Contrast (Minimum) (Level AA) <br> 1.4.11 Non-text Contrast (Level AA 2.1 and 2.2)</td>
        <td>DropDownBox does not support Windows High Contrast themes.</td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.3 Contrast (Minimum) (Level AA)</td>
        <td>The placeholder text color does not meet contrast criteria.</td>
    </tr>
    <tr>
        <td>11.5.2.5 Object information</td>
        <td>3.3.1 Error Identification (Level A) <br> 3.3.3 Error Suggestion (Level AA) <br> 4.1.2 Name, Role, Value (Level A) </td>
        <td>The validation state and error message of DropDownBox are not pronounced when the control’s validation state changes or users change the text input.</td>
    </tr>
</table>