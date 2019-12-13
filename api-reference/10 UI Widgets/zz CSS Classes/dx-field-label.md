---
##### shortDescription
A class used to display a field name within the [dx-field](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field') element.

---
<!--->

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label">Full Name</div>
        <div class="dx-field-value">John Smith</div>
    </div>

The **dx-field-label** element can hold plain text, UI widgets, knockout bindings or custom markup.

[note]The `dx-field-label` and `dx-field-value` classes are designed to have the label always be before the value. If you need to swap them around, override the `float` CSS property of these classes in the following way.

    <!--CSS-->
    .dx-field-label {
        float: right;
    }
    .dx-field-value {
        float: left;
    }