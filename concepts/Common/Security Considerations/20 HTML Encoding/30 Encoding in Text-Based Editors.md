Text-based editors such as [TextBox](/Documentation/ApiReference/UI_Components/dxTextBox/), [AutoComplete](/Documentation/ApiReference/UI_Components/dxAutocomplete/), and [HtmlEditor](/Documentation/ApiReference/UI_Components/dxHtmlEditor/) do not provide an API to encode data out of the box. We recommend that you encode the editor output before you transfer this data to the server. One of the possible ways to do it is to wrap these editors into an HTML `form` element and override the `submit` event:


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const editorInstance = $("#html-editor").dxHtmlEditor({
            // ...
        }).dxhtmlEditor("instance");

        $("#button").dxButton({
            useSubmitBehavior: true,
            text: "Submit the Form"
        });

        $("#form-container").on("submit", function(e) {
            const editorValue = editorInstance.value;
            // Encode editor values here with your favorite sanitizing tool before sending them to the server 
            
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
            #editorRef>
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
        @ViewChild('editorRef', { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild('editorRef') htmlEditor: DxHtmlEditorComponent;

        onFormSubmit = function(e) {
            this.editorValue = this.htmlEditor.instance.value;
            // Encode editor values here with your favorite sanitizing tool before sending them to the server 
            
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
            @submit="onFormSubmit($event)">
            <DxHtmlEditor ... 
                :ref="editorRef"
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

    const editorRef = "htmlEditor";

    export default {
        components: {
            DxHtmlEditor, 
            DxButton
        },
        data: {
            editorRef
        },
        computed: {
            htmlEditor: function() {
                return this.$refs[editorRef].instance;
            }
        },
        methods: {
            handleSubmit(e) {
                this.editorValue = this.htmlEditor.instance.value;
                // Encode editor values here with your favorite sanitizing tool before sending them to the server 

                e.preventDefault();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor } from 'devextreme-react/html-editor';
    import { Button } from 'devextreme-react/button';

    const App = () => {
        const editorRef = useRef(null);

        const onFormSubmit = useCallback((e) => {
            const editorValue = editorRef.current.instance.value;
            {/* Encode editor values here with your favorite sanitizing tool before sending them to the server */}

            e.preventDefault();
        }, []);


        return (
            <form
                action="your-action"
                onSubmit={onFormSubmit}
                <HtmlEditor ... 
                    ref={editorRef}
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