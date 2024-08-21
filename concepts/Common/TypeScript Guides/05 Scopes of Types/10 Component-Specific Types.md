Each DevExtreme component has its own set of types.

---
##### jQuery

Find component types under the corresponding namespace:

    const dateType: DevExpress.ui.dxDateBox.DateType = 'datetime';

##### Angular

To get component-specific types, import the `DxComponentTypes` declaration where `Component` is the component name:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDateBoxTypes } from 'devextreme-angular/ui/date-box';

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

After importing, search through all types using `DxDateBoxTypes.` without extra imports.

##### Vue

To get component-specific types, import the `DxComponentTypes` declaration where `Component` is the component name:

    <!-- tab: App.vue -->
    <template>
        <DxDateBox :type="dateType" />
    </template>

    <script setup lang="ts">
    import DxDateBox from "devextreme-vue/date-box";
    import type { DxDateBoxTypes } from "devextreme-vue/date-box";

    const dateType: DxDateBoxTypes.DateType = "datetime";
    </script>

After importing, search through all types using `DxDateBoxTypes.` without extra imports.

##### React

To get component-specific types, import the `ComponentTypes` declaration where `Component` is the component name:

    <!-- tab: App.tsx -->
    import DateBox, { DateBoxTypes } from 'devextreme-react/date-box';

    const dateType: DateBoxTypes.DateType = 'datetime';

    function App() {
        return (
            <DateBox type={dateType} />
        );
    }

    export default App;

After importing, search through all types using `DateBoxTypes.` without extra imports.

---