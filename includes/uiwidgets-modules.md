## Import Modules

---

##### jQuery

    <!-- tab: index.js -->
    import "devextreme/ui/{widget_name}";

##### Angular

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
        <!-- ... -->
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    // ...

    export default App;

---