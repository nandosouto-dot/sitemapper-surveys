---
name: Contact
description: Guidelines and structures for the company's contact and lead generation flows.
---

# Contact & File Upload

This skill outlines how to implement contact endpoints, forms, and client lead collection for the surveying company.
Guidelines for lead generation and multi-file attachment systems.

## Primary Directives

- **Frictionless Entry**: Ensure the contact form requires minimal effort.
- **Service-Specific Flow**: Allow clients to specify what type of surveying service they need.
- **Professionalism**: Maintain a high-end, reliable tone across all contact touchpoints.

<details>
<summary>Form Fields & Interaction Specification (Click to expand)</summary>

Required fields for the contact form:
1. **Name** (Full Name)
2. **Email** (Validated format)
3. **Phone Number** (Optional but recommended)
4. **Service Interest**: Dropdown selection restricted to:
    - Land Topographical Surveying
    - Setting Out Engineering
    - Measured Building Surveys
    - 3D Laser Scanning (BIM)
    - Structural Monitoring
    - Volumetric Calculation
    - Others
5. **Message / Project Details** Textarea for site-specific notes.
### Interactive File Manager (Drag-and-Drop)
Implement a modern file staging area with the following functional requirements:
- **Drop Zone**: A dashed-border frame with active state changes (e.g., color shift, slight scale-up) on `dragover`.
- **File List Persistence**: A dynamic list that appears below the drop zone upon file selection.
- **Client Control**: Each staged file must include a **Delete/Remove** action (trash icon) to allow the user to curate the list before submission.
- **Metadata Display**: Show File Name and File Size (formatted to MB) for each item.
- **Validation**: Restrict to `.pdf`, `.dwg`, `.dxf`, and standard image formats. Max total payload: 25MB.
</details>

<details>
<summary>Form Fields & Interaction Specification (Click to expand)</summary>

- **Instant Acknowledgment**: Trigger a UI banner or confirmation modal upon successful `200 OK` response.
- **Submission Integrity**: Use "Loading" states and disable the submit button to prevent duplicate lead creation.
- **CRM Integration**: Ensure the payload (including file pointers or Base64 strings) hooks into the designated lead management system or email forwarding endpoint.

</details>
