To label the CheckBox and add a pop-up hint, specify the [text](/api-reference/10%20UI%20Components/dxCheckBox/1%20Configuration/text.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#text') and [hint](/api-reference/10%20UI%20Components/Widget/1%20Configuration/hint.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#hint') properties.

You can also use the [iconSize](/api-reference/10%20UI%20Components/dxCheckBox/1%20Configuration/iconSize.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#iconSize') property to specify a custom width and height for the CheckBox.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#check-box").dxCheckBox({
            // ...
            text: 'Approve',
            hint: 'Approve',
            iconSize: 25
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-check-box ...
        text="Approve"
        hint="Approve"
        iconSize="25"
    >
    </dx-check-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCheckBox ...
            text="Approve"
            hint="Approve"
            icon-size="25"
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
            <CheckBox
                text="Approve"
                hint="Approve"
                iconSize="25"
            />
        );
    }

    export default App;

---