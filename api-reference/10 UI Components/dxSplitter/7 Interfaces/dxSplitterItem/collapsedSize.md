---
id: dxSplitterItem.collapsedSize
type: Number | String | undefined
default: undefined
---
---
##### shortDescription
Specifies the size of a collapsible item (pane) when collapsed in pixels or as a percentage.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [
                {
                    // ...
                    collapsedSize: "20px",
                }
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter ... >
        <dxi-item ...
            collapsedSize="20px"
        >
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter ... >
            <DxItem ... 
                collapsedSize="20px"
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
                    collapsedSize="20px"
                />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---

[note] The **collapsedSize** value must not exceed [maxSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/maxSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#maxSize') or be less then [minSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/minSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#minSize').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}