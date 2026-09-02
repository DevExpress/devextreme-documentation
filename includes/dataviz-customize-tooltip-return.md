Assign a function to this property that returns an object with the following fields:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>text</code></td>
        <td>The tooltip's text. The component evaluates HTML text tags such as <code>&lt;p&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, and <code>&lt;br&gt;</code> by default. To encode this field's value, enable <a href="{basewidgetpath}/Configuration/#encodeHtml">encodeHtml</a>.</td>
    </tr>
    <tr>
        <td><code>html</code></td>
        <td>The HTML markup displayed in a tooltip.<br />
        The {WidgetName} evaluates the markup. Make sure that it does not contain malicious code. Refer to the following help topic for more information: <a href="/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/customizeTooltip">Potentially Vulnerable API - customizeTooltip</a>.<br />
        To use external resources (for example, images) in the markup, specify the size of the area they occupy beforehand.</td>
    </tr>
    <tr>
        <td><code>color</code></td>
        <td>The tooltip's color.</td>
    </tr>
    <tr>
        <td><code>fontColor</code></td>
        <td>The color of the tooltip's text.</td>
    </tr>
    <tr>
        <td><code>borderColor</code></td>
        <td>The color of the tooltip's border.</td>
    </tr>
</table>