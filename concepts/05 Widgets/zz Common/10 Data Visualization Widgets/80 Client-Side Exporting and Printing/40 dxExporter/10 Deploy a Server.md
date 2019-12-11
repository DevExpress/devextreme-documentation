The **Exporter** widget can export any widget from the DevExtreme Data Visualization library into a PNG, PDF, SVG, JPEG or GIF file. In order to work, **Exporter** requires the PhantomJS WebKit. This WebKit allows you to use the client-server model where PhantomJS performs as a server. In this article, the **Exporter** basics are explained using a simple example where a single computer is used as the client and as the server.

Start by deploying the server that will process requests by following the steps below.

- Download the zip-archive with the version 1.9.X of [PhantomJS](https://phantomjs.org) and unpack it. Name the folder PhantomJS.

- Copy the **Exporter** folder to the PhantomJS folder. You can find the **Exporter** folder in the DevExtreme zip archive or in the folder where you have installed DevExtreme.

- Open the system command line and specify the directory with the **phantomjs.exe** file as the [current directory](https://en.wikipedia.org/wiki/Cd_(command)).

- Type the following line.	

		phantomjs Exporter/exporter-server.js 127.0.0.1 3003

	Here, *Exporter/exporter-server.js* refers to the script that implements the server logic. This script is supplied by DevExtreme. It is followed by the IP address that is assigned to your server and the number of the port that will be used for listening. Since the requests will be sent and received on the same machine in this example, the IP address corresponding to localhost is used.
If the command line responds with the *"OK, PhantomJS is ready."* message, the server is deployed successfully.

[note] It is necessary for the **phantomjs.exe** process to operate on the server during export. Therefore, do not close the PhantomJS console window until you have finished exporting your widget.