---
##### jQuery

First, create a ProgressBar and save its [instance](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/13%20Get%20a%20UI%20Component%20Instance.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_a_UI_Component_Instance') to access its methods later.

Next, set the [value](/api-reference/10%20UI%20Components/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value') option to **50**, as half of the tasks in the initial list are completed.

    <!-- tab: index.js -->
    $(() => {
        const progress = $("#progress").dxProgressBar({
            value: 50,
        }).dxProgressBar("instance");
    });

##### Angular

Create a `progressValue` variable and set it to **50**, as half of the tasks in the initial list are completed. 

    <!-- tab: app.component.ts -->
    export class AppComponent {
        // ...
        progressValue = 50;
    }

Then, bind the [value](/api-reference/10%20UI%20Components/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value') option to this variable. Directly assigning **50** will not work, as the variable will synchronize ProgressBar and DataGrid later.

    <!-- tab: app.component.html -->
    <dx-progress-bar ...
        [value]="progressValue"
    >
    </dx-progress-bar>

##### Vue

Create a `progressValue` variable and set its [ref](https://vuejs.org/guide/essentials/template-refs) to **50**, as half of the tasks in the initial list are completed. Then, bind the [value](/api-reference/10%20UI%20Components/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value') option to this variable. Directly assigning **50** will not work, as the variable will synchronize ProgressBar and DataGrid later.

    <!-- tab: App.vue -->
    <template>
        <div id="dashboard">
            <DxProgressBar ... 
                :value="progressValue"
            />
            <DxDataGrid ... ></DxDataGrid>
        </div>
    </template>
    <script setup lang="ts">
    import { ref } from 'vue';
    import DxProgressBar from 'devextreme-vue/progress-bar';
    //...

    const progressValue = ref(50);
    </script>

##### React

Manage the progress bar state with React [useState](https://react.dev/reference/react/useState) Hook. Set the Hook initial value to **50**, as half of the tasks in the initial list are completed. Bind the [value](/api-reference/10%20UI%20Components/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value') option to the `progressValue` variable. `setProgressValue` will later keep ProgressBar and DataGrid in sync.

    <!-- tab: App.tsx -->
    import { useState } from 'react';
    import ProgressBar from 'devextreme-react/progress-bar';

    function App(): JSX.Element {
        const [progressValue, setProgressValue] = useState(50);
        return(
            <div id="dashboard">
                <ProgressBar 
                    value={progressValue}
                />
                <DataGrid ... ></DataGrid>
            </div>
        );
    }

    export default App;

---