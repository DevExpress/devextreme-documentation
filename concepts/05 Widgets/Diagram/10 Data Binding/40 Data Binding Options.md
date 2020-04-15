The **Diagram** widget allows you to bind [node](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes) and [edge](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges) settings to a database. Binding options have postfix _'Expr'_ and can contain a data source field name or an expression that returns the corresponding node or edge data.

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgItems
                }),
                keyExpr: "ID",
                textExpr: "Title",
                parentKeyExpr: "Head_ID",
                typeExpr: itemTypeExpr,
                styleExpr: itemStyleExpr,
            },
        });
        function itemTypeExpr(obj, value) {
          return obj.type === "group" ? "ellipse" : "rectangle";
        }
        function itemStyleExpr(obj) {
            return { "stroke": "red" };
        }
    });
   
        
![Diagram - Data Binding Options](/images/diagram/binding-options.png)

When you bind **Diagram** to a data source, specify widget options to allow diagram structure creation. Required options depend on the source data structure.

- [Node and Edge Arrays](/Documentation/Guide/Widgets/Diagram/Data_Binding/#Node_and_Edge_Arrays). Required options: [nodes.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr'), [edges.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#keyExpr'), [edges.fromExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/fromExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#fromExpr'), [edges.toExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/toExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toExpr')

- [Linear Array](/Documentation/Guide/Widgets/Diagram/Data_Binding/#Linear_Array). Required node options: [keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr'), [parentKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#parentKeyExpr')

- [Hierarchical Array](/Documentation/Guide/Widgets/Diagram/Data_Binding/#Hierarchical_Array). Required node options: [keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr'), [itemsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#itemsExpr')

See tables below for a list of all node and edge binding options.
<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Node Option</th>
      <th>Value the option should return</th>
      <th>Sample return value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#containerChildrenExpr">containerChildrenExpr</a></td>
      <td>A container's nested items. This option is in effect for <i>verticalContainer</i> or <i>horizontalContainer</i> nodes. Excludes <a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#containerKeyExpr">containerKeyExpr</a>.</td>
      <td>[{"id":"112","text":"Ana\nTrujillo"}, {"id":"113","text":"Antonio\nMoreno"}]</td>    
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#containerKeyExpr">containerKeyExpr</a></td>
      <td>A parent container node key. The parent container node must be of the <i>verticalContainer</i> or <i>horizontalContainer</i> type. Excludes <a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#containerChildrenExpr">containerChildrenExpr</a>.</td>
      <td>"102"</td>
    </tr>   
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#heightExpr">heightExpr</a></td>
      <td>A node's height, in <a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units">units</a>.</td>
      <td>0.625</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#imageUrlExpr">imageUrlExpr</a></td>
      <td>A node image's URL. This option is in effect for nodes of the <i>cardWithImageOnLeft</i>, <i>cardWithImageOnTop</i>, or <i>cardWithImageOnRight</i> type.</td>
      <td>"images/employees/30.png"</td>
    </tr> 
    <tr>
    <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#leftExpr">leftExpr</a></td>
      <td>The x-coordinate of a node's left border, in <a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units">units</a>.</td>
      <td>0.5</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#lockedExpr">lockedExpr</a></td>
      <td>A value that indicates whether a node is locked.</br>Should return <i>true</i> or <i>false</i>.</td>
      <td>true</td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#styleExpr">styleExpr</a></td>
      <td>A node's style.</td>
      <td>{ "stroke": "red" }</td>
    </tr>
    <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#textExpr">textExpr</a></td>
      <td>A node's text.</td>
      <td>"ASP.NET"</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#textStyleExpr">textStyleExpr</a></td>
      <td>A node's text style.</td>
      <td>{ "font-weight": "bold", "text-decoration": "underline" }</td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#topExpr">topExpr</a></td>
      <td>The y-coordinate of a node's top border, in <a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units">units</a>.</td>
      <td>0.875</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#typeExpr">typeExpr</a></td>
      <td>A node's shape type. Built-in shape types are shown in the <a href="/Documentation/Guide/Widgets/Diagram/Shape_Types/">Shape Types</a> section.</td>
      <td>"horizontalContainer"</td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#widthExpr">widthExpr</a></td>
      <td>A node's width, in <a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units">units</a>.</td>
      <td>2</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#zIndexExpr">zIndexExpr</a></td>
      <td>A node's z-index.</td>
      <td>1</td>
    </tr>
    </tbody>
  </table>
</div>

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Edge Option</th>
      <th>Value the option should return</th>
      <th>Sample return value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#fromLineEndExpr">fromLineEndExpr</a></td>
      <td>An edge's line start tip.</br>Should return <i>"arrow"</i>, <i>"filledTriangle"</i>, <i>"outlinedTriangle"</i>, or <i>"none"</i>.</td>
      <td>"none"</td>
    </tr>   
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#fromPointIndexExpr">fromPointIndexExpr</a></td>
      <td>A shape's connection point index where an edge begins.</td>
      <td>1</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#lineTypeExpr">lineTypeExpr</a></td>
      <td>An edge's line type.</br>Should return <i>"orthogonal"</i> or <i>"straight"</i>.</td>
      <td>"straight"</td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#lockedExpr">lockedExpr</a></td>
      <td>A value that indicates whether a node is locked.</br>Should return <i>true</i> or <i>false</i>.</td>
      <td>false</td>
    </tr> 
    <tr>
    <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#pointsExpr">pointsExpr</a></td>
      <td>An edge's key points.</td>
      <td>[{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}]</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#styleExpr">styleExpr</a></td>
      <td>An edge's style.</td>
      <td>{"stroke-dasharray":"4"}</td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#textExpr">textExpr</a></td>
      <td>An edge's text.</td>
      <td>"yes"</td>
    </tr>    
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toExpr">textStyleExpr</a></td>
      <td>An edge's text style.</td>
      <td>{ "font-weight": "bold"}</td>
    </tr>
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toLineEndExpr">toLineEndExpr</a></td>
      <td>An edge's line end tip.</br>Should return <i>"arrow"</i>, <i>"filledTriangle"</i>, <i>"outlinedTriangle"</i>, or <i>"none"</i>.</td>
      <td>"filledTriangle"</td>
    </tr>
    <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toPointIndexExpr">toPointIndexExpr</a></td>
      <td>A shape's connection point index where an edge ends.</td>
      <td>11</td>
    </tr> 
    <tr>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#zIndexExpr">zIndexExpr</a></td>
      <td>A edge's z-index.</td>
      <td>0</td>
    </tr>
    </tbody>
  </table>
</div>

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgItems
                }),
                autoLayout: {
                    type: "off"
                },
                containerChildrenExpr: "children",
                heightExpr: "height",
                imageUrlExpr: "imageUrl",
                keyExpr: "key",
                leftExpr: "left",
                lockedExpr: "locked",
                styleExpr: "style",
                textExpr: "text",
                textStyleExpr: "textStyle",
                topExpr: "top",
                typeExpr: "type",
                widthExpr: "width",
                zIndexExpr: "zIndex",
            },
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgLinks
                }),
                fromExpr: "from",
                fromLineEndExpr: "fromLineEnd",
                fromPointIndexExpr: "fromPointIndex",
                keyExpr: "key",
                lineTypeExpr: "lineType",
                lockedExpr: "locked",
                pointsExpr: "points",
                styleExpr: "style",
                textExpr: "text",
                textStyleExpr: "textStyle",
                toExpr: "to",
                toLineEndExpr: "toLineEnd",
                toPointIndexExpr: "toPointIndex",
            },
        });
    });

    <!-- tab: data.js -->
    var orgItems = [
      {  
            height: 0.625,
            key: "101",
            left: 0.5,
            locked: true,
            style: { "stroke": "red" },
            text: "Product Manager",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.875,
            type: "rectangle",
            width: 1,
            zIndex: 2,
      },
      {  
            height: 1.375,
            key: "102",
            left: 2.5,
            locked: false,
            style: { "stroke": "red" },
            text: "Team",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.5,
            type: "horizontalContainer",
            width: 2,
            zIndex: 1,
            children: [
            {  
                height: 0.5,
                imageUrl: "images/employees/30.png",
                key: "103",
                left: 2.875,
                text: "Team Leader",
                top: 0.625,
                type: "cardWithImageOnLeft",
                width: 1.5,
            },
            {  
                height: 0.5,
                key: "104",
                left: 2.875,
                text: "Developers",
                top: 1.25,
                type: "rectangle",
                width: 1.5,
            },
      
        ]
        },
    ];
    var orgLinks = [  
      {  
            from: "101",
            fromLineEnd: "none",
            fromPointIndex: 1,
            key: "1",
            lineType: "straight",
            locked: false,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
            style: {"stroke-dasharray":"4"},
            text: "Task",
            textStyle: { "font-weight": "bold"},
            to: "102",
            toLineEnd: "arrow",
            toPointIndex: 11,
      },
    ];

![Diagram - Data Bound Diagram](/images/diagram/data-bound-diagram.png)