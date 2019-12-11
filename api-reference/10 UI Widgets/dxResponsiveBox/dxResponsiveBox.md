---
module: ui/responsive_box
export: default
type: Object
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ResponsiveBox** widget allows you to create an application or a website with a layout adapted to different screen sizes.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--HTML--><html style="height:100%">
        <!-- ... -->
    </html>
    <body style="height:100%">
        <div id="responsiveBox">
            <div class="header" data-options="dxItem: {
                location: [
                    { row: 0, col: 0 }
                ]
            }"> <p>Header</p> </div>
            <div class="content" data-options="dxItem: {
                location: [
                    { row: 1, col: 0 }
                ]
            }"> <p>Content</p> </div>
            <div class="footer" data-options="dxItem: {
                location: [
                    { row: 2, col: 0 }
                ]
            }"> <p>Footer</p> </div>
        </div>
    </body>

    <!--JavaScript-->$(function () {
        $("#responsiveBox").dxResponsiveBox({
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 0.7 }
            ],
            cols: [
                { ratio: 1 }
            ]
        });
    });

    <!--CSS-->#responsiveBox p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .footer { background: #7b9bcf }

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-responsive-box>
        <dxi-row [ratio]="1"></dxi-row>
        <dxi-row [ratio]="2"></dxi-row>
        <dxi-row [ratio]="0.7"></dxi-row>
        <dxi-col [ratio]="1"></dxi-col>
        <dxi-item class="header">
            <dxi-location [row]="0" [col]="0"></dxi-location>
            <p>Header</p>
        </dxi-item>
        <dxi-item class="content">
            <dxi-location [row]="1" [col]="0"></dxi-location>
            <p>Content</p>
        </dxi-item>
        <dxi-item class="footer">
            <dxi-location [row]="2" [col]="0"></dxi-location>
            <p>Footer</p>
        </dxi-item>
    </dx-responsive-box>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular'
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

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><html style="height:100%">
        <!-- ... -->
    </html>
    <body style="height:100%">
        <div id="responsiveBox" dx-responsive-box="{
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 0.7 }
            ],
            cols: [
                { ratio: 1 }
            ]
        }">
            <div class="header" data-options="dxItem: {
                location: [
                    { row: 0, col: 0 }
                ]
            }"> <p>Header</p> </div>
            <div class="content" data-options="dxItem: {
                location: [
                    { row: 1, col: 0 }
                ]
            }"> <p>Content</p> </div>
            <div class="footer" data-options="dxItem: {
                location: [
                    { row: 2, col: 0 }
                ]
            }"> <p>Footer</p> </div>
        </div>
    </body>

    <!--CSS-->#responsiveBox p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .footer { background: #7b9bcf }

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><html style="height:100%">
        <!-- ... -->
    </html>
    <body style="height:100%">
        <div id="responsiveBox" data-bind="dxResponsiveBox: {
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 0.7 }
            ],
            cols: [
                { ratio: 1 }
            ]
        }">
            <div class="header" data-options="dxItem: {
                location: [
                    { row: 0, col: 0 }
                ]
            }"> <p>Header</p> </div>
            <div class="content" data-options="dxItem: {
                location: [
                    { row: 1, col: 0 }
                ]
            }"> <p>Content</p> </div>
            <div class="footer" data-options="dxItem: {
                location: [
                    { row: 2, col: 0 }
                ]
            }"> <p>Footer</p> </div>
        </div>
    </body>

    <!--CSS-->#responsiveBox p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .footer { background: #7b9bcf }

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#--><html style="height:100%">
        <!-- ... -->
    </html>
    <body style="height:100%">
        @(Html.DevExtreme().ResponsiveBox()
            .ID("responsiveBox")
            .Rows(rows => {
                rows.Add().Ratio(1);
                rows.Add().Ratio(2);
                rows.Add().Ratio(0.7);
            })
            .Cols(cols => {
                cols.Add().Ratio(1);
            })
            .Items(items => {
                items.Add()
                    .Template("<p>Header</p>")
                    .Location(locations => {
                        locations.Add().Row(0).Col(0);
                    });
                items.Add()
                    .Template("<p>Content</p>")
                    .Location(locations => {
                        locations.Add().Row(1).Col(0);
                    });
                items.Add()
                    .Template("<p>Footer</p>")
                    .Location(locations => {
                        locations.Add().Row(2).Col(0);
                    });
            })
        )
    </body>

    <!--Razor VB--><html style="height:100%">
        <!-- ... -->
    </html>
    <body style="height:100%">
        @(Html.DevExtreme().ResponsiveBox() _
            .ID("responsiveBox") _
            .Rows(Sub(rows)
                rows.Add().Ratio(1)
                rows.Add().Ratio(2)
                rows.Add().Ratio(0.7)
            End Sub) _
            .Cols(Sub(cols)
                cols.Add().Ratio(1)
            End Sub) _
            .Items(Sub(items)
                items.Add() _
                    .Template("<p>Header</p>") _
                    .Location(Sub(locations)
                        locations.Add().Row(0).Col(0)
                    End Sub)
                items.Add() _
                    .Template("<p>Content</p>") _
                    .Location(Sub(locations)
                        locations.Add().Row(1).Col(0)
                    End Sub)
                items.Add() _
                    .Template("<p>Footer</p>") _
                    .Location(Sub(locations)
                        locations.Add().Row(2).Col(0)
                    End Sub)
            End Sub)
        )
    </body>

    <!--CSS-->#responsiveBox p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .footer { background: #7b9bcf }

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeresponsiveboxresponsiveboxresponsivebox/"
}
<a href="http://www.youtube.com/watch?v=xwBTIrX6aHk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=47" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [ResponsiveBox - Overview](/concepts/05%20Widgets/ResponsiveBox/00%20Overview.md '/Documentation/Guide/Widgets/ResponsiveBox/Overview/')