RULE_NAME: AUTO_LEARNING_PROMPT_UPDATER

OBJECTIVE:
Maintain a continuously updated machine-readable context file that represents the current state of the project.

TARGET_FILE:
/autoLearningPrompt.txt

TRIGGER:
After ANY command execution that modifies, creates, or restructures code, architecture, rules, or patterns.

BEHAVIOR:

1. ANALYZE_CHANGES
- Identify what changed in the project (files, structure, logic, patterns).
- Ignore trivial changes (formatting, spacing, comments with no impact).

2. EXTRACT_KNOWLEDGE
Update only relevant high-value information:
- Project architecture (folders, layers, responsibilities)
- Core patterns and conventions
- Business rules and logic flows
- Dependencies and integrations
- Naming conventions
- Constraints and limitations
- Reusable components and abstractions

3. CONSOLIDATE (CRITICAL)
- DO NOT append blindly.
- Rewrite the file to reflect the CURRENT STATE.
- Remove outdated or conflicting information.
- Merge duplicated knowledge.
- Keep it minimal but complete.

4. FORMAT (STRICT)
- Plain text only.
- No explanations for humans.
- No decorative language.
- Use structured sections:

[PROJECT_OVERVIEW]
[ARCHITECTURE]
[PATTERNS]
[BUSINESS_RULES]
[CONSTRAINTS]
[DEPENDENCIES]

5. OUTPUT_RULE
- Always overwrite the file with the updated version.
- Never skip update if meaningful changes occurred.

ANTI_RULES:
- Do not log history.
- Do not explain what was done.
- Do not include low-level trivial code details.
- Do not repeat information.