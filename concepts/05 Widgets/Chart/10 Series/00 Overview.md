A series is a collection of related data points. 

![DevExtreme HTML5 JavaScript Charts Series](/images/ChartJS/visual_elements/series.png)

The most important characteristic of a series is its type. The **Chart** provides over 20 series types, and all of them are described in the [Series Types](/concepts/05%20Widgets/Chart/11%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/') article. You can specify the type of a series using its [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                // ...
                type: 'bar'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series type="bar" ... ></dxi-series>
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

A single **Chart** can contain several series at once. In this case, the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') option accepts an array of series objects. To enable a user to identify a series among others on the [chart legend](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Legend/Overview/'), specify its [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                type: 'bar',
                name: 'Men'
            }, {
                // ...
                type: 'area',
                name: 'Women'
            }]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series type="bar" name="Men" ... ></dxi-series>
        <dxi-series type="area" name="Women" ... ></dxi-series>
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

Objects in the **series** array specify individual settings for series. You can also specify common settings for series using the following objects.

- **commonSeriesSettings**.**%seriesType%** ([line](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/line.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line'), [bar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/bar.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#bar'), etc.)          
Settings for all series of a specific type.

- [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/')         
Settings for all series in the **Chart**.

Note that individual settings override type-specific settings which, in turn, override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                // high priority
            },
            commonSeriesSettings: {
                bar: {
                    // middle priority
                },
                // low priority
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series ... >
            <!-- high priority -->
        </dxi-series>
        <dxo-common-series-settings ... >
            <!-- low priority -->
            <dxo-bar>
                <!-- middle priority -->
            </dxo-bar>
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

#####See Also#####
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
- [Series Points](/concepts/05%20Widgets/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series_Points/Overview/')
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- [Access a Series Using the API](/concepts/05%20Widgets/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/')

[tags]chart, overview, series type, series name, common series settings, inidividual series settings
