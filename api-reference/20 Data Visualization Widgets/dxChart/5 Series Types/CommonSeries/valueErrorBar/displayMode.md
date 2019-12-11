---
default: 'auto'
acceptValues: 'auto' | 'low' | 'high' | 'none'
type: String
---
---
##### shortDescription
Specifies whether error bars must be displayed in full or partially.

---
This option accepts the following values.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>displayMode</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>"auto"</td>
                <td>Displays error bars in full.</td>
            </tr>
            <tr>
                <td>"low"</td>
                <td>Displays only the lower part of each error bar.</td>
            </tr>
            <tr>
                <td>"high"</td>
                <td>Displays only the higher part of each error bar.</td>
            </tr>
            <tr>
                <td>"none"</td>
                <td>Hides error bars.</td>
            </tr>
        </tbody>
    </table>
</div>

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ValueErrorBarDisplayMode` enum. This enum accepts the following values: `Auto`, `Low`, `High` and `None`.