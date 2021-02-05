By default, exactly one panel can be in the expanded state at one moment. To change this, switch the [collapsible](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/collapsible.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#collapsible') and [multiple](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#multiple') properties to _true_.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#accordionContainer").dxAccordion({
            // ...
            // All panels may be collapsed
            collapsible: true,
            // Multiple panels may be expanded
            multiple: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-accordion
        [collapsible]="true" <!-- All panels may be collapsed -->
        [multiple]="true">   <!-- Multiple panels may be expanded -->
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion
            :collapsible="true" <!-- All panels may be collapsed -->
            :multiple="true">   <!-- Multiple panels may be expanded -->
        </DxAccordion>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxAccordion from "devextreme-vue/accordion";

    export default {
        components: {
            DxAccordion
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Accordion } from 'devextreme-react/accordion';

    class App extends React.Component {
        render() {
            return (
                <Accordion
                    collapsible={true} {/* All panels may be collapsed */}
                    multiple={true}>   {/* Multiple panels may be expanded */}
                </Accordion>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Accordion Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Accordion/Overview)
- [Accordion API Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Components/dxAccordion/')

[tags]accordion, behavior, collapse, expand, multiple