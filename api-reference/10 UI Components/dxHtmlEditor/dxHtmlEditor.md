---
id: dxHtmlEditor
module: ui/html_editor
export: default
inherits: Editor
---
---
##### shortDescription
HtmlEditor is a WYSIWYG editor that allows you to format textual and visual content and to output it in HTML. HtmlEditor is built on top of and requires the <a href="https://github.com/DevExpress/devextreme-quill/" target="_blank">DevExtreme Quill</a>.

##### widgettree
value: "This is <b>HtmlEditor</b>.<br/>Select text and use a toolbar item.",
toolbar: {
    items: ["bold", "italic", "color", "background", "link",
    {
        name: "header",
        acceptedValues: [1, 2, 3, false]
    }, "variable"
    ]
},
variables: {
    dataSource: [ "FirstName", "LastName", "Company" ],
    escapeChar: [ "{", "}" ]
}

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
}
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget