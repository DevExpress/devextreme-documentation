The control stores the document markup in the [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value') property. You can also declare HTML content inside the HtmlEditor element.

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
        </head>
        <body class="dx-viewport">
            <div id="html-editor">
                <h2>
                    <img src="HtmlEditor.svg" alt="HTML Editor">
                    Rich Text Editor (HTML Editor)
                </h2>
                <br>
                <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML.</p>
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

[note]

To update the value at the runtime, call the [option(optionName, optionValue)](/api-reference/10%20UI%20Components/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#optionoptionName_optionValue') method:

    <!-- tab: index.js -->
    $(function () {
        const editor = $("#html-editor").dxHtmlEditor({
            valueType: "html" 
        }).dxHtmlEditor('instance');
        
        editor.option("value", "<h4>This is the new html formatted content</h4>");
    });

[/note]

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor>
        <h2>
            <img src="assets/images/HtmlEditor.svg" alt="HTML Editor">
            Rich Text Editor (HTML Editor)
        </h2>
        <br>
        <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG editor that allows its users to format textual and visual content and output it as HTML.</p>
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
        <DxHtmlEditor>
            <div>
                <h2>
                    <img src="./HtmlEditor.svg" alt="HTML Editor">
                    Rich Text Editor (HTML Editor)
                </h2>
                <br>
                <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML.</p>
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
                <img src="HtmlEditor.svg" alt="HTML Editor"/>
                Rich Text Editor (HTML Editor)
            </h2>
            <br>
            <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML.</p>
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
            <HtmlEditor defaultValue={markup}>
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
