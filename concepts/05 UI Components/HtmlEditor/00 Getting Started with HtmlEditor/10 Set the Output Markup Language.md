The HtmlEditor can output markup in HTML or Markdown. Use the [valueType](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#valueType) property to define the language. If you use Markdown, add the <a href="https://www.npmjs.com/package/turndown" target="_blank">turndown</a> and <a href="https://www.npmjs.com/package/showdown" target="_blank">showdown</a> libraries to your project. In this tutorial, HTML is used as the output language.

Output markup is stored in the [value](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value) property. You can also use it to specify initial content, in which case the content's language should correspond to the **valueType**. Alternatively, HTML content can be declared directly inside the HtmlEditor element. In this case, the language (HTML) and the **valueType** can differ.

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
                    Formatted Text Editor (HTML Editor)
                </h2>
                <br>
                <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
                <p>Supported features:</p>
                <ul>
                    <li>Inline formats:
                        <ul>
                            <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                            <li>Font, size, color changes (HTML only)</li>
                        </ul>
                    </li>
                    <li>Block formats:
                        <ul>
                            <li>Headers</li>
                            <li>Text alignment</li>
                            <li>Lists (ordered and unordered)</li>
                            <li>Code blocks</li>
                            <li>Quotes</li>
                        </ul>
                    </li>
                    <li>Custom formats</li>
                    <li>HTML and Markdown support</li>
                    <li>Mail-merge placeholders (for example, %username%)</li>
                    <li>Adaptive toolbar for working images, links, and color formats</li>
                    <li>Insert images as a link or base64 (drag and drop images to convert them to base64)</li>
                    <li>Copy-paste rich content (unsupported formats are removed)</li>
                    <li>Tables support</li>
                </ul>
                <br>
                <p>Supported frameworks and libraries:</p>
                <table>
                    <tr>
                        <td><strong>jQuery</strong></td>
                        <td>v2.1 - v2.2 and v3.x</td>
                    </tr>
                    <tr>
                        <td><strong>Angular</strong></td>
                        <td>v7.0.x - v10.0.x</td>
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
            Formatted Text Editor (HTML Editor)
        </h2>
        <br>
        <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
        <p>Supported features:</p>
        <ul>
            <li>Inline formats:
                <ul>
                    <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                    <li>Font, size, color changes (HTML only)</li>
                </ul>
            </li>
            <li>Block formats:
                <ul>
                    <li>Headers</li>
                    <li>Text alignment</li>
                    <li>Lists (ordered and unordered)</li>
                    <li>Code blocks</li>
                    <li>Quotes</li>
                </ul>
            </li>
            <li>Custom formats</li>
            <li>HTML and Markdown support</li>
            <li>Mail-merge placeholders (for example, %username%)</li>
            <li>Adaptive toolbar for working images, links, and color formats</li>
            <li>Insert images as a link or base64 (drag and drop images to convert them to base64)</li>
            <li>Copy-paste rich content (unsupported formats are removed)</li>
            <li>Tables support</li>
        </ul>
        <br>
        <p>Supported frameworks and libraries:</p>
        <table>
            <tr>
                <td><strong>jQuery</strong></td>
                <td>v2.1 - v2.2 and v3.x</td>
            </tr>
            <tr>
                <td><strong>Angular</strong></td>
                <td>v7.0.x - v10.0.x</td>
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
                    Formatted Text Editor (HTML Editor)
                </h2>
                <br>
                <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
                <p>Supported features:</p>
                <ul>
                    <li>Inline formats:
                        <ul>
                            <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                            <li>Font, size, color changes (HTML only)</li>
                        </ul>
                    </li>
                    <li>Block formats:
                        <ul>
                            <li>Headers</li>
                            <li>Text alignment</li>
                            <li>Lists (ordered and unordered)</li>
                            <li>Code blocks</li>
                            <li>Quotes</li>
                        </ul>
                    </li>
                    <li>Custom formats</li>
                    <li>HTML and Markdown support</li>
                    <li>Mail-merge placeholders (for example, %username%)</li>
                    <li>Adaptive toolbar for working images, links, and color formats</li>
                    <li>Insert images as a link or base64 (drag and drop images to convert them to base64)</li>
                    <li>Copy-paste rich content (unsupported formats are removed)</li>
                    <li>Tables support</li>
                </ul>
                <br>
                <p>Supported frameworks and libraries:</p>
                <table>
                    <tr>
                        <td><strong>jQuery</strong></td>
                        <td>v2.1 - v2.2 and v3.x</td>
                    </tr>
                    <tr>
                        <td><strong>Angular</strong></td>
                        <td>v7.0.x - v10.0.x</td>
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
                Formatted Text Editor (HTML Editor)
            </h2>
            <br/>
            <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
            <p>Supported features:</p>
            <ul>
                <li>Inline formats:
                    <ul>
                        <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                        <li>Font, size, color changes (HTML only)</li>
                    </ul>
                </li>
                <li>Block formats:
                    <ul>
                        <li>Headers</li>
                        <li>Text alignment</li>
                        <li>Lists (ordered and unordered)</li>
                        <li>Code blocks</li>
                        <li>Quotes</li>
                    </ul>
                </li>
                <li>Custom formats</li>
                <li>HTML and Markdown support</li>
                <li>Mail-merge placeholders (for example, %username%)</li>
                <li>Adaptive toolbar for working images, links, and color formats</li>
                <li>Insert images as a link or base64 (drag and drop images to convert them to base64)</li>
                <li>Copy-paste rich content (unsupported formats are removed)</li>
                <li>Tables support</li>
            </ul>
            <br/>
            <p>Supported frameworks and libraries:</p>
            <table>
                <tr>
                    <td><strong>jQuery</strong></td>
                    <td>v2.1 - v2.2 and v3.x</td>
                </tr>
                <tr>
                    <td><strong>Angular</strong></td>
                    <td>v7.0.x - v10.0.x</td>
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