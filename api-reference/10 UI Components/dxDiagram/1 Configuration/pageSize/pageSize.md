---
id: dxDiagram.Options.pageSize
type: Object
---
---
##### shortDescription
Specifies a size of pages.

---
The [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') property specifies the page's measurement units.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            units: "cm",
		    pageSize: {
                width: 10,
                height: 10,
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->+
    <dx-diagram #diagram id="diagram" units="cm">
        <dxo-page-size [width]="10" [height]="10">
        </dxo-page-size>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram
        id="diagram"
        ref="diagram"
        units="cm"
    >
        <DxPageSize
        :width="10"
        :height="10"
        />
    </DxDiagram>
    </template>
##### React

    <!-- tab: App.js -->
    class App extends React.Component {
        // ...
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} units="cm">
                    <PageSize width={10} height={10} />
                </Diagram>
            );
        }
    }

---

[note]

- If you call the [import](/api-reference/10%20UI%20Components/dxDiagram/3%20Methods/import(data_updateExistingItemsOnly).md '/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#importdata_updateExistingItemsOnly') method, it applies the imported page settings and the **pageSize** property is ignored.

- Page settings are stored in a diagram model. The **pageSize** property is not in effect if the model is read-only (the [readOnly](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#readOnly')  property is set to **true**).

[/note]
