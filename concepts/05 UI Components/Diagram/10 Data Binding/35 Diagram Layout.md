The UI component creates a diagram layout based on the algorithm specified by the [autoLayout.orientation](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/orientation.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#orientation') and [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                autoLayout: {
                    orientation: "horizontal"
                    type: "tree",
                },
                ...
            },
        });
    });

---

You can create a diagram layout based on shape coordinates maintained in a data source. Set the [leftExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr') and [topExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#topExpr') properties to names of data source fields that provide shape coordinates. 

If you bind a Diagram to an array of edges, you can specify a shape's connection point where an edge begins ([fromPointIndexExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/fromPointIndexExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#fromPointIndexExpr')) and ends ([toPointIndexExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/toPointIndexExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toPointIndexExpr')) and provide additional points for connectors with the [pointsExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/pointsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#pointsExpr') property.

Shape and edge point coordinates are specified in [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units').

[note]

If the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md 'Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') property is set to **auto** (default value), and both the [leftExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr') and [topExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#topExpr') properties are specified, the autolayout feature is disabled. The UI component creates a diagram layout based on the provided coordinates. If the position properties are not specified, the **auto** type denotes the **layered** layout.

If the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md 'Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') property is set to **layered** or **tree**, predefined shape coordinates ([leftExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr') and [topExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#topExpr')) and edge points ([pointsExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/pointsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#pointsExpr')) are ignored.

[/note]

---
##### jQuery

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
                keyExpr: "key",
                leftExpr: "left",
                textExpr: "text",
                topExpr: "top",
            },
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgLinks
                }),
                keyExpr: "key",
                fromExpr: "from",
                toExpr: "to",
                fromPointIndexExpr: "fromPoint",
                toPointIndexExpr: "toPoint",
                pointsExpr: "points",
            },
            units: "in",
        });
    });

    <!-- tab: data.js -->
    var orgItems = [
      {  
            key: "101",
            left: 0.5,
            text: "Product Manager",
            top: 0.875,
      },
      {  
            key: "102",
            left: 2.5,
            text: "Team",
            top: 0.5,
        },
    ];
    var orgLinks = [  
      {  
            key: "1",
            from: "101",
            to: "102",
            fromPoint: 1,
            toPoint: 3,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
      },
    ];

---

The Diagram UI component reloads the diagram every time the data source changes. The [onRequestLayoutUpdate](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/onRequestLayoutUpdate.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#onRequestLayoutUpdate') function is executed after diagram data is reloaded and allows you to specify whether the UI component should update the diagram layout.