Specify the [height](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#width) properties to change the size of the Autocomplete text field. If you want to resize the drop-down list, use the [dropDownOptions](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#dropDownOptions) object.

To specify one of the predefined styles for the Autocomplete text field, use the [stylingMode](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#stylingMode) property.

Use the [placeholder](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#placeholder) property to give users a hint about what they should type in the Autocomplete text field. You can also use the [label](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#label) property for this purpose. If you specify the [label](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#label) property, set the [labelMode](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#labelMode) property to one of the following values:

- *"static"*    
The component displays the label above the input field.

- *"floating"*    
The component uses the label as a placeholder, but when the editor gets focus, the label moves to the position above the input field.

- *"hidden"*    
The label is hidden.

In this tutorial, the component also uses the [label](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#label) as a [placeholder](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#placeholder), because the [labelMode](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#labelMode) property is set to *"floating"*.

Additionally, Autocomplete can display the following buttons:

- A clear button    
Specify the [showClearButton](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#showClearButton) property. This tutorial uses this button.

- A drop-down button    
Specify the [showDropDownButton](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#showDropDownButton) property. You can use the [dropDownButtonTemplate](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#dropDownButtonTemplate) to customize the button appearance.

- Custom buttons    
Implement the [buttons](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/buttons/) array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#autocomplete").dxAutocomplete({
            // ...
            label: "Search for a task",
            labelMode: "floating",
            showClearButton: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-autocomplete ...
        label="Search for a task"
        labelMode="floating"
        [showClearButton]="true"
    >
    </dx-autocomplete>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAutocomplete ...
            label="Search for a task"
            label-mode="floating"
            :show-clear-button="true"
        >
        </DxAutocomplete>
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
            <Autocomplete ...
                label="Search for a task"
                labelMode="floating"
                showClearButton={true}
            >
            </Autocomplete>
        );
    }

    export default App;

---