When a user selects a series, the series changes its style to the one specified by the following objects.

- **series**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/selectionStyle/')        
The selection style for an individual series.

- **commonSeriesSettings**.**%seriesType%**.**selectionStyle**                
The selection style for all series of a specific type ([line](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/line.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line'), [bar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/bar.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#bar'), etc.).

- **commonSeriesSettings**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/selectionStyle/')         
The selection style for all series in the **Chart**.

Note that individual settings override type-specific settings which, in turn, override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                selectionStyle: {
                    // high priority
                }
            },
            commonSeriesSettings: {
                bar: {
                    selectionStyle: {
                        // middle priority
                    }
                },
                selectionStyle: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series ... >
            <dxo-selection-style>
                <!-- high priority -->
            </dxo-selection-style>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-selection-style>
                <!-- low priority -->
            </dxo-selection-style>
            <dxo-bar>
                <dxo-selection-style>
                    <!-- middle priority -->
                </dxo-selection-style>
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

To choose which series elements should be highlighted when a user selects a series, specify the **selectionMode** option. Just like **selectionStyle**, this option can be specified for all series in the **Chart**, for all series of a specific type, or for an individual series. Note also that depending on the series type, the **selectionMode** option accepts different values. For information about them, visit the [Series Types](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/') section of the API reference, choose the employed series type, and refer to its **selectionMode** option description.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                bar: {
                    selectionMode: 'allSeriesPoints' // or 'onlyPoint' | 'allArgumentPoints' | 'none'
                },
                line: {
                    selectionMode: 'includePoints' // or 'nearestPoint' | 'excludePoints' | 'none'
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxo-common-series-settings ... >
            <dxo-bar
                selectionMode="allSeriesPoints"> <!-- or 'onlyPoint' | 'allArgumentPoints' | 'none' -->
            </dxo-bar>
            <dxo-line
                selectionMode="includePoints"> <!-- or 'nearestPoint' | 'excludePoints' | 'none' -->
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Selection/"
}

By default, only a single series can be in the selected state at a time. If you need to allow multiple series to be in this state, assign *"multiple"* to the [seriesSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/seriesSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#seriesSelectionMode') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            seriesSelectionMode: 'multiple' // or 'single'
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart 
        seriesSelectionMode="multiple"> <!-- or 'single' -->
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleSeriesSelection/"
}

#####See Also#####
- [Point Selection - User Interaction](/concepts/05%20Widgets/Chart/14%20Series%20Points/20%20Selection/05%20User%20Interaction.md '/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#User_Interaction')
