---
default: 'instantly'
acceptValues: 'instantly' | 'useButtons' | 'useForm'
type: string
---
---
##### shortDescription
Specifies how the widget uploads files.

---
The option accepts the following values.

- **instantly**  
 Starts uploading instantly as files are selected.

- **useButtons**  
 Starts uploading when a user clicks the "Upload" button.

- **useForm**  
 Uploads the specified files when the **submit** button of the current [form](https://www.w3schools.com/htmL/html_forms.asp) is clicked. In this case, the **FileUploader** widget should be enclosed in the **form** element.