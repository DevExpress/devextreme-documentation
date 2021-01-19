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

    - [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#argumentField')
    - [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#dataSource')
    - [firstLastColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/firstLastColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#firstLastColor')
    - [minColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/minColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#minColor')
    - [maxColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/maxColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#maxColor')
    - [showFirstLast](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/showFirstLast.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#showFirstLast')
    - [showMinMax](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/showMinMax.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#showMinMax')
    - [size](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/1%20Configuration/size '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/size/')
    - [theme](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/theme.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#theme')
    - [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/')
    - [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#valueField')

- The **line**, **spline**, **stepline**, **area**, **splinearea**, and **steparea** types:      

    - [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor')
    - [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth')
    - [pointColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/pointColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointColor')
    - [pointSize](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/pointSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointSize')
    - [pointSymbol](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/pointSymbol.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointSymbol')

- The **bar** type:

    - [barNegativeColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/barNegativeColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#barNegativeColor')
    - [barPositiveColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/barPositiveColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#barPositiveColor')

- The **winloss** type:

    - [lossColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lossColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lossColor')
    - [winColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/winColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#winColor')
    - [winlossThreshold](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/winlossThreshold.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#winlossThreshold')

#include common-ref-enum with {
    enum: "`SparklineType`",
    values: "`Line`, `Spline`, `StepLine`, `Area`, `SplineArea`, `StepArea`, `Bar`, and `WinLoss`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleSparklines/"
}
