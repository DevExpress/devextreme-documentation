HtmlEditor is designed to create rich text and export it in HTML or Markdown format. You can also use the component to parse HTML content (for example, if you set [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value') to markup). However, this technique may prove ineffective because HtmlEditor does not support all HTML features. The following limitations apply:

- If you use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM" target="_blank">Shadow DOM</a>, the HtmlEditor component may experience issues in some browsers (see <a href="https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot#browser_compatibility" target="_blank">getSelection</a>).

- HtmlEditor does not produce a fully-structured HTML document with `<!DOCTYPE>`, `<head>`, and `<body>` tags. The editor is meant to export simple markup that contains formatted rich content for an article, forum post, etc.

- HtmlEditor saves only a limited subset of [tags and attributes](/concepts/05%20UI%20Components/HtmlEditor/05%20Tags%20and%20Attributes.md '/Documentation/Guide/UI_Components/HtmlEditor/Tags_and_Attributes/'). All other formatting attributes and features are discarded.

- HtmlEditor automatically removes redundant tags:

        <!-- from -->
        <p><span>He</span><em><span>llo</span></em></p>

        <!-- to -->
        <p>He<em>llo</em></p>

- HtmlEditor trims extra space and tab characters passed to the [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value') option.

- The component is not designed to convert text enclosed in curly brackets (`{}`) to a variable. Content in curly brackets is always treated as plain text.

- The HtmlEditor tables are native HTML tables and use native features; therefore, the same limitations apply. For example, users cannot paste multiline text in separate cells.

- The HtmlEditor tables do not support complex elements in cells, such as block elements, lists, nested tables, etc.

- HtmlEditor does not support complex clipboard data formats of HTML pages and text processor applications, such as Microsoft Word®.

- HtmlEditor does not support [CSP](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy'). If you want to pass markup that contains inline styles to HtmlEditor [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value'), use `style-src 'unsafe-inline';` directive to avoid errors.
