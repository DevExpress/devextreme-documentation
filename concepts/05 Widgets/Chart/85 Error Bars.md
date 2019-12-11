Error bars are used on charts to indicate an error or uncertainty in a reported measurement. They give a general idea of how precise the measurement is.

![DevExtreme HTML5 JavaScript Charts Error Bars](/images/ChartJS/visual_elements/error_bars.png)

Error bars can be generated either from concrete or calculated values. To generate one error bar, two values, high and low, are needed. If your data source provides concrete high and low values, assign the required data source fields to the [highValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/highValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#highValueField') and [lowValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/lowValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#lowValueField') options of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/').[valueErrorBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/') object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            dataSource: [
                { arg: 1, val: 200, highError: 5, lowError: 3 },
                // ...
            ],
            series: {
                // ...
                valueErrorBar: {
                    highValueField: 'highError',
                    lowValueField: 'lowError'
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart [dataSource]="chartDataSource">
        <dxi-series ... >
            <dxo-value-error-bar
                highValueField="highError"
                lowValueField="lowError">
            </dxo-value-error-bar>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        chartDataSource = [
            { arg: 1, val: 200, highError: 5, lowError: 3 },
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Alternatively, error bar values can be calculated according to an algorithm. In this case, choose the needed algorithm using the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#type') option and specify the value to be used in calculation using the [value](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/#value') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                // ...
                valueErrorBar: {
                    type: 'percent',
                    value: 5
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series ... >
            <dxo-value-error-bar
                type="percent"
                [value]="5">
            </dxo-value-error-bar>
        </dxi-series>
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

If error bars should have uniform settings, you can specify them using one of the following objects.

- **commonSeriesSettings**.**%seriesType%**.**valueErrorBar**      
Settings for all error bars belonging to the series of a specific [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type') ([line](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/line.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line'), [bar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/bar.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#bar'), etc.).
 
- **commonSeriesSettings**.[valueErrorBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/valueErrorBar/')      
Settings for all error bars in the **Chart**.

Note that settings for individual series override type-specific settings which, in turn, override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                valueErrorBar: {
                    // high priority
                }
            },
            commonSeriesSettings: {
                line: {
                    valueErrorBar: {
                        // middle priority
                    }
                },
                valueErrorBar: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series>
            <dxo-value-error-bar>
                <!-- high priority -->
            </dxo-value-error-bar>
        </dxi-series>
        <dxo-common-series-settings>
            <dxo-line>
                <dxo-value-error-bar>
                    <!-- middle priority -->
                </dxo-value-error-bar>
            </dxo-line>
            <dxo-value-error-bar>
                <!-- low priority -->
            </dxo-value-error-bar>
        </dxo-common-series-settings>
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

For information about all options of the error bars, visit the [valueErrorBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/valueErrorBar/') section of the API reference.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ErrorBars/"
}

[tags]chart, error bar, valueErrorBar, highValueField, lowValueField
