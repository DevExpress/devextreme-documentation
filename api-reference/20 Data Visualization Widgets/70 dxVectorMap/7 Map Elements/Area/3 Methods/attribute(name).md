---
dep: ..\..\Layer Element\3 Methods\attribute(name).md
---
---
##### deprecated
Use the **Layer Element** | **attribute(name, value)** method instead.

##### shortDescription
Return the value of an attribute.

##### param(name): string
The name of an attribute.

##### return: object | array | number | string | boolean
The value of the required attribute.

---
The map [data source](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') can contain an object of attributes assigned to the **attributes** field. To obtain the value of an attribute, call the **attribute(name)** method with the name of the required attribute passed as the parameter.