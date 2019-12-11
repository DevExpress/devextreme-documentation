When a user pauses on a series, the series changes its style to the one specified by the following objects.

- **series**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/hoverStyle/')        
The hover style for an individual series.

- **commonSeriesSettings**.**%seriesType%**.**hoverStyle**                
The hover style for all series of a specific type ([line](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/line.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line'), [bar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/bar.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#bar'), etc.).

- **commonSeriesSettings**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/hoverStyle/')         
The hover style for all series in the **Chart**.

Note that individual settings override type-specific settings which, in turn, override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                hoverStyle: {
                    // high priority
                }
            },
            commonSeriesSettings: {
                bar: {
                    hoverStyle: {
                        // middle priority
                    }
                },
                hoverStyle: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series ... >
            <dxo-hover-style>
                <!-- high priority -->
            </dxo-hover-style>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-hover-style>
                <!-- low priority -->
            </dxo-hover-style>
            <dxo-bar>
                <dxo-hover-style>
                    <!-- middle priority -->
                </dxo-hover-style>
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

To choose which series elements should be highlighted when a user pauses on a series, specify the **hoverMode** option. Just like **hoverStyle**, this option can be specified for all series in the **Chart**, for all series of a specific type, or for an individual series. Note also that depending on the series type, the **hoverMode** option accepts different values. For information about them, visit the [Series Types](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/') section of the API reference, choose the employed series type, and refer to its **hoverMode** option description.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                bar: {
                    hoverMode: 'allSeriesPoints' // or 'onlyPoint' | 'allArgumentPoints' | 'none'
                },
                line: {
                    hoverMode: 'includePoints' // or 'nearestPoint' | 'excludePoints' | 'none'
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-series-settings ... >
            <dxo-bar
                hoverMode="allSeriesPoints"> <!-- or 'onlyPoint' | 'allArgumentPoints' | 'none' -->
            </dxo-bar>
            <dxo-line
                hoverMode="includePoints"> <!-- or 'nearestPoint' | 'excludePoints' | 'none' -->
            </dxo-line>
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/"
}

#####See Also#####
- [Point Hover](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/3%20Hover%20Handling/2%20Point%20Hover.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Hover_Handling/#Point_Hover')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')
