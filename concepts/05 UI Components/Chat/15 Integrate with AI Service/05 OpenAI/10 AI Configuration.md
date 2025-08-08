Create an instance of OpenAI:

---

##### jQuery

    const chatService = new OpenAI({ 
        dangerouslyAllowBrowser: true, 
        apiKey: "OPENAI_API_KEY", // insert your OpenAI API key
    }); 

##### Angular

    <!--TypeScript-->
    import { OpenAI } from "openai";

    export class AppService {
        chatService: OpenAI;
        OpenAIConfig = {
            dangerouslyAllowBrowser: true,
            apiKey: "OPENAI_API_KEY", // insert your OpenAI API key
        };
        constructor() {
            this.chatService = new OpenAI(this.OpenAIConfig);
        }
    }

##### Vue

    <!--TypeScript-->
    import { OpenAI } from 'openai';

    const OpenAIConfig = {
        dangerouslyAllowBrowser: true,
        apiKey: 'OPEN_AI_KEY', // insert your OpenAI API key
    };

    const chatService = new OpenAI(OpenAIConfig);

##### React

     <!--TypeScript-->
    import { OpenAI } from "openai";

    class AppService {
        chatService: OpenAI;
        OpenAIConfig = {
            dangerouslyAllowBrowser: true,
            apiKey: "OPENAI_API_KEY", // insert your OpenAI API key
        };
        constructor() {
            this.chatService = new OpenAI(this.OpenAIConfig);
        }
    }
   
---

[important] `dangerouslyAllowBrowser: true` enables browser-side requests. This exposes the API key. For production, route requests through your backend.

Implement a `getAIResponse(messages)` function to call the OpenAI API for responses. Here, the incoming argument `messages` is an array of `{ role: "user" | "assistant" | "system"; content: string }` objects.

---

##### jQuery 

    async function getAIResponse(messages) {
        const params = {
            messages,
            model: 'gpt-4o-mini',
        };
        const response = await chatService.chat.completions.create(params);
        return response.choices[0].message?.content;
    }

##### Angular

    <!--TypeScript-->
    async getAIResponse(messages: Array<{ role: "user" | "assistant" | "system"; content: string }>) {
        const params = {
        messages: messages.map(msg => ({
            role: msg.role,
            content: msg.content
        })),
        model: 'gpt-4o-mini',
        };
        const response = await this.chatService.chat.completions.create(params);
        const data = { choices: response.choices };
        return data.choices[0].message?.content;
    }

##### Vue

    <!--TypeScript-->
    const getAIResponse = async(messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>) => {
        const params = {
        messages: messages.map(msg => ({
            role: msg.role,
            content: msg.content
        })),
        model: 'gpt-4o-mini'
        };

        const response = await chatService.chat.completions.create(params);
        return response.choices[0].message?.content;
    };

##### React

    <!--TypeScript-->
    async getAIResponse(messages: { role: 'user' | 'assistant' | 'system'; content: string }[]): Promise<any> {
        const params = {
        messages: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
        })),
        model: 'gpt-4o-mini',
        };

        const response = await this.chatService.chat.completions.create(params);
        const data = { choices: response.choices };
        return data.choices[0].message?.content;
    }

---
