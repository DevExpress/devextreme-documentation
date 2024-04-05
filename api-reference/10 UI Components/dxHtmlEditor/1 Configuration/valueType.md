---
id: dxHtmlEditor.Options.valueType
type: Enums.MarkupType
default: 'html'
---
---
##### shortDescription
Specifies in which markup language the [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value') is stored.

---
Markdown requires the <a href="https://www.npmjs.com/package/turndown" target="_blank">turndown</a> and <a href="https://www.npmjs.com/package/showdown" target="_blank">showdown</a> libraries. If you use browser scripts, link them before the DevExtreme scripts as shown below:

    <script src="https://unpkg.com/turndown/dist/turndown.js"></script>
    <script src="https://unpkg.com/showdown/dist/showdown.min.js"></script>
    <!-- DevExtreme scripts go here -->

If you use JavaScript modules, import the Markdown converter:

    import "devextreme/ui/html_editor/converters/markdown";
    // or
    // require("ui/html_editor/converters/markdown");

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/OutputFormats/"
}
