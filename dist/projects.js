// Edit project text and images here. Image paths are relative to dist/.
window.portfolioProjects = [
  {
    "title": "Spin Coating & Photolithography Standardization",
    "category": "HACKERFAB · SEMICONDUCTOR FABRICATION",
    "description": "Developed and standardized a photoresist spin-coating and lithography process for diced silicon. Systematically adjusted dispense, spin, bake, and handling parameters to improve resist uniformity and patterning repeatability, then documented the optimized process in a team SOP.",
    "result": "Approximately 70% fewer lithography failures; minimum feature size of approximately 2.5 µm achieved so far.",
    "roles": [
      "Researched the photoresist formulation and manufacturer’s technical data sheet to select spin-speed ranges for the target resist thickness.",
      "Ran test coatings to evaluate resist uniformity across diced silicon samples and refine the procedure.",
      "Standardized resist conditioning at room temperature to improve run-to-run repeatability.",
      "Defined a repeatable recipe, including acceleration ramp and target RPM.",
      "Tested multiple exposure settings to improve feature definition and resolution.",
      "Investigated possible sample-stage tilt and differences between commanded and actual exposure output. Diagnosis and correction of these inconsistencies remain ongoing."
    ],
    "methods": "DIY spin coater · DIY projection lithography · Optical microscopy",
    "images": [
      {
        "src": "assets/projects/project-2-2.jpg",
        "alt": "Optical micrograph of lithography test patterns with micrometre scale annotations",
        "caption": "Lithography test patterns and feature-size measurements."
      },
      {
        "src": "assets/projects/project-2-1.jpg",
        "alt": "Microscope image of a patterned silicon sample",
        "caption": "Patterned silicon sample under the optical microscope."
      }
    ]
  },
  {
    "title": "Powder Flow & Process Window Mitigation",
    "category": "FORMLABS · MATERIALS & PROCESS R&D",
    "description": "Investigated a powder additive introduced to improve flowability and found that it also reduced powder cohesion at elevated temperatures. Evaluated its potential to widen the thermal processing range for materials with narrow sintering windows or temperature-sensitive print defects.",
    "roles": [
      "Screened multiple additive concentrations for room-temperature flowability and elevated-temperature cohesion.",
      "Identified improved high-temperature powder behavior that could expand the usable SLS process window beyond what thermal analysis alone would suggest.",
      "Evaluated whether the wider processing range could address defects in materials unable to tolerate higher operating temperatures.",
      "Adjusted SLS parameters after additive incorporation to maintain mechanical properties and part performance.",
      "Conducted thermal-uniformity testing to verify minimal impact on temperature distribution during printing.",
      "Compared formulation, thermal, powder-flow, and mechanical results to determine practical additive levels and processing conditions."
    ],
    "methods": "SLS process parameter optimization · Powder-flow evaluation · Thermal-uniformity testing · Mechanical performance evaluation",
    "note": "Certain formulation details, concentrations, and processing conditions are omitted due to confidentiality obligations.",
    "images": [
      {
        "src": "assets/projects/project-3-1.jpg",
        "alt": "Dark polymer printed sample photographed on a work surface",
        "caption": "Printed sample from the powder-flow and processing investigation."
      }
    ]
  },
  {
    "title": "Custom Hydrogel Grinder for High-Throughput Assays",
    "category": "MECHANICAL PROTOTYPING · ASSAY DEVELOPMENT",
    "description": "Designed and prototyped a motorized hydrogel grinding system to replace manual syringe-based fragmentation for a biomedical assay.",
    "result": "70% reduction in average particle size. Processing time reduced from over one hour to less than five minutes.",
    "roles": [
      "Led mechanical design and prototyping through seven grinder-head geometries using SolidWorks and PLA 3D printing.",
      "Designed the grinder to fit 24-well plates precisely and minimize gel creep during rotation.",
      "Integrated a DC motor system and tested RPM ranges for effective shear force and fragmentation.",
      "Analyzed ground particles using microscopy and ImageJ Feret’s diameter measurements.",
      "Tuned performance using particle-size distribution and polydispersity feedback."
    ],
    "methods": "SolidWorks · PLA 3D printing · Motor control · Microscopy · ImageJ",
    "images": [
      {
        "src": "assets/projects/project-4-1.jpg",
        "alt": "CAD model of a hydrogel grinder head with radial blades",
        "caption": "Grinder-head geometry designed in SolidWorks."
      },
      {
        "src": "assets/projects/project-4-2.jpg",
        "alt": "Assembled DC motor and hydrogel grinder prototype on a laboratory bench",
        "caption": "Motorized grinder prototype."
      }
    ]
  },
  {
    "title": "Automated Particle Detection for Microgel Analysis",
    "category": "PYTHON · SCIENTIFIC IMAGE ANALYSIS",
    "description": "Developed a Python-based pipeline to automate hydrogel-fragment size analysis from microscope images. Replaced manual ImageJ measurements to reduce analysis time and improve reproducibility for high-throughput workflows.",
    "roles": [
      "Implemented an OpenCV image-processing script to identify and segment microgel particles.",
      "Measured particle size using Feret’s diameter and stored measurements for statistical analysis.",
      "Validated algorithm accuracy against manual ImageJ measurements.",
      "Tuned thresholding and filtering for varying gel brightness and contrast.",
      "Iteratively improved detection using Cytation 5 image feedback."
    ],
    "methods": "Python · OpenCV · Feret’s diameter · Cytation 5 microscopy · Excel · matplotlib",
    "note": "A TensorFlow model for potential machine-learning classification was planned but remains unfinished.",
    "images": [
      {
        "src": "assets/projects/project-5-1.png",
        "alt": "Microscope image showing small bright microgel particles against a dark background",
        "caption": "Microgel image used for particle-size analysis."
      },
      {
        "src": "assets/projects/project-5-2.png",
        "alt": "Microgel particle detection visualization with green particles against a dark background",
        "caption": "Particle detection visualization."
      }
    ]
  },
  {
    "title": "Triboelectric Nanogenerator",
    "category": "FUNCTIONAL PROTOTYPING · MECHANICAL OPTIMIZATION",
    "description": "Designed and fabricated a triboelectric nanogenerator (TENG) to harvest mechanical energy through contact electrification. Optimized material selection and surface contact through repeated design and test cycles.",
    "result": "252% increase in voltage output through iterative contact-interface refinement.",
    "roles": [
      "Designed and simulated the rotary fan, base, and contact interface in SolidWorks.",
      "Fabricated and assembled the generator using PLA components and aluminum, copper, Kapton, and Teflon contact materials.",
      "Refined material pairing and increased contact surface area to improve voltage output.",
      "Tested output using a multimeter and oscilloscope, recording peak voltages and waveform consistency.",
      "Troubleshot friction losses, plate misalignment, and inconsistent rotation."
    ],
    "methods": "SolidWorks CAD and simulation · Ultimaker Cura · PLA 3D printing · Contact material testing · Multimeter · Oscilloscope · Mechanical assembly",
    "images": [
      {
        "src": "assets/projects/project-7-1.jpg",
        "alt": "Handheld triboelectric nanogenerator prototype with a rotary fan and wired contact assembly",
        "caption": "Assembled rotary triboelectric nanogenerator prototype."
      }
    ]
  }
];
