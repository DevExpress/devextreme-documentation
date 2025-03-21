DevExtreme text editors, such as [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/'), [Autocomplete](/api-reference/10%20UI%20Components/dxAutocomplete '/Documentation/ApiReference/UI_Components/dxAutocomplete/'), and [HTML Editor](/api-reference/10%20UI%20Components/dxHtmlEditor '/Documentation/ApiReference/UI_Components/dxHtmlEditor/'), do not encode user input. We recommend that you apply third-party sanitizing tools to user input before submitting it to the server:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const editorInstance = $("#html-editor").dxHtmlEditor({
            // ...
        }).dxHtmlEditor("instance");

        $("#button").dxButton({
            useSubmitBehavior: true,
            text: "Submit the Form"
        });

        $("#form-container").on("submit", function(e) {
            const editorValue = editorInstance.option("value");
            // ...
            // Encode editorValue here with your favorite sanitizing tool before sending this value to the server 
            // ...
            
            e.preventDefault();
        });
    });

    <!-- tab: index.html -->
    <form action="your-action" id="form-container">
        <div id="html-editor"></div>
        <div id="button"></div>
    </form>

##### Angular

    <!-- tab: app.component.html -->
    <form
        action="your-action"
        (submit)="onFormSubmit($event)">
        <dx-html-editor ...
            [(value)]="editorValue">
        </dx-html-editor>
            
        <dx-button
            [useSubmitBehavior]="true"
            text="Submit the Form">
        </dx-button>
    </form>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxHtmlEditorComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {

        editorValue = '';

        onFormSubmit (e) {
            // ...
            // Encode this.editorValue here with your favorite sanitizing tool before sending this value to the server 
            // ...
            
            e.preventDefault();
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxHtmlEditorModule, DxButtonModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxHtmlEditorModule,
            DxButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <form
            action="your-action"
            @submit="handleSubmit">
            <DxHtmlEditor ... 
                v-model:value="editorValue"
            />
                
            <DxButton
                :use-submit-behavior="true"
                text="Submit the Form"
            />
        </form>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxHtmlEditor } from 'devextreme-vue/html-editor';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxHtmlEditor, 
            DxButton
        },
        data: {
            editorValue: ''
        },
        methods: {
            handleSubmit(e) {
                // ...
                // Encode this.editorValue here with your favorite sanitizing tool before sending this value to the server 
                // ...

                e.preventDefault();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor } from 'devextreme-react/html-editor';
    import { Button } from 'devextreme-react/button';

    const App = () => {
        const [editorValue, setEditorValue] = useState("");

        const onFormSubmit = useCallback((e) => {
            // ...
            // Encode editorValue here with your favorite sanitizing tool before sending this value to the server 
            // ...

            e.preventDefault();
        }, []);        

        const handleValueChange = (e) => {
            setEditorValue(e.value);
        };

        return (
            <form
                action="your-action"
                onSubmit={onFormSubmit}
                <HtmlEditor ... 
                    value={editorValue}
                    onValueChanged={handleValueChange}
                />

                <Button
                    useSubmitBehavior={true}
                    text="Submit the Form"
                />
            </form>
        );
    }

    export default App;

---
