import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';


dotenv.config();

// Fetch your API key from the environment variables
const apiKey = process.env.GOOGLE_AI_API_KEY;

if (!apiKey) {
    console.error("API Key is missing! Please set your GOOGLE_AI_API_KEY in the .env file.");
    process.exit(1);
}

// Initialize the GoogleGenerativeAI with your API key
const genAI = new GoogleGenerativeAI(apiKey);

// Function to call the Gemini model and generate a Docker/Kubernetes command
const getDockerCommand = async (query) => {
    try {
        // Set the model to model defined in .env
        const model = genAI.getGenerativeModel({ model: process.env.GOOGLE_AI_MODEL });

        // Create the prompt for the model based on the user input
        const prompt = `You are a helpful assistant that converts natural language queries into Docker commands. Here is the user request: '${query}'. Please provide the most relevant Docker commands based on the query. For any reasons, DO NOT provide explanations, just the commands. The result MUST be in plain text and NOT use markdown.`;

        // Request the model to generate content
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text.trim(); // Return the command(s)
    } catch (error) {
        console.error("Error generating command:", error);
        return "Unable to process your request.";
    }
};

// Main function to run the command-line application
const runCLI = async () => {
    // Get the query from command-line arguments (argv)
    const query = process.argv.slice(2).join(' '); // Combine all arguments into a single string

    if (!query) {
        console.log("Please provide a question.");
        process.exit(1);
    }

    // Get the Docker/Kubernetes command
    const dockerCommand = await getDockerCommand(query);

    // Display the command to the user
    console.log(dockerCommand);
};

// Run the CLI app
runCLI();
