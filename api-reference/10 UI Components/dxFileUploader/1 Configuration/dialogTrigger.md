---
id: dxFileUploader.Options.dialogTrigger
type: String | UserDefinedElement
default: undefined
---
---
##### shortDescription
Specifies the HTML element which invokes the file upload dialog.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

You can use a selector string, jQuery object or DOM element to specify the **dialogTrigger** property:

- String

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dialogTrigger: '.open-button'

    ---

- jQuery object
	 
    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dialogTrigger: $('.open-button')

    ---

- DOM element

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dialogTrigger: $('.open-button')[0]

    ---
