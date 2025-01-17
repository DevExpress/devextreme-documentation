---
id: dxSplitterItem.minSize
type: Number | String | undefined
default: undefined
---
---
##### shortDescription
Specifies the minimum size of an item (pane) in pixels or as a percentage.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [
                {
                    // ...
                    minSize: "30%",
                }
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter ... >
        <dxi-item ...
            minSize="30%"
        >
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter ... >
            <DxItem ... 
                minSize="30%"
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
                    minSize="30%"
                />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}