An end user can use the following keys to interact with the UI component.

<table class="dx-table">
    <tr>
        <th><a href="/Documentation/Guide/UI_Components/DateBox/Platform-Specific_Value_Pickers">Value Picker</a></th>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr></tr>
    <tr>
        <td rowspan="2">All</td>
        <td style="font-style:italic; text-align:center">Alt + &darr; / Alt + &uarr;</td>
        <td>Opens/closes the value picker.</td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>Closes the date/time picker.</td>
    </tr>
    <tr>
        <td rowspan="10">Calendar</td>
        <td style="font-style:italic; text-align:center">&larr; &rarr; &uarr; &darr;</td>
        <td>Moves focus to the day nearby.</td>
    </tr>
    <tr>
        <td>Page Up or Ctrl + &larr;</td>
        <td>Displays the previous month.</td>
    </tr>
    <tr>
        <td>Page Down or Ctrl + &rarr;</td>
        <td>Displays the next month.</td>
    </tr>
    <tr>
        <td>Enter</td>
        <td>Selects the focused day. When the <a href="/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type">type</a> is <i>dateTime</i> and user focuses the date other than the date chosen in the DateBox, the Enter key selects the new date without closing the calendar popup.</td>
    </tr>
    <tr>
        <td>Alt + &uarr; / Alt + &darr;</td>
        <td>Opens/closes the drop-down editor.</td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>Closes the drop-down editor.</td>
    </tr>
    <tr>
        <td>Ctrl + &uarr;</td>
        <td>Increases <a href="/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#zoomLevel">zoomLevel</a>.</td>
    </tr>
    <tr>
        <td>Ctrl + &darr;</td>
        <td>Decreases <b>zoomLevel</b>.</td>
    </tr>
    <tr>
        <td>Home</td>
        <td>Moves focus to the first date in the view.</td>
    </tr>
    <tr>
        <td>End</td>
        <td>Moves focus to the last date in the view.</td>
    </tr>
    <tr>
        <td rowspan="3">List</td>
        <td style="font-style:italic; text-align:center">&uarr; / &darr;</td>
        <td>Moves focus to the previous/next time value.</td>
    </tr>
    <tr>
        <td>Enter</td>
        <td>Selects the focused time value.</td>
    </tr>
    <tr>
        <td>Page Up / Page Down</td>
        <td>Moves focus to the first/last value.</td>
    </tr>
</table>

#include common-code-register-key-handler

#####See Also#####
#include common-link-callmethods
- [DateBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview)
- [DateBox API Reference](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/')

[tags]date box, dateBox, navigation, accessibility, keyboard shortcuts
