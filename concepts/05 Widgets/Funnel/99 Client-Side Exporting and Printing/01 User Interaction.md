To export or print the **Funnel**, a user clicks the *"Exporting/Printing"* button and selects a command from the drop-down menu. The **Print** command opens the browser's **Print** window that lets the user select preferred printing settings and send the print job to the printer. The other commands save a file of the selected format in the user's local storage.

![Funnel Export Menu](/images/Funnel/visual_elements/export-menu.png)

You can enable both exporting and printing by setting the [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/export/').**enabled** option to **true**. If you need only exporting to be available to the user, disable printing by assigning **false** to the **export**.[printingEnabled](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/printingEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/export/#printingEnabled') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            export: {
                enabled: true,
                printingEnabled: false
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-export
            [enabled]="true"
            [printingEnabled]="false">
        </dxo-export>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel ... >
            <DxExport
                :enabled="true"
                :printing-enabled="false"
            />
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, { DxExport } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxExport
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, { Export } from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <Export 
                        enabled={true}
                        printingEnabled={false}
                    />
                </Funnel>
            );
        }
    }

    export default App;

---

If you want to restrict the set of formats available for exporting, change the **export**.[formats](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/formats.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/export/#formats') array. You can also specify the default name for the exported file using the [fileName](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/fileName.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/export/#fileName') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            export: {
                enabled: true,
                formats: ["PNG", "JPEG"],
                fileName: "exported_funnel"
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-export
            [enabled]="true"
            [formats]="['PNG', 'JPEG']"
            fileName="exported_funnel">
        </dxo-export>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel ... >
            <DxExport
                :enabled="true"
                :formats="exportFormats"
                file-name="exported_funnel"
            />
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, { DxExport } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxExport
        },
        data() {
            return {
                exportFormats: ['PNG', 'JPEG']
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, { Export } from 'devextreme-react/funnel';

    const exportFormats = ['PNG', 'JPEG'];

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <Export 
                        enabled={true}
                        formats={exportFormats}
                        fileName="exported_funnel"
                    />
                </Funnel>
            );
        }
    }

    export default App;

---

To support exporting and printing in **Safari on MacOS**, you need to set up a proxy on your server. For details, see the [Set Up a Server-Side Proxy](/concepts/05%20Widgets/Chart/99%20Client-Side%20Exporting%20and%20Printing/30%20Set%20Up%20a%20Server-Side%20Proxy '/Documentation/Guide/Widgets/Chart/Client-Side_Exporting_and_Printing/#Set_Up_a_Server-Side_Proxy') topic.
