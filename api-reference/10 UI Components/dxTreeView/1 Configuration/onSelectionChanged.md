---
id: dxTreeView.Options.onSelectionChanged
type: function(e)
default: null
override: 
---
---
##### shortDescription
A function that is executed when a TreeView item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): dxTreeView
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---
This function is executed when:

- Users select an item [by click](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') or [using a checkbox](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode').

- One of the following methods is called: [selectAll()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectAll'), [unselectAll()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/unselectAll().md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#unselectAll'), [selectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectItemitemElement'), [unselectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#unselectItemitemElement').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/"
}