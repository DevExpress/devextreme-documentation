---
module: ui/box
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Box** widget allows you to arrange various elements within it. Separate and adaptive, the **Box** widget acts as a building block for the layout.

---
You can create a widget using one of the following approaches.

- **jQuery**  
 Use the `dxBox` jQuery plug-in.

        <!--HTML-->
        <div id="box">
            <div id="item1" data-options="dxItem:{ ratio: 1, baseSize: 10}">
                . . .
            </div>
            <div id="item2" data-options="dxItem:{ ratio: 3, baseSize: 40}">
                . . .
            </div>
            <div id="item3" data-options="dxItem:{ ratio: 2, baseSize: 20}">
                . . .
            </div>
        </div>

    <!---->

        <!--JavaScript-->
        $("#box").dxBox({
            direction: 'row',
            height: '70%',
            width: '90%'
        });

- **Knockout**  
 Add a div element and apply the `dxBox` binding to this element.

        <!--HTML-->
        <div data-bind="dxBox: {
            direction: 'row',
            height: '70%',
            width: '90%'
        }">
            <div id="item1" data-options="dxItem:{ ratio: 1, baseSize: 10}">
                . . .
            </div>
            <div id="item2" data-options="dxItem:{ ratio: 3, baseSize: 40}">
                . . .
            </div>
            <div id="item3" data-options="dxItem:{ ratio: 2, baseSize: 20}">
                . . .
            </div>
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-box` directive to this element.

        <!--HTML-->
        <div dx-box="{
            direction: 'row',
            height: '70%',
            width: '90%'
        }">
            <div id="item1" data-options="dxItem:{ ratio: 1, baseSize: 10}">
                . . .
            </div>
            <div id="item2" data-options="dxItem:{ ratio: 3, baseSize: 40}">
                . . .
            </div>
            <div id="item3" data-options="dxItem:{ ratio: 2, baseSize: 20}">
                . . .
            </div>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Refer to the [Layout Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/50%20Layout%20Widgets/1%20List%20of%20Layout%20Widgets/dxBox.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Layout_Widgets/#List_of_Layout_Widgets/dxBox') guide for more information on working with the **Box** widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeboxboxbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=xwBTIrX6aHk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=47" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>