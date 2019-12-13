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
    var CustomMaskRules = {
        //a single character
        's': '$',

        // a regular expression
        'h': /[0-9A-F]/,

        // an array of characters
        'n': ['$', '%', '&', '@'],

        // a function
        'f': function(char) {
            var allowedChars = ['a', 'b', 'c', '$', '_', '.'];
            for(var i = 0; i < allowedChars.length; i++) {
                if (char === allowedChars[i])
                    return true;
            }
            return false;
         }
    }

A function that specifies a custom rule accepts a character as an argument and returns a Boolean value that specifies whether or not the character is appropriate.