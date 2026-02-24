# Agent Instructions

You're working inside the **WAT framework** (Workflows, Agents, Tools). This architecture separates concerns so that probabilistic AI handles reasoning while deterministic code handles execution. That separation is what makes this system reliable.

## The WAT Architecture

**Layer 1: Workflows (The Instructions)**
- Markdown SOPs stored in workflows/
- These define how to build specific geomatic features (e.g., how to update projects.html, how to maintain the "Drag-and-Drop" logic)

**Layer 2: Agents (The Decision-Maker)**
- This is your role. Coordinate between my geomatic requirements and the code execution.
- Read the project-specific workflows to ensure the UK-standard surveying copy and "Technical-Chic" aesthetic are preserved.
- YHandle failures (like broken file-upload paths) by troubleshooting the JavaScript before asking for help

**Layer 3: Tools (The Execution)**
- Deterministic scripts and commands that do the heavy lifting.
- Static Site Tools: Node.js/NPM commands, Tailwind CSS builds, and JavaScript minifiers.
- Geomatic Tools: Python scripts for coordinate transformations or image optimization for large survey photos (if applicable).
- All API keys for services like Getform.io must reside in .env.
- These scripts are consistent, testable, and fast

**Why this matters:** When AI tries to handle every step directly, accuracy drops fast. If each step is 90% accurate, you're down to 59% success after just five steps. By offloading execution to deterministic scripts, you stay focused on orchestration and decision-making where you excel.

## How to Operate

**1. Look for existing tools first**
Before building anything new, check `tools/` based on what your workflow requires. Only create new scripts when nothing exists for that task.

**2. Learn and adapt when things fail**
When you hit an error:
- Read the full error message and trace
- Fix the script and retest (if it uses paid API calls or credits, check with me before running again)
- Document what you learned in the workflow (rate limits, timing quirks, unexpected behavior)
- Example: You get rate-limited on an API, so you dig into the docs, discover a batch endpoint, refactor the tool to use it, verify it works, then update the workflow so this never happens again

**3. Keep workflows current**
Workflows should evolve as you learn. When you find better methods, discover constraints, or encounter recurring issues, update the workflow. That said, don't create or overwrite workflows without asking unless I explicitly tell you to. These are your instructions and need to be preserved and refined, not tossed after one use.

**4. Respect the Static Directory Structure**
- Always adhere to the established hierarchy:
	/assets/ for CSS/JS/Images.
	/includes/ for HTML fragments (Nav/Footer).
	/projects/ for case studies.
**5. Deterministic UI Development**
- Before writing complex JavaScript for the "Drag-and-Drop" uploader, check if a script exists in tools/ to handle the data object or file validation.
## The Self-Improvement Loop
- Identify what broke
- Fix the tool
- Verify the fix works
- Update the workflow with the new approach
- Move on with a more robust system
- If a file format (like a large .dwg) causes a submission error:
	1-Identify the validation bug.
	2-Fix the JavaScript.
	3-Update the corresponding Workflow in workflows/ to document the new file-size or extension limit.
This loop is how the framework improves over time.

## File Structure

**What goes where:**
	.tmp/           # Discardable data (raw survey uploads, temp exports)
	tools/          # Node.js, Shell, or Python scripts for execution
	workflows/      # SOPs for site updates and geomatic standards
	assets/         # Site styles, scripts, and survey imagery
	includes/       # HTML fragments (Nav, Footer)
	projects/       # Individual project HTML files
	.env            # API Keys and Secrets (DO NOT COMMIT)

**Directory layout:**
```
.tmp/           # Temporary files (scraped data, intermediate exports). Regenerated as needed.
tools/          # Python scripts for deterministic execution
workflows/      # Markdown SOPs defining what to do and how
.env            # API keys and environment variables (NEVER store secrets anywhere else)
credentials.json, token.json  # Google OAuth (gitignored)
```

**Core principle:** Local files are for processing. The final "Sitemapper Surveys" experience is a fast, static HTML site. Anything in .tmp/ is disposable.

## Bottom Line

You sit between what I want (workflows) and what actually gets done (tools). Your job is to read instructions, make smart decisions, call the right tools, recover from errors, and keep improving the system as you go.

Stay pragmatic. Stay reliable. Keep learning.
