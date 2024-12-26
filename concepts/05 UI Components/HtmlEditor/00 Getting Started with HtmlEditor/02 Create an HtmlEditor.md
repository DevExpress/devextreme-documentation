---
##### jQuery

The HTML Editor uses the <a href="https://github.com/DevExpress/devextreme-quill/#--devextreme-quill" target="_blank">DevExtreme Quill</a> library. To create an HtmlEditor on your page, [add DevExtreme to your application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/'), reference the DevExtreme Quill script before the main DevExtreme script, and use the following code:

    <!-- tab: index.js -->
    $(function () {
        $("#html-editor").dxHtmlEditor({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <link rel="stylesheet" href="index.css">
            <script src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx-quill.min.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="html-editor">
                <!-- Initial markup goes here -->
            </div>
        </body>
    </html>


##### Angular

The HTML Editor uses the <a href="https://github.com/DevExpress/devextreme-quill/#--devextreme-quill" target="_blank">DevExtreme Quill</a> library. This library is installed automatically when you [add DevExtreme to your application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/'). To create an HTML Editor on your page, use the following code:

    <!-- tab: app.component.html -->
    <dx-html-editor>
        <!-- Configuration goes here -->
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

The HTML Editor uses the <a href="https://github.com/DevExpress/devextreme-quill/#--devextreme-quill" target="_blank">DevExtreme Quill</a> library. This library is installed automatically when you [add DevExtreme to your application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/'). To create an HTML Editor on your page, use the following code:

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor>
            <!-- Configuration goes here -->
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxHtmlEditor } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor
        }
    }
    </script>


##### React

The HTML Editor uses the <a href="https://github.com/DevExpress/devextreme-quill/#--devextreme-quill" target="_blank">DevExtreme Quill</a> library. This library is installed automatically when you [add DevExtreme to your application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/'). To create an HTML Editor on your page, and use the following code:

    <!-- tab: App.js -->
    import React from 'react';
    import './App.css';
    import 'devextreme/dist/css/dx.light.css';
    import { HtmlEditor } from 'devextreme-react/html-editor';

    const App = () => {
        return (
            <HtmlEditor>
                {/* Configuration goes here */}
            </HtmlEditor>
        );
    }

    export default App;

---
