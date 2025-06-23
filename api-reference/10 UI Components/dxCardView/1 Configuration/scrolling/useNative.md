---
id: dxCardView.Options.scrolling.useNative
type: Boolean | Enums.Mode
default: 'auto'
---
---
##### shortDescription
Specifies whether CardView should use native or simulated scrolling.

---
This property accepts one of the following values:

<table class="dx-table">
    <tr>
        <th>scrolling.useNative</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><i>"auto"</i></td>
        <td>Native scrolling on all platforms, except non-Mac desktops.</td>
    </tr>
    <tr>
        <td><code>true</code></td>
        <td>Native scrolling on all platforms, without exceptions.</td>
    </tr>
    <tr>
        <td><code>false</code></td>
        <td>Simulated scrolling on all platforms.</td>
    </tr>
</table>