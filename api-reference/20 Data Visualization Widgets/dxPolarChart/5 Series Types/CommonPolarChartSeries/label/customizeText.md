---
id: dxPolarChartSeriesTypesCommonPolarChartSeriesLabel.customizeText
type: function(pointInfo)
notUsedInTheme: 
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed by point labels.

##### param(pointInfo): Object
Information on the series point.

##### return: String
The text for the label to display.

---
The function's parameter has the following fields:

* **originalValue**    
Specifies the value of the represented point as it is set in the data source.
* **value**   
Specifies the value of the represented point. Differs from the **originalValue** when the axis' [value type](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueType') differs from the value type in the data source. In this instance, **value** has the type of the value axis.
* **valueText**   
Specifies the value of the represented point with applied formatting if the **format** property is specified (see [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/label/')).
* **originalArgument**    
Specifies the argument value of the represented point as it is set in the data source.
* **argument**   
Specifies the argument value of the represented point. Differs from the **originalArgument** when the axis' [argument type](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#argumentType') differs from the argument type in the data source. In this instance, **argument** has the type of the argument axis.
* **argumentText**   
Specifies the argument value of the represented point with applied formatting if the **argumentFormat** property is specified.
* **size** (for bubble series only)   
Specifies the size of the represented bubble as it is set in the data source.
* **index** (for range area and range bar series only)        
Specifies whether the represented point is maximum (index = 1) or minimum (index = 0).
* **point**    
Provides access to the represented point. To learn more about the field and methods of the point object, refer to the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Point/') topic in the "Chart Elements" reference section.
* **seriesName**   
Specifies the series of the represented point.

#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')