---
id: dxFileUploader.Options.dropZone
type: String | UserDefinedElement
default: undefined
---
---
##### shortDescription
Specifies the HTML element in which users can drag and drop files for upload.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

You can use a selector string, jQuery object or DOM element to specify the **dropZone** property:

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
A custom drop zone (**dropZone** property) is not supported in **useForm** [upload modes](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode').

#####See Also#####
- [onDropZoneEnter](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/onDropZoneEnter.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#onDropZoneEnter')
- [onDropZoneLeave](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/onDropZoneLeave.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#onDropZoneLeave')