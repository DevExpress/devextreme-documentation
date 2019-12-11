---
default: undefined
acceptValues: 'multiple' | 'none' | 'single'
type: String
---
---
##### shortDescription
Specifies whether a single or multiple nodes can be in the selected state simultaneously.

---
In a *single* mode, only one node can be in the selected state at one moment. When the user selects another node, the formerly selected node becomes unselected. In a *multiple* mode, any number of nodes can be in the selected state.

To implement selection, assign the following or similar callback function to the [onClick](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onClick') option.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onClick: function (e) {
            e.node.select(!e.node.isSelected());
        }    
    };
    
When entering the selected state, a tile or a group of tiles changes its appearance. You can configure it using the **group**  | [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/group/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/selectionStyle/') and **tile**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/selectionStyle/') objects.

To control the selection feature in code, use the [isSelected](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isSelected'), [select(state)](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/select(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#selectstate') and [clearSelection()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/3%20Methods/clearSelection().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#clearSelection') methods. In addition, you can perform certain actions when a node enters/leaves the selected state. For this purpose, implement the [onSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onSelectionChanged') event handler. 

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SelectionMode` enum. This enum accepts the following values: `None`, `Single` and `Multiple`.