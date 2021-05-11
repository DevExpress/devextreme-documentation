---
id: dxFunnel.Options.onSelectionChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a funnel item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): dxFunnel
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.item): dxFunnelItem
The [Item](/api-reference/10%20UI%20Components/dxFunnel/6%20Item '/Documentation/ApiReference/UI_Components/dxFunnel/Item/') object.

##### field(e.model): any
The model data. Available only if you use Knockout.

---
To identify whether the selection has been applied or canceled, call the funnel item's [isSelected()](/api-reference/10%20UI%20Components/dxFunnel/6%20Item/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxFunnel/Item/Methods/#isSelected') method.

See [onItemClick](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#onItemClick') to learn how to implement selection.

#####See Also#####
- [selectionMode](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#selectionMode')
- **item**.[selectionStyle](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/item/selectionStyle '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/item/selectionStyle/')