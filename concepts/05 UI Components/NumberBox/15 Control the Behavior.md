If you need to add spin buttons to the **NumberBox**, set the [showSpinButtons](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/showSpinButtons.md '/api-reference/10%20UI%20Components/dxNumberBox '/Documentation/ApiReference/UI_Components/dxNumberBox/'Configuration/#showSpinButtons') to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [showSpinButtons]="true">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox
            :value="20"
            :show-spin-buttons="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxNumberBox from 'devextreme-vue/number-box';

    export default {
        components: {
            DxNumberBox
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import NumberBox from 'devextreme-react/number-box';

    class App extends React.Component {
        render() {
            return (
                <NumberBox
                    defaultValue={20}
                    showSpinButtons={true} />
            );
        }
    }
    export default App;

---

To specify the step by which the value is changed, use the [step](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/step.md '/api-reference/10%20UI%20Components/dxNumberBox '/Documentation/ApiReference/UI_Components/dxNumberBox/'Configuration/#step') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true,
            step: 10
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [showSpinButtons]="true"
        [step]="10">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox
            :value="20"
            :show-spin-buttons="true"
            :step="10"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxNumberBox from 'devextreme-vue/number-box';

    export default {
        components: {
            DxNumberBox
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import NumberBox from 'devextreme-react/number-box';

    class App extends React.Component {
        render() {
            return (
                <NumberBox
                    defaultValue={20}
                    showSpinButtons={true}
                    step={10} />
            );
        }
    }
    export default App;

---

#####See Also#####
#include common-link-handleevents
- [NumberBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Overview)
- [NumberBox API Reference](/api-reference/10%20UI%20Components/dxNumberBox '/Documentation/ApiReference/UI_Components/dxNumberBox/')

[tags]number box, numberBox, editor, spin buttons, showSpinButtons, step