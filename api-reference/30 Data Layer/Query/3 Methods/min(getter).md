---
id: Query.min(getter)
---
---
##### shortDescription
Calculates the minumum of all values found using a [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters').

##### return: Promise<Number, Date>
A Promise that is resolved after the operation is completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(getter): Object
A getter; in most cases, the name of the field that provides values for the calculation.

---
#include datalayer-ref-query-gettersummarymethods-desc with {
    summary: "min"
}