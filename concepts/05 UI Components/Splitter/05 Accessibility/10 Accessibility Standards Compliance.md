The Splitter component complies to all <a href="https://www.access-board.gov/ict/" target="_blank">Section 508</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.x</a> standards criteria except the following:

<table class="dx-table">
    <tr>
        <th>Section 508 criteria</th>
        <th>WCAG 2.x criteria</th>
        <th>Exception description</th>
    </tr>
    <tr>
        <td>501 (Web)(Software) <br> 504.2 (Authoring Tool) <br> 602.3 (Support Docs)</td>
        <td>2.1.1 Keyboard (Level A)</td>
        <td>If a pane does not include focusable elements, and the pane content is larger than its container, the pane content will not be accessible.<br>To resolve the issue, assign <code>tabindex="0"</code> either to the non-focusable element or to the element with <code>dx-item-content dx-splitter-item-content</code> class.</td>
    </tr>
</table>