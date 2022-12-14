The CheckBox can be in one of the following states depending on its [value](/api-reference/10%20UI%20Components/dxCheckBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value'):

- checked  
the [value](/api-reference/10%20UI%20Components/dxCheckBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value') is `true`

- unchecked  
the [value](/api-reference/10%20UI%20Components/dxCheckBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value') is `false`

- indeterminate   
the [value](/api-reference/10%20UI%20Components/dxCheckBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value') is `undefined` or `null`

You can turn on the [enableThreeStateBehavior](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#enableThreeStateBehavior) option to allow users to cycle through all three states.

The following code specifies the initial value as `null`:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#check-box").dxCheckBox({
            value: null,
            enableThreeStateBehavior: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-check-box
        [value]="null"
        [enableThreeStateBehavior]="true"
    >
    </dx-check-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCheckBox
            :value="null"
            :enable-three-state-behavior="true"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <CheckBox
                value={null}
                enableThreeStateBehavior={true}
            />
        );
    }

    export default App;

---