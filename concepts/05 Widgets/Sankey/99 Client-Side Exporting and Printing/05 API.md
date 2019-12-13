To export the widget using the API, call the [exportTo(fileName, format)](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#exportTofileName_format') method and pass the file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. Call the [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#print') method to print the widget. This command opens the browser's **Print** window.

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

---

You can also export several widgets simultaneously using their SVG markup. Call the [DevExpress.viz.getMarkup(widgetInstances)](/api-reference/50%20Common/utils/viz/getMarkup(widgetInstances).md '/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances') method to collect the markup from all the required widgets and pass it to the [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method.

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
    import exportMethods from "devextreme/viz/export";
    // ...
    export class AppComponent {
        @ViewChild("sankeyContainer1", { static: false }) sankey1: DxSankeyComponent;
        @ViewChild("sankeyContainer2", { static: false }) sankey2: DxSankeyComponent;
        // Prior to Angular 8
        // @ViewChild("sankeyContainer1") sankey1: DxSankeyComponent;
        // @ViewChild("sankeyContainer2") sankey2: DxSankeyComponent;
        exportSeveralSankeys() {
            let sankeyMarkup = exportMethods.getMarkup([this.sankey1.instance, this.sankey2.instance]);
            exportMethods.exportFromMarkup(sankeyMarkup, {
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

---
