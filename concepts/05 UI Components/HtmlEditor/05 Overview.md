HtmlEditor is a client-side WYSIWYG editor that allows users to format textual and visual content and output it as HTML or Markdown. Supported features include:

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
- Copy-paste rich content (the control strips unsupported formats).
- [Mentions](https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Mentions/) (for example, @person)
- [Tables](/concepts/05%20UI%20Components/HtmlEditor/00%20Getting%20Started%20with%20HtmlEditor/30%20Work%20with%20Tables.md '/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/#Work_with_Tables')

## How to Use HTMLEditor

HtmlEditor is designed to create rich text and export this text to HTML or Markdown. You can also use the component to parse HTML (for example, if you set [value](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value) to markup), but this approach may not be effective since HtmlEditor does not support all HTML features. Note the following:

- If you use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM" target="_blank">Shadow DOM</a>, the HtmlEditor component may experience issues in some browsers (see <a href="https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot#browser_compatibility" target="_blank">getSelection</a>).

- HtmlEditor does not produce a fully structured HTML document with a `<!DOCTYPE>`, a `<head>`, and a `<body>`. Its purpose is to output markup that contains formatted rich content for an article, forum post, and so on.

- HtmlEditor saves only a subset of [tags and attributes](/concepts/05%20UI%20Components/HtmlEditor/05%20Tags%20and%20Attributes.md '/Documentation/Guide/UI_Components/HtmlEditor/Tags_and_Attributes/'). Everything else is discarded.

- HtmlEditor automatically reduces unnecessary tags:

        <!-- from -->
        <p><span>He</span><em><span>llo</span></em></p>

        <!-- to -->
        <p>He<em>llo</em></p>

- The component is not designed to convert text that is enclosed into `{}` characters into a variable. Markup with such text is processed as plain text.

- The HtmlEditor tables are native HTML tables and use native features, which leads to limitations. For example, users cannot past multiline text in separate cells.

- The HtmlEditor tables are not designed to add complex elements to cells like block elements, lists, nested tables, etc.

- HtmlEditor does not support pasting text from Microsoft Word.