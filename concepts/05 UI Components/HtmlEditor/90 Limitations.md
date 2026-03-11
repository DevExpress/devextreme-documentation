The HTML Editor is designed to create rich text and export it in HTML. You can also use this component to parse HTML content (for example, if you set [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value') to markup). However, since the HTML Editor does not support all HTML features, the following limitations apply:

- If you use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM" target="_blank">Shadow DOM</a>, the HTML Editor component may experience issues in some browsers (see <a href="https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot#browser_compatibility" target="_blank">getSelection</a>).

- The HTML Editor does not produce a fully structured HTML document with `<!DOCTYPE>`, `<head>`, and `<body>` tags. The editor is meant to export simple markup that contains formatted rich content for an article, forum post, etc.

- HTML Editor saves only a limited subset of [tags and attributes](/concepts/05%20UI%20Components/HtmlEditor/05%20Tags%20and%20Attributes.md '/Documentation/Guide/UI_Components/HtmlEditor/Tags_and_Attributes/'). All other formatting attributes and features are discarded.

- When HTML Editor loads markup (specified in [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value')), the component removes redundant tags:

        <!-- from -->
        <p><span>Hello</span><em><span>World</span></em></p>

        <!-- to -->
        <p>Hello<em>World</em></p>

- The component merges the following elements:

   - All consecutive tables.
   - Consecutive inline tags that match and contain identical attributes:
    
    <nbsp>

        <!-- from -->
        <a href="/">Hello</a><a href="/">World</a>
        
        <!-- to -->
        <a href="/">HelloWorld</a>

    To avoid this behavior, separate these elements with tags such as `<br>`.

- The HTML Editor trims extra spaces and tab characters passed to the [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value') option.

- The component is not designed to convert text enclosed in curly brackets (`{}`) to a variable. Content in curly brackets is always treated as plain text.

- HTML Editor tables are native HTML tables and use native features; therefore, the same limitations apply. For example, users cannot paste multiline text in separate cells.

- HTML Editor tables do not support complex elements in cells, such as block elements, lists, and nested tables.

- The HTML Editor does not fully support complex clipboard data from HTML pages and word processing applications such as Microsoft Word®. It also does not fully support pasted data from online spreadsheet applications such as Google Sheets™.

- Copy-pasting large or multiple images into the HTML Editor can slow down input. To prevent this, use the [image upload](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/imageUpload '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/imageUpload/') feature and block image pasting, as shown in this GitHub example:

    #include btn-open-github with {
        href: "https://github.com/DevExpress-Examples/devextreme-html-editor-prevent-inserting-images"
    }

- The component wraps each "Normal text" block in a `<p>` tag (individual lines or multi-line blocks if [allowSoftLineBreak](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/allowSoftLineBreak.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#allowSoftLineBreak') is enabled). These `<p>` elements cannot be removed. However, you can replace  `<p>` tags with another tag (for instance, a `<div>`). The following code snippet demonstrates how:

    ---

    ##### jQuery

        <!-- tab: index.js -->
        let block = DevExpress.Quill.import('blots/block');
        block.tagName = 'DIV';
        DevExpress.Quill.register(block, true);
        
        $('#htmleditor').dxHtmlEditor({ ... })

    ##### Angular

        <!-- tab: app.component.ts -->
        import Quill from 'devextreme-quill'

        let block = Quill.import('blots/block');
        block.tagName = 'DIV';
        Quill.register(block, true);

    ##### Vue

        <!-- tab: App.vue -->
        <script setup lang="ts">
        import Quill from 'devextreme-quill'

        let block = Quill.import('blots/block');
        block.tagName = 'DIV';
        Quill.register(block, true);
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import Quill from 'devextreme-quill'

        let block = Quill.import('blots/block');
        block.tagName = 'DIV';
        Quill.register(block, true);

    ---
