**Specify a styling mode**           
The styling mode defines whether a Button has a colored border (*"outlined"*), a colored background (*"contained*" - default), or none of them (*"text"*). We will use a colored border. For this, set the [stylingMode](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#stylingMode) property to *"outlined"*.

**Specify a type**                  
The button [type](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#type) property defines its color. The following types are available: *"danger"* (red), *"default"* (blue), *"normal"* (transparent), *"success"* (green), and *"back"* (transparent). The type of *"back"* is special - it ignores the **text**, **stylingMode** and other properties and transforms the UI component into a left arrow button. In this tutorial, we will set the **type** to *"success"*.

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
    <dx-button
        <!-- ... -->
        stylingMode="outlined"
        type="success">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton
            <!-- ... -->
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
                <Button
                    // ...
                    stylingMode="outlined"
                    type="success"
                />
            </div>
        );
    }

    export default App;

---