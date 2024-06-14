The HtmlEditor component meets a variety of <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> compliance standards. Known exceptions:  

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.3.1 Info and Relationships (Level A)</td>
        <td>HtmlEditor does not support Windows High Contrast themes.</td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>2.1.1 Keyboard (Level A) <br> 11.5.2.12 Execution of available actions</td>
        <td><ul>
            <li>Users cannot resize images, Popup, and Resizable controls within HtmlEditor.</li>
            <li>The keyboard shortcut to focus out of the component does not exist.</li>
        </ul></td>
    </tr>
    <tr>
        <td>-</td>
        <td>4.1.2 Name, Role, Value</td>
        <td>NVDA does not pronounce the state of the button in the toolbar (active or not).</td>
    </tr>
    <tr>
        <td>504.2.2 PDF Export</td>
        <td>-</td>
        <td>
        If you export content from an HtmlEditor to PDF, the following issues occur in the resulting document: 
        <ul>
                <li>You cannot set header lines in exported tables.</li>
                <li>Pictures are exported without "alt" attributes.</li>
                <li>Pages and separate page parts do not have language settings.</li>
            </ul>    
        </td>
    </tr>
</table>