Right-to-left (RTL) support allows UI components to adapt their layout to right-to-left locales.

Use the **rtlEnabled** property to enable RTL for an individual UI component:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            rtlEnabled: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        [rtlEnabled]="true">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [DxDataGridModule]
    })
    export class AppComponent {
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :rtl-enabled="true"
        />
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DxDataGrid from 'devextreme-vue/data-grid';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ...
                rtlEnabled={true}
            />
        );
    }

---

Set the **rtlEnabled** property globally using the [config()](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') function to enable RTL for the entire application:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.config({ rtlEnabled: true });
        // ...
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import config from 'devextreme/core/config';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true
    })
    export class AppComponent {
        constructor() {
            config({ rtlEnabled: true });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>

    <script setup lang="ts">
    import config from 'devextreme/core/config';
    config({ rtlEnabled: true });
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import config from 'devextreme/core/config';

    config({ rtlEnabled: true });

    export default function App() {
        return (
            // ...
        );
    }

---

#####See Also#####
- **RTL Support Demo**: [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RightToLeftSupport/) | [Navigation Components](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/NavigationRightToLeftSupport/) | [Editors](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorsRightToLeftSupport/)
