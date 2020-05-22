---
id: dxSparkline.Options.type
acceptValues: 'area' | 'bar' | 'line' | 'spline' | 'splinearea' | 'steparea' | 'stepline' | 'winloss'
type: String
default: 'line'
---
---
##### shortDescription
Determines the type of a sparkline.

---
The sparkline type determines how data is visualized. The following list shows options that are available for different types of  **Sparklines**:

- **All types**:     

    - [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#argumentField)
    - [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#dataSource)
    - [firstLastColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#firstLastColor)
    - [minColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#minColor)
    - [maxColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#maxColor)
    - [showFirstLast](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#showFirstLast)
    - [showMinMax](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#showMinMax)
    - [size](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/size/)
    - [theme](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#theme)
    - [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/)
    - [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#valueField)

- The **line**, **spline**, **stepline**, **area**, **splinearea**, and **steparea** types:      

    - [lineColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor)
    - [lineWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth)
    - [pointColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointColor)
    - [pointSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointSize)
    - [pointSymbol](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointSymbol)

- The **bar** type:

    - [barNegativeColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#barNegativeColor)
    - [barPositiveColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#barPositiveColor)

- The **winloss** type:

    - [lossColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lossColor)
    - [winColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#winColor)
    - [winlossThreshold](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#winlossThreshold)

#include common-ref-enum with {
    enum: "`SparklineType`",
    values: "`Line`, `Spline`, `StepLine`, `Area`, `SplineArea`, `StepArea`, `Bar`, and `WinLoss`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleSparklines/"
}
