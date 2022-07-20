This property accepts one of the following values:

- A <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors" target="_blank">CSS selector</a>, or a <a href="https://api.jquery.com/category/selectors/" target="_blank">jQuery selector</a> if you use jQuery

    ---
    ##### jQuery

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                target: '#targetElement'
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            target="#targetElement"
        >
        </dx-{widget-name}>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                target="#targetElement"
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
                    target="#targetElement"
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
                target: $('#targetElement')
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
                target: document.getElementById('#targetElement')
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            [target]="targetElement"
        >
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        // ...
        export class AppComponent {
            targetElement: Element;
            constructor() {
                this.targetElement = document.getElementById('#targetElement') as Element;
            }
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                :target="targetElement"
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
                this.targetElement = document.getElementById('targetElement');
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
                setTargetElement(document.getElementById('targetElement'));
            }, []);
            return (
                <{WidgetName} ... 
                    target={targetElement}
                >
                </{WidgetName}>
            );
        }

    ---
