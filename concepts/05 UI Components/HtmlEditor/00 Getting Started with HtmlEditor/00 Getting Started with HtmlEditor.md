The HtmlEditor is a client-side WYSIWYG editor that allows its users to format textual and visual content and output it as HTML or Markdown. Supported features:

- [Inline formats](/Documentation/Guide/UI_Components/HtmlEditor/Formats/):
    - **Bold**, *italic*, <s>strikethrough</s> text formatting
    - Typeface, font size, text color changes (HTML only)
- [Block formats](/Documentation/Guide/UI_Components/HtmlEditor/Formats/):
    - Headers
    - Lists (ordered and unordered)
    - Code blocks
    - Quotes
- [Built-in format customization](/Documentation/Guide/UI_Components/HtmlEditor/Formats/#Customize_Built-In_Formats_and_Modules)
- [HTML and Markdown support](/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Set_the_Output_Markup_Language)
- [Mail Merge](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/variables/)
- [Adaptive toolbar](/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Configure_the_Toolbar) for working with images, links, and color formats
- Copy-paste rich content (the control strips unsupported formats)
- Embedded images specified as a link to an image file or as base64-encoded binary data
- [Mentions](https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Mentions/) (for example, @person)
- [Tables](/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Work_with_Tables)

Note the following about the HtmlEditor functionality:

- The HtmlEditor does not produce a fully structured HTML document with a `<!DOCTYPE>`, a `<head>`, and a `<body>`. Its purpose is to output markup that contains formatted rich content for an article, forum post, and so on.

- The HtmlEditor saves only a subset of [tags and attributes](/Documentation/Guide/UI_Components/HtmlEditor/Tags_and_Attributes/). Everything else is discarded.

This tutorial explains how to add an HtmlEditor to a page and configure its core features. The following control demonstrates the result:

<div class="simulator-desktop-container" data-view="/Content/Applications/21_2/GettingStartedWith/HtmlEditor/index.html, /Content/Applications/21_2/GettingStartedWith/HtmlEditor/index.js, /Content/Applications/21_2/GettingStartedWith/HtmlEditor/index.css"></div>

Refer to the following sections for details on each configuration step. You can also find the full code in the following GitHub repository: <a href="https://github.com/DevExpress-Examples/getting-started-with-htmlEditor" target="_blank">Getting Started with HtmlEditor</a>.

[tags] dxHtmlEdtior, rich text editor
