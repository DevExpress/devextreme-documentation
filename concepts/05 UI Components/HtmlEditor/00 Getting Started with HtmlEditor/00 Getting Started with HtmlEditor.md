#include tutorials-intro-installationnote

The HtmlEditor is a client-side WYSIWYG editor that allows its users to format textual and visual content and output it as HTML or Markdown. Supported features:

- [Inline formats](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/'):
    - **Bold**, *italic*, <s>strikethrough</s> text formatting
    - Typeface, font size, text color changes (HTML only)
- [Block formats](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/'):
    - Headers
    - Lists (ordered and unordered)
    - Code blocks
    - Quotes
- [Built-in format customization](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/33%20Customize%20Built-In%20Formats%20and%20Modules '/Documentation/Guide/UI_Components/HtmlEditor/Formats/#Customize_Built-In_Formats_and_Modules')
- [HTML and Markdown support](/concepts/05%20UI%20Components/HtmlEditor/00%20Getting%20Started%20with%20HtmlEditor/10%20Set%20the%20Output%20Markup%20Language.md '/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Set_the_Output_Markup_Language')
- [Mail Merge](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/variables '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/variables/')
- [Adaptive toolbar](/concepts/05%20UI%20Components/HtmlEditor/00%20Getting%20Started%20with%20HtmlEditor/20%20Configure%20the%20Toolbar.md '/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Configure_the_Toolbar') for working with images, links, and color formats
- Image upload: drag-and-drop images onto the form, select files from the file system, or specify a URL.
- Copy-paste rich content (the control strips unsupported formats)
- [Mentions](https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Mentions/) (for example, @person)
- [Tables](/concepts/05%20UI%20Components/HtmlEditor/00%20Getting%20Started%20with%20HtmlEditor/30%20Work%20with%20Tables.md '/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Work_with_Tables')

Note the following about the HtmlEditor functionality:

- The HtmlEditor does not produce a fully structured HTML document with a `<!DOCTYPE>`, a `<head>`, and a `<body>`. Its purpose is to output markup that contains formatted rich content for an article, forum post, and so on.

- The HtmlEditor saves only a subset of [tags and attributes](/concepts/05%20UI%20Components/HtmlEditor/05%20Tags%20and%20Attributes.md '/Documentation/Guide/UI_Components/HtmlEditor/Tags_and_Attributes/'). Everything else is discarded.

This tutorial explains how to add an HtmlEditor to a page and configure its core features. The following control demonstrates the result:

<div class="simulator-desktop-container" data-view="/Content/Applications/22_1/GettingStartedWith/HtmlEditor/index.html, /Content/Applications/22_1/GettingStartedWith/HtmlEditor/index.js, /Content/Applications/22_1/GettingStartedWith/HtmlEditor/index.css"></div>

Refer to the following sections for details on each configuration step. You can also find the full code in the following GitHub repository: <a href="https://github.com/DevExpress-Examples/getting-started-with-htmlEditor" target="_blank">Getting Started with HtmlEditor</a>.

[tags] dxHtmlEdtior, rich text editor, markdown editor
