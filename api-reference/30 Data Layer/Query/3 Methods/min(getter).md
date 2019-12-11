---
##### shortDescription
Calculates the minumum of all values found using a [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters').

##### param(getter): Object
A getter; in most cases, the name of the field that provides values for the calculation.

##### return: Promise<Number, Date>
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
#include datalayer-ref-query-gettersummarymethods-desc with {
    summary: "min"
}