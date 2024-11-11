---
id: BaseGauge.Options.value
type: Number | undefined
default: undefined
firedEvents: optionChanged
notUsedInTheme: 
---
---
##### shortDescription
Specifies the main value on a gauge.

---
The main value is designated by the value indicator. To customize the appearance of the value indicator, use the **valueIndicator** configuration object.

You can obtain and change the gauge value at runtime. In order to do this, use the **value()** and **value(value)** methods.

Only one main value can be indicated on a gauge. Besides the main gauge value, you can indicate several extra values. Refer to the **subvalues** property description for more information.

#####See Also#####
- **Update Data Demo**: [CircularGauge](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/UpdateCircularGaugeDataAtRuntime) | [LinearGauge](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/UpdateLinearGaugeDataAtRuntime)