The [icon](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#icon) property adds a glyph to the button. You can load a custom icon or display one of the ready-to-use images from [multiple supported image sources](/Documentation/Guide/Themes_and_Styles/Icons/). The sample below shows how to display a glyph from the [DevExtreme library](/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library):

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

You have configured basic Button features. To take a more detailed look at this UI component, explore the following resources:

- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Overview) 
- [API Reference](/Documentation/ApiReference/UI_Components/dxButton/)
