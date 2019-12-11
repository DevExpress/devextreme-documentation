<article  data-show="Content/Applications/16_1/UIWidgets/dxBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxBox/script.js,
        Content/Applications/16_1/UIWidgets/dxBox/styles.css">
  
The [Box](/api-reference/10%20UI%20Widgets/dxBox '/Documentation/ApiReference/UI_Widgets/dxBox/') widget provides an easy way to arrange the specified markup elements in a row or column.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeboxboxbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

**Specify Layout Elements**

The widget elements are usually specified using the **dxItem** markup component, as described in the [Specify Layout Elements](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/50%20Layout%20Widgets/0%20Specify%20Layout%20Elements.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Layout_Widgets/#Specify_Layout_Elements') section of this article. The **Box** items support the following options specifying element size.

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

    <!--HTML-->
    <div id="boxContainer">
        <div data-options="dxItem: { ratio: 1, baseSize: 20 }">
        </div>
        <div data-options="dxItem: { ratio: 3: baseSize: 0 }">
        </div>
        <div data-options="dxItem: { ratio: 2, baseSize: 30 }">
        </div>
    </div>

For information on the complete set of item options, refer to the [Default Item Template](/api-reference/10%20UI%20Widgets/dxBox/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/') reference section of this widget.

**Specify Arrange Direction**

The widget arranges the elements in a column or in a row depending on the direction option value, which can be 'row' or 'col'.

    <!--JavaScript-->
    var boxOptions = {
        direction: 'col'
    }

**Align Layout Elements**

You can also specify the alignment applied to the the elements if they are not stretched to fill the entire widget container. For this purpose, the widget includes the [align](/api-reference/10%20UI%20Widgets/dxBox/1%20Configuration/align.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#align') and [crossAlign](/api-reference/10%20UI%20Widgets/dxBox/1%20Configuration/crossAlign.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#crossAlign') options, which specify alignment along the specified direction and cross-wise respectively.
</article>