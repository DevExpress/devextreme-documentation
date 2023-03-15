---
id: GridBase.Options.scrolling.useNative
type: Boolean | Enums.Mode
default: 'auto'
---
---
##### shortDescription
Specifies whether the {WidgetName} should use native or simulated scrolling.

---
This property can have one of the following values:

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
        <td><b>true</b></td>
        <td>Native scrolling on all platforms, without exceptions.</td>
    </tr>
    <tr>
        <td><b>false</b></td>
        <td>Simulated scrolling on all platforms.</td>
    </tr>
</table>