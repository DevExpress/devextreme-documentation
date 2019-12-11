---
hidden: 
default: 'appointmentPopup'
type: template
---
---
##### shortDescription
The template to be used for rendering an appointment details popup.

##### param(appointmentData): object
The appointment object whose popup should be rendered.

##### param(contentElement): jQuery
An HTML element of the appointment popup to be rendered.

##### return: string|jQuery
A template name or a template container.

---
A binding context of an appointment popup template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object fields directly. To access another binding context within an appointment popup template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment popup template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS#####

        <!--HTML-->
        <div id="scheduler" dx-scheduler="options" dx-item-alias="showtime">
            <div data-options="dxTemplate: {name: 'popup-template'}">
                <div class='movie-tooltip' ng-init="movieData = getMovieById(showtime.movieId)">
                    <img ng-src="{{movieData.image}}" />
                    <div class='movie-title'>Title:
                        <div ng-model="movieData.text" dx-text-box="{}"></div>
                    </div>
                    <div class='movie-info'>
                        Year: <div ng-model="movieData.year" dx-date-box="{}">
                    </div>
                    <div class='movie-info'>
                        Duration: <div ng-model="movieData.duration" dx-number-box="{}">
                    </div>
                </div>
            </div>
        </div>

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')