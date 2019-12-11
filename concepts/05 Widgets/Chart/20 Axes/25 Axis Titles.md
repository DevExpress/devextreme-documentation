The axis title is a short text displayed alongside the axis. Usually, the axis title shows units of measurement for axis values, but you can put any text in it.

![DevExtreme HTML5 JavaScript Charts AxisTitles](/images/ChartJS/visual_elements/axis_titles.png)

The axis title is configured by the [title](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/title/') option. If you assign an object to it, specifying the **text** field of this object is necessary for the axis title to be displayed. Besides the object, the **title** option accepts a string, thus providing a shortcut for setting the axis title. Therefore, this:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                title: 'Axis Title'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            title="Axis Title">
        </dxo-argument-axis>
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

is the same as this:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                title: {
                    text: 'Axis Title'
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxo-title text="Axis Title"></dxo-title>
        </dxo-argument-axis>
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

In addition to the **text** field, the **title** object may contain fields that specify the [font](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/title/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/title/font/') and [margin](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/title/margin.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/title/#margin') of the axis title.

#####See Also#####
- [Chart Title and Subtitle](/concepts/05%20Widgets/Chart/58%20Title%20and%20Subtitle.md '/Documentation/Guide/Widgets/Chart/Title_and_Subtitle/')
- [Limit and Relocate the Axes](/concepts/05%20Widgets/Chart/20%20Axes/40%20Limit%20and%20Relocate%20the%20Axes.md '/Documentation/Guide/Widgets/Chart/Axes/Limit_and_Relocate_the_Axes/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Bubble)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, axis titles, title font, title margin