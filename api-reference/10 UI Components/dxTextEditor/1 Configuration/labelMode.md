---
id: dxTextEditor.Options.labelMode
type: Enums.LabelMode
default: 'static', 'floating' (Material), 'outside' (Fluent)
---
---
##### shortDescription
Specifies the [label](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/label.md '{currentpath}/#label')'s display mode.

---
#include texteditor-labelMode with {
    outside_mode: '
        <tr>
        <td><i>"outside"</i></td>
        <td>The label is outside.</td>
        <td><div class="simulator-desktop-container" data-view="/Content/Applications/25_1/UIWidgets/TextEditor/labelModeOutside/index.html, /Content/Applications/25_1/UIWidgets/TextEditor/labelModeOutside/index.js, /Content/Applications/25_1/UIWidgets/TextEditor/labelModeOutside/index.css"></div></td>
    </tr>'
}

[note]

If autofill is enabled in the browser, we do not recommend that you use "*floating*" mode. The autofill values will overlap the label when it is displayed as a placeholder. Use "*static*" mode instead.

[/note]