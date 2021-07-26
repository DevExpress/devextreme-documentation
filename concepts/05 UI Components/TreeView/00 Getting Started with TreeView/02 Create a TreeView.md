---
##### jQuery

[Add DevExtreme to your jQuery application](/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/) and use the following code to create a TreeView:

    <!-- tab: index.js -->
    $(function() {
        $("#treeView").dxTreeView({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <!DOCTYPE html>
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.light.css">
            <link rel="stylesheet" href="index.css">

            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="treeView"></div>
        </body>
    </html>

    <!-- tab: index.css -->
    #treeView {
        width: 300px;
    }

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a TreeView:

    <!-- tab: app.component.html -->
    <dx-tree-view 
        id="treeView"
        <!-- Configuration goes here -->
    >
    </dx-tree-view>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { DxTreeViewModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTreeViewModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    #treeView {
        width: 300px;
    }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a TreeView:

    <!-- tab: App.vue -->
    <template>
        <DxTreeView 
            id="treeView"
            <!-- Configuration goes here -->
        >
        </DxTreeView>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    export default {
        components: {
            DxTreeView
        }
    }
    </script>

    <style>
    #treeView {
        width: 300px;
    }
    </style>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a TreeView:

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TreeView } from 'devextreme-react/tree-view';

    function App() {
        return (
            <TreeView 
                id="treeView"
                {/* Configuration goes here */}
            />
        );
    }

    export default App;

    <!-- tab: App.css -->
    #treeView {
        width: 300px;
    }

---
