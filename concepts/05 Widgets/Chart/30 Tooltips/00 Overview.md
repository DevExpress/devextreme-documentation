A tooltip is a small pop-up rectangle displaying information about a [series point](/concepts/05%20Widgets/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series_Points/Overview/') that the user pauses on. By default, the information is the point value, but it is possible to display anything in a tooltip.

![DevExtreme HTML5 JavaScript Charts Tooltip](/images/ChartJS/visual_elements/tooltip.png)

All options configuring tooltips are collected in the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/') object. For example, to enable the tooltips, assign **true** to the **enabled** option of this object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            tooltip: {
                enabled: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-tooltip
            [enabled]="true">
        </dxo-tooltip>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Options declared in the **tooltip** object apply to all tooltips in the **Chart**. If you want to customize a specific tooltip, assign a function to the [customizeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#customizeTooltip') option. This function must return an object with options for the tooltip that you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            tooltip: {
                enabled: true,
                color: 'yellow',
                // Paints the tooltips of all points whose value is more than 100 in red
                // Other tooltips remain painted in yellow
                customizeTooltip: function (pointInfo) {
                    return pointInfo.value > 100 ? { color: 'red' } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-tooltip
            [enabled]="true"
            color="yellow"
            [customizeTooltip]="customizeTooltip">
        </dxo-tooltip>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Paints the tooltips of all points whose value is more than 100 in red
        // Other tooltips remain painted in yellow
        customizeTooltip (pointInfo: any) {
            return pointInfo.value > 100 ? { color: 'red' } : { }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#####See Also#####
- [Show and Hide a Tooltip](/concepts/05%20Widgets/Chart/30%20Tooltips/10%20Show%20and%20Hide%20a%20Tooltip.md '/Documentation/Guide/Widgets/Chart/Tooltips/Show_and_Hide_a_Tooltip/')
- [Handle Tooltip Events](/concepts/05%20Widgets/Chart/30%20Tooltips/20%20Handle%20Tooltip%20Events.md '/Documentation/Guide/Widgets/Chart/Tooltips/Handle_Tooltip_Events/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, tooltips, enable tooltips, customizeTooltip