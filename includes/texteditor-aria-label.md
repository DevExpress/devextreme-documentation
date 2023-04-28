To improve accessibility, use this property to specify <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label" target="_blank">aria-label</a> for the component.

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            inputAttr: {
                'aria-label': 'your-label',
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [inputAttr]="{ 'aria-label': 'your-label' }">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :input-attr="inputAttr"
        />
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                inputAttr: { 'aria-label': 'your-label' }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import {WidgetName} from 'devextreme-react/{widget-name}';

    const inputAttr = { 'aria-label': 'your-label' };

    export default function App() {
        return (
            <{WidgetName}
                inputAttr={inputAttr}
            />
        );
    }

---

You do not need to specify `aria-label` if you use [label]({basewidgetpath}/Configuration/#label).