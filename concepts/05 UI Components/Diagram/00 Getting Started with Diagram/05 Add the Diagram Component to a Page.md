---
##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and add Diagram resources (scripts and styles) to the page:

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({ });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx-diagram.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx-diagram.min.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <script type="text/javascript" src="data.js"></script>
        </head>
        <body>
            <div id="diagram"></div>
        </body>
    </html>


##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/'), then install `devexpress-diagram` (`npm i devexpress-diagram`), and add Diagram resources (scripts and styles) to the page:

    <!-- tab: app.component.html -->
    <dx-diagram></dx-diagram>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDiagramModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDiagramModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: angular.json -->
    // ...
    "styles": [
        // ...
        "node_modules/devexpress-diagram/dist/dx-diagram.min.css",
    ],

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and add Diagram resources (scripts and styles) to the page:

    <!-- tab: App.vue -->
    <template>
        <DxDiagram>
        </DxDiagram>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-diagram/dist/dx-diagram.min.css';
    import { DxDiagram } from 'devextreme-vue/diagram';
    </script>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code snippet to create a Diagram component:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-diagram/dist/dx-diagram.min.css';

    import { Diagram } from 'devextreme-react/diagram';

    function App() {
        return (
            <Diagram>
            </Diagram>
        );
    }

    export default App;

---