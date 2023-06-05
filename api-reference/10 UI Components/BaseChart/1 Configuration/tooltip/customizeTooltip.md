---
id: BaseChart.Options.tooltip.customizeTooltip
type: function(pointInfo)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(pointInfo): Object
Information on the series point being pressed or hovered over with the mouse pointer.

##### return: Object
The tooltip's text or markup and appearance settings.

---
#include dataviz-customize-tooltip-return

The **pointInfo** object has different fields for the different [series types](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/'). The following fields are available for all the series types:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>originalValue</code></td>
        <td>The value of the represented point as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>value</code></td>
        <td>The value of the represented point. Differs from the <b>originalValue</b> when the axis <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType">value type</a> is specified explicitly. In this instance, the <b>value</b> field contains a value of the specified type.</td>
    </tr>
    <tr>
        <td><code>valueText</code></td>
        <td>The value of the point being hovered over with applied formatting if the <b>format</b> property is specified</td>
    </tr>
    <tr>
        <td><code>originalArgument</code></td>
        <td>The argument value of the represented point as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>argument</code></td>
        <td>The argument value of the represented point. Differs from the <b>originalArgument</b> when the axis <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#argumentType">argument type</a> differs from the argument type in the data source. In this instance, <b>argument</b> has the same type as the argument axis.</td>
    </tr>
    <tr>
        <td><code>argumentText</code></td>
        <td>The argument value of the represented point with applied formatting if the <b>argumentFormat</b> property is specified.</td>
    </tr>
    <tr>
        <td><code>seriesName</code></td>
        <td>The series name of the point being hovered over.</td>
    </tr>
    <tr>
        <td><code>point</code></td>
        <td>Information on the point being hovered over. To learn more about the field and methods of the point object, refer to the <a href="/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/">Point</a> topic.</td>
    </tr>
    <tr>
        <td><code>points</code></td>
        <td>An array of points with the same argument as the point being hovered over. This field is accessible when the <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#shared">shared</a> property of the <b>tooltip</b> is set to <b>true</b>.
    </tr>
    <tr>
        <td><code>size</code> (for bubble series only)</td>
        <td>The size of the bubble being hovered over as it is set in the data source.</td>
    </tr>
</table>

The following **pointInfo** fields are available for the stacked-like series such as [full-stacked bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedBarSeries/') or [full-stacked area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedAreaSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedAreaSeries/'):

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>percent</code></td>    
        <td>The percent value of the point being hovered over in decimal format. For example, <code>0.6</code>.</td>
    </tr>
    <tr>
        <td><code>percentText</code></td>     
        <td>The percent value of the point being hovered over. For example, <code>60%</code>.</td>
    </tr>
        <td><code>total</code></td>          
        <td>The total value of all the points with the same argument as the point being hovered over.
    <tr>
        <td><code>totalText</code></td>          
        <td>The total value of all the points with the same argument as the point being hovered over. This value is displayed with applied formatting if the <b>format</b> property is specified.</td> 
    </tr>
</table>

The folllowing **pointInfo** fields are available for the range-like series, such as [range area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/') or [range bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/'):

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>originalMinValue</code></td>        
        <td>The first range value of the point being hovered over as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>rangeValue1</code></td>        
        <td>The first range value of the point being hovered over. Differs from the <b>originalMinValue</b> when the axis <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType">value type</a> is specified explicitly. In this instance, the <b>rangeValue1</b> field contains the first range value of the specified type.</td>
    </tr>
    <tr>
        <td><code>rangeValue1Text</code></td>   
        <td>The first range value of the point being hovered over with applied formatting if the <b>format</b> property is specified.</td>
    </tr>
    <tr>
        <td><code>originalValue</code></td>        
        <td>The second range value of the point being hovered over as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>rangeValue2</code></td>        
        <td>The second range value of the point being hovered over. Differs from the <b>originalValue</b> when the axis <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType">value type</a> is specified explicitly. In this instance, the <b>rangeValue2</b> field contains the second range value in the specified type.</td>
    </tr>
    <tr>
        <td><code>rangeValue2Text</code></td>   
        <td>The second range value of the point being hovered over with applied formatting if the <b>format</b> property is specified.</td>
    </tr>
    <tr>
        <td><code>valueText</code></td>
        <td>A string that contains the following values of the represented point: <b>rangeValue1Text</b> and <b>rangeValue2Text</b>.    
            The format of the string is the following: "*%rangeValue1Text%* - *%rangeValue2Text%*".</td>
    </tr>
</table>

The folllowing **pointInfo** fields are available for the financial chart series, such as [candle stick](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/CandleStickSeries/') or [stock](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StockSeries/'):

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>originalOpenValue</code></td>   
        <td>The open value of the point being hovered over as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>valueText</code></td>
        <td>A string that contains the following values of the represented point: <b>highValueText</b>, <b>openValueText</b>, <b>closeValueText</b> and <b>lowValueText</b>.
The format of the string is the following: "h: %highValueText% o: %openValueText% c: %closeValueText% l: %lowValueText%".</td>
    </tr>
    <tr>
        <td><code>openValue</code></td>
        <td>The open value of the point being hovered over. Differs from the <b>originalOpenValue</b> when the value in the data source is not in a numeric format.</td>
    </tr>
    <tr>
        <td><code>openValueText</code></td>    
        <td>The open value of the point being hovered over with applied formatting if the <b>format</b> property is specified.</td>
    </tr>
    <tr>
        <td><code>originalCloseValue</code></td>    
        <td>The close value of the point being hovered over as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>closeValue</code></td>    
        <td>The close value of the point being hovered over. Differs from the <b>originalCloseValue</b> when the value in the data source is not in a numeric format.</td>
    </tr>
    <tr>
        <td><code>closeValueText</code></td>    
        <td>The close value of the point being hovered over with applied formatting if the <b>format</b> property is specified.</td>
    </tr>
    <tr>
        <td><code>originalHighValue</code></td>    
        <td>The high value of the point being hovered over as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>highValue</code></td>    
        <td>The high value of the point being hovered over. Differs from the <b>originalHighValue</b> when the value in the data source is not in a numeric format.</td>
    </tr>
    <tr>
        <td><code>highValueText</code></td>    
        <td>The high value of the point being hovered over with applied formatting if the <b>format</b> property is specified.</td>
    </tr>
    <tr>
        <td><code>originalLowValue</code></td>    
        <td>The low value of the point being hovered over as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>lowValue</code></td>    
        <td>The low value of the point being hovered over. Differs from the <b>originalLowValue</b> when the value in the data source is not in a numeric format.</td>
    </tr>
    <tr>
        <td><code>lowValueText</code></td>    
        <td>The low value of the point being hovered over with applied formatting if the <b>format</b> property is specified.</td>
    </tr>
    <tr>
        <td><code>reductionValue</code></td>    
        <td>The reduction value of the point being hovered over.</td>
    </tr>
    <tr>
        <td><code>reductionValueText</code></td>    
        <td>The reduction value of the point being hovered over with applied formatting if the <b>format</b> property is specified.</td>
    </tr>
</table>

The following example hides a tooltip for points with values greater than 10:

---
##### jQuery

    <!--tab: index.js -->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            tooltip: {
                // ...
                enabled: true,
                customizeTooltip(arg) {
                    if (arg.originalValue > 10) {
                        return { text: null };
                    }
                },
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-tooltip ...
            [enabled]="true"
            [customizeTooltip]="customizeTooltip"
        >
        </dxo-tooltip>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeTooltip (arg) {
            if (arg.originalValue > 10) {
                return { text: null };
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxTooltip ...
                :enabled="true"
                :customize-tooltip="customizeTooltip"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, { DxTooltip } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxTooltip
        },
        methods: {
            customizeTooltip (arg) {
                if (arg.originalValue > 10) {
                    return { text: null };
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName}, { Tooltip } from 'devextreme-react/{widget-name}';

    const customizeTooltip = (arg) => {
        if (arg.originalValue > 10) {
            return { text: null };
        }
    };

    function App() {
        return (
            <{WidgetName} ... >
                <Tooltip ...
                    enabled={true}
                    customizeTooltip={customizeTooltip}
                />
            </{WidgetName}>
        );
    }

    export default App;

---

#include dataviz-ref-functioncontext

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/APIDisplayATooltip/",
    name: "Display a Tooltip"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/TooltipHTMLSupport/",
    name: "Tooltip HTML Support"
}
