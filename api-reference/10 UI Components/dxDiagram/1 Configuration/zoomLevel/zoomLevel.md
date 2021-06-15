---
id: dxDiagram.Options.zoomLevel
type: Number | Object
default: 1
---
---
##### shortDescription
Specifies the zoom level.

---

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            zoomLevel: {
                value: 0.75,
                items: [0.5, 0.75, 1, 1.5]
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->+
    <dx-diagram #diagram id="diagram">
        <dxo-zoom-level 
            [value]="0.75" 
            [items]='[0.5, 0.75, 1, 1.5]'>
        </dxo-zoom-level>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxZoomLevel
        :value="0.75"
        :items="['0.5', '0.75', '1', '1.5']"
        />
    </DxDiagram>
    </template>

##### React

    <!-- tab: App.js -->
    class App extends React.Component {
        // ...
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} >
                    <ZoomLevel value={0.75} items={['0.5', '0.75', '1', '1.5']}/>
                </Diagram>
            );
        }
    }

---
