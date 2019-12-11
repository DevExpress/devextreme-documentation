<article  data-show="Content/Applications/16_1/UIWidgets/dxResponsiveBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxResponsiveBox/script.js,
        Content/Applications/16_1/UIWidgets/dxResponsiveBox/styles.css">
    
The [ResponsiveBox](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/') widget enables you to create a site with different layouts for different devices as illustrated by the following image.

![Different Layouts](/images/UiWidgets/responsive-box.png)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeresponsiveboxresponsiveboxresponsivebox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

**Screen Factor**

The widget selects which layout to use depending on the screen factor. The widget supports the following screen factors by default.

 - **xs**  
 The screen width is less than 768 pixels. Used for a small phone screen.

 - **sm**  
 The screen width is more than 768 and less than 992 pixels. Used for a small tablet screen.

 - **md**  
 The screen width is more than 992 and less than 1200 pixels. Used for a large tablet screen.

 - **lg**  
 The screen width is more than 1200 pixels. Used for a large desktop screen.

To specify custom screen factors, use the [screenByWidth](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#screenByWidth') option of the widget. The function passed to this option takes on the screen width as a parameter and returns a string containing the screen factor corresponding to the current screen width.

    <!--JavaScript-->
    var responsiveBoxOptions: {
        screenByWidth: function(width) {
            if( width < 768 )
                return 'xs';
            if( width < 992 )
                return 'sm';
            if( width < 1200 )
                return 'md';
            return 'lg';
        }
    }

**Layout Grid**

The layout elements are positioned against the widget grid specified using the [cols](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/cols '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#cols') and [rows](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/rows '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#rows') options.

    <!--JavaScript-->
    var responsiveBoxOptions: {
        rows: [
            { baseSize: 100 },
            { ratio: 1 },
            { ratio: 1, screen: 'sd md' },
            { baseSize: 100 }
        ],
        cols: [
            { ratio: 1 },
            { ratio: 2, screen: 'lg' },
            { ratio: 1 }
        ]
    }

An item of an array passed to these options can include the following fields.

- **baseSize**  
 The base height of the row or base width of the column. This field can hold a value of the following types.

 - *numeric*  
 The element size in pixels.

 - *string*  
 A CSS measurement of size (e.g., "55px", "80%", "auto" and "inherit").

 - *function*  
 The function returning the element size.

- **ratio**  
 The row or column size ratio.

- **screen**  
 The screen factor or factors by which the current row or column is used. If this field is not defined, the row or column is used by all screen factors.

**Specify Layout Elements**

The widget elements are usually specified using the **dxItem** markup component, as described in the [Specify Layout Elements](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/50%20Layout%20Widgets/0%20Specify%20Layout%20Elements.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Layout_Widgets/#Specify_Layout_Elements') section of this article. The **ResponsiveBox** items support the following options used to specify the element position, size and screen factor.

- **row**  
 Specifies the row component of the element location.

- **col**  
 Specifies the column component of the element location.

- **rowspan**  
 Specifies the height of the element in rows.

- **colspan**  
 Specifies the width of the element in columns.

- **screen**  
 The screen factor or factors by which the current location is applied to the element.

For information on the complete set of item options, refer to the [Default Item Template](/api-reference/10%20UI%20Widgets/dxResponsiveBox/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Default_Item_Template/') reference section of this widget.

<!---->

    <!--HTML-->
    <div class="header" data-options="dxItem: { 
        location: [{ row: 0, col: 0, colspan: 3, screen: 'lg'}, { row: 0, col: 0, colspan: 2, screen: 'xs sm md'}]}">Header</div>
    <div class="content" data-options="dxItem: { 
        location: [{ row: 1, col: 1, screen: 'lg' }, { row: 1, col: 0, colspan: 2, screen: 'xs sm md' }]}">Content</div>

[note]If you display [data visualization widgets](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/') within the [ResponsiveBox](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/') widget, **ResponsiveBox** automatically locates them, however, it cannot resize them automatically. Thus, to display a data visualization widget within **ResponsiveBox**, you should specify its width and height in pixels. If the data visualization widget size is not specified or specified relatively to the parent container ('100%', 'auto', 'inherit'), the **ResponsiveBox** size is calculated incorrectly.

    <!--HTML-->
    <div id="myResponsiveBox">
        . . .
        <div data-options="dxItem: itemOptions">
            <div style="height: 200px; width: 200px;" id="myCircularGauge"></div>
        </div>
        . . .
    </div>


#####AngularJS Approach#####

    <!--HTML-->
    <div dx-responsive-box="responsiveBoxOptions">
        . . .
        <div data-options="dxItem: itemOptions">
            <div style="height: 200px; width: 200px;" dx-circular-gauge="gaugeOptions"></div>
        </div>
        . . .
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxResponsiveBox: responsiveBoxOptions">
        . . .
        <div data-options="dxItem: itemOptions">
            <div style="height: 200px; width: 200px;" data-bind="dxCircularGauge: gaugeOptions"></div>
        </div>
        . . .
    </div>



</article>