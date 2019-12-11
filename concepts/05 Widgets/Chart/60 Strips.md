A strip is a colored piece of the chart's background that highlights a range of values. Strips allow a viewer to see whether a certain series point falls in or out of a range.

![DevExtreme HTML5 JavaScript Charts Strips](/images/ChartJS/visual_elements/strips.png)

To configure the strips, declare the [strips](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/strips '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/') array in the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/') or [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') object. This array should contain objects, and each of them configures a single strip. To limit a strip, set its **startValue** and **endValue** options. You may set only one of them, in which case the strip will not have a limit at one end. Note that setting the **color** option is also necessary for a strip to be displayed.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                strips: [
                    { startValue: 100, endValue: 150, color: 'yellow' },
                    { startValue: 50, endValue: 70, color: 'orange' }
                ]
            },
            valueAxis: {
                strips: [
                    { startValue: 40, endValue: 50, color: 'blue' },
                    // This strip extends from 70 up to the chart's end
                    { startValue: 70, color: 'red' }
                ]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxi-strip [startValue]="100" [endValue]="150" color="yellow"></dxi-strip>
            <dxi-strip [startValue]="50" [endValue]="70" color="orange"></dxi-strip>
        </dxo-argument-axis>
        <dxi-value-axis>
            <dxi-strip [startValue]="40" [endValue]="50" color="blue"></dxi-strip>
            <dxi-strip [startValue]="70" color="red"></dxi-strip>
        </dxi-value-axis>
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

If several strips should have a uniform style, you can specify it using one of the following objects.

- **argumentAxis**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/stripStyle/')         
Style for strips belonging to the argument axis.

- **valueAxis**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/stripStyle/')         
Style for strips belonging to the value axis.

- **commonAxisSettings**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/stripStyle/')         
Style for all strips in the **Chart**.

Note that individual settings override axis-specific settings which, in turn, override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                strips: [
                    // high priority
                ],
                stripStyle: {
                    // middle priority
                }
            },
            valueAxis: {
                strips: [
                    // high priority
                ],
                stripStyle: {
                    // middle priority
                }
            },
            commonAxisSettings: {
                stripStyle: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxi-strip ... >
                <!-- high priority -->
            </dxi-strip>
            <dxo-strip-style ... >
                <!-- middle priority -->
            </dxo-strip-style>
        </dxo-argument-axis>
        <dxi-value-axis>
            <dxi-strip ... >
                <!-- high priority -->
            </dxi-strip>
            <dxo-strip-style ... >
                <!-- middle priority -->
            </dxo-strip-style>
        </dxi-value-axis>
        <dxo-common-axis-settings>
            <dxo-strip-style ... >
                <!-- low priority -->
            </dxo-strip-style>
        </dxo-common-axis-settings>
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

For information about all options of the strips, visit the [strips](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/strips '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/') section of the API reference.

#####See Also#####
- [Constant Lines](/concepts/05%20Widgets/Chart/65%20Constant%20Lines.md '/Documentation/Guide/Widgets/Chart/Constant_Lines/')

[tags]chart, strips
