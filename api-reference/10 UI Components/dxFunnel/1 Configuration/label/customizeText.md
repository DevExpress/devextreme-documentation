---
id: dxFunnel.Options.label.customizeText
type: function(itemInfo)
notUsedInTheme: 
---
---
##### shortDescription
Customizes labels' text.

##### param(itemInfo): Object
Information on the funnel item.

##### field(itemInfo.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

##### field(itemInfo.percent): Number
The item's percentage value.

##### field(itemInfo.percentText): String
The item's [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#format') percentage value converted to a string.

##### field(itemInfo.value): Number
The raw item value.

##### field(itemInfo.valueText): String
The item's [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#format') value converted to a string.

##### return: String
The text for the label to display.

---
#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart/"
}