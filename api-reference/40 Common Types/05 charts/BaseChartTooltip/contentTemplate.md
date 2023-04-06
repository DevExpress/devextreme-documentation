---
uid: viz\chart_components\base_chart:BaseChartTooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(pointInfo): Object
<!-- Description goes here -->

##### param(element): DxElement
<!-- Description goes here -->

##### return: String | Element | jQuery
<!-- Description goes here -->

---
<!--
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/TooltipHTMLSupport/"
}

The **pointInfo** object has different fields for different [series types](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/'). The following fields are available for all series types:

&lt;table class="dx-table full-width"&gt;
    &lt;tr&gt;
        &lt;th&gt;Field name&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The value of the represented point as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;value&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The value of the represented point. Differs from the &lt;b&gt;originalValue&lt;/b&gt; when the axis &lt;a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType"&gt;value type&lt;/a&gt; is specified explicitly. In this instance, the &lt;b&gt;value&lt;/b&gt; field contains a value of the specified type.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;valueText&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalArgument&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The argument value of the represented point as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;argument&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The argument value of the represented point. Differs from the &lt;b&gt;originalArgument&lt;/b&gt; when the axis &lt;a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#argumentType"&gt;argument type&lt;/a&gt; differs from the argument type in the data source. In this instance, &lt;b&gt;argument&lt;/b&gt; has the similar type as the argument axis.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;argumentText&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The argument value of the represented point with applied formatting if the &lt;b&gt;argumentFormat&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;seriesName&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The series name of the point being hovered over.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;point&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;Information on the point being hovered over. For more information about the field and the point object's methods, refer to the &lt;a href="/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/"&gt;Point&lt;/a&gt; topic.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;points&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;An array of points with the same argument as the point being hovered over. This field is accessible when the &lt;b&gt;tooltip&lt;/b&gt;'s &lt;a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#shared"&gt;shared&lt;/a&gt; property is set to &lt;b&gt;true&lt;/b&gt;.
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;size&lt;/code&gt; (for bubble series only)&lt;/td&gt;
        &lt;td&gt;The size of the bubble being hovered over as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

The following **pointInfo** fields are available for stacked series such as the [full-stacked bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedBarSeries/') or [full-stacked area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedAreaSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedAreaSeries/'):

&lt;table class="dx-table full-width"&gt;
    &lt;tr&gt;
        &lt;th&gt;Field name&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;percent&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The percentage value of the point being hovered over.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;percentText&lt;/code&gt;&lt;/td&gt;     
        &lt;td&gt;The percentage value of the point being hovered over.
    &lt;/tr&gt;
        &lt;td&gt;&lt;code&gt;total&lt;/code&gt;&lt;/td&gt;          
        &lt;td&gt;The total value of all the points with the same argument as the point being hovered over.
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;totalText&lt;/code&gt;&lt;/td&gt;          
        &lt;td&gt;The total value of all the points with the same argument as the point being hovered over. This value is displayed with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt; 
    &lt;/tr&gt;
&lt;/table&gt;

The following **pointInfo** fields are available for the range-like series, such as [range area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/') or [range bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/'):

&lt;table class="dx-table full-width"&gt;
    &lt;tr&gt;
        &lt;th&gt;Field name&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalMinValue&lt;/code&gt;&lt;/td&gt;        
        &lt;td&gt;The value of the first range the point being hovered over as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;rangeValue1&lt;/code&gt;&lt;/td&gt;        
        &lt;td&gt;The first range value of the point being hovered over. Differs from the &lt;b&gt;originalMinValue&lt;/b&gt; when the axis &lt;a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType"&gt;value type&lt;/a&gt; is specified explicitly. In this instance, the &lt;b&gt;rangeValue1&lt;/b&gt; field contains the first range value of the specified type.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;rangeValue1Text&lt;/code&gt;&lt;/td&gt;   
        &lt;td&gt;The first range value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalValue&lt;/code&gt;&lt;/td&gt;        
        &lt;td&gt;The value of the second range the point being hovered over as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;rangeValue2&lt;/code&gt;&lt;/td&gt;        
        &lt;td&gt;The second range value of the point being hovered over. Differs from the &lt;b&gt;originalValue&lt;/b&gt; when the axis &lt;a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType"&gt;value type&lt;/a&gt; is specified explicitly. In this instance, the &lt;b&gt;rangeValue2&lt;/b&gt; field contains the second range value in the specified type.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;rangeValue2Text&lt;/code&gt;&lt;/td&gt;   
        &lt;td&gt;The second range value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;valueText&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;A string that contains the following values of the represented point: &lt;b&gt;rangeValue1Text&lt;/b&gt; and &lt;b&gt;rangeValue2Text&lt;/b&gt;.    
            The format of the string is the following: "*%rangeValue1Text%* - *%rangeValue2Text%*".&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

The following **pointInfo** fields are available for the financial chart series, such as [candle stick](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/CandleStickSeries/') or [stock](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StockSeries/'):

&lt;table class="dx-table full-width"&gt;
    &lt;tr&gt;
        &lt;th&gt;Field name&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalOpenValue&lt;/code&gt;&lt;/td&gt;   
        &lt;td&gt;The open value of the point being hovered over as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;openValue&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;The open value of the point being hovered over. Differs from the &lt;b&gt;originalOpenValue&lt;/b&gt; when the value in the data source is not in a numeric format.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;openValueText&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The open value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalCloseValue&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The close value of the point being hovered over as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;closeValue&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The close value of the point being hovered over. Differs from the &lt;b&gt;originalCloseValue&lt;/b&gt; when the value in the data source is not in a numeric format.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;closeValueText&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The close value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalHighValue&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The high value of the point being hovered over as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;highValue&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The high value of the point being hovered over. Differs from the &lt;b&gt;originalHighValue&lt;/b&gt; when the value in the data source is not in a numeric format.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;highValueText&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The high value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;originalLowValue&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The low value of the point being hovered over as it is set in the data source.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;lowValue&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The low value of the point being hovered over. Differs from the &lt;b&gt;originalLowValue&lt;/b&gt; when the value in the data source is not in a numeric format.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;lowValueText&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The low value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;reductionValue&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The reduction value of the point being hovered over.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;reductionValueText&lt;/code&gt;&lt;/td&gt;    
        &lt;td&gt;The reduction value of the point being hovered over with applied formatting if the &lt;b&gt;format&lt;/b&gt; property is specified.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;code&gt;valueText&lt;/code&gt;&lt;/td&gt;
        &lt;td&gt;A string that contains the following values of the represented point: &lt;b&gt;highValueText&lt;/b&gt;, &lt;b&gt;openValueText&lt;/b&gt;, &lt;b&gt;closeValueText&lt;/b&gt; and &lt;b&gt;lowValueText&lt;/b&gt;.
        The format of the string is the following: "h: %highValueText% o: %openValueText% c: %closeValueText% l: %lowValueText%".&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

#include dataviz-ref-functioncontext

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/APIDisplayATooltip/",
    name: "Display a Tooltip"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/TooltipHTMLSupport/",
    name: "Tooltip HTML Support"
}

#####See Also#####
- [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/')

-->