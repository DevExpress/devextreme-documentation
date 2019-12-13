Items can be arranged in a row or in a column depending on the value of the [direction](/api-reference/10%20UI%20Widgets/dxBox/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#direction') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "row", // or "col"
            height: 200,
            width: 200
        });
    });

##### Angular

    <!--HTML-->
    <dx-box
        [height]="200"
        [width]="200"
        direction="row"> <!-- or "col" -->
        <!-- ... -->
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

---

<div class="documentation-gallery">
    <script type="text/template"> 
        {
            "options": {
                "width": 300,
                "height": 300
            },
            "images": [
                { "image": "/Content/images/doc/19_2/UiWidgets/Box/Box_direction_row.png", "text": "<b>direction</b>: <i>'row'</i>" },
                { "image": "/Content/images/doc/19_2/UiWidgets/Box/Box_direction_column.png", "text": "<b>direction</b>: <i>'col'</i>" }
            ]
        }
    </script>
</div>

If the **Box** items do not occupy the entire **Box**, you can align them along and crosswise the specified **direction**. For this purpose, use the [align](/api-reference/10%20UI%20Widgets/dxBox/1%20Configuration/align.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#align') and [crossAlign](/api-reference/10%20UI%20Widgets/dxBox/1%20Configuration/crossAlign.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#crossAlign') options, respectively.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "col",
            height: 200,
            align: "center",
            crossAlign: "stretch"
        });
    });

##### Angular

    <!--HTML-->
    <dx-box
        direction="col"
        [height]="200"
        align="center"
        crossAlign="stretch">
        <!-- ... -->
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

---

#####See Also#####
- [Box - Nest One Box into Another](/concepts/05%20Widgets/Box/15%20Nest%20One%20Box%20Into%20Another.md '/Documentation/Guide/Widgets/Box/Nest_One_Box_into_Another/')
- [Box Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Box/Overview)
- [Box API Reference](/api-reference/10%20UI%20Widgets/dxBox '/Documentation/ApiReference/UI_Widgets/dxBox/')

[tags]box, arrange items in a column, arrange items in a row, direction, items alignment, align items, crossAlign