---
id: dxSplitterItem.size
type: Number | String | undefined
default: undefined
---
---
##### shortDescription
Specifies the initial size of an item (pane) in pixels or as a percentage of the component's total size. The Splitter initializes panes with equal sizes when this property is `undefined` (default).

---

Splitter preserves configured pane sizes across UI layout changes. If you update the component layout programmatically (modify an item's **size** property using [option()](/api-reference/10%20UI%20Components/Component/3%20Methods/option().md '/Documentation/ApiReference/UI_Components/dxSplitter/Methods/#option')), Splitter recalculates the sizes of all panes. This may shift the entire component layout. To prevent unintended changes to other panes, define **size** for every pane and reassign all pane sizes when you update the layout.

[note]

- Specify [minSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/minSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#minSize') and [maxSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/maxSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#maxSize') to limit pane sizes.
- Ensure the combined size of all panes does not exceed Splitter dimensions to avoid truncated or hidden pane content.

[/note]

---
##### jQuery

    <!-- tab: index.js -->
    $("#splitter").dxSplitter({
        items: [{
            size: "50%",
        }, /* ... */ ],
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter>
        <dxi-splitter-item
            size="50%"
        ></dxi-splitter-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter>
            <DxItem 
                size="50%"
            />
        </DxSplitter>
    </template>

    <script setup lang="ts">
    import { DxSplitter, DxItem } from "devextreme-vue/splitter";
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from "react";
    import { Splitter, Item } from "devextreme-react/splitter";

    export default function App() {
        return (
            <Splitter>
                <Item
                    size="50%"
                />
            </Splitter>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}
