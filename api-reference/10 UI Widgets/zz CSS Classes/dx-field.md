---
##### shortDescription
Defines the appearance of an element displaying a field-value pair within a [dx-fieldset](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-fieldset.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-fieldset') element.

---
The **dx-field** field element may include label and value elements intended to display the field name and value respectively. Use the **dx-field-label**, **dx-field-value** and **dx-field-value-static** classes to create label and value elements.

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label">Full Name</div>
        <div class="dx-field-value-static">John Smith</div>
    </div>

DevExtreme UI widgets include <a href="http://www.w3.org/WAI/intro/aria.php" target="_blank">WAI-ARIA</a> markup to support screen readers. If you use a widget within a field value element, associate the widget with the field label to allow a screen reader to properly read the field. For this purpose, specify a unique ID for the field label element and assign this ID to the **aria-labeledby** attribute of the associated widget as demonstrated below.

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label" id="fullnameLabel">Full Name</div>
        <div class="dx-field-value">
            <div aria-labeledby="fullnameLabel" id="fullNameTextBox"></div>
        </div>
    </div>

#####AngularJS#####

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label" id="fullnameLabel">Full Name</div>
        <div class="dx-field-value">
            <div aria-labeledby="fullnameLabel" dx-text-box="{ value: fullName }"></div>
        </div>
    </div>

#####Knockout#####

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label" id="fullnameLabel">Full Name</div>
        <div class="dx-field-value">
            <div aria-labeledby="fullnameLabel" data-bind="dxTextBox: { value: fullName }"></div>
        </div>
    </div>

[note]The `dx-field-label` and `dx-field-value` / `dx-field-value-static` classes are designed to have the label always be before the value. If you need to swap them around, override the `float` CSS property of these classes in the following way.

    <!--CSS-->
    .dx-field-label {
        float: right;
    }
    .dx-field-value {
        float: left;
    }
    .dx-field-value-static {
        float: left;
    }