If you need to specify the initial state, assign a Boolean value to the [value](/api-reference/10%20UI%20Components/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#value') property. You can also change the Switch component labels. Use the [switchedOnText](/api-reference/10%20UI%20Components/dxSwitch/1%20Configuration/switchedOnText.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#switchedOnText') and the [switchedOffText](/api-reference/10%20UI%20Components/dxSwitch/1%20Configuration/switchedOffText.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#switchedOffText') properties. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#switch").dxSwitch({
            value: false,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-switch
        [value]="false"
    >
    </dx-switch>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSwitch
            :value="false"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    
    function App() {
        // ...
        return (
            <Switch
                value={false}
            />
        );
    }

    export default App;

---