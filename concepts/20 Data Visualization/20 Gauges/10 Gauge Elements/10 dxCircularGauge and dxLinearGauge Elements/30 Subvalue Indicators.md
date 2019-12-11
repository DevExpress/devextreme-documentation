Subvalue indicators are pointers that indicate extra values on a gauge. These extra values are called *"subvalues"*. There is a set of predefined subvalue indicator types for the **CircularGauge** and **LinearGauge** widgets.

####CircularGauge####

- [RangeBar](/api-reference/20%20Data%20Visualization%20Widgets/35%20dxCircularGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RangeBar/')
- [RectangleNeedle](/api-reference/20%20Data%20Visualization%20Widgets/35%20dxCircularGauge/5%20Indicator%20Types/RectangleNeedle '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RectangleNeedle/')
- [TextCloud](/api-reference/20%20Data%20Visualization%20Widgets/35%20dxCircularGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/20%20Data%20Visualization%20Widgets/35%20dxCircularGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleMarker/')
- [TriangleNeedle](/api-reference/20%20Data%20Visualization%20Widgets/35%20dxCircularGauge/5%20Indicator%20Types/TriangleNeedle '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleNeedle/')
- [TwoColorNeedle](/api-reference/20%20Data%20Visualization%20Widgets/35%20dxCircularGauge/5%20Indicator%20Types/TwoColorNeedle '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TwoColorNeedle/')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementsdifferentsubvalueindicatortypes/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

####LinearGauge####

- [Circle](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge/5%20Indicator%20Types/Circle '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Circle/')
- [RangeBar](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/RangeBar/')
- [Rectangle](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge/5%20Indicator%20Types/Rectangle '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rectangle/')
- [Rhombus](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge/5%20Indicator%20Types/Rhombus '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rhombus/')
- [TextCloud](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TriangleMarker/')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsdifferentsubvalueindicatortypes/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

In order to customize the appearance of the subvalue indicators, use the **subvalueIndicator** configuration object. Set its **type** option and then the required type-specific options. The type specific options are listed within the widget's **Indicator Types** reference section. 

	<!--JavaScript-->var gaugeOptions = {
        subvalueIndicator: {
            type: 'textCloud',
			//specify type-specific options
        }
    };

[note] Although a gauge can indicate several subvalues at once, you cannot customize a particular subvalue indicator. The options specified by the **subvalueIndicator** object apply to all subvalue indicators.

