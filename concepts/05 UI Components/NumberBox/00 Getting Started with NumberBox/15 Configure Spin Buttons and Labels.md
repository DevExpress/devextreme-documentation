The component allows you to use the spin buttons to increase or decrease the input value. To display these buttons, enable the [showSpinButtons](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#showSpinButtons) property. Use the [step](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#step) property to specify how much the UI component's value changes when users click the spin buttons, press the Up/Down arrow keys, or roll a mouse wheel. You can also enable the [showClearButton](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#showClearButton) property to show a button which allow user to clear the input field.

In addition, you can add a label to the NumberBox and define its appearance. To display the label, assign the needed text to the [label](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#label) property. To change the label appearance, set the [labelMode](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#labelMode) property to one of the following values:

- *"static"* (default)    
The component displays the label above the input field.

- *"floating"*    
The component uses the label as a placeholder, but the label moves to the position above the input field when the editor receives focus.

- *"hidden"*    
The label is hidden.

The following code displays the clear and spin buttons, defines a step the value changes when a user clicks the spin buttons, and specifies a label for the NumberBox.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#number-box").dxNumberBox({
            // ...
            label: "Type a sum in dollars",
            labelMode: "floating",
            step: 5,
            showSpinButtons: true,
            showClearButton: true,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-color-box ...
        label="Type a sum in dollars"
        labelMode="floating"
        [step]="5"
        [showSpinButtons]="true"
        [showClearButton]="true"
    >
    </dx-color-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox ...
            label="Type a sum in dollars"
            :label-mode="floating"
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
                label="Type a sum in dollars"
                labelMode="floating"
                step="5"
                showSpinButtons={true}
                showClearButton={true}
            />
        );
    }

    export default App;

---