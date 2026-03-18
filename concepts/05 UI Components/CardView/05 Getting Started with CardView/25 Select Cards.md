CardView supports single and multiple selection modes. Use the **selection**.[mode](/api-reference/10%20UI%20Components/dxCardView/9%20Types/SelectionConfiguration/mode.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/selection/#mode') property to specify the mode.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#card-view").dxCardView({
            // ...
            selection: {
                mode: "multiple"
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxo-card-view-selection mode="multiple"></dxo-card-view-selection>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxSelection mode="multiple" />
        </DxCardView>
    </template>

    <script setup lang="ts">
    // ...
    import DxCardView, { DxSelection } from 'devextreme-vue/card-view';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import CardView, { Selection } from 'devextreme-react/card-view';
    import { employees } from './data.ts';

    function App() {
        return (
            <CardView ... >
                <Selection mode="multiple" />
            </CardView>
        );
    }

    export default App;

---