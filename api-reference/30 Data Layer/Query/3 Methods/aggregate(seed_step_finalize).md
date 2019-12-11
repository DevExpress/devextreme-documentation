---
##### shortDescription
Calculates a custom summary for the items in the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

##### param(seed): object
The initial value.

##### param(step): function
A function called for each item.

##### param(finalize): function
A function invoked after the operation is finished.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
The **step** function takes on two arguments. The first argument is an accumulator value changed on each **step** function execution. The **step** function should return the updated value of this argument. The second argument is a value of the current item. The **finalize** function takes on the resulting accumulator value, and should return the desired value. 

The following example demonstrates how to calculate the average value for the Query items. 

Suppose that each item of the Query is an object that provides the **price** numeric property, among other properties. To calculate the average price value, calculate the total price and divide it by the item count.

In this case, the **seed** argument specifies the initial value of the total price, which will be increased within the **step** function called for each item. The **finalize** function will divide the total price by the item count.

    <!--JavaScript-->
    var count = 0;
    DevExpress.data.query(inputArray)
        .aggregate(
            0, 
            function(total) {
                return total + itemData;
                count++;
            },
            function(total) {
                return total / count;
            }
         )
        .done(function(result) {
            // 'result' holds the desired value
        });

The average value calculation is an example of this function's usage. However, note that this functionality is already implemented in the [avg()](/api-reference/30%20Data%20Layer/Query/3%20Methods/avg().md '/Documentation/ApiReference/Data_Layer/Query/Methods/#avg') and [avg(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/avg(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#avggetter') methods.