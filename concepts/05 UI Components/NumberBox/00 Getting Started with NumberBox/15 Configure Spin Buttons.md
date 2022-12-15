Users can click the spin buttons to increase or decrease the NumberBox's input value. To display these buttons, enable the [showSpinButtons](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/showSpinButtons.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#showSpinButtons') property. Use the [step](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/step.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#step') property to specify a step by which the component value changes when users click the spin buttons, press the Up/Down arrow keys, or roll the mouse wheel. You can also enable the [showClearButton](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/showClearButton.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#showClearButton') property to show a button that clears the input field.


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
    <dx-number-box ...
        [step]="5"
        [showSpinButtons]="true"
        [showClearButton]="true"
    >
    </dx-number-box>

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