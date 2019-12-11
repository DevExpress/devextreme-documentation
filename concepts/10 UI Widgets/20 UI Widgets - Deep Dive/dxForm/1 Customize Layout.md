<article>
The **Form** widget enables you to specify a fixed number of columns in the layout, or force the widget to automatically choose the number of columns depending on the current form width.

To specify a fixed number of columns in the form layout, assign the required number to the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount') option.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        colCount: 3
    }

For an automatic calculation of the column count, assign "auto" to the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount') option and specify the minimum column width using the [minColWidth](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/minColWidth.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#minColWidth') option. In this case, the layout contains the number of columns the form could fit if the column width equals **minColWidth**.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        colCount: "auto",
        minColWidth: 200
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/CustomizeLayout/markup.html, Content/Applications/16_1/UIWidgets/dxForm/CustomizeLayout/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>

The **Form** widget layout is adaptive. It becomes a single-column on devices with small screens.

Also, you can specify dependency between the screen factor and the column count of the layout. For this purpose, use the [colCountByScreen](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCountByScreen '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/colCountByScreen/') option.

<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
</article>