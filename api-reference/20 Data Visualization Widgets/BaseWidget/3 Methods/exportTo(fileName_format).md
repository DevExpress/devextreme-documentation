---
##### shortDescription
Exports the widget into a document with a specified name and format.

##### param(fileName): String
The name of a destination file.

##### param(format): String
A required format.<br/>
Accepted Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'

---
[note]**IE9** and **Safari on Mac OS** do not implement an API for saving files. Therefore, exporting in these browsers requires setting up a server-side proxy. For details, refer to the **export** | [proxyUrl](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/proxyUrl.md '{basewidgetpath}/Configuration/export#proxyUrl') option description.

#####See Also#####
- [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/3%20Methods/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options') - exports the widget using its SVG markup.
- [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export') - configures client-side export and printing.
- [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '{basewidgetpath}/Methods#print') - opens the browser's print window.