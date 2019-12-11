[note]In this document, "size" is an item's width or height, depending on whether the [direction](/api-reference/10%20UI%20Widgets/dxBox/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#direction') option is set to *"row"* or *"col"* respectively.

An item's size is controlled by three settings: [baseSize](/api-reference/10%20UI%20Widgets/dxBox/5%20Default%20Item%20Template/baseSize.md '/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#baseSize'), [ratio](/api-reference/10%20UI%20Widgets/dxBox/5%20Default%20Item%20Template/ratio.md '/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#ratio'), and [shrink](/api-reference/10%20UI%20Widgets/dxBox/5%20Default%20Item%20Template/shrink.md '/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#shrink'). The **baseSize** defines the initial item size in pixels. The item's size changes according to **ratio** and **shrink** if the **Box**'s size changes.

When the **Box** provides more space than the items' **baseSize**s require, an unoccupied area emerges.

![DevExtreme Box: Unoccupied area](/images/UiWidgets/Box/Box_baseSize.png)

The unoccupied area can be distributed among the items according to **ratio**s. If all items have the same **ratio**, the area is distributed evenly. The following is an example of when **ratio**s are different. As a result, *Item 2* gets a portion twice the size of  *Item 3*, but three times smaller than *Item 1*:

![DevExtreme Box: Distribution of unoccuppied area](/images/UiWidgets/Box/Box_baseSizeWithRatio.png)

---
##### jQuery

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { baseSize: 200, ratio: 6 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { baseSize: 100, ratio: 2 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { baseSize: 150, ratio: 1 }"> Item 3 </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            height: 100,
            width: 600
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
    <dx-box [height]="100" [width]="600">
        <dxi-item class="box-item orange" [baseSize]="200" [ratio]="6"> Item 1 </dxi-item>
        <dxi-item class="box-item yellow" [baseSize]="100" [ratio]="2"> Item 2 </dxi-item>
        <dxi-item class="box-item green"  [baseSize]="150" [ratio]="1"> Item 3 </dxi-item>
    </dx-box>

    <!--TypeScript-->
    import { DxBoxModule } from 'devextreme-angular';
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

**ratio** applies when there is an available space, **shrink** applies when space is limited. After all items' **baseSize** are added up, they may be too large to fit into the container.

![DevExtreme Box: Items overflow the container](/images/UiWidgets/Box/box-overflow.png)

**shrink** determines how much the items should shrink to fit in this case. The higher the **shrink** value, the more an item shrinks relative to the rest of the items. The following example illustrates a situation when all items have the same **shrink** value:

![DevExtreme Box: Items shrink evenly to fit into the container](/images/UiWidgets/Box/box-shrink-evenly.png)

---
##### jQuery

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { baseSize: 200, shrink: 1 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { baseSize: 200, shrink: 1 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { baseSize: 200, shrink: 1 }"> Item 3 </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            height: 100,
            width: 300
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
    <dx-box [height]="100" [width]="300">
        <dxi-item class="box-item orange" [baseSize]="200" [shrink]="1"> Item 1 </dxi-item>
        <dxi-item class="box-item yellow" [baseSize]="200" [shrink]="1"> Item 2 </dxi-item>
        <dxi-item class="box-item green"  [baseSize]="200" [shrink]="1"> Item 3 </dxi-item>
    </dx-box>

    <!--TypeScript-->
    import { DxBoxModule } from 'devextreme-angular';
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

Note how the result is different if *Item 2*'s **shrink** value is twice more than the other items:

![DevExtreme Box: Item 2 shrinks twice more than the others](/images/UiWidgets/Box/box-shrink-unevenly.png)

---
##### jQuery

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { baseSize: 200, shrink: 1 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { baseSize: 200, shrink: 2 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { baseSize: 200, shrink: 1 }"> Item 3 </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            height: 100,
            width: 300
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
    <dx-box [height]="100" [width]="300">
        <dxi-item class="box-item orange" [baseSize]="200" [shrink]="1"> Item 1 </dxi-item>
        <dxi-item class="box-item yellow" [baseSize]="200" [shrink]="2"> Item 2 </dxi-item>
        <dxi-item class="box-item green"  [baseSize]="200" [shrink]="1"> Item 3 </dxi-item>
    </dx-box>

    <!--TypeScript-->
    import { DxBoxModule } from 'devextreme-angular';
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

#####See Also#####
- [Box - Arrange and Align Items](/concepts/05%20Widgets/Box/10%20Arrange%20and%20Align%20Items.md '/Documentation/Guide/Widgets/Box/Arrange_and_Align_Items/')
- [Box Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-box-overview)
- [Box API Reference](/api-reference/10%20UI%20Widgets/dxBox '/Documentation/ApiReference/UI_Widgets/dxBox/')

[tags]box, item size, item height, item width, baseSize, ratio
