Use the [icon](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#icon) property to add a glyph to the button. You can load a custom icon or display one of the ready-to-use images from [different image sources](/Documentation/Guide/Themes_and_Styles/Icons/). The sample below shows how to use a glyph from the [DevExtreme library](/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library):

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#button").dxButton({
            // ...
            icon: "comment"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button ...
        icon="comment">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton ...
            icon="comment"
        />
    </template>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <div className="App">
                <Button ...
                    icon="comment"
                />
            </div>
        );
    }

    export default App;

---

For more information on this UI component, refer to the following resources:

- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Overview) 
- [API Reference](/Documentation/ApiReference/UI_Components/dxButton/)
