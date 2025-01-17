---
id: dxSplitterItem.size
type: Number | String | undefined
default: undefined
---
---
##### shortDescription
Specifies the initial size of an item (pane) in pixels or as a percentage. The size changes after any layout alteration.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [
                {
                    // ...
                    size: "50%",
                }
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter ... >
        <dxi-item ...
            size="50%"
        >
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter ... >
            <DxItem ... 
                size="50%"
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
                    size="50%"
                />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---

If you do not specify pane sizes, the UI component splits up the panes automatically with even distribution.

[note]

- You can use [minSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/minSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#minSize') and [maxSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/maxSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#maxSize') properties to specify size constraints.

- The total pane size should not exceed Splitter size.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}