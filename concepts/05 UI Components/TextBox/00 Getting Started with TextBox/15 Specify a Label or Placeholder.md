Use the [placeholder](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#placeholder') property to give users a hint about what they should type in the TextBox. You can also use the [label](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/label.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#label') property for this purpose. If you specify the **label** property, set the [labelMode](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/labelMode.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#labelMode') property to one of the following values:

- *"static"*    
The component displays the label above the input field.

- *"floating"*    
The component uses the label as a placeholder, but when the editor gets focus, the label moves to the position above the input field.

- *"hidden"*    
The label is hidden.

In this tutorial, the component also uses **label** as a **placeholder**, because the **labelMode** property is set to *"floating"*.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#textbox").dxTextBox({ 
            // ...
            label: "Link",
            labelMode: "floating"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box ...
        label="Link"
        labelMode="floating"
    >
    </dx-text-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextBox ...
            label="Link"
            label-mode="floating"
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
            <TextBox ...
                label="Link"
                labelMode="floating"
            />
        );
    }

    export default App;

---