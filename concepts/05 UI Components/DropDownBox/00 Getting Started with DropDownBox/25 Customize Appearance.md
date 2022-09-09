Specify the [height](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#width) properties to change the size of the DropDownBox text field. If you want to resize the drop-down field, use the [dropDownOptions](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#dropDownOptions) object.

To specify one of the predefined styles for the DropDownBox text field, use the [stylingMode](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#stylingMode) property. To customize the field appearance, specify the [field template](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#fieldTemplate).

Use the [placeholder](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#placeholder) property to give users a hint about what they should type in the DropDownBox text field. You can also use the [label](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#label) property for this purpose. If you specify the [label](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#label) property, set the [labelMode](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#labelMode) property to one of the following values:

- *"static"*    
The component displays the label above the input field.

- *"floating"*    
The component uses the label as a placeholder, but when the editor receives focus, the label moves to the position above the input field.

- *"hidden"*    
The label is hidden.

In this tutorial, the component also uses the [label](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#label) as a [placeholder](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#placeholder) because the [labelMode](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#labelMode) property is set to *"floating"*.

Additionally, DropDownBox can display the following buttons:

- A clear button    
Specify the [showClearButton](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#showClearButton) property.

- A drop-down button    
Specify the [showDropDownButton](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#showDropDownButton) property. You can use the [drop-down button template](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#dropDownButtonTemplate) to customize the button appearance.

- Custom buttons    
Implement the [buttons](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/buttons/) array.

---
##### jQuery

    <!-- tab: index.js -->
    // ...
    $(function() {
        $("#drop-down-box").dxDropDownBox({
            // ...
            label: "Fruits",
            labelMode: "floating"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-box ...
        label="Fruits"
        labelMode="floating"
    >
        <dx-list ...
        >
        </dx-list>
    </dx-drop-down-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownBox ...
            label="Fruits"
            labelMode="floating"
        >
            <DxList ...
            >
            </DxList>
        </DxDropDownBox>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useRef, useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DropDownBox } from 'devextreme-react/drop-down-box';
    import { List } from "devextreme-react/list";

    // ...
    
    function App() {
        // ...
        return (
            <DropDownBox ...
                label="Fruits"
                labelMode="floating"
            >
                <List ...
                />
            </DropDownBox>
        );
    }

    export default App;

---
