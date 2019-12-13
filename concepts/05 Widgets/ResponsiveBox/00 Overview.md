The **ResponsiveBox** widget allows you to create an application or a website with a layout adapted to different screen sizes.

![DevExtreme HTML5 JavaScript ResponsiveBox](/images/UiWidgets/responsive-box.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ResponsiveBox/Overview/"
}

The following code creates a simple **ResponsiveBox**. The widget defines an ordinary page layout: a header, a footer, content area, left- and right-side bars. On small and extra small screens, the bars are hidden to give more space to the content. Note that the height of all elements that are ancestors to the **ResponsiveBox** (such as `<body>` and `<html>`) is explicitly set to *"100%"*. This makes the **ResponsiveBox** occupy full screen height.

---
##### jQuery

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <div id="responsiveBoxContainer">
                <div class="header" data-options="dxItem: {
                    location: [
                        { screen: 'md lg', row: 0, col: 0, colspan: 3 },
                        { screen: 'xs sm', row: 0, col: 0 }
                    ]
                }"> <p>Header</p> </div>

                <div class="content" data-options="dxItem: {
                    location: [
                        { screen: 'md lg', row: 1, col: 1 },
                        { screen: 'xs sm', row: 1, col: 0 }
                    ]
                }"> <p>Content</p> </div>

                <div class="left-side-bar" data-options="dxItem: {
                    location: { screen: 'md lg', row: 1, col: 0 }
                }"> <p>Left Bar</p> </div>

                <div class="right-side-bar" data-options="dxItem: {
                    location: { screen: 'md lg', row: 1, col: 2 }
                }"> <p>Right Bar</p> </div>

                <div class="footer" data-options="dxItem: {
                    location: [
                        { screen: 'md lg', row: 2, col: 0, colspan: 3 },
                        { screen: 'xs sm', row: 2, col: 0 }
                    ]
                }"> <p>Footer</p> </div>
            </div>
        </body>
    </html>

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 0.7 }
            ],
            cols: [
                { ratio: 0.5, screen: "md lg" },
                { ratio: 2 },
                { ratio: 0.5, screen: "md lg" }
            ]
        });
    });

    <!--CSS-->#responsiveBoxContainer p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }

    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .left-side-bar { background: #94d7c7 }
    .right-side-bar { background: #77c7e7 }
    .footer { background: #7b9bcf }

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox">
                <dxi-row [ratio]="1"></dxi-row>
                <dxi-row [ratio]="2"></dxi-row>
                <dxi-row [ratio]="0.7"></dxi-row>
                <dxi-col [ratio]="0.5" screen="md lg"></dxi-col>
                <dxi-col [ratio]="2"></dxi-col>
                <dxi-col [ratio]="0.5" screen="md lg"></dxi-col>
                
                <dxi-item class="header">
                    <dxi-location screen="md lg" [row]="0" [col]="0" [colspan]="3"></dxi-location>
                    <dxi-location screen="xs sm" [row]="0" [col]="0"></dxi-location>
                    <p>Header</p>
                </dxi-item>
                
                <dxi-item class="content">
                    <dxi-location screen="md lg" [row]="1" [col]="1"></dxi-location>
                    <dxi-location screen="xs sm" [row]="1" [col]="0"></dxi-location>
                    <p>Content</p>
                </dxi-item>
                
                <dxi-item class="left-side-bar">
                    <dxi-location screen="md lg" [row]="1" [col]="0"></dxi-location>
                    <p>Left Bar</p>
                </dxi-item>
                
                <dxi-item class="right-side-bar">
                    <dxi-location screen="md lg" [row]="1" [col]="2"></dxi-location>
                    <p>Right Bar</p>
                </dxi-item>
                
                <dxi-item class="footer">
                    <dxi-location screen="md lg" [row]="2" [col]="0" [colspan]="3"></dxi-location>
                    <dxi-location screen="xs sm" [row]="2" [col]="0"></dxi-location>
                    <p>Footer</p>
                </dxi-item>
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

    <!--CSS-->#responsiveBox p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }

    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .left-side-bar { background: #94d7c7 }
    .right-side-bar { background: #77c7e7 }
    .footer { background: #7b9bcf }

---
    
The **ResponsiveBox** elements in the code above are declared using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/#dxItem') markup component. An object passed to this component can have the following fields.

- [location](/api-reference/_hidden/dxResponsiveBoxItem/location '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/items/location/')
- [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/items/#template')
- [visible](/api-reference/_hidden/CollectionWidgetItem/visible.md '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/items/#visible')

All **ResponsiveBox** elements are arranged against a layout grid defined by the [rows](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/rows '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/rows/') and [cols](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/cols '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/cols/') arrays. For further information, see the [Create the Layout Grid](/concepts/05%20Widgets/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/Widgets/ResponsiveBox/Create_the_Layout_Grid/') topic.

#####See Also#####
#include common-link-configurewidget
- [ResponsiveBox - Size Qualifiers](/concepts/05%20Widgets/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/')
- [ResponsiveBox - Create the Layout Grid](/concepts/05%20Widgets/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/Widgets/ResponsiveBox/Create_the_Layout_Grid/')
- [ResponsiveBox - Arrange Layout Elements](/concepts/05%20Widgets/ResponsiveBox/15%20Arrange%20Layout%20Elements.md '/Documentation/Guide/Widgets/ResponsiveBox/Arrange_Layout_Elements/')
- [ResponsiveBox API Reference](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/')

[tags]responsive box, responsiveBox, layout widget, overview, dxItem, full screen widget