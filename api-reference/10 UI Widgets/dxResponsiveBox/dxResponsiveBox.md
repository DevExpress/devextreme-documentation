---
module: ui/responsive_box
type: object
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ResponsiveBox** widget allows you to create an application or a website with a layout adapted to different screen sizes.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxResponsiveBox` jQuery plug-in.

        <!--HTML-->
        <div id="responsiveBox">
            <div class="header" data-options="dxItem: { 
                location: [
                    { row: 0, col: 0, colspan: 3, screen: 'lg'},
                    { row: 0, col: 0, colspan: 2, screen: 'xs sm md'}
                ]
            }"> . . . </div>
            <div class="content" data-options="dxItem: { 
                location: [
                    { row: 1, col: 1, screen: 'lg' },
                    { row: 1, col: 0, colspan: 2, screen: 'xs sm md' }
                ]
            }"> . . . </div>
            <div class="left-side-bar" data-options="dxItem: { 
                location: [
                    { row: 1, col: 0, screen: 'lg' },
                    { row: 2, col: 0, screen: 'xs sm md' }
                ]
            }"> . . . </div>
            <div class="right-side-bar" data-options="dxItem: { 
                location: [
                    { row: 1, col: 2, screen: 'lg' },
                    { row: 2, col: 1, screen: 'xs sm md' }
                ]
            }"> . . . </div>  
            <div class="footer" data-options="dxItem: {
                location: [
                    { row: 2, col: 0, colspan: 3, screen: 'lg' },
                    { row: 3, col: 0, colspan: 2, screen: 'xs sm md' }
                ]
            }"> . . . </div>
        </div>

    <!---->

        <!--JavaScript-->
        $("#responsiveBox").dxResponsiveBox({
            singleColumnScreen: 'xs',
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 2, screen: 'sm md' },
                { ratio: 1 }
            ],
            cols: [
                { ratio: 1 },
                { ratio: 2, screen: 'lg' },
                { ratio: 1 }
            ]
        });

- **Knockout**  
 Add a div element and apply the `dxResponsiveBox` binding to this element.

        <!--HTML-->
        <div class="box" data-bind="dxResponsiveBox: {
            singleColumnScreen: 'xs',
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 2, screen: 'sm md' },
                { ratio: 1 }
            ],
            cols: [
                { ratio: 1 },
                { ratio: 2, screen: 'lg' },
                { ratio: 1 }
            ]
        }">
            <div class="header" data-options="dxItem: { 
                location: [
                    { row: 0, col: 0, colspan: 3, screen: 'lg'},
                    { row: 0, col: 0, colspan: 2, screen: 'xs sm md'}
                ]
            }"></div>
            <div class="content" data-options="dxItem: { 
                location: [
                    { row: 1, col: 1, screen: 'lg' },
                    { row: 1, col: 0, colspan: 2, screen: 'xs sm md' }
                ]
            }"></div>
            <div class="left-side-bar" data-options="dxItem: { 
                location: [
                    { row: 1, col: 0, screen: 'lg' },
                    { row: 2, col: 0, screen: 'xs sm md' }
                ]
            }"></div>
            <div class="right-side-bar" data-options="dxItem: { 
                location: [
                    { row: 1, col: 2, screen: 'lg' },
                    { row: 2, col: 1, screen: 'xs sm md' }
                ]
            }"></div>  
            <div class="footer" data-options="dxItem: {
                location: [
                    { row: 2, col: 0, colspan: 3, screen: 'lg' },
                    { row: 3, col: 0, colspan: 2, screen: 'xs sm md' }
                ]
            }"></div>
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-responsive-box` directive to this element.

        <!--HTML-->
        <div dx-responsive-box="{
            singleColumnScreen: 'xs',
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 2, screen: 'sm md' },
                { ratio: 1 }
            ],
            cols: [
                { ratio: 1 },
                { ratio: 2, screen: 'lg' },
                { ratio: 1 }
            ]
        }">
            <div class="header" data-options="dxItem: { 
                location: [
                    { row: 0, col: 0, colspan: 3, screen: 'lg'},
                    { row: 0, col: 0, colspan: 2, screen: 'xs sm md'}
                ]
            }"></div>
            <div class="content" data-options="dxItem: { 
                location: [
                    { row: 1, col: 1, screen: 'lg' },
                    { row: 1, col: 0, colspan: 2, screen: 'xs sm md' }
                ]
            }"></div>
            <div class="left-side-bar" data-options="dxItem: { 
                location: [
                    { row: 1, col: 0, screen: 'lg' },
                    { row: 2, col: 0, screen: 'xs sm md' }
                ]
            }"></div>
            <div class="right-side-bar" data-options="dxItem: { 
                location: [
                    { row: 1, col: 2, screen: 'lg' },
                    { row: 2, col: 1, screen: 'xs sm md' }
                ]
            }"></div>  
            <div class="footer" data-options="dxItem: {
                location: [
                    { row: 2, col: 0, colspan: 3, screen: 'lg' },
                    { row: 3, col: 0, colspan: 2, screen: 'xs sm md' }
                ]
            }"></div>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Refer to the [Layout Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/50%20Layout%20Widgets/1%20List%20of%20Layout%20Widgets/dxResponsiveBox.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Layout_Widgets/#List_of_Layout_Widgets/dxResponsiveBox') guide for more information on working with the **Box** widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeresponsiveboxresponsiveboxresponsivebox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=xwBTIrX6aHk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=47" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>