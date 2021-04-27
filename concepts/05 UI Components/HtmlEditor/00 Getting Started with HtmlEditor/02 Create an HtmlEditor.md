---

##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a HtmlEditor:

    <!-- tab: index.js -->
    $(function () {
        $('#html-editor').dxHtmlEditor({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.light.css">
            <link rel="stylesheet" href="index.css">

            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>
            <script src="products.js"></script>
            <script type="text/javascript" src="index.js"></script>
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
                <p>Supported frameworks and libraries</p>
                <table>
                    <tr>
                        <td><strong>jQuery</strong></td>
                        <td style="text-align: right;">v2.1 - v2.2 and v3.x</td>
                    </tr>
                    <tr>
                        <td><strong>Angular</strong></td>
                        <td style="text-align: right;">v7.0.x - v10.0.x</td>
                    </tr>
                    <tr>
                        <td><strong>React</strong></td>
                        <td style="text-align: right;">v16.2+</td>
                    </tr>
                    <tr>
                        <td><strong>Vue</strong></td>
                        <td style="text-align: right;">v2.6.3+</td>
                    </tr>
                </table>
            </div>
        </body>
    </html>


##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a HtmlEditor:

    <!-- tab: app.component.html -->
    <dx-html-editor id="html-editor"
        <!-- Configuration goes here -->
    >
    </dx-html-editor>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {

    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxHtmlEditorModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxHtmlEditorModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a HtmlEditor:

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxHtmlEditor id="html-editor">
                <!-- Configuration goes here -->
                <div v-html="markup"/>
            </DxHtmlEditor>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxHtmlEditor } from 'devextreme-vue/html-editor';
    import { markup } from './data.js';

    export default {
        components: {
            DxHtmlEditor
        },
        data() {
            return {
                markup
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    export const markup = `
        <h2>
            <img src="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/widgets/HtmlEditor.svg" alt="HtmlEditor">
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
        <p>Supported frameworks and libraries</p>
        <table>
            <tr>
                <td><strong>jQuery</strong></td>
                <td style="text-align: right;">v2.1 - v2.2 and v3.x</td>
            </tr>
            <tr>
                <td><strong>Angular</strong></td>
                <td style="text-align: right;">v7.0.x - v10.0.x</td>
            </tr>
            <tr>
                <td><strong>React</strong></td>
                <td style="text-align: right;">v16.2+</td>
            </tr>
            <tr>
                <td><strong>Vue</strong></td>
                <td style="text-align: right;">v2.6.3+</td>
            </tr>
        </table>
    `;


##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a HtmlEditor:

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { markup } from "./data.js";
    import { HtmlEditor } from 'devextreme-react/htmlEditor';

    App = () => {
        return (
            <>
                <HtmlEditor defaultValue={markup}>
                    {/* Configuration goes here */}
                </HtmlEditor>
            </>
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const markup = `
        <h2>
            <img src="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/widgets/HtmlEditor.svg" alt="HtmlEditor">
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
        <p>Supported frameworks and libraries</p>
        <table>
            <tr>
                <td><strong>jQuery</strong></td>
                <td style="text-align: right;">v2.1 - v2.2 and v3.x</td>
            </tr>
            <tr>
                <td><strong>Angular</strong></td>
                <td style="text-align: right;">v7.0.x - v10.0.x</td>
            </tr>
            <tr>
                <td><strong>React</strong></td>
                <td style="text-align: right;">v16.2+</td>
            </tr>
            <tr>
                <td><strong>Vue</strong></td>
                <td style="text-align: right;">v2.6.3+</td>
            </tr>
        </table>
    `;

---