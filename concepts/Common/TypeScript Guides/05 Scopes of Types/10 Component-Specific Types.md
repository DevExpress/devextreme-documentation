



---
##### jQuery

Each DevExtreme component has its own set of types. To access these types, specify `DevExpress.ui.component` where `component` is the component name in camel case. Your IDE should give you a list of available types.

    const dateType: DevExpress.ui.dxDateBox.DateType = 'datetime';

##### Angular

Each DevExtreme component has its own set of types. To access these types, import `DxComponentTypes` where `Component` is the component name.

Our codebase includes the following lines (for example, in DateBox source code):

    import type * as DxDateBoxTypes from "devextreme/ui/date_box_types";
    export { DxDateBoxTypes }; 

Here, `import type` is used to [import only types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) from a module, not the actual code that runs during runtime. `* as DxDateBoxTypes` means "import everything" from the module `"devextreme/ui/date_box_types"` and bundle it under the name `DxDateBoxTypes`.

We then export `DxDateBoxTypes` so you can import these types in your application:

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

Our codebase includes the following lines (for example, in DateBox source code):

    import type * as DxDateBoxTypes from "devextreme/ui/date_box_types";
    export { DxDateBoxTypes }; 

Here, `import type` is used to [import only types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) from a module, not the actual code that runs during runtime. `* as DxDateBoxTypes` means "import everything" from the module `"devextreme/ui/date_box_types"` and bundle it under the name `DxDateBoxTypes`.

We then export `DxDateBoxTypes` so you can import these types in your application:

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

Our codebase includes the following lines (for example, in DateBox source code):

    import type * as DateBoxTypes from "devextreme/ui/date_box_types";
    export { DateBoxTypes }; 

Here, `import type` is used to [import only types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) from a module, not the actual code that runs during runtime. `* as DateBoxTypes` means "import everything" from the module `"devextreme/ui/date_box_types"` and bundle it under the name `DateBoxTypes`.

We then export `DateBoxTypes` so you can import these types in your application:

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