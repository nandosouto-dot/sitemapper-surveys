---
name: Portfolio
description: Guidelines for managing and displaying surveying project case studies.
---

# Portfolio

This skill document provides instructions for presenting the company's past surveying projects. It uses progressive disclosure to first state core principles, then dive into implementation details.

## Core Principles

- **Visual Evidence**: Every project must feature high-resolution imagery of surveyors on-site or high-quality CAD/BIM deliverables.
- **Sector Categorisation**: Projects must be tagged with their respective industry (e.g., Infrastructure & Highways, Heritage, Arts & Leisure).
- **Technical Specifications**: Clearly state the equipment used (e.g., Leica Total Stations, 3D Laser Scanners) and the accuracy achieved.

<details>
<summary>Portfolio Item Structure (Click to expand)</summary>

Every portfolio entry should include:
1. **Title**: The name and location of the project.
2. **Challenge**: The primary surveying obstacle.
3. **Solution**: The techniques and technologies used (e.g., RTK GPS, terrestrial laser scanning).
</details>

<details>
<summary>Component Design Guidelines (Click to expand)</summary>

When adding a new project to `project.json`, include:
1. **Title**: Concise project name (e.g., "Setting out for 3 dwellings in Sevenoaks").
2. **Sector**: One of the predefined industry sectors.
3. **Services Provided**: List of services from `Our Services/SKILL.md`.
4. **The Challenge**: A brief description of site constraints (e.g., "Steep topography," "Restricted access").
5. **The Solution**: How our geomatic expertise solved the client's problem.
</details>

<details>
<summary>Portfolio Visual Pattern (Click to expand)</summary>

### Card Layout
- **Container**: Use the `relative` aspect-ratio box for the background site image.
- **Overlay**: Use a `white/90` or `blue-900/80` (translucent) content box for text.
- **Interaction**: 
  - **Normal State**: Display Project Title and Sector.
  - **Hover State**: Expand to reveal "Services Provided" and "The Solution" text.
  - **Click State**: Route the user to the full case study page.
</details>

## Quality Standards

- **Terminology**: Use British English (e.g., "Setting Out," "Borough," "Meters").
- **Privacy**: Redact sensitive client details or precise residential addresses unless explicit permission is granted.
- **Accuracy Verification**: All volumetric or monitoring data must be double-checked against site records before publication.