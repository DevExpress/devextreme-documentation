---
##### shortDescription
Defines the appearance of an element displaying a list of field-value pairs.

---
To create a fieldset element, create an element and assign **"dx-fieldset"** to its **class** attribute.

    <!--HTML-->
    <div class="dx-fieldset">
        . . .
    </div>

Each fieldset item is displayed within a separate field element, which has the [dx-field](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field') class. The field element may include label and value elements intended to display the field name and value respectively. Use the [dx-field-label](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-label.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-label'), [dx-field-value](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-value.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-value') and [dx-field-value-static](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-value-static.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-value-static') classes to create label and value elements.

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label">Full Name</div>
        <div class="dx-field-value-static">John Smith</div>
    </div>

The field label and value elements can hold plain text, UI widgets, knockout bindings or custom markup.

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FieldSet/Overview/"
}