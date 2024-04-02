---
id: dxSplitterItem.size
type: Number | String
default: undefined
---
---
##### shortDescription
Specifies the size of an item (pane) in pixels or as a percentage. 

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
    <dx-splitter>
        <dxi-item ...
            size="50%"
        >
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter item-template="item">
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
            <Splitter itemRender={itemRender}>
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

- The **size** value must not exceed [maxSize](/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#maxSize) or be less then [minSize](/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#minSize).

- The total pane size should not exceed Splitter size.

[/note]