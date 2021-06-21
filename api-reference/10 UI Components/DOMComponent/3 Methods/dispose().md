---
id: DOMComponent.dispose()
---
---
##### shortDescription
Disposes of all the resources allocated to the {WidgetName} instance.

---
After calling this method, remove the DOM element associated with the UI component:

    <!--JavaScript-->
    $("#my{WidgetName}").dx{WidgetName}("dispose");
    $("#my{WidgetName}").remove();

Use this method only if the UI component was created with jQuery or pure JavaScript. In Angular, Vue, and React, use conditional rendering:

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        *ngIf="condition">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            v-if="condition">
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    function Dx{WidgetName}(props) {
        if (!props.shouldRender) {
            return null;
        }

        return (
            <{WidgetName} ... >    
            </{WidgetName}>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Dx{WidgetName} shouldRender="condition" />
            );
        }
    }
    export default App;

---

#####See Also#####
- <a href="https://angular.io/guide/built-in-directives#adding-or-removing-an-element-with-ngif" target="_blank">Conditional Rendering in Angular</a>
- <a href="https://v3.vuejs.org/guide/conditional.html" target="_blank">Conditional Rendering in Vue</a>
- <a href="https://reactjs.org/docs/conditional-rendering.html" target="_blank">Conditional Rendering in React</a>