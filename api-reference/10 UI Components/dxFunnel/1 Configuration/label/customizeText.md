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
The [Item](/api-reference/10%20UI%20Components/dxFunnel/6%20Item '/Documentation/ApiReference/UI_Components/dxFunnel/Item/') object.

##### field(itemInfo.percent): Number
The item's percentage value.

##### field(itemInfo.percentText): String
The item's [formatted](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/label/format.md '/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/label/#format'') percentage value converted to a string.

##### field(itemInfo.value): Number
The raw item value.

##### field(itemInfo.valueText): String
The item's [formatted](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/label/format.md '/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/label/#format'') value converted to a string.

##### return: String
The text for the label to display.

---
#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart/"
}