This property accepts one of the following values:

- A <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors" target="_blank">CSS selector</a>, or a <a href="https://api.jquery.com/category/selectors/" target="_blank">jQuery selector</a> if you use jQuery

    ---
    ##### jQuery

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                container: '#containerElement'
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            container="#containerElement"
        >
        </dx-{widget-name}>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                container="#containerElement"
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
                    container="#containerElement"
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
                container: $('#containerElement')
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
                container: document.getElementById('#containerElement')
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            [container]="containerElement"
        >
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        // ...
        export class AppComponent {
            containerElement: Element;
            constructor() {
                this.containerElement = document.getElementById('#containerElement') as Element;
            }
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                :container="containerElement"
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
                    containerElement: null
                }
            },
            mounted() {
                this.containerElement = document.getElementById('containerElement');
            }
        };
        </script>

    ##### React

        <!-- tab: App.js -->
        import React, { useEffect, useState } from 'react';
        import {WidgetName} from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            const [containerElement, setContainerElement] = useState(null);
            useEffect(() => {
                setContainerElement(document.getElementById('containerElement'));
            }, []);
            return (
                <{WidgetName} ... 
                    container={containerElement}
                >
                </{WidgetName}>
            );
        }

    ---
