Before building your application, ensure you have:

- Google Cloud Platform (GCP) account  
Sign up at [Google Cloud Console](http://console.cloud.google.com/) if you do not have an account.

- Dialogflow CX agent  
You need to [create](https://cloud.google.com/dialogflow/cx/docs/concept/agent#create) and configure an agent for Dialogflow.

Authenticate with Dialogflow through a Service Account and key from Google Cloud:

Create a service account and key:
1. Go to Google Cloud Console -> IAM & Admin -> Service Accounts.
2. Create a service account or use an existing one.
3. Generate a key (JSON) for this account.
4. Save the JSON file.

Place the key file `your_json_key.json` in the project root directory or the path specified in your code. Ensure the key path matches the parameter in `dialogflow.js`:

    const keyFilePath = path.join(__dirname, './your_json_key.json');

Specify project ID (found in the agent settings in GCP):

    const projectId = 'your-project-id';

#####See Also#####
- [Dialogflow documentation](https://cloud.google.com/dialogflow/docs) 
- [Dialogflow ES documentation](https://cloud.google.com/dialogflow/es/docs) 