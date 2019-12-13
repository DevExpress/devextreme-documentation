---
id: dxFunnel.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxFunnel.selectionChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a funnel item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
To identify whether the selection has been applied or canceled, call the funnel item's [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isSelected') method.

See [onItemClick](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick') to learn how to implement selection.

#####See Also#####
- [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#selectionMode')
- **item**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/item/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/item/selectionStyle/')