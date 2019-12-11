---
module: ui/slide_out_view
export: default
inherits: ..\Widget\Widget.md
---
---
##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **SlideOutView** widget is a classic slide-out menu paired with a view.

---
This widget is very similar to the [SlideOut](/concepts/05%20Widgets/SlideOut/00%20Overview.md '/Documentation/Guide/Widgets/SlideOut/Overview/') with only one difference - the **SlideOut** always contains the [List](/concepts/05%20Widgets/List/00%20Overview.md '/Documentation/Guide/Widgets/List/Overview/') in the slide-out menu, while the **SlideOutView** can hold any collection there.

You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="slideOutView">
            <div data-options="dxTemplate: { name: 'view' }">
                <p>View content</p>
            </div>
            <div data-options="dxTemplate: { name: 'menu' }">
                <p>Menu content</p>
            </div>
        </div>

        <!--CSS-->#slideOutView {
            height: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
        }

        <!--JavaScript-->$(function () {
            $("#slideOutView").dxSlideOutView({
                contentTemplate: 'view',
                menuTemplate: 'menu',
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-slide-out-view
            contentTemplate="view"
            menuTemplate="menu">
                <div *dxTemplate="let viewData of 'view'">
                    <p>View content</p>
                </div>
                <div *dxTemplate="let menuData of 'menu'">
                    <p>Menu content</p>
                </div>
        </dx-slide-out-view>

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div dx-slide-out-view="{
            contentTemplate: 'view',
            menuTemplate: 'menu'
        }">
            <div data-options="dxTemplate: { name: 'view' }">
                <p>View content</p>
            </div>
            <div data-options="dxTemplate: { name: 'menu' }">
                <p>Menu content</p>
            </div>
        </div>

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxSlideOutView: {
            contentTemplate: 'view',
            menuTemplate: 'menu'
        }">
            <div data-options="dxTemplate: { name: 'view' }">
                <p>View content</p>
            </div>
            <div data-options="dxTemplate: { name: 'menu' }">
                <p>Menu content</p>
            </div>
        </div>

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().SlideOutView()
            .ID("slideOutView")
            .ContentTemplate(@<text>
                <p>View content</p>
            </text>)
            .MenuTemplate(@<text>
                <p>Menu content</p>
            </text>)
        )

        <!--Razor VB-->@Code
            Html.DevExtreme().SlideOutView() _
                .ID("slideOutView") _
                .ContentTemplate(Sub()
                    @<text>
                        <p>View content</p>
                    </text>
                End Sub) _
                .MenuTemplate(Sub()
                    @<text>
                        <p>Menu content</p>
                    </text>
                End Sub).Render()
        End Code

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#####See Also#####
- [SlideOutView - Overview](/concepts/05%20Widgets/SlideOutView/00%20Overview.md '/Documentation/Guide/Widgets/SlideOutView/Overview/')