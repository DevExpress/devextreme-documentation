---
##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a TreeList:

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
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
            <div id="treeList"></div>
        </body>
    </html>

    <!-- tab: index.css -->
    #treeList {
        height: 500px;
    }

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a TreeList:

    <!-- tab: app.component.html -->
    <dx-tree-list id="treeList"
        <!-- Configuration goes here -->
    >
    </dx-tree-list>

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

    import { DxTreeListModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTreeListModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    #treeList {
        height: 500px;
    }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a TreeList:

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList id="treeList">
                <!-- Configuration goes here -->
            </DxTreeList>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        }
    }
    </script>

    <style>
    #treeList {
        height: 500px;
    }
    </style>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a TreeList:

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { TreeList } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList id="treeList">
                    {/* Configuration goes here */}
                </TreeList>
            </div>
        );
    }

    export default App;

    <!-- tab: App.css -->
    #treeList {
        height: 500px;
    }

---
