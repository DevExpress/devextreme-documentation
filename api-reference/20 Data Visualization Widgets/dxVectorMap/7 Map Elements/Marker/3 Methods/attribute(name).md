---
dep: ..\..\Layer Element\3 Methods\attribute(name).md
---
---
##### shortDescription
Returns the value of an attribute.

##### param(name): String
The name of an attribute.

##### return: Object|Array|Number|String|Boolean
The value of the required attribute.

---
The map [marker data source](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') can contain an object of attributes assigned to the **attributes** field. These attributes can hold any information you require. To obtain the value of an attribute, call the **attribute(name)** method with the name of the required attribute passed as the parameter.