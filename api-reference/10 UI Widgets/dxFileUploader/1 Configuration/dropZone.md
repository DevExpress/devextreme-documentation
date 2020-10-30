---
id: dxFileUploader.Options.dropZone
type: String | Element | jQuery
default: undefined
---
---
##### shortDescription
Specifies the HTML element in which users can drag and drop files for upload.

---

You can use a selector string, jQuery object or DOM element to specify the **dropZone** option:

- String

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dropZone: '.test-div'

    ---

- jQuery object
	 
    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dropZone: $('.test-div')

    ---

- DOM element

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dropZone: $('.test-div')[0]

    ---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

[note]
A custom drop zone (**dropZone** option) is not supported in **useForms** [upload modes](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode).

#####See Also#####
- [onDropZoneEnter](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onDropZoneEnter)
- [onDropZoneLeave](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onDropZoneLeave)