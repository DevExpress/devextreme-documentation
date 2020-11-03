---
id: BaseGaugeScale.customTicks
type: Array<Number>
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies an array of custom major ticks.

---
If you set the start and end scale values, major ticks will automatically be calculated and displayed. If you need to add intermediate (minor) ticks between the major ticks, set the **visible** property of the **minorTick** configuration object to **true**. If you need to display a custom ticks set, you can configure it using the **customTicks** property. Assign an array of custom major tick values to this property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleCustomTickValues/"
}