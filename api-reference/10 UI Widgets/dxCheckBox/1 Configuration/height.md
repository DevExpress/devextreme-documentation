---
default: undefined
type: numeric|string|function
---
---
##### shortDescription
Specifies the height of the widget container.

##### return: number|string
The widget height.

---
The option can hold a value of the following types.

- number  
The height of the widget in pixels

- string  
A CSS measurement of the widget height (e.g., "55px", "80%", "auto" and "inherit")

- function  
A function returning the widget height (e.g., height:function(){ return baseHeight - 10 + "%"; })

[note]The option affects only the size of the widget container. To specify the size of a check box icon, provide the appropriate CSS rules.

    <!--CSS-->
    #checkBoxContainer .dx-checkbox-icon{
        height: 20px;
        width: 20px;
    }