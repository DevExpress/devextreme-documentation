To export the UI component using the API, call the [exportTo(fileName, format)](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/UI_Components/dxSankey/Methods/#exportTofileName_format') method and pass the file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. Call the [print()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/UI_Components/dxSankey/Methods/#print') method to print the UI component. This command opens the browser's **Print** window.

---
##### jQuery

    <!--JavaScript-->
    var sankey = $("#sankeyContainer").dxSankey("instance");
    sankey.exportTo("exported_sankey", "PDF");
    sankey.print();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxSankeyModule, DxSankeyComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxSankeyComponent, { static: false }) sankey: DxSankeyComponent;
        // Prior to Angular 8
        // @ViewChild(DxSankeyComponent) sankey: DxSankeyComponent;
        exportSankey() {
            this.sankey.instance.exportTo("exported_sankey", "PDF");
        };
        printSankey() {
            this.sankey.instance.print();
        };
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey ref="sankey" />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey
        },
        methods: {
            exportSankey () {
                return this.$refs.sankey.instance.exportTo("exported_sankey", "PDF");
            },
            printSankey () {
                return this.$refs.sankey.instance.print();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import Sankey, { type SankeyRef } from 'devextreme-react/sankey';

    function App() {
        const sankeyRef = useRef<SankeyRef>(null);

        const exportSankey = useCallback(() => {
            const sankey = sankeyRef.current?.instance();
            sankey?.exportTo('exported_sankey', 'PDF');
        }, []);

        const printSankey = useCallback(() => {
            const sankey = sankeyRef.current?.instance();
            sankey?.print();
        }, []);

        return (
            <Sankey ref={sankeyRef} />
        );
    }

    export default App;

---

You can also export several UI components simultaneously using their SVG markup. Call the [DevExpress.viz.getMarkup(widgetInstances)](/api-reference/50%20Common/utils/viz/getMarkup(widgetInstances).md '/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances') method to collect the markup from all the required UI components and pass it to the [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method.

---
##### jQuery

    <!--JavaScript-->
    var sankey1 = $("#sankeyContainer1").dxSankey("instance");
    var sankey2 = $("#sankeyContainer2").dxSankey("instance");
    var sankeyMarkup = DevExpress.viz.getMarkup([sankey1, sankey2]);
    
    DevExpress.viz.exportFromMarkup(sankeyMarkup, {
        height: 768,
        width: 1024,
        fileName: "exported_sankeys",
        format: "PDF"
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxSankeyModule, DxSankeyComponent } from "devextreme-angular";
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";
    // ...
    export class AppComponent {
        @ViewChild("sankeyContainer1", { static: false }) sankey1: DxSankeyComponent;
        @ViewChild("sankeyContainer2", { static: false }) sankey2: DxSankeyComponent;
        // Prior to Angular 8
        // @ViewChild("sankeyContainer1") sankey1: DxSankeyComponent;
        // @ViewChild("sankeyContainer2") sankey2: DxSankeyComponent;
        exportSeveralSankeys() {
            let sankeyMarkup = getMarkup([this.sankey1.instance, this.sankey2.instance]);
            exportFromMarkup(sankeyMarkup, {
                height: 768,
                width: 1024,
                fileName: "exported_sankeys",
                format: "PDF"
            });
        };
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-sankey id="sankeyContainer1" ... ></dx-sankey>
    <dx-sankey id="sankeyContainer2" ... ></dx-sankey>

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey ref="sankey1" />
        <DxSankey ref="sankey2" />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';
    import { getMarkup, exportFromMarkup } from 'devextreme/viz/export';

    export default {
        components: {
            DxSankey
        },
        methods: {
            exportSeveralSankeys () {
                const sankey1 = this.$refs.sankey1.instance;
                const sankey2 = this.$refs.sankey2.instance;
                const sankeyMarkup = getMarkup([sankey1, sankey2]);
                exportFromMarkup(sankeyMarkup, {
                    height: 768,
                    width: 1024,
                    fileName: "exported_sankeys",
                    format: "PDF"
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import Sankey, { type SankeyRef } from 'devextreme-react/sankey';
    import { getMarkup, exportFromMarkup } from 'devextreme/viz/export';

    function App() {
        const sankey1Ref = useRef<SankeyRef>(null);
        const sankey2Ref = useRef<SankeyRef>(null);

        const exportSeveralSankeys = useCallback(() => {
            const sankey1 = sankey1Ref.current?.instance();
            const sankey2 = sankey2Ref.current?.instance();
            if (!sankey1 || !sankey2) {
                return;
            }
            const sankeyMarkup = getMarkup([sankey1, sankey2]);
            exportFromMarkup(sankeyMarkup, {
                height: 768,
                width: 1024,
                fileName: 'exported_sankeys',
                format: 'PDF'
            });
        }, []);

        return (
            <>
                <Sankey ref={sankey1Ref} />
                <Sankey ref={sankey2Ref} />
            </>
        );
    }

    export default App;

---
