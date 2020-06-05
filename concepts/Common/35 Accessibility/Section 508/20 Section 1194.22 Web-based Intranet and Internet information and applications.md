<table class="dx-table">
    <tr>
        <th style="width: 30%;">Criteria</th>
        <th style="width: 15%;">Level of Support &amp; Supporting Features</th>
        <th>Remarks and Explanations</th>
    </tr>
    <tr>
        <td>(a) A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).</td>
        <td>Supports</td>
        <td>All images DevExtreme widgets use are provided with the “alt” attribute. Developers using images in templates have to provide the “alt” or “longdesc” attribute in the template definition.</td>
    </tr>
    <tr>
        <td>(b) Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.</td>
        <td>Not Applicable</td>
        <td>DevExtreme widgets do not provide any multimedia presentation.</td>
    </tr>
    <tr>
        <td>(c) Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.</td>
        <td>Supports</td>
        <td>DevExtreme widgets convey color information by other means too.</td>
    </tr>
    <tr>
        <td>(d) Documents shall be organized so they are readable without requiring an associated style sheet.</td>
        <td>Supports with exceptions</td>
        <td>DevExtreme widgets are readable without an associated style sheet, but some functionality may be not available or only partially available.</td>
    </tr>
    <tr>
        <td>(e) Redundant text links shall be provided for each active region of a server-side image map.</td>
        <td>Not Applicable</td>
        <td>DevExtreme widgets do not use server-side image maps.</td>
    </tr>
    <tr>
        <td>(f) Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape.</td>
        <td>Not Applicable</td>
        <td>DevExtreme widgets do not use server-side image maps.</td>
    </tr>
    <tr>
        <td>(g) Row and column headers shall be identified for data tables.</td>
        <td>Supported with Exceptions</td>
        <td>DevExtreme widgets, except the PivotGrid, identify row and column headers for data tables.</td>
    </tr>
    <tr>
        <td>(h) Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.</td>
        <td>Not Supported</td>
        <td>When using banded columns and rows, the DataGrid, PivotGrid, and TreeList do not provide the "id" and the "headers" attributes to associate data cells and column headers with the respective band headers.</td>
    </tr>
    <tr>
        <td>(i) Frames shall be titled with text that facilitates frame identification and navigation.</td>
        <td>Not Applicable</td>
        <td>DevExtreme widgets do not create frames.</td>
    </tr>
    <tr>
        <td>(j) Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.</td>
        <td>Supports</td>
        <td>DevExtreme widgets do not cause the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz. </td>
    </tr>
    <tr>
        <td>(k) A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way. The content of the text-only page shall be updated whenever the primary page changes.</td>
        <td>Not Applicable</td>
        <td>Developers must provide text-only content for pages using DevExtreme widgets.</td>
    </tr>
    <tr>
        <td>(l) When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by Assistive Technology.</td>
        <td>Supports</td>
        <td>DevExtreme widgets are client-side and require JavaScript enabled. They support keyboard navigation and screen reader through WAI-ARIA attributes.</td>
    </tr>
    <tr>
        <td>(m) When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with 1194.21(a) through (l).</td>
        <td>Not Applicable</td>
        <td>DevExtreme widgets do not require applets, plug-ins or other applications to be present on the client system.</td>
    </tr>
    <tr>
        <td>(n) When electronic forms are designed to be completed on-line, the form shall allow people using Assistive Technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.</td>
        <td>Supports with Exceptions</td>
        <td>DevExtreme widgets provide functionality that conforms to this requirement with minor exceptions that will be eliminated in a future update.</td>
    </tr>
    <tr>
        <td>(o) A method shall be provided that permits users to skip repetitive navigation links.</td>
        <td>Supports</td>
        <td>Developers should provide the optional “Skip navigation links” link that allows users to skip any repetitive navigation elements on the page.</td>
    </tr>
    <tr>
        <td>(p) When a timed response is required, the user shall be alerted and given sufficient time to indicate more time is required.</td>
        <td>Supports</td>
        <td>When updating a page using an AJAX-based callback technology, developers must avoid changing a page context without user notifications, unless initiated by the user.</td>
    </tr>
</table>
