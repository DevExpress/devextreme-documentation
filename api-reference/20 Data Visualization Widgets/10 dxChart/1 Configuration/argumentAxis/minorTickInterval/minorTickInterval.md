---
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: number | object | string
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies the interval between [minor ticks](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/'). Applies only to the axes of the *"continuous"* [type](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type').

---
Minor ticks divide the segment between two neighboring [major ticks](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/') into smaller segments. Minor ticks are generated automatically, unless the **minorTickInterval** option is set.

If the axis displays numbers, assign a number to this option. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain only one of all fields described in this section, for example:

    <!--JavaScript-->var chartOptions = {
        // ...
        argumentAxis: {
            // ...
            minorTickInterval: { days: 5 }
        }
    };

#####See Also#####
- **argumentAxis** | [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minorTickCount') - specifies how many minor ticks to place between two neighboring major ticks.
- **argumentAxis** | [minorTick](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/') - configures the appearance of minor ticks.
- **argumentAxis** | [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/') - specifies the interval between major ticks.