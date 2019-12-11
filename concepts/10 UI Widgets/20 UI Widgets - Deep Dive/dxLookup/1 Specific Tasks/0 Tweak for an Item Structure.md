<article data-show="Content/Applications/16_1/UIWidgets/dxLookup/TweakForItemStructure/markup.html,
        Content/Applications/16_1/UIWidgets/dxLookup/TweakForItemStructure/script.js,
        Content/Applications/16_1/UIWidgets/dxLookup/TweakForItemStructure/styles.css">

If a lookup item is a string value, this value is displayed in the lookup input element and held in the **value** option. In most cases, a lookup item is an object containing various properties. In this case, you should specify which property value is displayed in the lookup input element and which one should be accessed using the **value** option.

The [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#displayExpr') option specifies the property of an item object whose value is displayed in the lookup input element. You can access the displayed value using the [displayValue](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/displayValue.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#displayValue') option.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        displayExpr: "text"
    }

If a list item template is not specified, each list item displays a value of the property specified by the **displayExpr** option.

The [valueExpr](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#valueExpr') option specifies the item object property whose value is accessed using the [value](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value') option. You can pass "this" to the **valueExpr** option to access the entire item object.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        displayExpr: "text",
        valueExpr: "population"
    }

#####See Also#####
- [Get and Set Options - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Get_and_Set_Options')
- [Change Options - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Change_Options')
- [Change Options - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Change_Options')
</article>