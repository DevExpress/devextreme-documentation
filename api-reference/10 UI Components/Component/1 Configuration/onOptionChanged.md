---
id: Component.Options.onOptionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a UI component property is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.fullName): String
The path to the modified property that includes all parent properties.

##### field(e.name): String
The modified property if it belongs to the first level. Otherwise, the first-level property it is nested into.

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

    #include angular-component-decorator
    export class AppComponent { 
        // ...
        handlePropertyChange(e) {
            if(e.name === "changedProperty") { 
                // handle the property change here
            }
        }
    } 

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

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
