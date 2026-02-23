---

##### jQuery

Create a jQuery application and [install DevExtreme](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/').

##### Angular

Create an Angular application and [install DevExtreme](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/').

##### Vue

Create a Vue application and [install DevExtreme](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/').

##### React

Create a React application and [install DevExtreme](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/').

---

Implement a `getAIResponse(text)` function to query the Dialogflow server for responses.

---

##### jQuery 

    async function getAIResponse(text) {
        const response = await fetch('http://localhost:3000/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: text, sessionId }),
        });
        const data = await response.json();
        return data.response;
    }

##### Angular

    <!--TypeScript-->
    async getAIResponse(text: string | undefined): Promise<string> {
        let id = this.sessionId;
        const response = await fetch('http://localhost:3000/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: text, sessionId: id }),
        });
        const data: { response: string } = await response.json();
        return data.response;
    }

##### Vue

    <!--TypeScript-->
    const getAIResponse = async(text: string | undefined) => {
        let id = sessionId;
        const response = await fetch('http://localhost:3000/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: text, sessionId: id }),
        });
        const data: { response: string } = await response.json();
        return data.response;
    };

##### React

    <!--TypeScript-->
     async getAIResponse(text: string | undefined): Promise<string> {
        let id = sessionId;
        const response = await fetch('http://localhost:3000/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: text, sessionId: id }),
        });
        const data: { response: string } = await response.json();
        return data.response;
    }

---
