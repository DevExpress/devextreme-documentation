---
uid: viz/sparklines/base_sparkline:BaseSparklineTooltip.contentTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for tooltips.

##### param(pointsInfo): Object
Information on the points that belong to the series that is pressed or hovered over.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
<!--

You can access the following **pointsInfo** fields:

&lt;table class="dx-table full-width"&gt;
    &lt;tr&gt;
        &lt;th&gt;Field name&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalFirstValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The first value of a sparkline specified in the &lt;a href="{basewidgetpath}/Configuration/#dataSource"&gt;dataSource&lt;/a&gt;.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;firstValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The first value of a sparkline with formatting applied if the &lt;a href="{basewidgetpath}/Configuration/tooltip/#format"&gt;format&lt;/a&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalLastValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The last value of a sparkline as it is specified in the &lt;b&gt;dataSource&lt;/b&gt;.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;lastValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The last value of a sparkline with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalMinValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The minimum value of a sparkline as it is specified in the &lt;b&gt;dataSource&lt;/b&gt;.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;minValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The minimum value of a sparkline with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalMaxValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The maximum value of a sparkline as it is specified in the &lt;b&gt;dataSource&lt;/b&gt;.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;maxValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The maximum value of a sparkline with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

The following fields are available for a sparkline of the *"winloss"* [type](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/type.md '{basewidgetpath}/Configuration/#type') only.

&lt;table class="dx-table full-width"&gt;
    &lt;tr&gt;
        &lt;th&gt;Field name&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalThresholdValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The threshold value of a winloss sparkline as it is assigned to the &lt;a href="{basewidgetpath}/Configuration/#winlossThreshold"&gt;winlossThreshold&lt;/a&gt; property.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;thresholdValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The threshold value of a winloss sparkline with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;    
&lt;/table&gt;

-->