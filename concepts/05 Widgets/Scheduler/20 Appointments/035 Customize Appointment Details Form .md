To customize an appointment details form, do the following.

- Create the [onAppointmentFormCreated](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentFormCreated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentFormCreated') handler to obtain the [Form](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/') instance, used to render the appointment details.

        <!--JavaScript-->var schedulerOptions = {
            ...
            onAppointmentFormCreated: function (e) {
                var form = e.form;
            }
        };

- Use the [itemOption](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/itemOption(field_options).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionfield_options') method to update form item options.

        <!--JavaScript-->var schedulerOptions = {
            ...
            onAppointmentFormCreated: function (e) {
                var form = e.form;
                form.itemOption("startDate", {
                    helpText: "Select a date between May 11 and 27",
                    editorOptions: {
                        min: new Date(2016, 4, 11),
                        max: new Date(2016, 4, 27),
                        type: 'datetime'
                    }
                });
            }
        };

<a href="https://www.youtube.com/watch?v=aWiCUyPKL_k&index=8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>