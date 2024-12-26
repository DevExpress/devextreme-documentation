---
##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a PivotGrid:

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <link rel="stylesheet" href="index.css">

            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="pivotGrid"></div>
        </body>
    </html>

    <!-- tab: index.css -->
    #pivotGrid {
        height: 70vh;
    }

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a PivotGrid:

    <!-- tab: app.component.html -->
    <dx-pivot-grid id="pivotGrid">
        <!-- Configuration goes here -->
    </dx-pivot-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {

    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxPivotGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPivotGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    #pivotGrid {
        height: 70vh;
    }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a PivotGrid:

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid id="pivotGrid">
            <!-- Configuration goes here -->
        </DxPivotGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxPivotGrid } from 'devextreme-vue/pivot-grid';

    export default {
        components: {
            DxPivotGrid
        }
    }
    </script>

    <style>
    #pivotGrid {
        height: 70vh;
    }
    </style>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a PivotGrid:

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        PivotGrid
    } from 'devextreme-react/pivot-grid';

    function App() {
        return (
            <PivotGrid id="pivotGrid">
                {/* Configuration goes here */}
            </PivotGrid>
        );
    }

    export default App;

    <!-- tab: App.css -->
    #pivotGrid {
        height: 70vh;
    }

---
