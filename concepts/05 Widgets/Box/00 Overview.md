The **Box** widget allows you to arrange various elements within it. This widget is separate and adaptive and acts as the layout's building block.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Box/Overview/"
}

The following code adds a simple **Box** containing three items to your page. These items are plain texts placed in differently-colored rectangles arranged in a row. Equal **ratio** option values ensure they have equal widths.

---
##### jQuery

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { ratio: 1 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { ratio: 1 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { ratio: 1 }"> Item 3 </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "row",
            height: 100
        });
    });

    <!--CSS-->.box-item {
        text-align: center;
        padding-top: 34px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }

##### Angular

    <!--HTML-->
    <dx-box
        direction="row"
        [height]="100">
        <dxi-item class="box-item orange" [ratio]="1"> Item 1 </dxi-item>
        <dxi-item class="box-item yellow" [ratio]="1"> Item 2 </dxi-item>
        <dxi-item class="box-item green"  [ratio]="1"> Item 3 </dxi-item>
    </dx-box>

    <!--TypeScript-->
    import { DxBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxBoxModule
        ],
        // ...
    })

    <!--CSS-->.box-item {
        text-align: center;
        padding-top: 34px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }

---

Note that the **Box** items in the code above are declared using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/#dxItem') markup component. An object passed to this component can have the following fields:

- [baseSize](/api-reference/_hidden/dxBoxItem/baseSize.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/items/#baseSize')
- [ratio](/api-reference/_hidden/dxBoxItem/ratio.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/items/#ratio')
- [shrink](/api-reference/_hidden/dxBoxItem/shrink.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/items/#shrink')
- [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/items/#template')
- [visible](/api-reference/_hidden/CollectionWidgetItem/visible.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/items/#visible')

#####See Also#####
#include common-link-configurewidget
- [Box - Specify an Item Size](/concepts/05%20Widgets/Box/05%20Specify%20an%20Item%20Size.md '/Documentation/Guide/Widgets/Box/Specify_an_Item_Size/')
- [Box - Arrange and Align Items](/concepts/05%20Widgets/Box/10%20Arrange%20and%20Align%20Items.md '/Documentation/Guide/Widgets/Box/Arrange_and_Align_Items/')
- [Box - Nest One Box into Another](/concepts/05%20Widgets/Box/15%20Nest%20One%20Box%20Into%20Another.md '/Documentation/Guide/Widgets/Box/Nest_One_Box_into_Another/')
- [Box API Reference](/api-reference/10%20UI%20Widgets/dxBox '/Documentation/ApiReference/UI_Widgets/dxBox/')

[tags]box, layout widget, overview, dxItem
