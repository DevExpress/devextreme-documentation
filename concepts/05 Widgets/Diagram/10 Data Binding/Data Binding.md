The **Diagram** can load external tree-like and graph structures. The supported data structures are listed below.


- [Node and Edge Arrays](/Documentation/Guide/Widgets/Diagram/Data_Binding/#Node_and_Edge_Arrays): the information about nodes is maintained separately from the information about edges.
- [Linear Array](/Documentation/Guide/Widgets/Diagram/Data_Binding/#Linear_Array): nodes are maintained in a linear data structure and are connected by _Key_ - _Parent Key_ relation.
- [Hierarchical Array](/Documentation/Guide/Widgets/Diagram/Data_Binding/#Hierarchical_Array): nodes are maintained in hierarchical data structure.

When you bind a **Diagram** widget to a data source, you should specify options that allow the widget to create the diagram structure. The supported data structures differ in required options.

<div class="simple-table" style="text-align: center;">
  <table>
    <thead>
    <tr>
      <th>Required Options</th>
      <th>Node and Edge Arrays</th>
      <th>Linear Array</th>
      <th>Hierarchical Array</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr">nodes.keyExpr</a></td>
      <td><img src="/Content/images/doc/20_1/diagram/yes.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/yes.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/yes.png"></td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#keyExpr">edges.keyExpr</a></td>
      <td><img src="/Content/images/doc/20_1/diagram/yes.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/no.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/no.png"></td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#parentKeyExpr">nodes.parentKeyExpr</a></td>
      <td><img src="/Content/images/doc/20_1/diagram/no.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/yes.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/no.png"></td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#itemsExpr">nodes.itemsExpr</a></td>
      <td><img src="/Content/images/doc/20_1/diagram/no.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/no.png"></td>
      <td><img src="/Content/images/doc/20_1/diagram/yes.png"></td>
    </tr>
    </tbody>
  </table>
</div>