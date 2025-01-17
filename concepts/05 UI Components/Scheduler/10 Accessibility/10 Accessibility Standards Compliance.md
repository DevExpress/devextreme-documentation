The Scheduler component meets a variety of <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> compliance standards. Known exceptions:

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.3.1 Info and Relationships (Level A) </td>
        <td>
            Scheduler does not include accessibility information about:  
            <ul>
                <li>The number of appointments in a single day. </li>
                <li>Current time. </li>
                <li>Appointment resources.  </li>
                <li>Recurrence section in the editing popup.  </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.1 Use of Color (Level A) </td>
        <td>Scheduler’s appointment resource does not have alternative description. </td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>1.4.3 Contrast (Minimum) (Level AA) <br> 1.4.11 Non-text Contrast (Level AA 2.1 and 2.2)</td>
        <td>Scheduler does not support Windows High Contrast themes.</td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>2.1.1 Keyboard (Level A) <br> 11.5.2.13 Tracking of focus and selection attributes  </td>
        <td>
            <ul>
                <li>Virtual scrolling does not support keyboard navigation. </li>
                <li>Users cannot add an appointment via keyboard navigation.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>2.1.2 No Keyboard Trap (Level A)</td>
        <td>Scheduler has keyboard trap in appointments navigation if virtual scrolling is enabled. </td>
    </tr>
</table>
