A series point is a visual representation of one or several data objects. Series points can have different shapes and sizes depending on the [series types](/concepts/05%20Widgets/Chart/11%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/'). 

![DevExtreme HTML5 JavaScript Charts SeriesPoints](/images/ChartJS/visual_elements/series_points.png)

For those series whose points are simple dots ([Range Area](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/') and [Scatter](/concepts/05%20Widgets/Chart/11%20Series%20Types/40%20Scatter%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Scatter_Series/'), all [line](/concepts/05%20Widgets/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/') and [area](/concepts/05%20Widgets/Chart/11%20Series%20Types/30%20Area%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Area_Series/') series), point-related settings are collected in the [point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/') object. This object can be declared as follows.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                point: {
                    // Settings for all points of an individual series
                }
            }, {
                // ...  
            }],
            commonSeriesSettings: {
                stackedline: { // or any other series type
                    point: {
                        // Settings for all points belonging to Stacked Line series
                    }
                },
                point: {
                    // Settings for all points of all series
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series>
            <dxo-point ... >
                <!-- Settings for all points of an individual series -->
            </dxo-point>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-stackedline> <!-- or any other series type -->
                <dxo-point ... >
                    <!-- Settings for all points belonging to Stacked Line series -->
                </dxo-point>
            </dxo-stackedline>
            <dxo-point ... >
                <!-- Settings for all points of all series -->
            </dxo-point>
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

A dedicated object is not provided for series whose points have a distinctive appearance ([Range Bar](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/') and [Bubble](/concepts/05%20Widgets/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/'), all [bar](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/') and [financial](/concepts/05%20Widgets/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/') series), and all point-related settings are declared directly in the **series**, ***%seriesType%***, or **commonSeriesSettings** object. Refer to the description of a particular series type in the [Series Types](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/') section of the API reference for more details on the available settings.

[note] Individual settings override type-specific settings which, in turn, override common settings.

Settings specified in the manner described above apply to a congregation of series points. If you need to customize an individual point, assign a function to the [customizePoint](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/customizePoint.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizePoint') option. This function must return an object with options for the point that you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                point: {
                    color: 'blue'
                }
            },
            // Assigns the red color to all series points with value more than 100
            // Other series points remain painted in blue
            customizePoint: function (pointInfo) {
                return pointInfo.value > 100 ? { color: 'red' } : { }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        [customizePoint]="customizePoint">
        <dxi-series>
            <dxo-point color="blue" ></dxo-point>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Assigns the red color to all series points with value more than 100
        // Other series points remain painted in blue
        customizePoint (pointInfo: any) {
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointImage/"
}

#####See Also#####
- [Access a Series Point Using the API](/concepts/05%20Widgets/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/')
- [Series Overview](/concepts/05%20Widgets/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series/Overview/')
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, overview, series points, common point settings
