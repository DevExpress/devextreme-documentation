---
id: dxFormSimpleItem.editorType
type: Enums.FormItemComponent
---
---
##### shortDescription
Specifies which editor UI component is used to display and edit the form item value.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}

You can use the following editors in DevExtreme Form:

- [dxAutocomplete](/concepts/05%20UI%20Components/Autocomplete/00%20Getting%20Started%20with%20Autocomplete '/Documentation/Guide/UI_Components/Autocomplete/Getting_Started_with_Autocomplete/')
- [dxCalendar](/concepts/05%20UI%20Components/Calendar/00%20Getting%20Started%20with%20Calendar '/Documentation/Guide/UI_Components/Calendar/Getting_Started_with_Calendar/')
- [dxCheckBox](/concepts/05%20UI%20Components/CheckBox/00%20Getting%20Started%20with%20CheckBox '/Documentation/Guide/UI_Components/CheckBox/Getting_Started_with_CheckBox/')
- [dxColorBox](/concepts/05%20UI%20Components/ColorBox/00%20Getting%20Started%20with%20ColorBox '/Documentation/Guide/UI_Components/ColorBox/Getting_Started_with_ColorBox/')
- [dxDateBox](/concepts/05%20UI%20Components/DateBox/00%20Getting%20Started%20with%20DateBox '/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/')
- [dxDateRangeBox](/concepts/05%20UI%20Components/DateRangeBox/00%20Getting%20Started%20with%20DateRangeBox '/Documentation/Guide/UI_Components/DateRangeBox/Getting_Started_with_DateRangeBox/')
- [dxDropDownBox](/concepts/05%20UI%20Components/DropDownBox/00%20Getting%20Started%20with%20DropDownBox '/Documentation/Guide/UI_Components/DropDownBox/Getting_Started_with_DropDownBox/')
- [dxHtmlEditor](/concepts/05%20UI%20Components/HtmlEditor/00%20Getting%20Started%20with%20HtmlEditor '/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/')
- [dxLookup](/concepts/05%20UI%20Components/Lookup/00%20Getting%20Started%20with%20Lookup '/Documentation/Guide/UI_Components/Lookup/Getting_Started_with_Lookup/')
- [dxNumberBox](/concepts/05%20UI%20Components/NumberBox/00%20Getting%20Started%20with%20NumberBox '/Documentation/Guide/UI_Components/NumberBox/Getting_Started_with_NumberBox/')
- [dxRadioGroup](/concepts/05%20UI%20Components/RadioGroup/00%20Overview.md '/Documentation/Guide/UI_Components/RadioGroup/Overview/')
- [dxRangeSlider](/concepts/05%20UI%20Components/RangeSlider/00%20Overview.md '/Documentation/Guide/UI_Components/RangeSlider/Overview/')
- [dxSelectBox](/concepts/05%20UI%20Components/SelectBox/00%20Getting%20Started%20with%20SelectBox '/Documentation/Guide/UI_Components/SelectBox/Getting_Started_with_SelectBox/')
- [dxSlider](/concepts/05%20UI%20Components/Slider/00%20Overview.md '/Documentation/Guide/UI_Components/Slider/Overview/')
- [dxSwitch](/concepts/05%20UI%20Components/Switch/00%20Getting%20Started%20with%20Switch '/Documentation/Guide/UI_Components/Switch/Getting_Started_with_Switch/')
- [dxTagBox](/concepts/05%20UI%20Components/TagBox/00%20Getting%20Started%20with%20TagBox '/Documentation/Guide/UI_Components/TagBox/Getting_Started_with_TagBox/')
- [dxTextArea](/concepts/05%20UI%20Components/TextArea/00%20Getting%20Started%20with%20TextArea '/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/')
- [dxTextBox](/concepts/05%20UI%20Components/TextBox/00%20Getting%20Started%20with%20TextBox '/Documentation/Guide/UI_Components/TextBox/Getting_Started_with_TextBox/')

[important]

If you use [DevExtreme modules](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/'), import the editor's module when specifying this property. For example, if you use *"dxLookup"*, specify the following import:

    import "devextreme/ui/lookup";

You can omit modules for *"dxTextBox"*, *"dxDateBox"*, *"dxCheckBox"*, and *"dxNumberBox"*, because the Form UI component imports them automatically when creating form items.

[/important]

[note] You can use a [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') to define an unsupported component. 

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-filter-appointments-by-name-and-date"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
