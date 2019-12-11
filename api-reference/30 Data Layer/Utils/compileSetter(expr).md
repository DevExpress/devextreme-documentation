---
module: utils
export: compileSetter
---
---
##### shortDescription
Compiles a setter function from the setter expression.

##### param(expr): String|Array
A getter expression.

##### return: function()
The resulting setter function.

---
This function is used internally by the data layer objects ([DataSource](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource') and [Stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores')). In most cases, you do not need to use it directly. For more information on setters, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') article.