Depending on the value the TextBox should hold, specify the UI component [mode](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/mode.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#mode') property. When set to *"email"*, *"tel"* or *"url"*, this property affects the set of keyboard buttons shown on a mobile device when the UI component gets focused. When the **mode** property is set to *"search"*, the TextBox contains the **Clear** button, which empties the TextBox contents. When the **mode** property is set to *"password"*, the TextBox hides input characters behind asterisks.

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