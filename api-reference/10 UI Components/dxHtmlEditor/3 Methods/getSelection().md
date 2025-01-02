---
id: dxHtmlEditor.getSelection()
---
---
##### shortDescription
Gets the selected content's position and length.

##### return: Object
The selected content's range. It has the following structure:          

- **index**     
A zero-based index at which the selection starts.
- **length**    
 The selected content's length.             
 [Embedded items](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') have a length of 1.

##### param(focus): Boolean | undefined
Pass **true** to focus the content field before getting the selected range. Otherwise, the method returns **null** if the content field doesn't have focus.

---
For example, the following code snippet inserts text into the editor at the the cursor's location:

    <!--JavaScript-->
    const newPosition = editor.getSelection(true);
    editor.insertText(newPosition.index, "text");