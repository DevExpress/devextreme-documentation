---
id: dxScheduler.Options.appointmentPopupTemplate
type: template
default: 'appointmentPopup'
hidden: 
---
---
##### shortDescription
The template to be used for rendering an appointment details popup.

##### param(appointmentData): Object
The data of the appointment whose popup is rendered.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Element | jQuery
A template name or container.

---
A binding context of an appointment popup template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object fields directly. To access another binding context within an appointment popup template, use <a href="http://knockoutjs.com/documentation/binding-context.html" target="_blank">Knockout</a> binding variables.

In **AngularJS approach**, if you need to access appointment object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment popup template, use <a href="https://docs.angularjs.org/guide/scope" target="_blank">AngularJS</a> binding variables.

#####AngularJS#####

        <!--HTML-->
        <div id="scheduler" dx-scheduler="options" dx-item-alias="showtime">
            <div data-options="dxTemplate: {name: 'popup-template'}">
                <div class="movie-tooltip" ng-init="movieData = getMovieById(showtime.movieId)">
                    <img ng-src="{{movieData.image}}" />
                    <div class="movie-title">Title:
                        <div ng-model="movieData.text" dx-text-box="{}"></div>
                    </div>
                    <div class="movie-info">
                        Year: <div ng-model="movieData.year" dx-date-box="{}">
                    </div>
                    <div class="movie-info">
                        Duration: <div ng-model="movieData.duration" dx-number-box="{}">
                    </div>
                </div>
            </div>
        </div>

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')