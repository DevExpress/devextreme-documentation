The Diagram can load external tree-like and graph structures. The supported data structures are listed below.

- [Node and Edge Arrays](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/10%20Node%20and%20Edge%20Arrays.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Node_and_Edge_Arrays'): the information about nodes is maintained separately from the information about edges.
- [Linear Array](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array'): nodes are maintained in a linear data structure and are connected by _Key_ - _Parent Key_ reference.
- [Hierarchical Array](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/30%20Hierarchical%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Hierarchical_Array'): nodes are maintained in hierarchical data structure.

When you bind a Diagram UI component to a data source, you should specify properties that allow the UI component to create the diagram structure. The supported data structures differ in required properties.

<table class="dx-table">
    <tr>
        <th>Required Properties</th>
        <th>Node and Edge Arrays</th>
        <th>Linear Array</th>
        <th>Hierarchical Array</th>
    </tr>
    <tr style="text-align:center;">
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#keyExpr">nodes.keyExpr</a></td>
        <td><img src="/images/diagram/yes.png"></td>
        <td><img src="/images/diagram/yes.png"></td>
        <td><img src="/images/diagram/yes.png"></td>
    </tr>
    <tr style="text-align:center;">
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#keyExpr">edges.keyExpr</a></td>
        <td><img src="/images/diagram/yes.png"></td>
        <td><img src="/images/diagram/no.png"></td>
        <td><img src="/images/diagram/no.png"></td>
    </tr>
    <tr style="text-align:center;">
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#parentKeyExpr">nodes.parentKeyExpr</a></td>
        <td><img src="/images/diagram/no.png"></td>
        <td><img src="/images/diagram/yes.png"></td>
        <td><img src="/images/diagram/no.png"></td>
    </tr>
    <tr style="text-align:center;">
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#itemsExpr">nodes.itemsExpr</a></td>
        <td><img src="/images/diagram/no.png"></td>
        <td><img src="/images/diagram/no.png"></td>
        <td><img src="/images/diagram/yes.png"></td>
    </tr>
</table>