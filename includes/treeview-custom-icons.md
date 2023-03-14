---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeView").dxTreeView({
            // ...
            collapseIcon: "minus",  // icon from the DevExtreme icon library
            expandIcon: "https://path/to/the/expand_icon.svg", // icon in the SVG format
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-tree-view ...
        collapseIcon="minus" <!-- icon from the DevExtreme icon library -->
        expandIcon="https://path/to/the/expand_icon.svg" <!-- icon in the SVG format -->
    > 
    </dx-tree-view> 

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core'; 

    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'] 
    }) 

    export class AppComponent { 
        // ...
    } 

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

##### Vue 
  
    <!-- tab: App.vue (Options API) -->
    <template> 
        <DxTreeView ...
            collapseIcon="minus" <!-- icon from the DevExtreme icon library -->
            expandIcon="https://path/to/the/expand_icon.svg" <!-- icon in the SVG format -->
        />            
    </template> 
  
    <script>  
    import 'devextreme/dist/css/dx.light.css'; 
    import DxTreeView from 'devextreme-vue/tree-view'; 

    export default { 
        components: { 
            DxTreeView
        }, 
        // ...
    } 
    </script> 

    <!-- tab: App.vue (Composition API) -->
    <template> 
        <DxTreeView ...
            collapseIcon="minus" <!-- icon from the DevExtreme icon library -->
            expandIcon="https://path/to/the/expand_icon.svg" <!-- icon in the SVG format -->
        />            
    </template> 
  
    <script setup>  
    import 'devextreme/dist/css/dx.light.css'; 
    import DxTreeView from 'devextreme-vue/tree-view'; 

    // ...
    </script> 

##### React 

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import TreeView from 'devextreme-react/tree-view'; 

    export default function App() { 
        return ( 
            <TreeView ...
                collapseIcon="minus" // icon from the DevExtreme icon library
                expandIcon="https://path/to/the/expand_icon.svg" // icon in the SVG format
            />        
        ); 
    } 

---