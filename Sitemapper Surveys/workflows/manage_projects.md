Workflow: Managing the Geomatic Project Portfolio
Location: workflows/manage_projects.md

Objective
To add or update high-precision project case studies within the projects/ directory and ensure they are correctly linked on the projects.html overview page.

Required Inputs
Project Title: (e.g., "Topographic Survey – Warehouse Birmingham").

Location: Specific UK region.

Technical Data: Equipment used (GNSS, Total Station) and deliverables provided (.DWG, .PDF).

Visual Assets: Images/Scans to be placed in assets/images/projects/.

Execution Steps
File Creation: * Create a new HTML file in /projects/ using the slugified title (e.g., topographic-survey-birmingham.html).

Apply the "Project Single" layout from project-single.html.

Asset Management:

Verify images are optimized for web (under 500KB) and stored in assets/images/projects/.

Cross-Linking:

Update the "Recent Projects" grid in index.html and the main list in projects.html with a new card.

Verification:

Ensure the "Request a Quote" button on the new page points correctly to contact.html.