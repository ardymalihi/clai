# AI-Powered Docker/Kubernetes Command Generator

This is a command-line application that utilizes **Google Generative AI** to generate **Docker** and **Kubernetes** commands based on natural language queries.

## Features
- Converts natural language queries into Docker/Kubernetes commands.
- Uses **Google Generative AI (Gemini)** to generate responses.
- No explanations, just the plain command output.

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher recommended)
- **npm**

## Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add your Google AI API key:
   ```sh
   GOOGLE_AI_API_KEY=your-api-key-here
   GOOGLE_AI_MODEL=gemini-pro
   ```

## Usage
Run the command-line tool using:
```sh
node clai.js "<your natural language query>"
```

### Examples
#### Example 1: Mounting a local directory in an Nginx container
```sh
node clai.js "how to use volume from my local user/username when creating an Nginx container"
```
**Output:**
```sh
docker run --name nginx-container -v /home/username:/usr/share/nginx/html -d nginx
```

#### Example 2: Using a volume from the current directory
```sh
node clai.js "how to use volume from my current directory when creating an Nginx container"
```
**Output:**
```sh
docker run -d -v $(pwd):/usr/share/nginx/html nginx
```

#### Example 3: Viewing a deployed Kubernetes YAML configuration
```sh
node clai.js "how to see my deployment YAML content that has been already deployed"
```
**Output:**
```sh
kubectl get deployment <deployment-name> -o yaml
```

## Error Handling
If you encounter an error like **API Key is missing**, ensure that:
- The `.env` file is correctly set up.
- The API key is valid and has access to Google Generative AI.

## License
This project is licensed under the **MIT License**.

## Contribution
Feel free to fork this repository, create a branch, and submit a PR!

---

Happy coding! 🚀

