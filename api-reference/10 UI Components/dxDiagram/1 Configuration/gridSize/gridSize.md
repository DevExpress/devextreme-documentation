---
id: dxDiagram.Options.gridSize
type: Number | Object
---
---
##### shortDescription
Specifies the grid pitch.

---
When the [showGrid](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/showGrid.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#showGrid') property is set to **true**, the Diagram UI component displays grid lines that help users align diagram elements. Use the **gridSize** property to specify the grid pitch.

The [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') property specifies the measurement unit.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            viewUnits: "cm",
            units: "cm",
            gridSize: {
                value: 2,
                items: [1, 2, 3]
            },
            // or
            // gridSize: 2,
        });
    });

##### Angular

    <!-- tab: app.component.html -->+
    <dx-diagram #diagram id="diagram" viewUnits="cm" units="cm">
        <dxo-grid-size 
            [value]="2" 
            [items]='[1, 2, 3]'>
        </dxo-grid-size>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram
        id="diagram"
        ref="diagram"
        units="cm"
        viewUnits="cm"
    >
        <DxGridSize
        :value="2"
        :items="['1', '2', '3']"
        />
    </DxDiagram>
    </template>

##### React

    <!-- tab: App.js -->
    class App extends React.Component {
        // ...
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} units="cm" viewUnits="cm">
                    <GridSize value={2} items={[1, 2, 3]} />
                </Diagram>
            );
        }
    }
    
---

#####See Also#####
- [snapToGrid](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/snapToGrid.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#snapToGrid')
