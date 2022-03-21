Specify the [showClearButton](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#showClearButton) property to add a **Clear** button that empties the TextBox on click. You can also add custom buttons to the input text field. Declare them in the [buttons[]](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/buttons/) array. To see an example, refer to this demo: [Custom Text Editor Buttons](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/CustomTextEditorButtons/).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#textbox").dxTextBox({ 
            // ...
            showClearButton: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box ...
        [showClearButton]="true"
    >
    </dx-text-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextBox ...
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
        return (
            <TextBox ...
                showClearButton={true}
            />
        );
    }

    export default App;

---