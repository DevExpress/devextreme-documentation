---
id: dxTreeMap.Options.selectionMode
type: Enums.SingleMultipleOrNone | undefined
default: undefined
---
---
##### shortDescription
Specifies whether a single or multiple nodes can be in the selected state simultaneously.

---
In a *single* mode, only one node can be in the selected state at one moment. When the user selects another node, the formerly selected node becomes unselected. In a *multiple* mode, any number of nodes can be in the selected state.

To implement selection, assign the following or similar callback function to the [onClick](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onClick') property.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onClick: function (e) {
            e.node.select(!e.node.isSelected());
        }    
    };
    
When entering the selected state, a tile or a group of tiles changes its appearance. You can configure it using the **group**  | [selectionStyle](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/group/selectionStyle '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/group/selectionStyle/') and **tile**.[selectionStyle](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/tile/selectionStyle '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/selectionStyle/') objects.

To control the selection feature in code, use the [isSelected](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#isSelected'), [select(state)](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/select(state).md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#selectstate') and [clearSelection()](/api-reference/10%20UI%20Components/dxTreeMap/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Methods/#clearSelection') methods. In addition, you can perform certain actions when a node enters/leaves the selected state. For this purpose, implement the [onSelectionChanged](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onSelectionChanged') event handler. 
