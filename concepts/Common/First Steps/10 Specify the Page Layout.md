---
##### jQuery

Next, specify the component layout in the HTML file:

    <!-- tab: index.html -->
    <div id="dashboard">
        <div id="progress"></div>
        <div id="task-grid"></div>
    </div>

The `dashboard` is the container for two components: ProgressBar and DataGrid.

##### Angular

Next, import components into `app.component.ts`:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
    import { DxProgressBarModule } from 'devextreme-angular/ui/progress-bar';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxDataGridModule, DxProgressBarModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { }

Specify the component layout in the HTML file:

    <!-- tab: app.component.html -->
    <div id="dashboard">
        <dx-progress-bar id="progress"></dx-progress-bar>
        <dx-data-grid id="task-grid"></dx-data-grid>
    </div>

The `dashboard` is the container for two components: ProgressBar and DataGrid.

For detailed instructions on imports, refer to the [Import DevExtreme Components](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/40%20Import%20DevExtreme%20Components.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Import_DevExtreme_Components') help topic.

##### Vue

Next, import components and specify their layout:

    <!-- tab: App.vue -->
    <template>
        <div id="dashboard">
            <DxProgressBar id="progress" />
            <DxDataGrid id="task-grid"></DxDataGrid>
        </div>
    </template>
    <script setup lang="ts">
    import DxProgressBar from 'devextreme-vue/progress-bar';
    import DxDataGrid from 'devextreme-vue/data-grid';
    </script>

The `dashboard` is the container for two components: ProgressBar and DataGrid.

For detailed instructions on imports, refer to the [Import DevExtreme Components](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/60%20Import%20DevExtreme%20Components.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/#Import_DevExtreme_Components') help topic.

##### React

Next, import components and specify their layout:

    <!-- tab: App.tsx -->
    import DataGrid from 'devextreme-react/data-grid';
    import ProgressBar from 'devextreme-react/progress-bar';

    function App(): JSX.Element {
        return(
            <div id="dashboard">
                <ProgressBar id="progress" />
                <DataGrid id="task-grid"></DataGrid>
            </div>
        );
    }

    export default App;

The `dashboard` is the container for two components: ProgressBar and DataGrid.

For detailed instructions on imports, refer to the [Import DevExtreme Components](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/60%20Import%20DevExtreme%20Components.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Import_DevExtreme_Components') help topic.

---