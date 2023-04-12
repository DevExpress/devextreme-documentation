---
uid: viz/chart_components/base_chart:BaseChartTooltip.shared
---
---
##### shortDescription
Specifies whether the tooltip is shared across all series points with the same argument.

---
<!--
This property can have one of the following values:

&lt;table class="dx-table"&gt;
    &lt;tr&gt;
        &lt;th&gt;tooltip.shared&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;b&gt;false&lt;/b&gt;&lt;/td&gt;
        &lt;td&gt;The tooltip only displays information about a series point that is hovered over with the mouse pointer.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;b&gt;true&lt;/b&gt;&lt;/td&gt;
        &lt;td&gt;The tooltip displays information about all series points with the same argument as the point that is hovered over. If this point is included in a &lt;a href="{basewidgetpath}/Configuration/series/#stack"&gt;stack&lt;/a&gt;, the tooltip only displays information about points in this stack and points that do not belong to any stack (if there are any).&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleAxes/"
}

#####See Also#####
- [customizeTooltip](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/tooltip/customizeTooltip.md '{basewidgetpath}/Configuration/tooltip/#customizeTooltip')
-->