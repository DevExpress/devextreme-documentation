The following code snippet demonstrates **itemTemplate** usage. Panes have random background colors, and their content includes an order number.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [
                // ...
            ],
            itemTemplate: function (data, index, element) {
                let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                $(element).css('background-color', randomColor);
                return index + 1;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter itemTemplate="item">
        <dxi-item ...></dxi-item>
        <dxi-item ...></dxi-item>
        <div
            *dxTemplate="let data of 'item'; let index = index" 
            [style.background-color]="getRandomColor()"
        >
            {{index + 1}}
        </div>
    </dx-splitter>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        constructor() {
            // ...
        }

        getRandomColor() {
            return "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter item-template="item">
            <DxItem ... />
            <DxItem ... />
            <template #item="{ data, index }">
                <div :style="{ backgroundColor: getRandomColor() }">{{ index + 1 }}</div>
            </template>
        </DxSplitter>
    </template>

    <script setup>
    import { DxSplitter, DxItem } from "devextreme-vue/splitter";
    const getRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Splitter, { Item } from "devextreme-react/splitter";

    const itemRender = (data, index) => {
        return (
            <div style={{ backgroundColor: getRandomColor(), height: "100%" }}>
                {index + 1}
            </div>
        );
    };

    const getRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };

    const App = () => (
        <React.Fragment>
            <Splitter itemRender={itemRender}>
                <Item ... />
                <Item ... />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')