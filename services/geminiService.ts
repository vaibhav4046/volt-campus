import { GoogleGenAI } from "@google/genai";

const VOLTCAMPUS_SYSTEM_INSTRUCTION = `
You are "VoltBot", the helpful AI assistant for VoltCampus.
VoltCampus is an electric micro-mobility solution for university campuses in India.

Your knowledge base:
1. Pricing:
   - Pay-Per-Use: ₹20 Base Unlock Fee + ₹3 Per Minute.
   - Subscription: "Go Unlimited" Monthly Pass for ₹999.
2. Safety & Compliance:
   - Speed is capped at 25km/h via GPS.
   - Geo-fencing requires parking in designated Dock Zones only.
   - Helmets are recommended. One rider per scooter.
3. Values:
   - Saves up to 45 minutes daily walking time.
   - 100% Electric, Zero Emissions.
4. Partners:
   - Partnered with and incubated by Christ Incubation.

Be concise, friendly, and helpful. Do not make up facts outside this context. 
If asked about app download, say "You can download the app via the buttons in the main menu."
`;

export const sendMessageToGemini = async (
  history: { role: string; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm sorry, I'm currently offline (API Key missing). Please check the disclaimer.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Construct the prompt history for context
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: VOLTCAMPUS_SYSTEM_INSTRUCTION,
      },
      history: chatHistory
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "I didn't quite catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the network right now. Please try again later.";
  }
};