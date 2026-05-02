# Project Instructions: Multi-Agent Client-Side

## Overview
This project uses a multi-agent architecture where agents communicate via MCP and leverage Skills. Task progress and memory are managed through a system called **Beads**.

## The Beads System
When performing tasks in this repository, you must update `MEMORY.md` using the following conventions:

### Task Status Beads
- Every significant milestone must be recorded as a "Task Status Bead".
- Use the format: `[ ] Bead XXX: Description (Status)`.
- Update the status (e.g., `[x]` for completed) as you progress.

### Knowledge Beads
- When you learn something specific about the project's environment or requirements, record it as a "Knowledge Bead".
- Use the format: `KB-XXX: Fact/Information`.

## Skills & MCP
- Prefer using available skills for any complex operations.
- Ensure context is passed clearly between different agents if multiple agents are invoked.
