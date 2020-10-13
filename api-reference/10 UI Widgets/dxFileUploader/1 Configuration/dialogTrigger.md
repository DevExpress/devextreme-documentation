---
id: dxFileUploader.Options.dialogTrigger
type: String | Element | jQuery
default: undefined
---
---
##### shortDescription
Specifies the HTML element a click on which invokes the file upload dialog.

---

You can use a selector string, jQuery object or DOM element to specify the **dialogTrigger** option:

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
