---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            collapseIcon: "minus",
            expandIcon: "https://path/to/the/expand_icon.svg",
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        collapseIcon: "minus"
        expandIcon: "https://path/to/the/expand_icon.svg" > 
    </dx-{widget-name}> 

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
    import { Dx{WidgetName}Module } from 'devextreme-angular'; 
  
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            Dx{WidgetName}Module 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 

    export class AppModule { }  

##### Vue 
  
    <!-- tab: App.vue (Options API) -->
    <template> 
        <Dx{WidgetName} ...
            collapseIcon="minus"
            expandIcon="https://path/to/the/expand_icon.svg"
        />            
    </template> 
  
    <script>  
    import 'devextreme/dist/css/dx.light.css'; 
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}'; 

    export default { 
        components: { 
            Dx{WidgetName}
        }, 
        // ...
    } 
    </script> 

    <!-- tab: App.vue (Composition API) -->
    <template> 
        <Dx{WidgetName} ...
            collapseIcon="minus"
            expandIcon="https://path/to/the/expand_icon.svg"
        />            
    </template> 
  
    <script setup>  
    import 'devextreme/dist/css/dx.light.css'; 
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}'; 

    // ...
    </script> 

##### React 

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName} from 'devextreme-react/{widget-name}'; 

    export default function App() { 
        return ( 
            <{WidgetName} ...
                collapseIcon="minus"
                expandIcon="https://path/to/the/expand_icon.svg"
            />        
        ); 
    } 

---