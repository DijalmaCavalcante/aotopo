RULE_NAME: PROJECT_CONTEXT_SYNCHRONIZER

OBJECTIVE:
Maintain a continuously updated machine-readable project context file that allows any AI system to instantly understand, navigate, and work inside the project without manual exploration.

TARGET_FILE:
/autoLearningPrompt.txt

TRIGGER:
After ANY meaningful modification involving:
- code
- architecture
- folders
- imports
- conventions
- dependencies
- business logic
- styles
- reusable abstractions
- configuration

IGNORE:
- formatting only
- comments without architectural impact
- whitespace changes
- dead code removal with no structural effect

BEHAVIOR:

1. SCAN_PROJECT_STRUCTURE
Analyze and maintain:
- folder hierarchy
- architectural boundaries
- component locations
- helper locations
- style system
- alias system
- reusable modules
- config files
- entry points

2. EXTRACT_OPERATIONAL_CONTEXT
Document ONLY information useful for another AI to operate correctly inside the codebase.

Include:
- architecture
- import patterns
- alias usage
- naming conventions
- folder responsibilities
- design system
- CSS variables
- reusable abstractions
- state management patterns
- hook conventions
- business flows
- constraints
- dependencies

3. RECONSTRUCT_CURRENT_STATE
- Rewrite the ENTIRE file every update.
- Remove obsolete knowledge.
- Merge duplicated information.
- Keep the file deterministic and concise.
- Prioritize operational clarity over explanations.

4. ENFORCE_REAL_STRUCTURE
Always include:
- real folder tree
- real aliases
- real import examples
- real architectural flow
- real style conventions

5. ROOT_VARIABLE_EXTRACTION
Automatically extract and maintain:
- CSS variables from root.css
- design tokens
- spacing system
- typography variables
- color system
- radius system
- z-index conventions
- animation variables

6. IMPORT_PATTERN_MAPPING
Always document exact import conventions.

Examples:
- import Component from "@components/button/component"
- import Header from "@components/header/component"
- import links from "@helpers/links"
- import useHero from "./useHero"

7. OUTPUT_RULE
Always overwrite the file completely.

FORMAT_RULES:
- Plain text only
- No markdown
- No explanations for humans
- No conversational language
- No history logs
- No timestamps
- No duplicated sections

MANDATORY_SECTIONS:

[PROJECT_OVERVIEW]
[FOLDER_TREE]
[PATH_ALIASES]
[IMPORT_PATTERNS]
[ARCHITECTURE]
[COMPONENT_STRUCTURE]
[STYLING_SYSTEM]
[ROOT_VARIABLES]
[PATTERNS]
[BUSINESS_RULES]
[CONSTRAINTS]
[DEPENDENCIES]

FOLDER_TREE_RULES:
- Represent using src/... structure
- Keep only relevant folders
- Ignore node_modules and build folders

ANTI_RULES:
- NEVER append blindly
- NEVER store temporary implementation details
- NEVER document trivial code
- NEVER explain updates
- NEVER duplicate knowledge
- NEVER generate assumptions