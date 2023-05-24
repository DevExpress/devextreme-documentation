---
##### jQuery
    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            min: "0/1/2018",
            max: "0/1/2024",
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}    
        min="1/1/2018"
        max="1/1/2024"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent { }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <Dx{WidgetName}
            min="1/1/2018"
            max="1/1/2024"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} 
            min="1/1/2018"
            max="1/1/2024"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName} } from 'devextreme-react/{widget-name}';
 
    export default function App() { 
        return (
            <{WidgetName} 
                min="1/1/2018"
                max="1/1/2024"
            />
        );
    }

---
