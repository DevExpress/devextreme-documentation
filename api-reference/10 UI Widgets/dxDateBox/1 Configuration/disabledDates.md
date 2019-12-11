---
default: null
type: Array<Date> | function(data)
---
---
##### shortDescription
Specifies dates to be disabled. Applies only if [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') is *"calendar"*.

##### param(data): Object
Information about the checked date.

##### field(data.component): dxDateBox
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Methods/#instance').

##### field(data.date): Date
The currently checked date.

##### field(data.view): String
The current [view](/api-reference/10%20UI%20Widgets/dxCalendar/5%20Default%20Cell%20Template/view.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Default_Cell_Template/#view').

##### return: Boolean
**true** if the date should be disabled; otherwise **false**.

---
This option accepts an array of dates...

    <!--JavaScript-->
    $(function () {
        $("#dateBoxContainer").dxDateBox({
            // ...
            disabledDates: [ new Date("07/1/2017"),  new Date("07/2/2017"), new Date("07/3/2017") ]
        });
    });

... or a function that specifies whether the currently checked date is disabled.

    <!--JavaScript-->
    $(function () {
        $("#dateBoxContainer").dxDateBox({
            disabledDates: function (args) {
                var dayOfWeek = args.date.getDay(),
                    month = args.date.getMonth(),
                    isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                    isMarch = (args.view === "year" || args.view === "month") && month === 2;

                if(isWeekend || isMarch) {
                    return true;
                }
            }
        });
    });