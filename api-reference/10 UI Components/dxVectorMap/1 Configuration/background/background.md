---
id: dxVectorMap.Options.background
type: Object
---
---
##### shortDescription
Specifies the properties for the map background.

---
The map background is a space on a map that does not contain areas. Within the **background** configuration object, you can specify colors for the map background and its border.

---

##### jQuery

    <!-- tab: index.js -->
    $('#vectorMap').dxVectorMap({
        background: {
            color: "azure",
            borderColor: "blue",
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-vector-map>
        <dxo-background color="azure" borderColor="blue"></dxo-background>
    </dx-vector-map>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxVectorMap>
            <DxBackground color="azure" borderColor="blue" />
        </DxVectorMap>
    </template>

    <script setup lang="ts">
    import { DxVectorMap, DxBackground } from 'devextreme-vue/vector-map';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { VectorMap, Background } from 'devextreme-react/vector-map';

    function App() {
        return (
            <VectorMap>
                <Background color="azure" borderColor="blue" />
            </VectorMap>
        )
    }

---
