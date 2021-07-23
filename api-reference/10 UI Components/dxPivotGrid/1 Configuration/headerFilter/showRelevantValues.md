---
id: dxPivotGrid.Options.headerFilter.showRelevantValues
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to show all field values or only those that satisfy the other applied filters.

---
For example, a PivotGrid contains Continent and Country fields, and a user selects Europe in the Continent's header filter. If the Country's header filter should filter out all non-European countries, set this property to **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/HeaderFilter/"
}