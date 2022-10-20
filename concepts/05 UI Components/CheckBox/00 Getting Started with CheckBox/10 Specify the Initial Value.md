The CheckBox can be in one of the following states depending on the [value](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value) property's value:

- checked  
the [value](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value) is `true`

- unchecked  
the [value](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value) is `false`

- indeterminate 
the [value](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value) is `undefined` or `null`

The following code specifies the initial value as `null`:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#check-box").dxCheckBox({
            value: null
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-check-box
        [value]="null"
    >
    </dx-check-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCheckBox
            :value="null"
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
            />
        );
    }

    export default App;

---