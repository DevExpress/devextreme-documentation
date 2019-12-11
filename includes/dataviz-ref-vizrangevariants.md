This option accepts one of the following:

- **A two-item array**    

    Specifies the range's start and end. The array can contain a pair of numeric, string, or date-time values, depending on the ${{element}}'s ${{elementType}}. You can also set one of the array values to **null** to specify an open-ended range.

        ${{objectName}}: [50, 70]
        // Open-ended range
        ${{objectName}}: [null, 70]

- **An object with the [startValue](${{basepath}}/#startValue) and [endValue](${{basepath}}/#endValue) fields**    

    An alternative to the two-item array.

        ${{objectName}}: {
            startValue: 50,
            endValue: 70
        }
        // Open-ended range
        ${{objectName}}: {
            startValue: null,
            endValue: 70
        }

- **An object with the [length](${{basepath}}/length/) and a startValue or endValue field**      

    Specifies the range using a start or end value and length.

        ${{objectName}}: {
            startValue: 50,
            length: 20
        }
        // ===== or =====
        ${{objectName}}: {
            endValue: 70,
            length: 20
        }

- **An object with the [length](${{basepath}}/length/) field**      

    Sets the range of the specified length using the last ${{element}} value as the end value.

        ${{objectName}}: {
            length: 20
        }
