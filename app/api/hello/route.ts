
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAiApi from 'openai';
import CreateCompletionRequest from 'openai';

const openai = new OpenAiApi({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your environment variable is correctly set
});

type Data = {
  result?: string;
  error?: string;
};

export async function POST(request: Request) {
  try {
    const { reservationText, language } = await request.json();

    var prompt = "You will be provided with a sentence in English, and your task is to translate it into" + language + ". ";
    prompt += "If there are any numbers, ensure that they are translated into their equivalent in the language spelled out. For example, in English, 9 would be nine. " 
    prompt += "If you don't recognize the language, simply return the following: 'Sorry, unrecognizable language. Try again'";
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          "role": "system",
          "content": prompt
        },
        {
          "role": "user",
          "content": reservationText
        }
      ],
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1,
    });
    console.log(completion.choices[0]);
    return Response.json({ message: completion.choices[0].message})

    
  } catch (e) {
    console.log("Some kind of error occured: {} ", e);
    return Response.error();
  }
}
