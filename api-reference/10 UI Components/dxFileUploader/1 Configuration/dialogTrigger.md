---
id: dxFileUploader.Options.dialogTrigger
type: String | UserDefinedElement | undefined
default: undefined
---
---
##### shortDescription
Specifies the HTML element which invokes the file upload dialog.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

This property accepts one of the following values:

- A <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors" target="_blank">CSS selector</a>, or a <a href="https://api.jquery.com/category/selectors/" target="_blank">jQuery selector</a> if you use jQuery

    ---
    ##### jQuery

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                dialogTrigger: '.open-button'
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            dialogTrigger=".open-button"
        >
        </dx-{widget-name}>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                dialog-trigger=".open-button"
            >
            </Dx{WidgetName}>
        </template>
        <script>
        import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName}
            }
        };
        </script>

    ##### React

        <!-- tab: App.js -->
        import {WidgetName} from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            return (
                <{WidgetName} ... 
                    dialogTrigger=".open-button"
                >
                </{WidgetName}>
            );
        }

    ---

- A jQuery wrapper    

    ---
    ##### jQuery

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                dialogTrigger: $('.open-button')
            });
        });

    ---

- A DOM element

    ---
    ##### jQuery

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                dialogTrigger: document.querySelector('.open-button')
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            [dialogTrigger]="targetElement"
        >
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        // ...
        export class AppComponent {
            targetElement: Element;
            constructor() {
                this.targetElement = document.querySelector('.open-button') as Element;
            }
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                :dialog-trigger="targetElement"
            >
            </Dx{WidgetName}>
        </template>
        <script>
        import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName}
            },
            data() {
                return {
                    targetElement: null
                }
            },
            mounted() {
                this.targetElement = document.querySelector('.open-button');
            }
        };
        </script>

    ##### React

        <!-- tab: App.js -->
        import React, { useEffect, useState } from 'react';
        import {WidgetName} from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            const [targetElement, setTargetElement] = useState(null);
            useEffect(() => {
                setTargetElement(document.querySelector('.open-button'));
            }, []);
            return (
                <{WidgetName} ... 
                    dialogTrigger={targetElement}
                >
                </{WidgetName}>
            );
        }

    ---