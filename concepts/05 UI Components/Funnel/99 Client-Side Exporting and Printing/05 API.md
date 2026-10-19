To export the Funnel using the API, call the [exportTo(fileName, format)](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#exportTofileName_format') method passing the needed file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. To print the Funnel, call the [print()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#print') method. This command opens the browser's **Print** window.

---
##### jQuery

    <!--JavaScript-->
    var funnel = $("#funnelContainer").dxFunnel("instance");
    funnel.exportTo('Exported Funnel', 'PDF');
    funnel.print();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxFunnelModule, DxFunnelComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent, { static: false }) funnel: DxFunnelComponent;
        // Prior to Angular 8
        // @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        exportFunnel () {
            this.funnel.instance.exportTo('Exported Funnel', 'PDF');
        };
        printFunnel () {
            this.funnel.instance.print();
        };
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
        <DxFunnel ref="funnel" />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            exportFunnel () {
                return this.$refs.funnel.instance.exportTo('Exported Funnel', 'PDF');
            },
            printFunnel () {
                return this.$refs.funnel.instance.print();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import Funnel, { type FunnelRef } from 'devextreme-react/funnel';

    function App() {
        const funnelRef = useRef<FunnelRef>(null);

        const exportFunnel = useCallback(() => {
            const funnel = funnelRef.current?.instance();
            funnel?.exportTo('Exported Funnel', 'PDF');
        }, []);

        const printFunnel = useCallback(() => {
            const funnel = funnelRef.current?.instance();
            funnel?.print();
        }, []);

        return (
            <Funnel ref={funnelRef} />
        );
    }

    export default App;

---

You can also export several UI components at once using their SVG markup. Gather the markup from all required UI components by calling the [DevExpress.viz.getMarkup(widgetInstances)](/api-reference/50%20Common/utils/viz/getMarkup(widgetInstances).md '/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances') method, and then pass the markup to the [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method.

---
##### jQuery

    <!--JavaScript-->
    var funnel1 = $("#funnelContainer1").dxFunnel("instance");
    var funnel2 = $("#funnelContainer2").dxFunnel("instance");
    var funnelMarkup = DevExpress.viz.getMarkup([funnel1, funnel2]);
    
    DevExpress.viz.exportFromMarkup(funnelMarkup, {
        height: 768,
        width: 1024,
        fileName: "Exported Funnels",
        format: "PDF"
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxFunnelModule, DxFunnelComponent } from "devextreme-angular";
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";
    // ...
    export class AppComponent {
        @ViewChild('funnelContainer1', { static: false }) funnel1: DxFunnelComponent;
        @ViewChild('funnelContainer2', { static: false }) funnel2: DxFunnelComponent;
        // Prior to Angular 8
        // @ViewChild('funnelContainer1') funnel1: DxFunnelComponent;
        // @ViewChild('funnelContainer2') funnel2: DxFunnelComponent;
        exportSeveralFunnels () {
            let funnelMarkup = getMarkup([this.funnel1.instance, this.funnel2.instance]);
            exportFromMarkup(funnelMarkup, {
                height: 768,
                width: 1024,
                fileName: "Exported Funnels",
                format: "PDF"
            });
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-funnel id="funnelContainer1" ... ></dx-funnel>
    <dx-funnel id="funnelContainer2" ... ></dx-funnel>

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel ref="funnel1" />
        <DxFunnel ref="funnel2" />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";

    export default {
        components: {
            DxFunnel
        },
        methods: {
            exportSeveralFunnels () {
                const funnel1 = this.$refs.funnel1.instance;
                const funnel2 = this.$refs.funnel2.instance;
                const funnelMarkup = getMarkup([funnel1, funnel2]);
                exportFromMarkup(funnelMarkup, {
                    height: 768,
                    width: 1024,
                    fileName: "Exported Funnels",
                    format: "PDF"
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import Funnel, { type FunnelRef } from 'devextreme-react/funnel';
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";

    function App() {
        const funnel1Ref = useRef<FunnelRef>(null);
        const funnel2Ref = useRef<FunnelRef>(null);

        const exportSeveralFunnels = useCallback(() => {
            const funnel1 = funnel1Ref.current?.instance();
            const funnel2 = funnel2Ref.current?.instance();
            if (!funnel1 || !funnel2) {
                return;
            }
            const funnelMarkup = getMarkup([funnel1, funnel2]);
            exportFromMarkup(funnelMarkup, {
                height: 768,
                width: 1024,
                fileName: "Exported Funnels",
                format: "PDF"
            });
        }, []);

        return (
            <>
                <Funnel ref={funnel1Ref} />
                <Funnel ref={funnel2Ref} />
            </>
        );
    }

    export default App;

---