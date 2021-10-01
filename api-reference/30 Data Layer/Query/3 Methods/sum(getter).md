---
id: Query.sum(getter)
---
---
##### shortDescription
Calculates the sum of all values found using a [getter](/concepts/70%20Data%20Binding/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters').

##### return: Promise<Number>
A Promise that is resolved after the operation is completed.
#include ref-promisedistinction

##### param(getter): Object
A getter; in most cases, the name of the field that provides values for the calculation.

---
#include datalayer-ref-query-gettersummarymethods-desc with {
    summary: "sum"
}