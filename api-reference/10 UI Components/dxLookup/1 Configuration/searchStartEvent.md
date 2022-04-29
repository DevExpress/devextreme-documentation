---
id: dxLookup.Options.searchStartEvent
type: String
default: 'input change keyup'
---
---
##### shortDescription
Specifies the <a href="https://en.wikipedia.org/wiki/DOM_events" target="_blank">DOM events</a> after which the UI component's search results should be updated.

---
This property accepts a single event name or several names separated by spaces.

The recommended events are "keyup", "blur", "change", "input", and "focusout", but you can use other events as well.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            // ...
            searchStartEvent: 'change'
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-lookup ...
        searchStartEvent="change"
    </dx-lookup> 

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxLookupModule } from 'devextreme-angular'; 
  
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxLookupModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 

    export class AppModule { }  

##### Vue 
  
    <!-- tab: App.vue -->
    <template> 
        <DxLookup ...
            search-start-event="change"
        />            
    </template> 
  
    <script>  
    import 'devextreme/dist/css/dx.light.css'; 
    import DxLookup from 'devextreme-vue/lookup'; 

    export default { 
        components: { 
            DxLookup
        }
    } 
    </script> 

  

##### React 

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import Lookup from 'devextreme-react/lookup'; 

    export default function App() { 
        return ( 
            <Lookup ...
                searchStartEvent="change"
            />        
        ); 
    } 

---
