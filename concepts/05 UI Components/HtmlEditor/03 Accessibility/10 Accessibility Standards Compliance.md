The HtmlEditor component complies to all <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> standards criteria except the following:

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>-</td>
        <td>2.1.1 Keyboard (Level A) <br> 11.5.2.12 Execution of available actions</td>
        <td><ul>
            <li>Users cannot resize images, Popup, and Resizable controls within HtmlEditor.</li>
            <li>The keyboard shortcut to focus out of the component does not exist.</li>
        </ul></td>
    </tr>
    <tr>
        <td>-</td>
        <td>4.1.2 Name, Role, Value</td>
        <td><ul>
            <li>NVDA does not pronounce an active item in the Mentions mode.</li>
            <li>Disabled items can not be focused.</li>
            <li>NVDA does not pronounce an active state of toolbar buttons.</li>
        </ul></td>
    </tr>
    <tr>
        <td>-</td>
        <td>504.2.2 PDF Export</td>
        <td>
        If you export content from an HtmlEditor to PDF, the following issues occur in the resulting document: 
        <ul>
                <li>You cannot set header lines in exported tables.</li>
                <li>Pictures are exported without "alt" attributes.</li>
                <li>Pages do not have language settings.</li>
            </ul>    
        </td>
    </tr>
</table>