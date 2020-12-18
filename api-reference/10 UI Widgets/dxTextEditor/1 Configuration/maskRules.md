---
id: dxTextEditor.Options.maskRules
type: Object
default: '{}'
---
---
##### shortDescription

Specifies custom mask rules.

---

Each field of an object passed to this option corresponds to a single rule. A field name is a character used in a mask enclosed in quotes. A field accepts the following values.

    <!--JavaScript-->
    const CustomMaskRules = {
        //a single character
        's': '$',

        // a regular expression
        'h': /[0-9A-F]/,

        // an array of characters
        'n': ['$', '%', '&', '@'],

        // a function
        'f': function(char) {
            const allowedChars = ['a', 'b', 'c', '$', '_', '.'];
            return allowedChars.includes(char);
         }
    }

A function that specifies a custom rule accepts a character as an argument and returns a Boolean value that specifies whether or not the character is appropriate.
It's also possible to create a dynamic mask by passing the following three arguments to the function: character, index, and full string.

    <!--JavaScript-->
    $(document).ready(function () {
        $("#textBox").dxTextBox({
            mask: "Hh:Mm",
            maskRules: {
                H: char => char >= 0 && char <= 2,
                h: (char, index, fullStr) => {
                if (fullStr[0] == '2')
                    return [0,1,2,3].includes(parseInt(char));
                else
                    return [0,1,2,3,4,5,6,7,8,9].includes(parseInt(char));
                },
                M: char => char >= 0 && char <= 5,
                m: char => char >= 0 && char <= 9
            }
        });
    });
