---
id: BaseGauge.Options.subvalues
type: Array<Number>
default: undefined
firedEvents: optionChanged
notUsedInTheme: 
---
---
##### shortDescription
Specifies a set of subvalues to be designated by the subvalue indicators.

---
In addition to one main value, you can indicate several extra values on a gauge. These are called *subvalues*. To specify the subvalues, assign an array with them to the **subvalues** field.

You can obtain and change the subvalues at runtime. In order to do this, use the [subvalues()](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/3%20Methods/subvalues().md '{basewidgetpath}/Methods#subvalues') and [subvalues(subvalues)](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/3%20Methods/subvalues(subvalues).md '{basewidgetpath}/Methods#subvaluessubvalues') methods. Note that in that case, you need to initialize the **subvalues** option at least with an empty array.

    <!--JavaScript-->var gaugeOptions = {
        // ...
        subvalues: []    
    }

Subvalues are designated by subvalue indicators. You can customize the appearance of these indicators using the [subvalueIndicator](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/5%20Indicator%20Types/CommonIndicator '{basewidgetpath}/Configuration/subvalueIndicator') configuration object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/UpdateCircularGaugeDataAtRuntime/"
}