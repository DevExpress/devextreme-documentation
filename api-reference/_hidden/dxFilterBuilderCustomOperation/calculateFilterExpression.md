---
id: dxFilterBuilderCustomOperation.calculateFilterExpression
type: function(filterValue, field)
---
---
##### shortDescription
Specifies a function that returns a filter expression for this custom operation.

##### param(filterValue): any
A **FilterBuilder** field's value.

##### param(field): dxFilterBuilderField
The field's configuration.

##### return: Filter expression
A filter expression with filter operations supported by the **DataSource**.  
These operations are: "!", "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains", "and", "or".

---
#include uiwidgets-ref-functioncontext with { 
    value: "custom operation's configuration"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/Customization/"
}

#####See Also#####
- [Implement a Custom Operation](/concepts/05%20Widgets/FilterBuilder/50%20Implement%20a%20Custom%20Operation.md '/Documentation/Guide/Widgets/FilterBuilder/Implement_a_Custom_Operation/')