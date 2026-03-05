export interface Project {
    id: number;
    title: string;
    sector: string;
    services: string[];
    challenge: string;
    solution: string;
    featured: boolean;
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Topographical Survey for Residential Development in Sevenoaks",
        sector: "Construction & Civil Engineering",
        services: ["Land Topographical Surveying"],
        challenge: "Steep topography with dense vegetation and limited access routes across a 2-hectare greenfield site.",
        solution: "Deployed RTK GNSS combined with robotic total station traversal to achieve ±10mm accuracy, producing a comprehensive 3D terrain model for the architect's design phase.",
        featured: true,
        image: "/projects/project-1.jpg",
    },
    {
        id: 2,
        title: "Setting Out for Commercial Warehouse in Dartford",
        sector: "Infrastructure & Highways",
        services: ["Setting Out Engineering"],
        challenge: "Complex structural grid requiring sub-5mm positional accuracy across a 15,000m² footprint with active adjacent construction.",
        solution: "Established a precise control network using Leica TS16 total stations, setting out 200+ gridlines and pile positions over a 3-week programme.",
        featured: true,
        image: "/projects/project-2.jpg",
    },
    {
        id: 3,
        title: "Heritage Measured Building Survey – Grade II Listed Manor",
        sector: "Heritage & Conservation",
        services: ["Measured Building Surveys", "3D Laser Scanning (BIM)"],
        challenge: "Recording a 17th-century manor house with irregular geometries, limited internal lighting, and strict conservation requirements.",
        solution: "Combined Leica RTC360 3D laser scanning with hand-measured details to produce accurate floor plans, elevations, and sections to RICS Level 3 standard.",
        featured: true,
        image: "/projects/project-3.jpg",
    },
    {
        id: 4,
        title: "Structural Monitoring for TBM Tunnelling – Crossrail Adjacency",
        sector: "Infrastructure & Highways",
        services: ["Structural Monitoring"],
        challenge: "Monitor settlement and lateral displacement of a Victorian terrace within the zone of influence of a tunnel-boring machine.",
        solution: "Installed automated prism monitoring with hourly epochs, feeding real-time displacement data to the project's monitoring dashboard with amber/red alert thresholds.",
        featured: false,
        image: "/projects/project-4.jpg",
    },
    {
        id: 5,
        title: "Volumetric Stockpile Survey – Aggregates Depot in Medway",
        sector: "Construction & Civil Engineering",
        services: ["Volumetric Calculation"],
        challenge: "Monthly volume reconciliation of 12 aggregate stockpiles across a congested working yard with heavy plant movements.",
        solution: "Used drone photogrammetry to rapidly capture stockpile surfaces, computing cut/fill volumes against baseline surveys to within ±2% accuracy.",
        featured: false,
        image: "/projects/project-5.jpg",
    },
    {
        id: 6,
        title: "Scan-to-BIM for Hospital Refurbishment in Bromley",
        sector: "Arts & Leisure",
        services: ["3D Laser Scanning (BIM)", "Measured Building Surveys"],
        challenge: "Capture existing MEP services and structural layout across three floors of an operational hospital with minimal disruption.",
        solution: "Performed overnight 3D laser scanning sessions, producing a LOD 300 Revit model for the M&E contractor's clash detection workflow.",
        featured: true,
        image: "/projects/project-6.jpg",
    },
];
