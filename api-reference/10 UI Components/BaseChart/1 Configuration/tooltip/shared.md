---
id: BaseChart.Options.tooltip.shared
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the tooltip is shared across all series points with the same argument.

---
This property can have one of the following values:

<table class="dx-table">
    <tr>
        <th>tooltip.shared</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><b>false</b></td>
        <td>The tooltip displays information only about a series point being hovered over with the mouse pointer.</td>
    </tr>
    <tr>
        <td><b>true</b></td>
        <td>The tooltip displays information about all series points with the same argument as the point being hovered over. If this point is included in a <a href="{basewidgetpath}/Configuration/series/#stack">stack</a>, the tooltip displays information only about points in this stack and points that do not belong to any stack (if there are any).</td>
    </tr>
</table>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleAxes/"
}

#####See Also#####
- [customizeTooltip](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/tooltip/customizeTooltip.md '{basewidgetpath}/Configuration/tooltip/#customizeTooltip')