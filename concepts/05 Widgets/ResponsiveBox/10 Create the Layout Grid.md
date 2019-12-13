All **ResponsiveBox** elements are arranged in a layout grid according to the [rows](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/rows '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/rows/') and [cols](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/cols '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/cols/') arrays. Each object in these arrays configures a single row or column. Populate these arrays with empty objects to get two sets of equally-sized rows and columns.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            // Creates two rows of equal height
            rows: [
                { }, { }
            ],
            // Creates three columns of equal width
            cols: [
                { }, { }, { }
            ]
        });
    });

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <div id="responsiveBoxContainer"></div>
        </body>
    </html>

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox">
                <!-- Creates two rows of equal height -->
                <dxi-row></dxi-row>
                <dxi-row></dxi-row>
                <!-- Creates three columns of equal width -->
                <dxi-col></dxi-col>
                <dxi-col></dxi-col>
                <dxi-col></dxi-col>
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

---

The **baseSize**, **ratio**, and **shrink** settings control a row or column's size. The **baseSize** defines the row's or column's initial size in pixels. The size then changes according to **ratio** and **shrink** if the **ResponsiveBox**'s size changes.

The **ResponsiveBox** can provide more space than rows' and columns' **baseSize**s require:

![DevExtreme ResponsiveBox: Available width and height](/images/UiWidgets/ResponsiveBox/responsivebox-basesize.png)

In this case, the columns' width and rows' height can be increased according to **ratio**s. If all rows or columns have the same **ratio**, the width or height is increased evenly. The following is an example of when **ratio**s are different:

![DevExtreme ResponsiveBox: Distribution of available width and height](/images/UiWidgets/ResponsiveBox/responsivebox-basesize-withratio.png)

If **ratio** applies when there is an available space, **shrink** applies when space is limited. After all rows' or columns' **baseSize**s are added up, they may be too large to fit into the container.

![DevExtreme ResponsiveBox: Items overflow the container](/images/UiWidgets/ResponsiveBox/responsivebox-overflow.png)

**shrink** determines how much the elements should shrink to fit in this case. The higher the **shrink** value, the more a row or column shrinks relative to the rest of the rows or columns. The following example illustrates a situation when all elements have the same **shrink** value:

![DevExtreme ResponsiveBox: Items shrink evenly to fit into the container](/images/UiWidgets/ResponsiveBox/responsivebox-shrink-evenly.png)

In the following image, the middle column's **shrink** value is more than the other columns', and the bottom row's **shrink** value is more than that of the top row.

![DevExtreme ResponsiveBox: The middle column and the bottom row shrink more than the other columns and rows](/images/UiWidgets/ResponsiveBox/responsivebox-shrink-unevenly.png)

The collections of rows and columns may differ depending on the screen's [size qualifier](/concepts/05%20Widgets/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/'). You can use the **screen** option to specify on which screen types an individual row or column should appear.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            rows: [
                { ratio: 1 },
                { ratio: 2, shrink: 2 },
                { ratio: 0.7 }
            ],
            cols: [
                { ratio: 0.5 },
                // The following columns appear on medium and large screens only
                { ratio: 2, screen: "md lg" },
                { ratio: 0.5, screen: "md lg" }
            ]
        });
    });

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <div id="responsiveBoxContainer"></div>
        </body>
    </html>

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox">
                <dxi-row [ratio]="1"></dxi-row>
                <dxi-row [ratio]="2" [shrink]="2"></dxi-row>
                <dxi-row [ratio]="0.7"></dxi-row>
                <dxi-col [ratio]="0.5" [shrink]="0.5"></dxi-col>
                <!-- The following columns appear on medium and large screens only -->
                <dxi-col [ratio]="2" screen="md lg"></dxi-col>
                <dxi-col [ratio]="0.5" screen="md lg"></dxi-col>
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

---

#####See Also#####
- [ResponsiveBox - Arrange Layout Elements](/concepts/05%20Widgets/ResponsiveBox/15%20Arrange%20Layout%20Elements.md '/Documentation/Guide/Widgets/ResponsiveBox/Arrange_Layout_Elements/')
- [ResponsiveBox - Size Qualifiers](/concepts/05%20Widgets/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/')
- [ResponsiveBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ResponsiveBox/Overview)
- [ResponsiveBox API Reference](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/')

[tags]responsive box, responsiveBox, adaptive layout, layout grid, fixed columns, fixed rows, adaptive columns, adaptive rows, baseSize, ratio
