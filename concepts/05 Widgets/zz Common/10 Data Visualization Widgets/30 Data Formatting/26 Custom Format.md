If none of the predefined formats meet your requirements, specify a custom format using the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') function. This function accepts the original value as the parameter and returns a formatted string.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: {
                formatter: function (originalValue) {
                    // ...
                    return formattedString;
                }
            }
        }
    };

In addition, you can implement the [parser](/api-reference/50%20Common/Object%20Structures/format/parser.md '/Documentation/ApiReference/Common/Object_Structures/format/#parser') function to parse numbers or dates presented as strings into the correct format. This function may be called internally by the widget at different points of your application's lifetime.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: {
                // ...
                parser: function (stringToParse) {
                    // ...
                    return valueWithCorrectFormat;
                }
            }
        }
    };

If **formatter** is the only field that you need to specify in the **format** object, assign the function straight to the **format** option as shown below.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: function (originalValue) {
                // ...
                return formattedString;
            }
        }
    };