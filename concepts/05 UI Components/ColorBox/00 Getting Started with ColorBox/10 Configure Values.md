The ColorBox accepts colors in hexadecimal (_"#FF0000"_), RGB (_"rgb(255, 0, 0)"_), and RGBA (_"rgba(255, 0, 0, 1)"_) formats, as well as <a href="http://www.w3schools.com/cssref/css_colors.asp" target="_blank">color names</a>. When users select a color from the drop-down editor, the ColorBox displays the selected color as a string in hexadecimal format.

To allow users to control the transparency of the selected color, enable the [editAlphaChannel](/api-reference/10%20UI%20Components/dxColorBox/1%20Configuration/editAlphaChannel.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#editAlphaChannel') property. If you enable this property, the component displays the selected color in RGBA format.

To specify the initially picked color, use the [value](/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#value) property.

The following code specifies the initial color and enables transparency:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#color-box").dxColorBox({
            value: "#000000",
            editAlphaChannel: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-color-box
        value="#000000"
        [editAlphaChannel]="true"
    >
    </dx-color-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxColorBox
            value="#000000"
            :edit-alpha-channel="true"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    
    function App() {
        // ...
        return (
            <ColorBox
                value="#000000"
                editAlphaChannel={true}
            />
        );
    }

    export default App;

---