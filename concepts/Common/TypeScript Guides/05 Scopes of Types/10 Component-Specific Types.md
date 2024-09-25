
---
##### jQuery

Each DevExtreme component has its own set of types. To access these types, specify `DevExpress.ui.component` where `component` is the component name in camel case. Your IDE should give you a list of available types.

    const dateType: DevExpress.ui.dxDateBox.DateType = 'datetime';

##### Angular

Each DevExtreme component has its own set of types. To access these types, import `DxComponentTypes` where `Component` is the component name.

We export the `DxDateBoxTypes` [aggregated export](/Documentation/Guide/Common/TypeScript_Guides/Syntax_Elements/#Aggregated_Export) so you can import these types in your application:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDateBoxTypes } from 'devextreme-angular/date-box';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        dateType: DxDateBoxTypes.DateType = "datetime";
    }

    <!-- tab: app.component.html -->
    <dx-date-box ...
        [type]="dateType"
    >
    </dx-date-box>

After importing, type `DxDateBoxTypes.` to search through all available types.

##### Vue

Each DevExtreme component has its own set of types. To access these types, import `DxComponentTypes` where `Component` is the component name.

We export `DxDateBoxTypes` [aggregated export](/Documentation/Guide/Common/TypeScript_Guides/Syntax_Elements/#Aggregated_Export) so you can import these types in your application:

    <!-- tab: App.vue -->
    <template>
        <DxDateBox :type="dateType" />
    </template>

    <script setup lang="ts">
    import DxDateBox from "devextreme-vue/date-box";
    import type { DxDateBoxTypes } from "devextreme-vue/date-box";

    const dateType: DxDateBoxTypes.DateType = "datetime";
    </script>

After importing, type `DxDateBoxTypes.` to search through all available types.

##### React

Each DevExtreme component has its own set of types. To access these types, import `ComponentTypes` where `Component` is the component name.

We export `DateBoxTypes` [aggregated export](/Documentation/Guide/Common/TypeScript_Guides/Syntax_Elements/#Aggregated_Export) so you can import these types in your application:

    <!-- tab: App.tsx -->
    import DateBox, { DateBoxTypes } from 'devextreme-react/date-box';

    const dateType: DateBoxTypes.DateType = 'datetime';

    function App() {
        return (
            <DateBox type={dateType} />
        );
    }

    export default App;

After importing, type `DateBoxTypes.` to search through all available types.

---