---
id: dxSplitterItem.maxSize
type: Number | String
default: undefined
---
---
##### shortDescription
Specifies the maximum size of an item (pane) in pixels or as a percentage. 

---
---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [
                {
                    // ...
                    maxSize: "500",
                }
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter>
        <dxi-item ...
            maxSize="500"
        >
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter item-template="item">
            <DxItem ... 
                maxSize="500"
            />
        </DxSplitter>
    </template>

    <script setup>
    import { DxSplitter, DxItem } from "devextreme-vue/splitter";
    </script>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Splitter, { Item } from "devextreme-react/splitter";

    const App = () => (
        <React.Fragment>
            <Splitter itemRender={itemRender}>
                <Item ... 
                    maxSize="500"
                />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---