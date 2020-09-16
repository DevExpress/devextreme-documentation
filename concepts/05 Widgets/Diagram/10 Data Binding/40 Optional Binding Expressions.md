The **Diagram** allows you to bind a number of shape and connector visual properties, like type, size, and style. 

[note] If a binding option is undefined, the corresponding shape or connector property value is maintained inside the loaded **Diagram** widget and is lost after a page is reloaded.
       
![Diagram - Data Binding Options](/images/diagram/binding-options.png)

<table class="dx-table">
    <tr>
        <th>Node option</th>
        <th>Value the option should return</th>
        <th>Sample return value</th>
    </tr>
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
        <td>A node's image URL or Base64 encoded image. This option is in effect for nodes of the <i>cardWithImageOnLeft</i>, <i>cardWithImageOnTop</i>, or <i>cardWithImageOnRight</i> type.</td>
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
</table>

[note] If you bind a **Diagram** to a [linear](/concepts/05%20Widgets/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/Widgets/Diagram/Data_Binding/#Linear_Array') or [hierarchical array](/concepts/05%20Widgets/Diagram/10%20Data%20Binding/30%20Hierarchical%20Array.md '/Documentation/Guide/Widgets/Diagram/Data_Binding/#Hierarchical_Array'), edge binding options are not in effect, because connectors are not bound to specific edges. This is why the storage of connector styles in a data source is not supported.

<table class="dx-table">
    <tr>
        <th>Edge option</th>
        <th>Value the option should return</th>
        <th>Sample return value</th>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#fromExpr">fromExpr</a></td>
        <td>An edge's start node key.</td>
        <td>"101",</td>
    </tr>    
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
        <td>"text" or { 0.3: "text1", 0.8: "text2" }</td>
    </tr>    
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toExpr">textStyleExpr</a></td>
        <td>An edge's text style.</td>
        <td>{ "font-weight": "bold"}</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toExpr">toExpr</a></td>
        <td>An edge's end node key.</td>
        <td>"102",</td>
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
</table>

You can set a binding option to a name of a data source field that provides item values, or to an expression that returns a constant value or calculates a value in runtime based on conditions.

![Diagram - Data Bound Diagram](/images/diagram/data-bound-diagram.png)

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
                childrenExpr: "children",
                heightExpr: "height",
                imageUrlExpr: "imageUrl",
                keyExpr: "key",
                leftExpr: "left",
                lockedExpr: "locked",
                styleExpr: function(obj) {if (obj.type.includes("Container")) return {"stroke": "red"}},
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
                fromLineEndExpr: function() {return "none"},
                fromPointIndexExpr: "fromPointIndex",
                keyExpr: "key",
                lineTypeExpr: function() {return "straight"},
                lockedExpr: "locked",
                pointsExpr: "points",
                styleExpr: function() {return ({"stroke-dasharray":"4"})},
                textExpr: "text",
                textStyleExpr: "textStyle",
                toExpr: "to",
                toLineEndExpr: function() {return "arrow"},
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
            fromPointIndex: 1,
            key: "1",
            locked: false,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
            text: "Task",
            textStyle: { "font-weight": "bold"},
            to: "102",
            toPointIndex: 11,
      },
    ];
