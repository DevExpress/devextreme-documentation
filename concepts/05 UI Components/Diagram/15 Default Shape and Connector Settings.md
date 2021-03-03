The Diagram component allows you to specify default settings for its items in the following ways:

* Specify settings contained in the [defaultItemProperties](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/defaultItemProperties/) property.
* Specify data-binding expressions contained in the [edges](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/) and [nodes](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/) properties to define common settings for data-bound edges and nodes.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            defaultItemProperties: {
                connectorLineType: "straight",
                style: "stroke-width: 3px",
            },
            nodes: {
                // ...
                textStyleExpr: function() {return "fill: green"},
            },
            edges: {
                // ...
                styleExpr: function() {return "stroke: red"},
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxo-default-item-properties connectorLineType="straight" style="stroke-width: 3px">
        </dxo-default-item-properties>
        <dxo-nodes ... [textStyleExpr]="textStyleExpr"></dxo-nodes>
        <dxo-edges ... [styleExpr]="styleExpr"></dxo-edges>
    </dx-diagram>

    <!-- tab: app.component.html -->
    export class AppComponent {
        //...
        styleExpr(obj) {
            return { "stroke": "red" };
        }
        textStyleExpr(obj) {
            return { "fill": "green" };
        }
    }
##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxDefaultItemProperties :connector-line-type="'straight'" :style="'stroke-width: 3px'" />
        <DxNodes
        ...
        :text-style-expr="textStyleExpr"
        />
        <DxEdges
        ...
        :style-expr="styleExpr"
        />
    </DxDiagram>
    </template>
    <script>
    import { DxDiagram, DxNodes, DxEdges, DxDefaultItemProperties} from 'devextreme-vue/diagram';

    export default {
        components: {
            DxDiagram, DxNodes, DxEdges, DxDefaultItemProperties
        },
        data() {...},
        methods: {
            textStyleExpr() {
                return 'fill: green';
            },
            styleExpr() {
                return 'stroke: red';
            },
        }
    };
    </script>



##### React

    <!-- tab: App.js -->
    import Diagram, { Nodes, Edges, DefaultItemProperties} from 'devextreme-react/diagram';
    // ...
    render() {
        return (
        <Diagram id="diagram">
            <DefaultItemProperties connectorLineType="straight"/>
            <Nodes ... textStyleExpr={this.itemTextStyleExpr} />
            <Edges ... styleExpr={this.itemStyleExpr}/>
        </Diagram>
        );
    }
    itemTextStyleExpr(obj) {
        return { 'fill': 'green' };
    }
    itemStyleExpr(obj) {
        return { 'stroke': 'red' };
    }


##### ASP.NET Core Controls

    <!-- tab: DiagramPage.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .DefaultItemProperties(prop=> prop
            .Style("stroke-width: 3px")
            .ConnectorLineType(DiagramConnectorLineType.Straight)
        )
        .Nodes(ns => ns
            // ...
            .TextStyleExpr(new JS("textStyleExpr"))
        )
        .Edges(ns => ns
            // ...
            .StyleExpr(new JS("styleExpr"))
        )
    )
    <script type="text/javascript">
        function textStyleExpr(obj) {
            return "fill: green";
        }
        function styleExpr(obj) {
            return "stroke: red";
        }
    </script>

##### ASP.NET MVC Controls

    <!-- tab: DiagramPage.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .DefaultItemProperties(prop=> prop
            .Style("stroke-width: 3px")
            .ConnectorLineType(DiagramConnectorLineType.Straight)
        )
        .Nodes(ns => ns
            // ...
            .TextStyleExpr(new JS("textStyleExpr"))
        )
        .Edges(ns => ns
            // ...
            .StyleExpr(new JS("styleExpr"))
        )
    )
    <script type="text/javascript">
        function textStyleExpr(obj) {
            return "fill: green";
        }
        function styleExpr(obj) {
            return "stroke: red";
        }
    </script>

---