---
name: beads-mcp-example
description: Demonstrates how to combine MCP tool usage (via local scripts) with the Beads memory system. Use when the user asks for an example of how the project architecture works or needs to see a simple multi-agent workflow.
---

# Beads & MCP Example Skill

This skill demonstrates the core workflow of the Multi-Agent Client-Side project. It uses a local script (simulating an MCP tool) and manages task state via **Beads**.

## The Workflow

When this skill is activated, follow these steps:

### 1. Initialize Task Bead
Before performing any action, add a new "Task Status Bead" to `MEMORY.md` to track this specific execution.
- Format: `[ ] Bead XXX: Run Example Greeting (In Progress)`
- *Replace XXX with the next sequential number.*

### 2. Execute MCP Script
Run the greeting script located at `scripts/greet.cjs`.
- Command: `node scripts/greet.cjs [User Name]`
- *If the user name is unknown, use "Explorer".*

### 3. Capture Knowledge Bead
After running the script, record what was learned as a "Knowledge Bead" in `MEMORY.md`.
- Format: `KB-XXX: Successfully ran the greeting script for [User Name] on [Date].`

### 4. Complete Task Bead
Update the Task Status Bead in `MEMORY.md` to marked as completed.
- Format: `[x] Bead XXX: Run Example Greeting (Completed)`

## Reference

- **Beads System:** Defined in `GEMINI.md`.
- **Memory File:** `MEMORY.md` in the root directory.
- **Greeting Script:** `scripts/greet.cjs` within this skill.

