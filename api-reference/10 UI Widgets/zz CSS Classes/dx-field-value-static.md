---
##### shortDescription
A class used to display a field value containing a static text within the [dx-field](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field') element.

---
<!--->

    <!--HTML-->
    <div class="dx-field">
        <div class=dx-field-label>Full Name</div>
        <div class=dx-field-value-static>John Smith</div>
    </div>

The **dx-field-value-static** element can hold plain text, knockout bindings or custom markup. To display a UI widget within a field value element, use the [dx-field-value](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-value.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-value') CSS class.

[note]The `dx-field-label` and `dx-field-value-static` classes are designed to have the label always be before the value. If you need to swap them around, override the `float` CSS property of these classes in the following way.

    <!--CSS-->
    .dx-field-label {
        float: right;
    }
    .dx-field-value-static {
        float: left;
    }