import { NextResponse } from "next/server";
import { Mistral } from '@mistralai/mistralai';

const token = process.env.OPENAI_API_KEY;
const guidelines = require("./guidelines.json");

export async function POST(request) {
    const { prompt } = await request.json();
    const client = new Mistral({
        apiKey: token,
        serverURL: "https://models.github.ai/inference"
    });

    const response = await client.chat.complete({
        model: "mistral-ai/Codestral-2501",
        messages: [
            { role: "system", content: JSON.stringify(guidelines) },
            { role: "user", content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 2048,
        top_p: 0.1
    });

    const llmresponse = response.choices[0].message.content;
    return NextResponse.json({ llmresponse });
}