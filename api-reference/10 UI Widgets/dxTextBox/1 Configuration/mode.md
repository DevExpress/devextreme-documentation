---
id: dxTextBox.Options.mode
acceptValues: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
type: String
default: 'text'
---
---
##### shortDescription
The "mode" attribute value of the actual HTML input element representing the text box.

---
The value of this option affects the set of keyboard buttons shown on the mobile device when the widget gets focus. In addition, the following mode values add visual features to the widget:

 - "search" - the text box contains the "X" button, which clears the text box contents
 - "password" - the text box shows a password character instead of the actual characters typed

#include common-ref-enum with {
    enum: "`TextBoxMode`",
    values: "`Text`, `Email`, `Search`, `Tel`, `Url`, and `Password`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextBox/Overview/"
}