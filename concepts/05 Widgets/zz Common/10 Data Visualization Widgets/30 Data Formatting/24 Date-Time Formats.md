<p></p>
*   *'longDate'* - "Thursday, January 01, 1970"
*   *'longTime'* - "12:00:00 AM"
*   *'longDateLongTime'* - "Thursday, January 01, 1970, 12:00:00 AM"
*   *'monthAndDay'* - "January 01"
*   *'monthAndYear'* - "1970 January"
*   *'quarterAndYear'* - "QI 1970"
*   *'shortDate'* - "1/25/1970"
*   *'shortTime'* - "12:00 AM"
*   *'shortDateShortTime'* - "1/25/1970, 12:00 AM"
*   *'millisecond'* - "010"
*   *'day'* - "01"
*   *'month'* - "January"
*   *'quarter'* - "QI"
*   *'year'* - "1970"
*   *'dayOfWeek'* - "Thursday"
*   *'hour'* - "12"
*   *'minute'* - "00"

To set a date-time format, assign one of the values above to the **format**.[type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') option. For example, the following code applies the *'monthAndDay'* format to **Chart**'s [argument axis labels](/concepts/05%20Widgets/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/').

    <!--JavaScript-->var data = [
		{ date: new Date(1994,2,3), quantity: 26.25 },
		{ date: new Date(1994,2,4), quantity: 26.50 },
		{ date: new Date(1994,2,5), quantity: 26.375 },
		{ date: new Date(1994,2,6), quantity: 25.75 }
	];
    
    var chartOptions = {
        // ...
        dataSource: data,
        argumentAxis: {
            label: {
                // ...
                format: {
                    type: 'monthAndDay'
                }
            }
        }
    };

![Date-Time Format](/images/ChartJS/FormattingDateTime.png)
    
The **format** option also accepts strings. Use this capability as a shortcut for specifying a predefined format.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: 'monthAndDay'
        }
    };
    
Alternatively, you can use a native formatter of the Globalize library. In this case, the **format** option accepts an object whose fields are the same as the options passed to the <a href="https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md" target="_blank">dateFormatter</a>.

    <!--JavaScript-->var widgetOptions = {
        // ...
        customizableElement: {
            format: {
                skeleton: "GyMMMd"
            }
        }
    };

Note that you must not set the **type** option if you use a Globalize formatter. Also, this approach might require additional <a href="https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content" target="_blank">CLDR modules</a> not shipped with the DevExtreme package.
