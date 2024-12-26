---
id: dxForm.Options.labelMode
type: Enums.FormLabelMode
default: 'outside'
---
---
##### shortDescription
Specifies a display mode for [item labels](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/').

---
#include texteditor-labelMode with {
    outside_mode: '
    <tr>
        <td><i>"outside"</i></td>
        <td>
            The label is displayed outside the editor, and its position depends on the following properties:
            <ul>
                <li><a href="/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelLocation">labelLocation</a></li>
                <li><a href="/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#location">items[].label.location</a></li>
                <li><a href="/Documentation/ApiReference/UI_Components/dxForm/Configuration/#alignItemLabels">alignItemLabels</a></li>
                <li><a href="/Documentation/ApiReference/UI_Components/dxForm/Configuration/#alignItemLabelsInAllGroups">alignItemLabelsInAllGroups</a></li>
                <li><a href="/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#alignment">items[].label.alignment</a></li>
            </ul>
        </td>
        <td><div class="simulator-desktop-container" data-view="/Content/Applications/25_1/UIWidgets/TextEditor/labelModeOutside/index.html, /Content/Applications/25_1/UIWidgets/TextEditor/labelModeOutside/index.js, /Content/Applications/25_1/UIWidgets/TextEditor/labelModeOutside/index.css"></div></td>
    </tr>'
}

This property specifies a display mode for all item labels. If you want to override the mode for an individual label, specify the **labelMode** property within [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions').

[note]

Please review the following notes:

- The following [editors](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType') do not support *"static"* and *"floating"* modes and will default to *"outside"* mode:

    - *"dxCalendar"*
    - *"dxCheckBox"*
    - *"dxHtmlEditor"*
    - *"dxRadioGroup"*
    - *"dxRangeSlider"*
    - *"dxSlider"*
    - *"dxSwitch"*

- If autofill is enabled in the browser, we do not recommend that you use "*floating*" mode. The autofill values will overlap the label when it is displayed as a placeholder. Use "*static*" mode instead.

[/note]

