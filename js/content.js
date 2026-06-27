/* ===========================================================
   CONTENT.JS — EDIT THIS FILE TO UPDATE YOUR SITE
   ---------------------------------------------------------
   Everything you want to change about your portfolio lives
   here: your name, tagline, bio, and the tabs (Research,
   Activities, Awards, Education). You generally never need
   to touch index.html, style.css, or main.js.

   Blog posts are NOT edited here — use the "New Post" button
   on the Blog tab itself, like a Medium-style editor. Posts
   are saved in your browser automatically.

   After editing this file, save it and refresh the page (or
   push to GitHub if deployed) to see your changes.
   =========================================================== */

window.SITE_CONTENT = {

  // ---------- IDENTITY ----------
  name: "Venika",
  tagline: "AI & Medicine — Research Log",
  location: "Round Rock, TX",
  focusArea: "Computational Oncology",
  email: "venika.kakarla2027@gmail.com",
  github: "https://github.com/Lucky405",
  linkedin: "https://www.linkedin.com/in/venika-kakarla-60b34727a/",

  // ---------- HERO ----------
  heroIntro:
    "I'm a high school researcher building machine learning models that decode cancer biology — from predicting how mutated proteins bind DNA, to designing small molecules that block tumor-recurrence pathways. This is my lab notebook, made public.",

  // ---------- ABOUT TAB ----------
  about: {
    paragraphs: [
      "Hi — I'm <strong>Venika Kakarla</strong>, a student researcher working at the intersection of artificial intelligence and cancer biology. My work lives mostly in hepatocellular carcinoma (HCC, or liver cancer) — I'm interested in the gap between the molecular data we already have and the treatment decisions that data could be informing, if it were modeled the right way.",
      "I currently do computational research with the <strong>Dhanasekaran Lab</strong> at Stanford School of Medicine, where I work on liver cancer datasets alongside researchers and clinicians. Independently, I've built generative and predictive models — a graph neural network for protein-DNA binding, and a dual-inhibition drug discovery model for HCC recurrence pathways — that have placed at science fairs and been recognized nationally.",
      "Outside the lab, I run a tutoring company I founded, help lead operations for a 1,700+ member AI community in Austin, and co-lead two science clubs at my high school. I think the best research explains itself clearly enough that a stranger could follow the logic — that's what I try to do here."
    ],
    skills: [
      "Python", "PyTorch", "TensorFlow",
      "Cell Culture & IHC", "Swift", "R"
    ]
  },

  // ---------- RESEARCH TAB ----------
  research: [
    {
      title: "Liver Cancer Vascular & Immune Mapping",
      org: "Stanford School of Medicine — Dhanasekaran Lab",
      period: "Jun 2025 — Present",
      role: "ML & Data Researcher",
      summary:
        "Leading ML efforts to visualize circulatory and immune-cell patterns across 1.4 million cells in hepatocellular carcinoma tissue, uncovering vascular and patient-level structure invisible to manual review.",
      details: [
        "Mapped microvessel density relative to immune-cell distribution across more than 100 tissue regions using spatial statistics (Ripley's L, Voronoi tessellation, Moran's I).",
        "Applied dimensionality reduction (t-SNE, UMAP) and clustering (DBSCAN, cellular neighborhood analysis) to identify recurring spatial neighborhoods linked to patient outcomes.",
        "Contributed to wet-lab procedures (IHC, cell culture) to ground computational findings in lab-verified biology.",
        "Work is in preparation for publication and lab co-authorship."
      ],
      tags: ["Spatial Biology", "CODEX Imaging", "Python", "R"],
      status: "Ongoing"
    },
    {
      title: "PD-L1 / TGFBR1 Dual-Inhibition Generative Model",
      org: "Independent Research, consulted with Dhanasekaran Lab",
      period: "Nov 2024 — Feb 2025",
      role: "Lead Researcher",
      summary:
        "Designed a generative drug-discovery model to find small molecules that block two pathways — PD-L1 and TGFBR1 — both implicated in HCC recurrence and minimal residual disease.",
      details: [
        "Combined a graph-based variational autoencoder (GAT-VAE) with a fine-tuned molecular language model (ChemBERTa) to generate and score candidate inhibitors.",
        "Trained on a dataset of roughly 18,000 proteins and generated two validated, potential dual-pathway inhibitors.",
        "Placed 4th in Translational Medical Sciences at the Austin Science and Engineering Fair (GARSEF); manuscript in preparation for potential AASLD submission."
      ],
      tags: ["GAT-VAE", "ChemBERTa", "Drug Discovery", "Generative AI"],
      status: "Complete"
    },
    {
      title: "p53–CDKN1A Mutation Binding Model",
      org: "Independent Research, mentored by Dhanasekaran Lab",
      period: "Nov 2024 — Feb 2025",
      role: "Lead Researcher",
      summary:
        "Built a graph neural network to predict how p53 mutations affect DNA-binding to CDKN1A — a key tumor-suppressor interaction in cancer — replacing slow physical simulation with a fast, learned model.",
      details: [
        "Achieved 91% accuracy modeling molecular binding behavior across mutation variants.",
        "Estimated to save roughly 2,500 hours of computation versus standard structural simulation methods.",
        "Surfaced novel structural insights, including interacting loop regions and especially destabilizing ('fatal') mutations.",
        "Placed 3rd at GARSEF, named a National STEM Festival finalist, invited speaker at AIMUG, and commended by MIT THINK (top 10% of 1,092 applicants)."
      ],
      tags: ["Graph Neural Networks", "Structural Biology", "PyTorch"],
      status: "Complete"
    },
    {
      title: "PD-L1–TGFBR1 Pathway Extension (BioML Society)",
      org: "BioML Society, in consultation with a UT Austin researcher",
      period: "Nov 2025 — Jan 2026",
      role: "Research Student",
      summary:
        "Extended the dual-inhibition pathway work specifically toward cancer stem cells (CSCs) in HCC, under remote mentorship from a UT Austin researcher affiliated with the BioML Society.",
      details: [
        "Focused on how dual-inhibition of PD-L1 and TGFBR1 affects cancer stem cell behavior specifically, rather than the bulk tumor population.",
        "Iterated on modeling approach based on structured external research feedback."
      ],
      tags: ["Cancer Stem Cells", "HCC", "Mentored Research"],
      status: "Complete"
    }
  ],

  // ---------- ACTIVITIES TAB ----------
  activityCategories: [
    {
      label: "Leadership & Operations",
      items: [
        {
          title: "Head Operations Intern",
          org: "Center for Government and Civic Service (CGCS) — with Austin AI Alliance (AIMUG), NASA & SerpAPI",
          period: "All year · Grades 9–12",
          description:
            "Co-led a 200+ attendee NASA Space Apps Hackathon end-to-end — workshops, mentorship logistics, and incentive distribution. Twice invited as a guest speaker at AIMUG meetups, helping grow the CGCS partnership, and led a college seminar on educational AI use.",
          tags: ["Event Leadership", "AI Community", "Public Speaking"]
        },
        {
          title: "Operations Intern",
          org: "Austin AI Alliance (AAIA), in partnership with CGCS",
          period: "During school break · Grades 11–12",
          description:
            "Coordinated guest speakers and validated technical environment setup for an AI developer/leadership event for the Austin tech community.",
          tags: ["Operations", "AI Events"]
        },
        {
          title: "Invited Speaker",
          org: "Center for Government and Civic Service",
          period: "Jul 2024",
          description:
            "Invited by professors to a high-level professional strategy seminar with college officials; contributed ideas on college improvement directly to directors and leadership.",
          tags: ["Strategy", "Invited"]
        }
      ]
    },
    {
      label: "Entrepreneurship",
      items: [
        {
          title: "Founder & CEO",
          org: "High School Summer Tutors (HSSTutors) & LeapOnSAT Tutoring",
          period: "During school breaks · Grades 9–12",
          description:
            "Founded and ran an online tutoring company teaching SAT prep, geometry, and biotech to 35+ students, generating $3,000+ in revenue. Consulted with 50+ families on academic strategy and formed an outreach partnership with LeapOn.",
          tags: ["Founder", "EdTech", "Revenue: $3,000+"]
        }
      ]
    },
    {
      label: "Community & Outreach",
      items: [
        {
          title: "Leaf Course Finalist for AI (Oxbridge-sponsored)",
          org: "Leaf Courses",
          period: "During school break · Grades 11–12",
          description:
            "Selected as a finalist (top 10% of applicants) to study 'Dilemmas and Danger in AI' with Oxbridge instructors; selected as a Fellow for continued research.",
          tags: ["AI Ethics", "Selective Fellowship"]
        },
        {
          title: "Volunteer",
          org: "Austin Hindu Temple",
          period: "Weekends · Sep 2023 — Present",
          description: "Ongoing weekend volunteering supporting temple operations and community events.",
          tags: ["Volunteering"]
        },
        {
          title: "Volunteer",
          org: "Round Rock Area Serving Center",
          period: "8 months, 2023",
          description: "Supported a local nonprofit serving food- and housing-insecure families in Round Rock.",
          tags: ["Volunteering"]
        }
      ]
    },
    {
      label: "School Clubs",
      items: [
        {
          title: "Co-President (12); Parliamentarian (11)",
          org: "Science National Honor Society (SNHS)",
          period: "During school year · Grades 11–12",
          description:
            "Automated point-tracking systems and lectured 200+ students on CRISPR gene cloning (11th grade). Expanded research-group topics and Olympiad participation as Co-President (12th grade).",
          tags: ["Leadership", "Biotech Education"]
        },
        {
          title: "President (12); Co-President (11); Secretary (10)",
          org: "Science Olympiad Club (USABO & USNCO)",
          period: "During school year · Grades 10–12",
          description:
            "Presented cellular biology to 30 members (10th); led officer applications and meetings (11th); partnered with SNHS to build shared study guides and quizzes (12th).",
          tags: ["Olympiad", "Leadership"]
        },
        {
          title: "Secretary (11); Co-President (12)",
          org: "Science UIL (Texas academic competition league)",
          period: "All year · Grades 10–12",
          description:
            "Tracked competition points and built study guides (11th); coached junior competitors (12th). Earned two 1st-place finishes in Biology (3rd and 10th overall district-wide) and two 1st-place team finishes.",
          tags: ["Competition", "Coaching"]
        }
      ]
    }
  ],

  // ---------- AWARDS TAB ----------
  awardStats: [
    { value: "5+", label: "National / International Honors" },
    { value: "1092", label: "MIT THINK Applicant Pool" },
    { value: "2,500+", label: "Hours Saved by ML Model" }
  ],
  awardTiers: [
    {
      label: "National & International",
      items: [
        {
          title: "National STEM Festival Finalist",
          org: "National STEM Festival",
          period: "2026",
          description: "Selected as 1 of 12 Texas finalists out of 2,500 applicants nationwide.",
          tags: ["Top 12 / 2,500"]
        },
        {
          title: "MIT THINK Commended",
          org: "MIT THINK Scholars Program",
          period: "2025",
          description: "Commended for a p53 binding-effect prediction model — top 10% of 1,092 applicants.",
          tags: ["Top 10%"]
        },
        {
          title: "NCWIT Aspirations in Computing — Honorable Mention",
          org: "National Center for Women & Information Technology",
          period: "2026",
          description: "Honorable Mention recognition, selected from 2,700 applicants nationally.",
          tags: ["Top 300 / 2,700"]
        },
        {
          title: "USNCO National Exam Nominee",
          org: "U.S. National Chemistry Olympiad",
          period: "2026",
          description: "One of 12 students in the Central Texas area (out of ~1,000) selected to sit the national exam.",
          tags: ["Top 12 Regional"]
        },
        {
          title: "Cambridge Rethink Essay Competition — Honorable Mention",
          org: "University of Cambridge",
          period: "2023 (Grade 9)",
          description: "Internationally recognized Honorable Mention, top 350 of 4,200 entrants worldwide.",
          tags: ["International", "Top 350 / 4,200"]
        },
        {
          title: "VentureEd Global Commended Fellow",
          org: "VentureEd Tech Accelerator",
          period: "2026",
          description: "Commended Fellow; presented a novel ML model for cancer research at a professional AI/startup meetup.",
          tags: ["Fellowship"]
        },
        {
          title: "PDK Public Speaking — National Qualifier",
          org: "Phi Delta Kappa",
          period: "2025",
          description: "Qualified nationally from competitors across 46+ states.",
          tags: ["National Qualifier"]
        }
      ]
    },
    {
      label: "Regional & State",
      items: [
        {
          title: "Austin Area Science Fair (GARSEF) — 3rd & 4th Place",
          org: "Greater Austin Regional Science & Engineering Fair",
          period: "2025 Biomedical & Health (3rd/300); 2026 Translational Medical Sciences (4th/450)",
          description: "Back-to-back regional placements across two independent ML research projects.",
          tags: ["3rd / 300", "4th / 450"]
        },
        {
          title: "USA Biology Olympiad — Certificate of Merit",
          org: "USABO",
          period: "2024 & 2025",
          description: "Two-time Certificate of Merit, placing in the top 30% of scorers on the open exam.",
          tags: ["Top 30%", "Two-Time"]
        },
        {
          title: "Science UIL Westwood — 1st Place, Biology",
          org: "UIL Westwood Invitational",
          period: "—",
          description: "1st place in Biology out of 140 competitors.",
          tags: ["1st / 140"]
        },
        {
          title: "Science UIL Pflugerville — 1st Biology, 3rd Overall",
          org: "UIL Pflugerville Invitational",
          period: "—",
          description: "1st place in Biology and 3rd place overall out of 90 competitors.",
          tags: ["1st / 90"]
        },
        {
          title: "HOSA Area 1 — 2nd Place & State Qualifier",
          org: "HOSA Future Health Professionals",
          period: "2025",
          description: "2nd place out of 40 top-performing students; qualified for state competition.",
          tags: ["State Qualifier"]
        },
        {
          title: "PDK Public Speaking — State Qualifier",
          org: "Phi Delta Kappa",
          period: "2026",
          description: "Qualified for state out of 40+ regional participants.",
          tags: ["State Qualifier"]
        }
      ]
    }
  ],

  // ---------- EDUCATION TAB ----------
  education: [
    {
      period: "2023 — 2027 (Expected)",
      title: "Round Rock High School",
      org: "Round Rock, TX · Unweighted GPA 4.0 / 4.0 · Weighted 5.85 / 6.0",
      description:
        "Coursework and extracurricular leadership centered on biology, chemistry, and computational research.",
      courses: ["AP Biology", "AP Chemistry", "AP Computer Science", "AP Statistics", "Research Independent Study"]
    },
    {
      period: "Nov 2025 — Jan 2026",
      title: "BioML Society Research Student",
      org: "Remote mentorship via a University of Texas at Austin researcher",
      description:
        "Received structured external mentorship extending dual-inhibition pathway research toward cancer stem cell behavior in HCC.",
      courses: ["Cancer Biology", "Computational Modeling"]
    },
    {
      period: "Jun 2025 — Present",
      title: "Stanford School of Medicine — Dhanasekaran Lab",
      org: "Stanford, CA (remote/hybrid research collaboration)",
      description:
        "Ongoing computational research placement applying machine learning to spatial and molecular liver cancer datasets, with direct exposure to wet-lab procedure (IHC, cell culture).",
      courses: ["Spatial Biology", "IHC & Cell Culture", "Applied ML"]
    }
  ]
};
