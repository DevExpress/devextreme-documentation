The **Context Toolbox** appears when user drag a connector from a shape and drop it without connecting it to another shape. Users can select a shape in this toolbox to insert it at the end of the connector.

The following example demonstrates how to display different shapes collection in the context toolbox depending on the connector's start node type.

---
##### jQuery

    $(function() {
        var currentShapeId;
        var diagram = $("#diagram").dxDiagram({
                onRequestEditOperation: function(e) {
                    var diagram = $("#diagram").dxDiagram().dxDiagram("instance");
                    if (e.operation === "changeConnection" && e.args.connector)
                        // Gets the connector's start node identifier
                        this.currentShapeId = e.args.connector.fromId;
                    if (e.operation === "addShapeFromToolbox") {
                        // Gets the connector's start node type
                        var currentShape = diagram.getItemById(this.currentShapeId);
                        if (e.args.shapeType === "terminator") 
                            // If the connector's start node type is "decision"
                            if (currentShape && currentShape.type === "decision")
                                // Hides the "terminator" shape in the context toolbox
                                e.allowed = false;
                    } 
                },
                contextToolbox: {
                    enabled: true,
                    shapeIconsPerRow: 3,
                    shapes: [ "process", "decision", "terminator" ],
                },
                // ...
            })
            .dxDiagram("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onRequestEditOperation)="requestEditOperation($event)">
        <dxo-context-toolbox [enabled]="true" [shapes]='["process", "decision", "terminator"]' [shapeIconsPerRow]="3">
        </dxo-context-toolbox>
        <!-- ... -->
    </dx-diagram>

    <!-- tab: app.component.ts -->
    @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent
    currentShapeId : number;

    requestEditOperation(e){
        var diagram = this.diagram.instance;
        if (e.operation === "changeConnection" && e.args.connector)
            // Gets the connector's start node identifier
            this.currentShapeId = e.args.connector.fromId;
        if (e.operation === "addShapeFromToolbox") {
            // Gets the connector's start node type
            var currentShape = diagram.getItemById(this.currentShapeId);
            if (e.args.shapeType === "terminator") 
                // If the connector's start node type is "decision"
                if (currentShape && currentShape.type === "decision")
                    // Hides the "terminator" shape in the context toolbox
                       e.allowed = false;
        } 
    }
// ...

##### Vue

    <DxDiagram>
        id="diagram"
        ref="diagram"
        @request-edit-operation="onRequestEditOperation">
    </DxDiagram>
    <DxContextToolbox
        :shape-icons-per-row="2"
        :width="100"
        :shapes="['process', 'decision', 'terminator']"
    />
    // ...
    import { DxDiagram, DxContextToolbox} from 'devextreme-vue/diagram';
    var currentShapeId;
    export default {
        components: {
            DxDiagram, DxContextToolbox
        },
        methods: {
            onRequestEditOperation(e) {
                var diagram = this.$refs['diagram'].instance;
                if (e.operation === "changeConnection" && e.args.connector)
                    // Gets the connector's start node identifier
                    this.currentShapeId = e.args.connector.fromId;
                if (e.operation === "addShapeFromToolbox") {
                    // Gets the connector's start node type
                    var currentShape = diagram.getItemById(this.currentShapeId);
                    if (e.args.shapeType === "terminator")
                        // If the connector's start node type is "decision"
                        if (currentShape && currentShape.type === "decision")
                            // Hides the "terminator" shape in the context toolbox
                            e.allowed = false;
                } 
            }
        },
        // ...
    };

##### React

    import Diagram, { ContextToolbox,} from 'devextreme-react/diagram';
    const shapes = ['process', 'decision', 'terminator'];
    var currentShapeId;
    <Diagram id="diagram" ref={this.diagramRef} onRequestEditOperation={this.onRequestEditOperation} >
        <ContextToolbox shapeIconsPerRow={3} width={100} shapes={shapes}>
        </ContextToolbox>
        <!-- ... -->
    </Diagram>
    onRequestEditOperation(e) {
        var diagram = this.diagramRef.current.instance;
        if (e.operation === 'changeConnection' && e.args.connector)
            // Gets the connector's start node identifier
            this.currentShapeId = e.args.connector.fromId;
        if (e.operation === 'addShapeFromToolbox') {
            // Gets the connector's start node type
            var currentShape = diagram.getItemById(this.currentShapeId);
            if (e.args.shapeType === 'terminator')
                // If the connector's start node type is "decision" 
                if (currentShape && currentShape.type === 'decision')
                    // Hides the "terminator" shape in the context toolbox
                    e.allowed = false;
        }
    }

---