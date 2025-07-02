---
##### jQuery

Next, layout the components in the HTML file:

    <!-- tab: index.html -->
    <div id="dashboard">
        <div id="progress"></div>
        <div id="task-grid"></div>
    </div>

##### Angular

Next, import components into `app.component.ts`. For detailed instructions on methods and module imports, refer to the [Import DevExtreme Components](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Import_DevExtreme_Components) article.

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
    import { DxProgressBarComponent } from 'devextreme-angular/ui/progress-bar';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxDataGridComponent, DxProgressBarComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { }

Layout the components in the HTML file:

    <!-- tab: app.component.html -->
    <div id="dashboard">
        <dx-progress-bar id="progress"></dx-progress-bar>
        <dx-data-grid id="task-grid"></dx-data-grid>
    </div>

##### Vue

Next, import and layout the components. For detailed instructions on imports, refer to the [Import DevExtreme Components](/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/#Import_DevExtreme_Components) article.

    <!-- tab: App.vue -->
    <template>
        <div id="dashboard">
            <DxProgressBar id="progress" />
            <DxDataGrid id="task-grid"></DxDataGrid>
        </div>
    </template>
    <script setup>
    import DxProgressBar from 'devextreme-vue/progress-bar';
    import DxDataGrid from 'devextreme-vue/data-grid';
    </script>

##### React

Next, import and layout the components. For detailed instructions on imports, refer to the [Import DevExtreme Components](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Import_DevExtreme_Components) article.

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid from 'devextreme-react/data-grid';
    import ProgressBar from 'devextreme-react/progress-bar';

    const App = () => {
        return(
            <div id="dashboard">
                <ProgressBar id="progress" />
                <DataGrid id="task-grid"></DataGrid>
            </div>
        );
    }

    export default App;

---