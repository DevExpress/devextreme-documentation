---
id: dxHtmlEditor.getText(index, length)
---
---
##### shortDescription
Retrieves text content from the HTML Editor.

##### param(index): Number
A zero-based index at which the retrieved text starts.

##### param(length): Number
The number of characters to retrieve.

##### return: String
The retrieved text content.

---
This method skips [mentions](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/mentions '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mentions/') and [variables](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/variables '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/variables/'). To get them, use the QuillJS [getContents()](https://quilljs.com/docs/api#getcontents) method:

    <!--JavaScript-->
    const quill = htmlEditorInstance.getQuillInstance();
    quill.getContents().forEach((contentItem) => {
        if (contentItem.insert.variable) { // is a variable
            // Your configuration goes here
        } else if (contentItem.insert.mention) { // is a mention
            // Your configuration goes here
        } else { // is a plain text
            // Your configuration goes here
        }
    });
