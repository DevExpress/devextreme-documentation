The NumberBox component allows users to click spin buttons to increase or decrease the input value. To display these buttons, enable the [showSpinButtons](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#showSpinButtons) property. Use the [step](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#step) property to specify a step by which the component value changes when users click the spin buttons, press the Up/Down arrow keys, or roll the mouse wheel. You can also enable the [showClearButton](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#showClearButton) property to show a button that clears the input field.


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#number-box").dxNumberBox({
            // ...
            step: 5,
            showSpinButtons: true,
            showClearButton: true,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-color-box ...
        [step]="5"
        [showSpinButtons]="true"
        [showClearButton]="true"
    >
    </dx-color-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox ...
            :step="5"
            :show-spin-buttons="true"
            :show-clear-button="true"
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
            <NumberBox ...
                step={5}
                showSpinButtons={true}
                showClearButton={true}
            />
        );
    }

    export default App;

---