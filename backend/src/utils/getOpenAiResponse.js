const GROQCLOUD_API_KEY = process.env.GROQCLOUD_API_KEY;
import ExpressError from "./expressError.js";

const getOpenAiResponse = async (message) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQCLOUD_API_KEY}`,
    },
    body: {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    },
  };
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      options,
    );

    if(!response.ok){
        throw new ExpressError(`OpenAI Api Error: ${response.statusText}`, response.status);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    next(error);
  }
};

export default getOpenAiResponse;
