In Angular and Vue, the nested component that configures the **${{optionName}}** option does not support event bindings and two-way property bindings. However, you can bind to the component's events and track changes in its properties.

Use the one-way property binding syntax to bind to events. To track property changes, implement the [onOptionChanged]({basewidgetpath}/Configuration/#onOptionChanged) event handler. You can access the name and value of the changed property within the handler. The following code demonstrates these solutions:
