# Multi-Agent Client-Side Programming

This project is designed to teach students about multi-agent programming using a "no-code" approach. Instead of writing traditional code, you will leverage **Skills**, **Model Context Protocol (MCP)**, and **Beads** to orchestrate intelligent agents using the Gemini CLI.

## Table of Contents
1. [Installation](#installation)
2. [Getting a Google API Key](#getting-a-google-api-key)
3. [Setting up Gemini CLI](#setting-up-gemini-cli)
4. [Using Gemini CLI as a Programming Assistant](#using-gemini-cli-as-a-programming-assistant)
5. [Multi-Agent Concepts: Skills, MCP, and Beads](#multi-agent-concepts-skills-mcp-and-beads)

---

## Installation

To get started, you need to install the Gemini CLI globally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Install Command
Run the following command in your terminal:

```bash
npm install -g @google/gemini-cli
```

---

## Getting a Google API Key

Gemini CLI requires a Google Gemini API key to function.

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account.
3. Click on **"Get API key"** in the sidebar.
4. Click **"Create API key"**.
5. Copy your API key and keep it secure.

---

## Setting up Gemini CLI

Once installed, you need to configure the CLI with your API key.

1. Open your terminal.
2. Run the initialization command:
   ```bash
   gemini login
   ```
3. Follow the prompts to paste your API key.

Alternatively, you can set an environment variable:
- **Windows (PowerShell):** `$env:GOOGLE_API_KEY="your_api_key_here"`
- **macOS/Linux:** `export GOOGLE_API_KEY="your_api_key_here"`

---

## Using Gemini CLI as a Programming Assistant

The Gemini CLI is your primary interface for interacting with multi-agent systems.

- **Start a session:** Just type `gemini` in your project folder.
- **Ask questions:** "How do I structure a multi-agent workflow?"
- **Execute tasks:** "Create a new skill that fetches weather data."
- **Code Analysis:** "Explain how the current memory management works."

---

## Multi-Agent Concepts: Skills, MCP, and Beads

### 1. Skills (No-Code Extensions)
Skills are encapsulated sets of instructions and tools that give your agents specific capabilities (e.g., searching the web, interacting with a database) without you having to write the underlying logic.

### 2. Model Context Protocol (MCP)
MCP allows different agents and tools to communicate using a standardized protocol, ensuring that context is shared seamlessly across the system.

### 3. Beads (Task Status & Memory Management)
**Beads** are a unique way to manage task status and long-term memory in this project.
- **Task Status:** Each "bead" represents a milestone or a step in a complex task. By tracking beads, you can see exactly where an agent is in its workflow.
- **Memory Management:** Beads act as persistent anchors for information. When an agent learns something important, it "strings a bead" into the project memory, making that information available for future steps or other agents.

---

## Getting Started with Students

1. **Clone this repository.**
2. **Configure your environment** as described above.
3. **Explore the `MEMORY.md`** file to see how beads are tracked.
4. **Use `gemini`** to start building your first multi-agent automation!
