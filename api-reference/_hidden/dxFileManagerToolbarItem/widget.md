[note]

- Import the specified UI component's module when using [DevExtreme modules](/concepts/Common/Modularity '/Documentation/Guide/Common/Modularity/'). 

- You can specify the **widget** option for custom toolbar items only.

[/note]

When using <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Controls</a> or <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Controls</a>, configure this property with a lambda expression as follows:

    <!--Razor C#-->@(Html.DevExtreme().FileManager()
        .Toolbar(t => {
            t.Items(i => {
                i.Add().Widget(w => w
                    // Instead of Button here you can use any other UI component
                    .Button()
                    .Text("Back")
                );
            })
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().FileManager() _
        .Toolbar(Sub(t)
            t.Items(Sub(i)
                i.Add().Widget(Function(w)
                    ' Instead of Button here you can use any other UI component
                    Return w.Button().Text("Back")
                End Function)
            End Sub)
        End Sub)
    )
