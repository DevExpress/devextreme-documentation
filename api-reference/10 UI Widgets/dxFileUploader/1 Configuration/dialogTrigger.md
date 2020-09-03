---
id: dxFileUploader.Options.dialogTrigger
type: String | Element | jQuery
default: undefined
---
---
##### shortDescription
Specifies the HTML element which invokes the file upload dialog.

---

You can use any of the following ways to specify the **dialogTrigger** option:

- String

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dialogTrigger: '.catPicture'

    ---

- jQuery object
	 
    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dialogTrigger: $('.catPicture')

    ---

- DOM element

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        dialogTrigger: $('.catPicture')[0]

    ---
