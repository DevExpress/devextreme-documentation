---
id: GlobalConfig.editorStylingMode
acceptValues: 'outlined' | 'underlined' | 'filled'
type: String
default: undefined
---
---
##### shortDescription
Specifies how editors' text fields are styled in your application.

---
The following styles are available: 

![Text Editor Styling Modes](/images/UiWidgets/textEditors_stylingMode.png)

    <!--JavaScript-->DevExpress.config({ 
        editorStylingMode: 'filled' // or 'outlined' | 'underlined'
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/StylingMode/"
}