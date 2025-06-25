---
##### jQuery

First, create a ProgressBar and save its [instance](/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_a_UI_Component_Instance) for accessing methods later.

Next, set the [value](/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value) option to 50, as half of the tasks in the initial list are completed.

    <!-- tab: index.js -->
    $(() => {
        const progress = $("#progress").dxProgressBar({
            value: 50,
        }).dxProgressBar("instance");
    });

##### Angular

Create a `progressValue` variable and set it to 50, as half of the tasks in the initial list are completed. 

    <!-- tab: app.component.ts -->
    export class AppComponent {
        // ...
        progressValue = 50;
    }

Then, bind the [value](/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value) option to this variable. Directly assigning 50 will not work, as the variable will synchronize ProgressBar and DataGrid later.

    <!-- tab: app.component.html -->
    <dx-progress-bar ...
        [value]="progressValue"
    >
    </dx-progress-bar>
    <dx-data-grid ... ></dx-data-grid>

##### Vue

Create a `progressValue` variable and set its [ref](https://vuejs.org/guide/essentials/template-refs) to 50, as half of the tasks in the initial list are completed. Then, bind the [value](/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value) option to this variable. Directly assigning 50 will not work, as the variable will synchronize ProgressBar and DataGrid later.

    <!-- tab: App.vue -->
    <template>
        <DxProgressBar 
            :value="progressValue"
        />
        <DxDataGrid ... ></DxDataGrid>
    </template>
    <script setup>
    import { ref } from 'vue';
    import DxProgressBar from 'devextreme-vue/progress-bar';
    //...

    const progressValue = ref(50);
    </script>

##### React

Create a `progressValue` variable and set its [state](https://react.dev/reference/react/useState) to 50, as half of the tasks in the initial list are completed. Then, bind the [value](/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value) option to this variable. Directly assigning 50 will not work, as the variable will synchronize ProgressBar and DataGrid later.

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import ProgressBar from 'devextreme-react/progress-bar';

    const App = () => {
        const [progressValue, setProgressValue] = useState(50);
        return(
            <>
                <ProgressBar 
                    value={progressValue}
                />
                <DataGrid ... ></DataGrid>
            </>
        );
    }

    export default App;

---