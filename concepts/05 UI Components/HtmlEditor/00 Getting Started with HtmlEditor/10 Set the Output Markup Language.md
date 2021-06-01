The HtmlEditor can output markup in HTML or Markdown. Use the [valueType](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#valueType) property to define the language. If you use Markdown, add the <a href="https://www.npmjs.com/package/turndown" target="_blank">turndown</a> and <a href="https://www.npmjs.com/package/showdown" target="_blank">showdown</a> libraries to your project. In this tutorial, HTML is used as the output language.

The control stores the document markup in the [value](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value) property. If you use this property to specify the document's initial content, the language should match **valueType**. You can also declare HTML content inside the HtmlEditor element. In this case, the language (HTML) and **valueType** can differ.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#html-editor").dxHtmlEditor({
            valueType: "html" 
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
        </head>
        <body class="dx-viewport">
            <div id="html-editor">
                <h2>
                    <img src="HtmlEditor.svg" alt="HtmlEditor">
                    Rich Text Editor (HTML Editor)
                </h2>
                <br>
                <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
                <p>Supported features:</p>
                <ul>
                    <li>Inline formats:
                        <ul>
                            <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                            <li>Typeface, font size, text color changes (HTML only)</li>
                        </ul>
                    </li>
                    <li>Block formats:
                        <ul>
                            <li>Headers</li>
                            <li>Lists (ordered and unordered)</li>
                            <li>Code blocks</li>
                            <li>Quotes</li>
                        </ul>
                    </li>
                    <li>Built-in format customization</li>
                    <li>HTML and Markdown support</li>
                    <li>Mail Merge</li>
                    <li>Adaptive toolbar for working with images, links, and color formats</li>
                    <li>Copy-paste rich content (the control strips unsupported formats)</li>
                    <li>Embedded images specified as a link to an image file or as base64-encoded binary data</li>
                    <li>Mention (for example, @person)</li>
                    <li>Tables</li>
                </ul>
                <br>
                <p>The editor supports the following frameworks and libraries:</p>
                <table>
                    <tr>
                        <td><strong>jQuery</strong></td>
                        <td>v2.1 - v2.2 and v3.x</td>
                    </tr>
                    <tr>
                        <td><strong>Angular</strong></td>
                        <td>v7.0.x - v11.0.x</td>
                    </tr>
                    <tr>
                        <td><strong>React</strong></td>
                        <td>v16.2+</td>
                    </tr>
                    <tr>
                        <td><strong>Vue</strong></td>
                        <td>v2.6.3+</td>
                    </tr>
                </table>
            </div>
        </body>
    </html>

    <!-- tab: index.css -->
    .dx-htmleditor-content img {
        vertical-align: middle;
    }
    
    .dx-htmleditor-content table {
        width: 50%;
    }

    .dx-htmleditor-content table td:last-child {
        text-align: right;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor valueType="html">
        <h2>
            <img src="assets/images/HtmlEditor.svg" alt="HtmlEditor">
            Rich Text Editor (HTML Editor)
        </h2>
        <br>
        <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG editor that allows its users to format textual and visual content and output it as HTML or Markdown.</p>
        <p>Supported features:</p>
        <ul>
            <li>Inline formats:
                <ul>
                    <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                    <li>Typeface, font size, text color changes (HTML only)</li>
                </ul>
            </li>
            <li>Block formats:
                <ul>
                    <li>Headers</li>
                    <li>Lists (ordered and unordered)</li>
                    <li>Code blocks</li>
                    <li>Quotes</li>
                </ul>
            </li>
            <li>Built-in format customization</li>
            <li>HTML and Markdown support</li>
            <li>Mail Merge</li>
            <li>Adaptive toolbar for working with images, links, and color formats</li>
            <li>Copy-paste rich content (the control strips unsupported formats)</li>
            <li>Embedded images specified as a link to an image file or as base64-encoded binary data</li>
            <li>Mention (for example, @person)</li>
            <li>Tables</li>
        </ul>
        <br>
        <p>The editor supports the following frameworks and libraries:</p>
        <table>
            <tr>
                <td><strong>jQuery</strong></td>
                <td>v2.1 - v2.2 and v3.x</td>
            </tr>
            <tr>
                <td><strong>Angular</strong></td>
                <td>v7.0.x - v11.0.x</td>
            </tr>
            <tr>
                <td><strong>React</strong></td>
                <td>v16.2+</td>
            </tr>
            <tr>
                <td><strong>Vue</strong></td>
                <td>v2.6.3+</td>
            </tr>
        </table>
    </dx-html-editor>

    <!-- tab: app.component.css -->
    ::ng-deep .dx-htmleditor-content img {
        vertical-align: middle;
    }

    
    ::ng-deep .dx-htmleditor-content table {
        width: 50%;
    }

    ::ng-deep .dx-htmleditor-content table td:last-child {
        text-align: right;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor value-type="html">
            <div>
                <h2>
                    <img src="./HtmlEditor.svg" alt="HtmlEditor">
                    Rich Text Editor (HTML Editor)
                </h2>
                <br>
                <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
                <p>Supported features:</p>
                <ul>
                    <li>Inline formats:
                        <ul>
                            <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                            <li>Typeface, font size, text color changes (HTML only)</li>
                        </ul>
                    </li>
                    <li>Block formats:
                        <ul>
                            <li>Headers</li>
                            <li>Lists (ordered and unordered)</li>
                            <li>Code blocks</li>
                            <li>Quotes</li>
                        </ul>
                    </li>
                    <li>Built-in format customization</li>
                    <li>HTML and Markdown support</li>
                    <li>Mail Merge</li>
                    <li>Adaptive toolbar for working with images, links, and color formats</li>
                    <li>Copy-paste rich content (the control strips unsupported formats)</li>
                    <li>Embedded images specified as a link to an image file or as base64-encoded binary data</li>
                    <li>Mention (for example, @person)</li>
                    <li>Tables</li>
                </ul>
                <br>
                <p>The editor supports the following frameworks and libraries:</p>
                <table>
                    <tr>
                        <td><strong>jQuery</strong></td>
                        <td>v2.1 - v2.2 and v3.x</td>
                    </tr>
                    <tr>
                        <td><strong>Angular</strong></td>
                        <td>v7.0.x - v11.0.x</td>
                    </tr>
                    <tr>
                        <td><strong>React</strong></td>
                        <td>v16.2+</td>
                    </tr>
                    <tr>
                        <td><strong>Vue</strong></td>
                        <td>v2.6.3+</td>
                    </tr>
                </table>
            </div>
        </DxHtmlEditor>
    <template>

    <script>
        // ...
    </script>

    <style>
    .dx-htmleditor-content img {
        vertical-align: middle;
    }

    .dx-htmleditor-content table {
        width: 50%;
    }

    .dx-htmleditor-content table td:last-child {
        text-align: right;
    }
    </style>

##### React

    <!-- tab: App.js -->
    // ...
    const markup = `
        <div>
            <h2>
                <img src="HtmlEditor.svg" alt="HtmlEditor"/>
                Rich Text Editor (HTML Editor)
            </h2>
            <br>
            <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
            <p>Supported features:</p>
            <ul>
                <li>Inline formats:
                    <ul>
                        <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                        <li>Typeface, font size, text color changes (HTML only)</li>
                    </ul>
                </li>
                <li>Block formats:
                    <ul>
                        <li>Headers</li>
                        <li>Lists (ordered and unordered)</li>
                        <li>Code blocks</li>
                        <li>Quotes</li>
                    </ul>
                </li>
                <li>Built-in format customization</li>
                <li>HTML and Markdown support</li>
                <li>Mail Merge</li>
                <li>Adaptive toolbar for working with images, links, and color formats</li>
                <li>Copy-paste rich content (the control strips unsupported formats)</li>
                <li>Embedded images specified as a link to an image file or as base64-encoded binary data</li>
                <li>Mention (for example, @person)</li>
                <li>Tables</li>
            </ul>
            <br>
            <p>The editor supports the following frameworks and libraries:</p>
            <table>
                <tr>
                    <td><strong>jQuery</strong></td>
                    <td>v2.1 - v2.2 and v3.x</td>
                </tr>
                <tr>
                    <td><strong>Angular</strong></td>
                    <td>v7.0.x - v11.0.x</td>
                </tr>
                <tr>
                    <td><strong>React</strong></td>
                    <td>v16.2+</td>
                </tr>
                <tr>
                    <td><strong>Vue</strong></td>
                    <td>v2.6.3+</td>
                </tr>
            </table>
        </div>
    `;

    const App = () => {
        return (
            <HtmlEditor defaultValue={markup} valueType="html">
            </HtmlEditor>
        );
    };

    export default App;

    <!-- tab: App.css -->
    .dx-htmleditor-content img {
        vertical-align: middle;
    }

    .dx-htmleditor-content table {
        width: 50%;
    }

    .dx-htmleditor-content table td:last-child {
        text-align: right;
    }

---
