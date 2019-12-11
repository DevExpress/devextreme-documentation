The legend is a chart component that helps a user identify series. It contains several colored items, one per series. 

![DevExtreme HTML5 JavaScript Charts Legend](/images/ChartJS/visual_elements/legend.png)

To configure the appearance, location, and content of the legend, use options collected in the [legend](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/legend '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/') object. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-legend ... ></dxo-legend>
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
- [Relocate the Legend](/concepts/05%20Widgets/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/')
- [Rearrange Legend Items](/concepts/05%20Widgets/Chart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/Widgets/Chart/Legend/Rearrange_Legend_Items/')
- [User Interaction with the Legend](/concepts/05%20Widgets/Chart/35%20Legend/30%20User%20Interaction.md '/Documentation/Guide/Widgets/Chart/Legend/User_Interaction/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, legend, overview