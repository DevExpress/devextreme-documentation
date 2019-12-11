---
module: ui/slide_out_view
inherits: ..\Widget\Widget.md
---
---
##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **SlideOutView** widget is a classic slide-out menu paired with a view.

---
This widget is very similar to the [SlideOut](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/') with only one difference - the **SlideOut** always contains the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') in the slide-out menu, while the **SlideOutView** can hold any collection there.

You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxSlideOutView` jQuery plug-in.

        <!--HTML-->
        <div id="slideOutView"></div>

    <!---->

        <!--JavaScript-->
        $("#slideOut").dxSlideOutView({
            contentTemplate: function(contentElement){
                contentElement.append("<p>Here is the widget content</p>")
            },
            menuTemplate: function(menuElement){
                menuElement.css("height", "100%");
                var menuList = $("<div>").dxList(listOptions);
                menuElement.append(menuList);
            }
        });

- **Knockout**  
 Add a div element and apply the `dxSlideOutView` binding to this element.

        <!--HTML-->
        <div data-bind="dxSlideOutView: {
            contentTemplate: 'myContent',
            menuTemplate: 'myMenu'
        }">
            <div data-options="dxTemplate: { name: 'myContent' }">
                <p>Here is the widget content</p>
            </div>
            <div data-options="dxTemplate: { name: 'myMenu' }" style="height: 100%;">
                <div data-bind="dxList: listOptions"></div>
            </div>
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-slide-out-view` directive to this element.

        <!--HTML-->
        <div dx-slide-out-view="{
            contentTemplate: 'myContent',
            menuTemplate: 'myMenu'
        }">
            <div data-options="dxTemplate: { name: 'myContent' }">
                <p>Here is the widget content</p>
            </div>
            <div data-options="dxTemplate: { name: 'myMenu' }" style="height: 100%;">
                <div dx-list="listOptions"></div>
            </div>
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find the detailed information on principles of working with the widget in the [dxSlideOutView section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets/dxSlideOutView.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxSlideOutView') of the [Individual Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/') article.