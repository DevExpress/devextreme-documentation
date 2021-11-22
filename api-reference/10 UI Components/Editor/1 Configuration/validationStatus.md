---
id: Editor.Options.validationStatus
acceptValues: 'valid' | 'invalid' | 'pending'
type: String
default: 'valid'
---
---
##### shortDescription
Indicates or specifies the current validation status.

---
The following table illustrates the validation status indicators:

<table class="dx-table">
    <tr>
        <th>validationStatus</th>
        <th>Indicator</th>
    </tr>
    <tr>
        <td><code>"pending"</code></td>
        <td><img src="/images/UiWidgets/text-box-validation-pending.png" alt="DevExtreme editor validation status: pending" /></td>
    </tr>
    <tr>
        <td><code>"valid"</code></td>
        <td><img src="/images/UiWidgets/text-box-validation-valid.png" alt="DevExtreme editor validation status: valid" /></td>
    </tr>
    <tr>
        <td><code>"invalid"</code></td>
        <td><img src="/images/UiWidgets/text-box-validation-invalid.png" alt="DevExtreme editor validation status: invalid" /></td>
    </tr>
</table>

When you assign *"invalid"* to **validationStatus**, you can also use the [validationErrors]({basewidgetpath}/Configuration/#validationErrors) array to set an error message as shown below:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const {widgetName} = $("#{widgetName}Container").dx{WidgetName}({
            // ...
        }).dx{WidgetName}("instance");

        function setInvalidStatus(message) {
            {widgetName}.option({
                validationStatus: "invalid",
                validationErrors: [{ message: message }]
            });
        }
    });

---