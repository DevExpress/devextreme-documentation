---
id: GridBase.Options.scrolling.renderAsync
type: Boolean
default: undefined
---
---
##### shortDescription
Specifies whether to render rows after a user stops scrolling or at the same time as the user scrolls the {WidgetName}.

---
This property can have one of the following values:

<table class="dx-table">
    <tr>
        <th>scrolling.renderAsync</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><b>true</b></td>
        <td>
            Rows are rendered <i>after</i> a user stops scrolling.<br>
            In this mode, row content may take time to appear, but scrolling is smoother.
        </td>
    </tr>
    <tr>
        <td><b>false</b></td>
        <td>
            Rows are rendered <i>at the same time</i> as the user scrolls the {WidgetName}.<br>
            In this mode, row content is displayed quicker, but the component performance during scrolling may be lowered.
        </td>
    </tr>
    <tr>
        <td><b>undefined</b></td>
        <td>The mode is defined automatically based on the row content.</td>
    </tr>
</table>
