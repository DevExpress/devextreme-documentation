A nested **Box** is configured similarly to an ordinary **Box**. To nest one **Box** into another, add one more item to the parent **Box** and put the markup of the nested **Box** into this item.

---
##### jQuery

    <!--HTML--><div id="boxContainer">
        <div class="box-item yellow" data-options="dxItem: { ratio: 1, baseSize: 50 }"> Item 1 </div>
        <div data-options="dxItem: { ratio: 1, baseSize: 50 }">
            <div id="nestedBoxContainer">
                <div class="box-item green"  data-options="dxItem: { ratio: 1 }"> Item 2 </div>
                <div class="box-item orange" data-options="dxItem: { ratio: 1 }"> Item 3 </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "col",
            height: "100%",
         	width: 300
        });

        $("#nestedBoxContainer").dxBox({
            direction: "row",
        	height: "100%"
        });
    });

    <!--CSS-->.box-item {
        text-align: center;
        padding-top: 16px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }

##### Angular

    <!--HTML-->
    <dx-box id="parentBox"
        direction="col"
        height="100%"
        [width]="300">
        <dxi-item class="box-item yellow" [ratio]="1" [baseSize]="50"> Item 1 </dxi-item>
        <dxi-item [ratio]="1" [baseSize]="50">
            <dx-box id="nestedBox"
                direction="row"
                height="100%">
                <dxi-item class="box-item green"  [ratio]="1"> Item 2 </dxi-item>
                <dxi-item class="box-item orange" [ratio]="1"> Item 3 </dxi-item>
            </dx-box>
        </dxi-item>
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
        padding-top: 16px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }

---

This code yields the following result.

![DevExtreme HTML5 LayoutWidget Box](/images/UiWidgets/Box/Box_nested-boxes.png)

#####See Also#####
- [Box - Arrange and Align Items](/concepts/05%20Widgets/Box/10%20Arrange%20and%20Align%20Items.md '/Documentation/Guide/Widgets/Box/Arrange_and_Align_Items/')
- [Box Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Box/Overview)
- [Box API Reference](/api-reference/10%20UI%20Widgets/dxBox '/Documentation/ApiReference/UI_Widgets/dxBox/')

[tags]box, nest, nested, nest boxes, nested boxes