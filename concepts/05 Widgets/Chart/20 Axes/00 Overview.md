The **Chart** widget visualizes data on the rectangular coordinate system. In this system, each point is determined on a plane by two components: the argument and the value, each indicated on a devoted axis.

![DevExtreme HTML5 JavaScript Charts Axis Axes](/images/ChartJS/visual_elements/axes.png)

To configure the argument or value axis individually, use the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/') or [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') object respectively. If the axes share certain settings between each other, specify them in the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/') object, but note that axis-specific settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // high priority
            },
            valueAxis: {
                // high priority
            },
            commonAxisSettings: {
                // low priority
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <!-- high priority -->
        </dxo-argument-axis>
        <dxi-value-axis>
            <!-- high priority -->
        </dxi-value-axis>
        <dxo-common-axis-settings>
            <!-- low priority -->
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

Axes can be of one of the following types.

- **Continuous**        
Displays numeric and date-time arguments/values.

- **Discrete**       
Displays string arguments/values called ["categories"](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories').

- **Logarithmic**       
Displays numeric arguments/values, each being the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase') value raised to some power. For example, **logarithmBase** equaling to 10 produces the following arguments/values: 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, etc.

![DevExtreme HTML5 JavaScript Charts ContinuousArgumentAxis](/images/ChartJS/visual_elements/argument_axis_continuous.png)
![DevExtreme HTML5 JavaScript Charts DiscreteArgumentAxis](/images/ChartJS/visual_elements/argument_axis_discrete.png)
![DevExtreme HTML5 JavaScript Charts LogarithmicArgumentAxis](/images/ChartJS/visual_elements/argument_axis_logarithmic.png)

Usually, the **Chart** chooses the axis type automatically according to the type of arguments/values, but you can force the **Chart** to use a specific axis type by specifying the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type') option. In addition, you can cast arguments/values to a specific data type using the [argumentType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType')/[valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') option. You may want to do this if, for example, your data source stores dates as strings. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                argumentType: 'datetime',
                type: 'discrete'
            },
            valueAxis: {
                valueType: 'numeric'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            argumentType="datetime"
            type="discrete">
        </dxo-argument-axis>
        <dxi-value-axis
            valueType="numeric">
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

For better readability of visualized data, any axis is divided into parts using ticks. Different axis types demand ticks to be arranged differently. See the [Arrange Axis Ticks](/concepts/05%20Widgets/Chart/20%20Axes/10%20Arrange%20Axis%20Ticks '/Documentation/Guide/Widgets/Chart/Axes/Arrange_Axis_Ticks/') topic for further details.

#####See Also#####
- [Rotate and Invert the Chart](/concepts/05%20Widgets/Chart/90%20Rotate%20and%20Invert%20the%20Chart.md '/Documentation/Guide/Widgets/Chart/Rotate_and_Invert_the_Chart/')
- [Multi-Axis Chart](/concepts/05%20Widgets/Chart/20%20Axes/70%20Multi-Axis%20Chart.md '/Documentation/Guide/Widgets/Chart/Axes/Multi-Axis_Chart/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LogarithmicAxis)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, axes, argument axis, value axis, axis type, continuous axis, discrete axis, logarithmic axis, logarithmBase, argumentType, valueType