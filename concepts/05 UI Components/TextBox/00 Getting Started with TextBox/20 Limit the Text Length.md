Assign an integer number to the [maxLength](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#maxLength) property to limit the text length.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#textbox").dxTextBox({ 
            // ...
            maxLength: 20
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box ...
        [maxLength]="20"
    >
    </dx-text-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextBox ...
            :max-length="20"
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
                maxLength={20}
            />
        );
    }

    export default App;

---