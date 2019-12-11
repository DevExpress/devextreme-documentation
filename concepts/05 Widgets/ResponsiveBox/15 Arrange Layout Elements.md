All layout elements are arranged against a [layout grid](/concepts/05%20Widgets/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/Widgets/ResponsiveBox/Create_the_Layout_Grid/'). For example, suppose that you have the following layout grid.

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            rows: [
                { ratio: 1 },  // Header
                { ratio: 2 },  // Content
                { ratio: 0.7 } // Footer
            ],
            cols: [
                { ratio: 0.5, screen: "md lg" }, // Left-side bar
                { ratio: 2 },                    // Content
                { ratio: 0.5, screen: "md lg" }  // Right-side bar
            ]
        });
    });

Every layout element has the [location](/api-reference/10%20UI%20Widgets/dxResponsiveBox/5%20Default%20Item%20Template/location '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Default_Item_Template/location/') option that allows you to relocate the element within the layout grid or hide it on [screens of a specific size](/concepts/05%20Widgets/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/'). For example, in the following code, the *"Left-Side Bar"* and *"Right-Side Bar"* elements are present only on medium and large screens. All the other elements have individual settings for screens of each size.

    <!--HTML--><html style="height:100%">
        <!-- ... -->
    </html>
    
    <body style="height:100%">
        <div id="responsiveBoxContainer">
            <div class="header" data-options="dxItem: {
                location: [{
                    screen: 'md lg',
                    row: 0, col: 0,
                    colspan: 3
                }, {
                    screen: 'xs sm',
                    row: 0, col: 0
                }]
            }"> <p>Header</p> </div>

            <div class="content" data-options="dxItem: {
                location: [{
                    screen: 'md lg',
                    row: 1, col: 1
                }, {
                    screen: 'xs sm',
                    row: 1, col: 0
                }]
            }"> <p>Content</p> </div>

            <div class="left-side-bar" data-options="dxItem: {
                location: {
                    screen: 'md lg',
                    row: 1, col: 0
                }
            }"> <p>Left-Side Bar</p> </div>

            <div class="right-side-bar" data-options="dxItem: {
                location: {
                    screen: 'md lg',
                    row: 1, col: 2
                }
            }"> <p>Right-Side Bar</p> </div>

            <div class="footer" data-options="dxItem: {
                location: [{
                    screen: 'md lg',
                    row: 2, col: 0,
                    colspan: 3
                }, {
                    screen: 'xs sm',
                    row: 2, col: 0
                }]
            }"> <p>Footer</p> </div>
        </div>
    </body>

<!---->

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

If on some screens, all elements should be arranged in a single column, assign the [size qualifiers](/concepts/05%20Widgets/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/') of these screens to the [singleColumnScreen](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/singleColumnScreen.md '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#singleColumnScreen') option. In this case, the layout grid will be ignored in favor of the single-column layout, and all layout elements will have equal heights.

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            rows: [
                // Ignored
            ],
            cols: [
                // Ignored
            ],
            // Single-column layout on small and extra small screens
            singleColumnScreen: "xs sm"
        });
    });

#####See Also#####
- [ResponsiveBox - Create the Layout Grid](/concepts/05%20Widgets/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/Widgets/ResponsiveBox/Create_the_Layout_Grid/')
- [ResponsiveBox - Size Qualifiers](/concepts/05%20Widgets/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/')
- [ResponsiveBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-responsive_box-overview/tablet-landscape)
- [ResponsiveBox API Reference](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/')

[tags]responsive box, responsiveBox, adaptive layout, location, arrange in one column, singleColumnScreen