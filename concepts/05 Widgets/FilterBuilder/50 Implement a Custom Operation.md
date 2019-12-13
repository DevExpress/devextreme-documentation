All custom operations are configured in the [customOperations](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/customOperations '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/') array. Follow the steps below to declare an operation:

1. **Specify the operation's name.**         
    The name identifies the operation and is used later in the widget's filter expression in the [value](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#value') option. Specify it using the [name](/api-reference/_hidden/dxFilterBuilderCustomOperation/name.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#name') option.

2. **Express the operation through DataSource-compatible operations.**      
    Filtering is implemented using the **DataSource** which supports only a limited set of filter operations. Use the [calculateFilterExpression](/api-reference/_hidden/dxFilterBuilderCustomOperation/calculateFilterExpression.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#calculateFilterExpression') function to express your custom operation through these **DataSource**-compatible operations.

3. **Customize the appearance.**     
    Specify the [caption](/api-reference/_hidden/dxFilterBuilderCustomOperation/caption.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#caption') and [icon](/api-reference/_hidden/dxFilterBuilderCustomOperation/icon.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#icon') to be used for displaying the operation in the drop-down list. You can also customize the editor using the [editorTemplate](/api-reference/_hidden/dxFilterBuilderCustomOperation/editorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#editorTemplate') option and the value's text representation using the [customizeText](/api-reference/_hidden/dxFilterBuilderCustomOperation/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#customizeText') option.

4. **Make the operation available for fields.**      
    Set the [dataTypes](/api-reference/_hidden/dxFilterBuilderCustomOperation/dataTypes.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#dataTypes') option to make the operation available for fields of specific data types. You can also make it available for an individual field by including the operation's **name** in the field's [filterOperations](/api-reference/_hidden/dxFilterBuilderField/filterOperations.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#filterOperations') array.


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/Customization/"
}
