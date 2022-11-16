Specify the following properties to add custom buttons to the input field, or configure the drop-down editor's buttons:

- [buttons](/api-reference/10%20UI%20Components/dxDropDownEditor/1%20Configuration/buttons '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/buttons/')    
Allows you to add custom buttons to the input text field.

- [showClearButton](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/showClearButton.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#showClearButton')    
Specifies whether to display the Clear button in the ColorBox.

- [applyButtonText](/api-reference/10%20UI%20Components/dxColorBox/1%20Configuration/applyButtonText.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#applyButtonText')    
Specifies the caption of the button that applies changes and closes the drop-down editor.

- [cancelButtonText](/api-reference/10%20UI%20Components/dxColorBox/1%20Configuration/cancelButtonText.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#cancelButtonText')    
Specifies the caption of the button that cancels changes and closes the drop-down editor.

You can hide the editor's drop-down button to limit user input options to color code entry. To do this, disable the [showDropDownButton](/api-reference/10%20UI%20Components/dxDropDownEditor/1%20Configuration/showDropDownButton.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#showDropDownButton') property.

To add a label to the ColorBox, specify the [label](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/label.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#label') property. To change the label appearance, set the [labelMode](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/labelMode.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#labelMode') property to one of the following values:

- *"static"* (default)    
The component displays the label above the input field.

- *"floating"*    
The component uses the label as a placeholder, but the label moves to the position above the input field when the editor receives focus.

- *"hidden"*    
The label is hidden.

The following code displays a Clear button, changes the Apply button's caption, and specifies a label for the ColorBox.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#color-box").dxColorBox({
            // ...
            showClearButton: true,
            applyButtonText: "Show notification",
            label: "Pick a color"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-color-box ...
        [showClearButton]="true"
        applyButtonText="Show notification"
        label="Pick a color"
    >
    </dx-color-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxColorBox ...
            :show-clear-button="true"
            apply-button-text="Show notification"
            label="Pick a color"
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
            <ColorBox ...
                showClearButton={true}
                applyButtonText="Show notification"
                label="Pick a color"
            />
        );
    }

    export default App;

---