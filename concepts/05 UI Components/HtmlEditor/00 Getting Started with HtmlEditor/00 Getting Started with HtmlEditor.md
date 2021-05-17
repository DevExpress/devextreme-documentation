The HtmlEditor is a WYSIWYG editor that allows users to format textual and visual content and output it in HTML or Markdown. The following features are supported:

- Inline, block, and embedded [formats](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') 
- [Adaptive toolbar](/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Customize_the_Toolbar) 
- [Built-in formats' and modules' extension](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/33%20Customize%20Built-In%20Formats%20and%20Modules '/Documentation/Guide/UI_Components/HtmlEditor/Formats/#Customize_Built-In_Formats_and_Modules')
- [Custom formats and modules](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/get(componentPath).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#getcomponentPath')
- [Tables](/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Work_with_Tables)
- [Mail-merge placeholders](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/variables '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/variables/') (for example, %username%)
- [Mentions](https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Mentions/) (for example, @person)
- Drag and drop images
- Copy-paste rich content (unsupported formats are removed)

The HtmlEditor has the following specificities:

- Users cannot edit the layout. The HtmlEditor is designed to format textual content only.
- Users cannot save full HTML markup. The HtmlEditor supports only a subset of [tags and attributes](/Documentation/Guide/UI_Components/HtmlEditor/Tags_and_Attributes/). Everything else is discarded.

This tutorial explains how to add an HtmlEditor to a page and configure its core features. The following control demonstrates the result:

<div class="simulator-desktop-container" data-view="/Content/Applications/21_1/GettingStartedWith/HtmlEditor/index.html, /Content/Applications/21_1/GettingStartedWith/HtmlEditor/index.js, /Content/Applications/21_1/GettingStartedWith/HtmlEditor/index.css"></div>

Refer to the following sections for details on each configuration step. You can also find the full code in the following GitHub repository: <a href="https://github.com/DevExpress-Examples/getting-started-with-htmlEditor" target="_blank">Getting Started with HtmlEditor</a>.

[tags] dxHtmlEdtior