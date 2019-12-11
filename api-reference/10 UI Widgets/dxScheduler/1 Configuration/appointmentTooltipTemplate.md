---
default: 'appointmentTooltip'
type: template
---
---
##### shortDescription
The template to be used for rendering an appointment tooltip.

##### param(appointmentData): object
The appointment object whose tooltip should be rendered.

##### param(contentElement): jQuery
An HTML element of the appointment tooltip to be rendered.

##### return: string|jQuery
A template name or a template container.

---
A binding context of an appointment tooltip template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object's fields directly. To access another binding context within an appointment tooltip template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment tooltip template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS#####

    <!--HTML-->
    <div id="scheduler" dx-scheduler="options" dx-item-alias="showtime">
        <div data-options="dxTemplate: {name: 'tooltip-template'}">
            <div class='movie-tooltip' ng-init="movieData = getMovieById(showtime.movieId)">
                <img ng-src="{{movieData.image}}" />
                <div class='movie-info'>
                    <div class='movie-title'>
                        {{movieData.text + ' (' + movieData.year + ')'}}
                    </div> 
                    <div>
                        {{'Director: ' + movieData.director}}
                    </div>
                    <div>
                        {{'Duration: ' + movieData.duration + ' minutes'}}
                    </div>
                </div><br />
                <div dx-button = "{
                    text: 'Edit details',
                    onClick: 'editDetails(showtime)'
                }"></div>
            </div>
        </div>
    </div>

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')