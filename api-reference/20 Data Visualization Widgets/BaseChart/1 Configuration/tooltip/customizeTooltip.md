---
default: undefined
type: function(pointInfo)
---
---
##### notUsedInTheme

##### shortDescription
Allows you to change tooltip appearance.

##### param(pointInfo): Object
Defines the point value to be displayed in a tooltip.

##### return: Object
The text or markup to be displayed in a tooltip, along with the tooltip's settings.

---
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**        
Specifies the color of a tooltip.

- **text**        
Specifies the text displayed by a tooltip.

- **html**        
Specifies the HTML markup displayed by a tooltip.

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**        
Specifies the color of the text displayed by a tooltip.

- **borderColor**        
Specifies the color of the tooltip border.

When implementing the function for this option, you can use information about the tooltip's point. For example, you can access the argument or value of this point. To do this, use the following fields of the **this** object.

* **originalValue**    
Specifies the value of the currently represented point as it is set in the data source.
* **value**   
Specifies the value of the currently represented point. Differs from the **originalValue** when the axis [value type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') is specified explicitly. In this instance, the **value** field contains a value in the specified type.
* **valueText**   
Specifies the value of the currently hovered point with applied formatting if the **format** property is specified.
* **valueText** (for candle stick and stock series)    
Specifies a string of the values of the currently represented point. This string contains the **highValueText**, **openValueText**, **closeValueText** and **lowValueText** values.    
The format of the string is the following: "h: *%highValueText%* o: *%openValueText%* c: *%closeValueText%* l: *%lowValueText%*".
* **valueText** (for range area and range bar series)    
Specifies a string of the values of the currently represented point. This string contains the **rangeValue1Text** and **rangeValue2Text** values.    
The format of the string is the following: "*%rangeValue1Text%* - *%rangeValue2Text%*".
* **originalArgument**    
Specifies the argument value of the currently represented point as it is set in the data source.
* **argument**    
Specifies the argument value of the currently represented point. Differs from the **originalArgument** when the axis' [argument type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType') differs from the argument type in the data source. In this instance, **argument** has the type of the argument axis.
* **argumentText**   
Specifies the argument value of the currently hovered point with applied formatting if the **argumentFormat** option is specified.
* **size** (for bubble series only)   
Specifies the size of the bubble that is hovered over as it is set in the data source.
* **seriesName**   
Specifies the series of the currently hovered point.
* **point**    
Provides access to the hovered point. To learn more about the field and methods of the point object, refer to the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') topic in the "Chart Elements" reference section.
* **points** (for shared tooltip only)    
Provides access to the array of points with the same argument as the currently hovered point. This field is accessible when the [shared](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/tooltip/shared.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#shared') option of the **tooltip** object is set to **true**. To learn more about the fields and methods of the point object, refer to the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') topic in the "Chart Elements" reference section.

The following fields come with the stacked-like series such as [full-stacked bar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/FullStackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/') or [full-stacked area](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/FullStackedAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedAreaSeries/').

* **percent**    
Specifies the percent value of the currently hovered point.
* **percentText**   
Specifies the percent value of the currently hovered point with **percentPrecision** (optional) applied.
* **total**        
Specifies the total value of all the points with the same argument as the currently hovered point.
* **totalText**        
Specifies the total value of all the points with the same argument as the currently hovered point. This value is displayed with applied formatting if the **format** option is specified.

The following fields come with the range-like series, such as [range area](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/') or [range bar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/').

* **originalMinValue**        
Specifies the first range value of the currently hovered point as it is set in the data source.
* **rangeValue1**        
Specifies the first range value of the currently hovered point. Differs from the **originalMinValue** when the axis [value type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') is specified explicitly. In this instance, the **rangeValue1** field contains the first range value in the specified type.
* **rangeValue1Text**   
Specifies the first range value of the currently hovered point with applied formatting if the **format** property is specified.
* **originalValue**        
Specifies the second range value of the currently hovered point as it is set in the data source.
* **rangeValue2**        
Specifies the second range value of the currently hovered point. Differs from the **originalValue** when the axis [value type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') is specified explicitly. In this instance, the **rangeValue2** field contains the second range value in the specified type.
* **rangeValue2Text**   
Specifies the second range value of the currently hovered point with applied formatting if the **format** property is specified.

The following fields come with financial chart series, such as [candle stick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') or [stock](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/').

* **originalOpenValue**    
Specifies the open value of the currently hovered point as it is set in the data source.
* **openValue**    
Specifies the open value of the currently hovered point. Differs from the **originalOpenValue** when the value in the data source is not in a numeric format.
* **openValueText**    
Specifies the open value of the currently hovered point with applied formatting if the **format** option is specified.
* **originalCloseValue**    
Specifies the close value of the currently hovered point as it is set in the data source.
* **closeValue**    
Specifies the close value of the currently hovered point. Differs from the **originalCloseValue** when the value in the data source is not in a numeric format.
* **closeValueText**    
Specifies the close value of the currently hovered point with applied formatting if the **format** option is specified.
* **originalHighValue**    
Specifies the high value of the currently hovered point as it is set in the data source.
* **highValue**    
Specifies the high value of the currently hovered point. Differs from the **originalHighValue** when the value in the data source is not in a numeric format.
* **highValueText**    
Specifies the high value of the currently hovered point with applied formatting if the **format** option is specified.
* **originalLowValue**    
Specifies the low value of the currently hovered point as it is set in the data source.
* **lowValue**    
Specifies the low value of the currently hovered point. Differs from the **originalLowValue** when the value in the data source is not in a numeric format.
* **lowValueText**    
Specifies the low value of the currently hovered point with applied formatting if the **format** option is specified.
* **reductionValue**    
Specifies the reduction value of the currently hovered point.
* **reductionValueText**    
Specifies the reduction value of the currently hovered point with applied formatting if the **format** option is specified.

The function's parameter represents the same object as the **this** object. If appropriate, you can use the function's parameter to obtain the value that is currently represented by a tooltip.

To get general information on data formatting, refer to the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') topic.