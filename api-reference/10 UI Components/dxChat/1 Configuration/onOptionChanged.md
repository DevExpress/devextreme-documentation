---
id: dxChat.Options.onOptionChanged
type: function(e)
---
---
##### shortDescription
A function that is executed after a UI component property is changed.

##### param(e): ui/chat:OptionChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fullName): String
The path to the modified property that includes all parent properties.

##### field(e.name): String
The modified property if it belongs to the first level. Otherwise, the first-level property it is nested into.

##### field(e.previousValue): any
The modified property's previous value.

##### field(e.value): any
The modified property's new value.

---
The following example shows how to subscribe to component property changes:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onOptionChanged: function(e) {
                if(e.name === "changedProperty") {
                    // handle the property change here
                }
            }
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onOptionChanged)="handlePropertyChange($event)"> 
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
        handlePropertyChange(e) {
            if(e.name === "changedProperty") { 
                // handle the property change here
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
            @option-changed="handlePropertyChange"
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
        methods: { 
            handlePropertyChange: function(e) {
                if(e.name === "changedProperty") {
                    // handle the property change here
                }
            }
        } 
    } 
    </script> 

  

##### React 

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName} from 'devextreme-react/{widget-name}'; 

    const handlePropertyChange = (e) => {
        if(e.name === "changedProperty") {
            // handle the property change here
        }
    }

    export default function App() { 
        return ( 
            <{WidgetName} ...
                onOptionChanged={handlePropertyChange}
            />        
        ); 
    } 

---