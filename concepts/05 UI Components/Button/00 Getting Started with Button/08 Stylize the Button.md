You can use the [type](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#type) property to apply predefined color schemes to Buttons. You can also use the [stylingMode](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#stylingMode) property to customize the fill and borders. Refer to the [Predefined Types](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/) demo for more information about these properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#button").dxButton({
            // ...
            type: "success",
            stylingMode: "outlined"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button ...
        stylingMode="outlined"
        type="success">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton ...
            styling-mode="outlined"
            type="success"
        />
    </template>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <div className="App">
                <Button ...
                    stylingMode="outlined"
                    type="success"
                />
            </div>
        );
    }

    export default App;

---
