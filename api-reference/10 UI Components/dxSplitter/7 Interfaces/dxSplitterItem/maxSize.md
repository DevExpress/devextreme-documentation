---
id: dxSplitterItem.maxSize
type: Number | String | undefined
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
                    maxSize: "500px",
                }
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter ... >
        <dxi-item ...
            maxSize="500px"
        >
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter ... >
            <DxItem ... 
                maxSize="500px"
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
            <Splitter ... >
                <Item ... 
                    maxSize="500px"
                />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}