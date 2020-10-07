---
id: dxHtmlEditor
module: ui/html_editor
export: default
inherits: Editor
---
---
##### shortDescription
**HtmlEditor** is a WYSIWYG editor that allows you to format textual and visual content and to output it in HTML or Markdown. **HtmlEditor** is built on top of and requires the <a href="https://github.com/DevExpress/devextreme-quill/" target="_blank">DevExtreme Quill</a>.


##### widgettree
valueType: "html",
value: "This is <b>HtmlEditor</b>.<br/>Select text and use a toolbar item.",
toolbar: {
    items: ["bold", "italic", "color", "background", "link",
    {
        formatName: "header",
        formatValues: [1, 2, 3, false]
    }, "variable"
    ]
},
variables: {
    dataSource: [ "FirstName", "LastName", "Company" ],
    escapeChar: [ "{", "}" ]
}

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/HtmlEditor/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget