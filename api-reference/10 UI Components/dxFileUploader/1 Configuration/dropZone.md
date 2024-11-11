---
id: dxFileUploader.Options.dropZone
type: String | UserDefinedElement | undefined
default: undefined
---
---
##### shortDescription
Specifies the HTML element in which users can drag and drop files for upload.

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
                dropZone: '.test-div'
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            dropZone=".test-div"
        >
        </dx-{widget-name}>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                drop-zone=".test-div"
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
                    dropZone=".test-div"
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
                dropZone: $('.test-div')
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
                dropZone: document.querySelector('.test-div')
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            [dropZone]="targetElement"
        >
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        // ...
        export class AppComponent {
            targetElement: Element;
            constructor() {
                this.targetElement = document.querySelector('.test-div') as Element;
            }
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                :drop-zone="targetElement"
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
                this.targetElement = document.querySelector('.test-div');
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
                setTargetElement(document.querySelector('.test-div'));
            }, []);
            return (
                <{WidgetName} ... 
                    dropZone={targetElement}
                >
                </{WidgetName}>
            );
        }

    ---

[note]
A custom drop zone (**dropZone** property) is not supported in **useForm** [upload modes](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode').

#####See Also#####
- [onDropZoneEnter](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/onDropZoneEnter.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#onDropZoneEnter')
- [onDropZoneLeave](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/onDropZoneLeave.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#onDropZoneLeave')