---
id: DOMComponent.dispose()
---
---
##### shortDescription
Disposes of all the resources allocated to the {WidgetName} instance.

---

---
##### jQuery

After calling this method, remove the DOM element associated with the UI component:

    <!--JavaScript-->
    $("#my{WidgetName}").dx{WidgetName}("dispose");
    $("#my{WidgetName}").remove();

##### Angular

Use <a href="https://angular.io/guide/built-in-directives#adding-or-removing-an-element-with-ngif" target="_blank">conditional rendering</a> instead of this method:

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        *ngIf="condition">
    </dx-{widget-name}>

##### Vue

Use <a href="https://v3.vuejs.org/guide/conditional.html" target="_blank">conditional rendering</a> instead of this method:

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

Use <a href="https://reactjs.org/docs/conditional-rendering.html" target="_blank">conditional rendering</a> instead of this method:

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
