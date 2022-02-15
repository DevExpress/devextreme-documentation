To give users a hint about what they should type in the TextBox, use the [placeholder]() property. You can also use the [label]() property for this purpose. Set the [labelMode]() property to one of the following values:

- *"static"*    
The label is displayed above the input field.

- *"floating"*    
The label is used as a placeholder, but when the editor gets focus, the label moves to the position above the input field.

- *"hidden"*    
The label is hidden.

In this tutorial, the **label** is also used as a **placeholder**, because the **labelMode** property is set to *"floating"*.

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