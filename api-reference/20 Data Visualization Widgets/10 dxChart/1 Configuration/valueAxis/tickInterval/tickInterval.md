---
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: number | object | string
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies the interval between [major ticks](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tick/').

---
Major ticks divide an axis into segments thus improving the viewer's perception of visualized data. Major ticks are generated automatically, unless the **tickInterval** option is set.

If the axis displays numbers, assign a number to this option. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain only one of all fields described in this section, for example:

    <!--JavaScript-->var chartOptions = {
        // ...
        valueAxis: {
            // ...
            tickInterval: { days: 5 }
        }
    };

When you use an axis of the *"logarithmic"* [type](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type'), ticks are generated on a base of powers. For example, assuming that the [logarithm base](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#logarithmBase') is 10 and the tick interval is 1, ticks are generated at 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. If the tick interval becomes 2, ticks are generated at 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

[note]A custom tick interval can be ignored if it leads axis labels to being overlapped by each other. To force the widget to use it anyway, assign *"ignore"* to the **valueAxis** | **label** | [overlappingBehavior](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonAxisSettings/label/overlappingBehavior '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/label/overlappingBehavior/') option.

#####See Also#####
- **valueAxis** | [tick](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tick/') - configures the appearance of major ticks.
- **valueAxis** | [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/valueAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTickInterval/') - specifies the interval between minor ticks.