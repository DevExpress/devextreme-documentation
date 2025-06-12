This property accepts one of the following values:

---
##### jQuery

- A <a href="https://api.jquery.com/category/selectors/" target="_blank">jQuery selector</a>.

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                target: '#targetElement'
            });
        });

- A jQuery wrapper    

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                target: $('#targetElement')
            });
        });

- A DOM element

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                target: document.getElementById('#targetElement')
            });
        });

[note] **Target** type affects the initialization of the component's [events]({basewidgetpath}/Events/). If **target** is a selector, events are initialized on the [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) with the passed selector. If **target** is a jQuery wrapper or DOM element, events are initialized on the passed element. This changes event propagation and the behavior of methods like [stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation).

##### Angular

- A <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors" target="_blank">CSS selector</a>

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            target="#targetElement"
        >
        </dx-{widget-name}>

    [note]

    The component supports only valid [CSS identifiers](https://www.w3.org/TR/CSS2/syndata.html#value-def-identifier). To target elements with invalid identifiers, specify an [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) instead.

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... 
            target="#111" // An invalid CSS identifier
        >
        </dx-{widget-name}>
        <dx-{widget-name} ... 
            target="[id='#111']" // An attribute selector
        >
        </dx-{widget-name}>

    [/note]

- A DOM element

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

[note] **Target** type affects the initialization of the component's [events]({basewidgetpath}/Events/). If **target** is a selector, events are initialized on the [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) with the passed selector. If **target** is a DOM element, events are initialized on the passed element. This changes event propagation and the behavior of methods like [stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation).

##### Vue

- A <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors" target="_blank">CSS selector</a>

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                target="#targetElement"
            >
            </Dx{WidgetName}>
        </template>
        <script setup lang="ts">
        import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';
        </script>

    [note]

    The component supports only valid [CSS identifiers](https://www.w3.org/TR/CSS2/syndata.html#value-def-identifier). To target elements with invalid identifiers, specify an [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) instead.

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... 
                target="#111" // An invalid CSS identifier
            >
            </Dx{WidgetName}>
            <Dx{WidgetName} ... 
                target="[id='#111']" // An attribute selector
            >
            </Dx{WidgetName}>
        </template>

    [/note]

- A DOM element

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

[note] **Target** type affects the initialization of the component's [events]({basewidgetpath}/Events/). If **target** is a selector, events are initialized on the [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) with the passed selector. If **target** is a DOM element, events are initialized on the passed element. This changes event propagation and the behavior of methods like [stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation).

##### React

- A <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors" target="_blank">CSS selector</a>

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

    [note]

    The component supports only valid [CSS identifiers](https://www.w3.org/TR/CSS2/syndata.html#value-def-identifier). To target elements with invalid identifiers, specify an [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) instead.

        <!-- tab: App.js -->
        import {WidgetName} from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            return (
                <{WidgetName} ... 
                    target="#111" // An invalid CSS identifier
                >
                </{WidgetName}>
                <{WidgetName} ... 
                    target="[id='#111']" // An attribute selector
                >
                </{WidgetName}>
            );
        }

    [/note]

- A DOM element

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
    
[note] **Target** type affects the initialization of the component's [events]({basewidgetpath}/Events/). If **target** is a selector, events are initialized on the [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) with the passed selector. If **target** is a DOM element, events are initialized on the passed element. This changes event propagation and the behavior of methods like [stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation).

---