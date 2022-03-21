Specify the TextBox [mode](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/mode.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#mode') property to allow users to type in a specific text type. Set this property to *"email"*, *"tel"*, or *"url"* to specify the set of keyboard buttons that a mobile device shows when the UI component is focused. When you set the **mode** property to *"search"*, the TextBox contains the **Clear** button, which empties its contents. When you set the **mode** property to *"password"*, the TextBox hides input characters behind asterisks.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#textbox").dxTextBox({ 
            mode: "url"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box
        mode="url"
    >
    </dx-text-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextBox
            mode="url"
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
            <TextBox 
                mode="url"
            />
        );
    }

    export default App;

---