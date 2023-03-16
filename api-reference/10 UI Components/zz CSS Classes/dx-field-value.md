---
##### shortDescription
A class used to display a field value containing a UI component within the [dx-field](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field.md '/Documentation/ApiReference/UI_Components/CSS_Classes/#dx-field') element.

---

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label">Name</div>
        <div class="dx-field-value" id="nameTextBox"></div>
    </div>

To display plain text or custom markup within a field value element, use the [dx-field-value-static](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-value-static.md '/Documentation/ApiReference/UI_Components/CSS_Classes/#dx-field-value-static') CSS class.

DevExtreme UI components includes <a href="http://www.w3.org/WAI/intro/aria.php" target="_blank">WAI-ARIA</a> markup to support screen readers. If you use a UI component within a field value element, associate the UI component with the field label to allow a screen reader to properly read the field. For this purpose, specify a unique ID for the field label element and assign this ID to the **aria-labeledby** attribute of the associated UI component as demonstrated below.

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label" id="fullnameLabel">Full Name</div>
        <div class="dx-field-value">
            <div aria-labeledby="fullnameLabel" id="fullNameTextBox"></div>
        </div>
    </div>

[note]The `dx-field-label` and `dx-field-value` classes are designed to have the label always be before the value. If you need to swap them around, override the `float` CSS property of these classes in the following way.

    <!--CSS-->
    .dx-field-label {
        float: right;
    }
    .dx-field-value {
        float: left;
    }