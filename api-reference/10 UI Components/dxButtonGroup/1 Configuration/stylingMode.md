---
id: dxButtonGroup.Options.stylingMode
acceptValues: 'text' | 'outlined' | 'contained'
type: String
default: 'contained'
---
---
##### shortDescription
Specifies how buttons in the group are styled.

---
The following styles are available: 

![Button Styling Modes](/images/UiWidgets/button_stylingMode.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ButtonGroup/Overview/"
}

#include common-ref-enum with {
    enum: "`ButtonStylingMode`",
    values: "`Text`, `Outlined`, and `Contained`"
}