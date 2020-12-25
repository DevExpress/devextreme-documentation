---
id: Component.Options.onOptionChanged
type: function(e)
default: null
EventForAction: Component.optionChanged
---
---
##### shortDescription
A function that is executed after a UI component option is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.fullName): String
The path to the modified option that includes all parent options.

##### field(e.name): String
The modified option if it belongs to the first level. Otherwise, the first-level option it is nested into.

##### field(e.value): any
The modified option's new value.

---

The following example shows how to subscribe to changes of a component option:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onOptionChanged: function(e) {
                if(e.name === "changedOption") {
                    // handle the option change here
                }
            }
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onOptionChanged)="onOptionChanged($event)"> 
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
        onOptionChanged(e) {
            if(e.name === "changedOption") { 
                // handle the option change here
            }
        }
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
  
    <!-- tab: App.vue -->
    <template> 
        <Dx{WidgetName} ...
            :on-option-changed="onOptionChanged">            
        </Dx{WidgetName}> 
    </template> 
  
    <script> 
    import 'devextreme/dist/css/dx.common.css'; 
    import 'devextreme/dist/css/dx.light.css'; 
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}'; 

    export default { 
        components: { 
            Dx{WidgetName}
        }, 
        // ...
        methods: { 
            onOptionChanged: function(e) {
                if(e.name === "changedOption") {
                    // handle the option change here
                }
            }
        } 
    } 
    </script> 

  

##### React 

    <!-- tab: App.js -->
    import React from 'react'; 
    import 'devextreme/dist/css/dx.common.css'; 
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName} from 'devextreme-react/{widget-name}'; 

    const onOptionChanged = (e) => {
        if(e.name === "changedOption") {
            // handle the option change here
        }
    }

    export default function App() { 
        return ( 
            <{WidgetName} ...
                onOptionChanged={onOptionChanged}>        
            </{WidgetName}> 
        ); 
    } 

---
