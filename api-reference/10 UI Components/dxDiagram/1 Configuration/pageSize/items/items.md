---
id: dxDiagram.Options.pageSize.items
type: Array<Object>
---
---
##### shortDescription
An array that specifies the page size items in the _Page Size_ combobox on _Properties Panel_.

---

---

##### jQuery 
    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            viewUnits: "cm",
            units: "cm",
  		    pageSize: {
                width: 21,
                height: 29.7,
                items: [
                    { text: "A4 (21cm x 29.7cm)", width: 21, height: 29.7 },{ text: "A3 (29.7cm x 42cm)", width: 29.7, height: 42 }
                ]
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" units="cm" viewUnits="cm">
        <dxo-page-size 
            [width]="10" 
            [height]="10"
            [items]='[{ text: "A4 (21cm x 29.7cm)", width: 21, height: 29.7 },
                      { text: "A3 (29.7cm x 42cm)", width: 29.7, height: 42 }]'>
        </dxo-page-size>
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
        <DxPageSize
        :width="10"
        :height="10"
        :items="[{ text: 'A4 (21cm x 29.7cm)', width: 21, height: 29.7 },
                        { text: 'A3 (29.7cm x 42cm)', width: 29.7, height: 42 }]"
        />
    </DxDiagram>
    </template>
##### React

    <!-- tab: App.js -->
    <Diagram id="diagram" ref={this.diagramRef} units="cm" viewUnits="cm">
    <PageSize width={10} height={10} items={[{ text: 'A4 (21cm x 29.7cm)', width: 21, height: 29.7 },
        { text: 'A3 (29.7cm x 42cm)', width: 29.7, height: 42 }]}/>
    </Diagram>

---

![Diagram control data toolbox](/images/diagram/pageSize.png)
