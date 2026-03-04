---
id: dxFormSimpleItem.editorType
type: Enums.FormItemComponent
---
---
##### shortDescription
The DevExtreme component to use as the item editor.

---
To configure this component, use the [editorOptions]({currentpath}/#editorOptions) object.

The following components are supported:

<table class="multicolumn-list">
    <tr>
        <td>
            <ul>
                <li><a href="/Documentation/Guide/UI_Components/Autocomplete/Getting_Started_with_Autocomplete/">dxAutocomplete</a></li>
                <li><a href="/Documentation/Guide/UI_Components/Calendar/Getting_Started_with_Calendar/">dxCalendar</a></li>
                <li><a href="/Documentation/Guide/UI_Components/CheckBox/Getting_Started_with_CheckBox/">dxCheckBox</a></li>
                <li><a href="/Documentation/Guide/UI_Components/ColorBox/Getting_Started_with_ColorBox/">dxColorBox</a></li>
                <li><a href="/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/">dxDateBox</a></li>
                <li><a href="/Documentation/Guide/UI_Components/DateRangeBox/Getting_Started_with_DateRangeBox/">dxDateRangeBox</a></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><a href="/Documentation/Guide/UI_Components/DropDownBox/Getting_Started_with_DropDownBox/">dxDropDownBox</a></li>
                <li><a href="/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/">dxHtmlEditor</a></li>
                <li><a href="/Documentation/Guide/UI_Components/Lookup/Getting_Started_with_Lookup/">dxLookup</a></li>
                <li><a href="/Documentation/Guide/UI_Components/NumberBox/Getting_Started_with_NumberBox/">dxNumberBox</a></li>
                <li><a href="/Documentation/Guide/UI_Components/RadioGroup/Overview/">dxRadioGroup</a></li>
                <li><a href="/Documentation/Guide/UI_Components/RangeSlider/Overview/">dxRangeSlider</a></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><a href="/Documentation/Guide/UI_Components/SelectBox/Getting_Started_with_SelectBox/">dxSelectBox</a></li>
                <li><a href="/Documentation/Guide/UI_Components/Slider/Overview/">dxSlider</a></li>
                <li><a href="/Documentation/Guide/UI_Components/Switch/Getting_Started_with_Switch/">dxSwitch</a></li>
                <li><a href="/Documentation/Guide/UI_Components/TagBox/Getting_Started_with_TagBox/">dxTagBox</a></li>
                <li><a href="/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/">dxTextArea</a></li>
                <li><a href="/Documentation/Guide/UI_Components/TextBox/Getting_Started_with_TextBox/">dxTextBox</a></li>
            </ul>
        </td>
    </tr>
</table>

[note]

---

##### jQuery

- If you use [DevExtreme modules](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/'), import the specified editor's module from the `devextreme` folder as follows: 

        import 'devextreme/ui/tag_box';

    You can omit modules for *"dxTextBox"*, *"dxDateBox"*, *"dxCheckBox"*, and *"dxNumberBox"*. The Form component imports these modules automatically.

- Use a [template]({currentpath}/#template) instead of this property to integrate an unsupported component.

##### Angular

- To use this property, import the specified editor's [module](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/') from the `devextreme` folder as follows:

        import 'devextreme/ui/tag_box';

    You can omit modules for *"dxTextBox"*, *"dxDateBox"*, *"dxCheckBox"*, and *"dxNumberBox"*. The Form component imports these modules automatically.

- Use a [template]({currentpath}/#template) instead of this property in the following usage scenarios:

    - To update the item component's state/options at runtime.
    - To integrate an unsupported component.

##### Vue

- To use this property, import the specified editor's [module](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/') from the `devextreme` folder as follows:

        import 'devextreme/ui/tag_box';

    You can omit modules for *"dxTextBox"*, *"dxDateBox"*, *"dxCheckBox"*, and *"dxNumberBox"*. The Form component imports these modules automatically.

- Use a [template]({currentpath}/#template) instead of this property in the following usage scenarios:

    - To update the item component's state/options at runtime.
    - To integrate an unsupported component.

##### React

- To use this property, import the specified editor's [module](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/') from the `devextreme` folder as follows:

        import 'devextreme/ui/tag_box';

    You can omit modules for *"dxTextBox"*, *"dxDateBox"*, *"dxCheckBox"*, and *"dxNumberBox"*. The Form component imports these modules automatically.

- Use [component]({currentpath}/#component) or [render]({currentpath}/#render) instead of this property in the following usage scenarios:

    - To update the item component's state/options at runtime.
    - To integrate an unsupported component.

---

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-filter-appointments-by-name-and-date"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
