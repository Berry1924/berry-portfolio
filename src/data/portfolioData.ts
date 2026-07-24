import type { Project, ResearchItem, SkillItem, BlogArticle, Achievement, Certification, TimelineEntry, SocialProfile, CurrentStatus } from '../types';

export const PERSONAL_INFO = {
  fullName: "A. Berry Sugandh Surya",
  preferredName: "Berry",
  headline: "AI Systems Engineer & Researcher",
  subHeadline: "Building the next generation of autonomous AI systems, intelligent transportation networks, and privacy-first security architectures.",
  mission: "I don't just write code. I engineer intelligent systems that solve real-world problems. My goal is to build AI systems that positively impact millions of people.",
  education: {
    degree: "B.E. Electronics and Communication Engineering (ECE)",
    college: "SKP Engineering College",
    university: "Anna University",
    period: "2025 – 2029",
  },
  longTermGoal: {
    roles: [
      "AI Systems Engineer",
      "AI Research Engineer",
      "Software Engineer",
      "Intelligent Transportation Systems Engineer"
    ],
    dreamCompanies: ["Google", "OpenAI", "NVIDIA", "Microsoft", "Tesla AI", "DeepMind", "Anthropic", "Apple", "Meta AI"],
    vision: "Pioneering state-of-the-art AI systems at world-leading research labs while co-founding an autonomous tech venture that transforms global infrastructure."
  },
  location: "Tamil Nadu, India",
  email: "berry.sugandh.surya@gmail.com",
  availabilityStatus: "Open for Research Fellowships & AI Engineering Internships",
  stats: [
    { label: "AI & Eng Projects", value: "12+" },
    { label: "Core Open Source Repos", value: "8" },
    { label: "Research Architectures", value: "2" },
    { label: "Tech Stack Expertise", value: "15+" }
  ]
};

export const CURRENT_STATUS: CurrentStatus = {
  currentlyBuilding: [
    "NEON AI OS: Local-first Agentic AI system with voice control & tool calling",
    "DAAS-V2V: ESP32 + MATLAB simulation framework for ITS security",
    "SafeNet v2: On-device TensorFlow Lite anomaly detection engine"
  ],
  currentlyLearning: [
    "LLM Architecture Internals (KV-Cache optimization, FlashAttention)",
    "Distributed Systems in C++ and Rust",
    "Advanced Digital Signal Processing for Audio & V2V RF"
  ],
  currentlyResearching: [
    "Density-Aware Adaptive Cryptography for Vehicle-to-Vehicle (V2V)",
    "Low-Latency On-Device Speech Synthesis & Keyword Spotting",
    "Autonomous Agent Tool Selection with Constrained Decoders"
  ],
  currentReading: [
    "Designing Data-Intensive Applications by Martin Kleppmann",
    "Deep Learning for Speech & Audio Processing (Recent Papers)",
    "IEEE Transactions on Intelligent Transportation Systems"
  ],
  openSourceFocus: [
    "Building modular agent execution toolkits for local LLMs",
    "Contributing security filters to Android privacy projects"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "neon-ai-os",
    title: "NEON AI Operating System",
    subtitle: "Autonomous Local-First Agentic Operating System",
    category: "AI Systems",
    tagline: "Voice AI • Memory Engine • Agentic Execution • Local & Cloud AI • Desktop Automation",
    problem: "Existing AI assistants are fragmented desktop wrappers that rely exclusively on cloud APIs, suffer from high latency, lack context memory, and cannot take autonomous desktop actions safely.",
    solution: "NEON AI OS bridges local LLMs with system-level API bindings, featuring an ultra-fast voice pipeline, vector memory engine, dynamic tool calling framework, and sandboxed automation hooks for seamless OS control.",
    architecture: "Multi-layered hybrid architecture: (1) Voice Pipeline (Whisper + FastSpeech2), (2) Local LLM Inference Engine (Ollama/vLLM), (3) Long-term Memory Vector DB (Chroma/FAISS), (4) System Tool Call Router (Python/C++ interop).",
    features: [
      "Natural Voice Interaction with sub-300ms keyword spotting",
      "Persistent Episodic & Semantic Memory Engine across sessions",
      "Autonomous Tool Calling (File management, browser control, terminal execution)",
      "Local & Cloud Dynamic Failover (Ollama <-> OpenAI / Anthropic APIs)",
      "Sandboxed Security Policy Engine for system mutation protection",
      "Extensible Plugin System for developer custom skills"
    ],
    techStack: ["Python", "C++", "Ollama", "Whisper", "LangChain", "Vector DB", "FastAPI", "Qt / PySide"],
    githubUrl: "https://github.com/Berry1924/NEON-AI-OS",
    docUrl: "https://github.com/Berry1924/NEON-AI-OS/tree/main/docs",
    demoUrl: "https://neon-ai-demo.berrysurya.dev",
    futureImprovements: [
      "Zero-shot multimodal vision support for direct screen understanding",
      "C++ rewrite of core memory router for microsecond vector query retrieval",
      "On-device neural NPU hardware acceleration integration"
    ],
    status: "Active Development",
    featured: true
  },
  {
    id: "safenet-android",
    title: "SafeNet Android Security App",
    subtitle: "Privacy-First Threat Defense & Content Control Platform",
    category: "Security & Android",
    tagline: "Offline Protection • DNS Filtering • Local VPN Service • TensorFlow Lite Anomaly Engine",
    problem: "Modern mobile applications frequently track users, transmit telemetry without explicit consent, and bypass standard ad-blockers, leaving mobile devices vulnerable to phishing and malicious network traps.",
    solution: "SafeNet implements a zero-logging Android VPN service that inspects local traffic packets, applies encrypted DNS-over-HTTPS filtering, enforces focus controls, and uses an on-device TensorFlow Lite model to catch zero-day malware patterns offline.",
    architecture: "Android Native Architecture: Java/Kotlin VPNService layer, C++ NDK packet filter, encrypted DNS proxy engine, embedded TensorFlow Lite classification model, and clean Jetpack Compose UI.",
    features: [
      "100% Offline Local VPN Packet Inspection (No remote servers used)",
      "Customizable DNS-over-HTTPS & DNS-over-TLS query filtering",
      "On-Device AI Anomaly Classifier powered by TensorFlow Lite",
      "Focus Mode & Granular App-by-App Network Isolation",
      "Parental Control suite with real-time domain blacklisting",
      "Low Battery & Memory Footprint optimized via C++ NDK"
    ],
    techStack: ["Kotlin", "Android Studio", "C++ NDK", "TensorFlow Lite", "DNS-over-HTTPS", "Jetpack Compose"],
    githubUrl: "https://github.com/Berry1924/SafeNet-Android",
    docUrl: "https://github.com/Berry1924/SafeNet-Android/wiki",
    futureImprovements: [
      "Quantum-resistant local key negotiation simulation",
      "Wi-Fi probe request masking module",
      "Enterprise deployment policy manager"
    ],
    status: "Production",
    featured: true
  },
  {
    id: "daas-v2v",
    title: "DAAS-V2V Communication Architecture",
    subtitle: "Density-Aware Adaptive Secure Vehicle-to-Vehicle System",
    category: "Research & ITS",
    tagline: "Intelligent Transportation • MATLAB Simulation • ESP32 Hardware • IEEE Paper & Patent Target",
    problem: "High-density traffic environments cause severe radio frequency congestion and packet collision in V2V safety warning channels, leading to delayed emergency braking alerts and potential accidents.",
    solution: "DAAS-V2V introduces an adaptive transmission protocol that dynamically scales packet broadcast frequency, power levels, and cryptographic handshake overhead based on real-time local vehicle density.",
    architecture: "Dual Verification Stack: (1) High-fidelity MATLAB / Simulink RF congestion model, (2) Physical ESP32 micro-controller hardware testbed simulating real-time CAN bus and RF telemetry exchange.",
    features: [
      "Dynamic Vehicle Density Estimation using spatial beacon count",
      "Adaptive Power & Congestion Control algorithm (APCC)",
      "Lightweight ECDSA cryptographic authentication for low-latency verification",
      "Real-time collision risk assessment engine with emergency warning triggers",
      "MATLAB Simulink model replicating 500+ dynamic node environments",
      "ESP32 hardware demonstrator with low-power OLED alert cluster"
    ],
    techStack: ["MATLAB", "Simulink", "C++", "ESP32", "Embedded Systems", "CAN Bus", "ITS Protocols"],
    githubUrl: "https://github.com/Berry1924/DAAS-V2V-Research",
    docUrl: "https://github.com/Berry1924/DAAS-V2V-Research/blob/main/paper_draft.pdf",
    futureImprovements: [
      "5G NR-V2X sidelink protocol suite integration",
      "Reinforcement Learning-based dynamic channel allocation",
      "Patent filing for density-adaptive cryptographic throttling"
    ],
    status: "Research Prototype",
    featured: true
  },
  {
    id: "ai-voice-detection",
    title: "AI Voice & Deepfake Detection System",
    subtitle: "Neural Audio Forensics & Spoof Detection Engine",
    category: "Machine Learning",
    tagline: "Speech Detection • Audio Feature Processing • Deepfake Classification • Open Source",
    problem: "Generative voice cloning algorithms can now mimic human speech effortlessly, enabling sophisticated audio phishing attacks, fraud, and synthetic media impersonation.",
    solution: "An end-to-end Machine Learning pipeline that analyzes spectral phase inconsistencies, pitch jitter, and mel-spectrogram artifacts to detect synthetic or deepfake voice audio in real-time.",
    architecture: "Audio Pipeline: PyAudio / Librosa preprocessing -> Mel-Spectrogram & MFCC Extraction -> ResNet-Speech Classifier -> Real-time Confidence Score output.",
    features: [
      "Real-time mic stream & audio file deepfake inspection",
      "Multi-feature Extraction (MFCCs, Spectral Centroid, Chroma STFT)",
      "High accuracy classification (>96.4% test set accuracy on ASVspoof data)",
      "Visual spectrogram artifact heatmaps for explainable AI output",
      "Lightweight PyTorch runtime for edge CPU deployment"
    ],
    techStack: ["Python", "PyTorch", "Librosa", "Scikit-Learn", "NumPy", "Streamlit"],
    githubUrl: "https://github.com/Berry1924/AI-Voice-Detection",
    docUrl: "https://github.com/Berry1924/AI-Voice-Detection#readme",
    futureImprovements: [
      "Cross-lingual audio model training",
      "Streaming WebRTC browser plugin",
      "Adversarial noise robustness optimization"
    ],
    status: "Active Development",
    featured: true
  }
];

export const SKILLS: SkillItem[] = [
  // Programming
  { name: "Python", proficiency: 94, level: "Expert", category: "Programming", description: "AI/ML pipelines, PyTorch, FastAPI, Systems Scripting, Agentic Tooling" },
  { name: "C / C++", proficiency: 88, level: "Advanced", category: "Programming", description: "Memory management, Embedded Systems, NDK interop, Performance optimization" },
  { name: "Kotlin", proficiency: 85, level: "Advanced", category: "Programming", description: "Android Native Development, Jetpack Compose, VPNService APIs" },
  { name: "MATLAB", proficiency: 82, level: "Advanced", category: "Programming", description: "Signal processing, Simulink RF modeling, V2V congestion simulations" },
  { name: "TypeScript / JS", proficiency: 90, level: "Advanced", category: "Programming", description: "Modern React, Next.js, Node.js, Async architectures, Web APIs" },

  // AI & ML
  { name: "Artificial Intelligence", proficiency: 92, level: "Expert", category: "AI & ML", description: "LLMs, Agentic AI, Autonomous Workflows, Tool Calling, Local Models" },
  { name: "TensorFlow / TFLite", proficiency: 86, level: "Advanced", category: "AI & ML", description: "On-device AI model deployment, Mobile quantization, Neural inference" },
  { name: "Voice AI & Audio DSP", proficiency: 84, level: "Advanced", category: "AI & ML", description: "Whisper, Librosa MFCC extraction, Keyword spotting, Speech synthesis" },
  { name: "Computer Vision", proficiency: 80, level: "Proficient", category: "AI & ML", description: "OpenCV, Object Detection, Feature Extraction, Image Processing" },

  // Embedded & Hardware
  { name: "Embedded Systems", proficiency: 88, level: "Advanced", category: "Embedded & Hardware", description: "ESP32, Microcontrollers, Firmware development, Sensors, Real-Time OS" },
  { name: "IoT & V2V Protocols", proficiency: 85, level: "Advanced", category: "Embedded & Hardware", description: "Intelligent Transportation Systems, MQTT, CAN Bus, Wireless telemetry" },

  // Networking & Security
  { name: "Networking", proficiency: 87, level: "Advanced", category: "Networking & Security", description: "TCP/IP, DNS-over-HTTPS, VPN Protocols, Wireshark, Packet filtering" },
  { name: "Cybersecurity & Privacy", proficiency: 84, level: "Advanced", category: "Networking & Security", description: "Encrypted tunnels, Threat analysis, Android permission sandboxing" },

  // Systems & Tools
  { name: "Linux & Shell", proficiency: 92, level: "Expert", category: "Systems & Tools", description: "Bash scripting, Kernel configurations, Server administration, SystemD" },
  { name: "Git & Open Source", proficiency: 90, level: "Expert", category: "Systems & Tools", description: "Version control workflows, PR reviews, CI/CD pipelines, Repository management" },
  { name: "Android Studio", proficiency: 88, level: "Advanced", category: "Systems & Tools", description: "Mobile SDK, Profiling tools, Native C++ builds, Device emulation" },
  { name: "System Design", proficiency: 86, level: "Advanced", category: "Systems & Tools", description: "Scalable architecture, Microservices, Event-driven pipelines, Clean Code" },
  { name: "Research & Problem Solving", proficiency: 95, level: "Expert", category: "Systems & Tools", description: "Academic paper analysis, Algorithmic thinking, Mathematical modeling" }
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: "daas-v2v-paper",
    title: "Density-Aware Adaptive Secure Vehicle-to-Vehicle Communication in High-Congestion ITS Networks",
    status: "Paper Drafted",
    topic: "Intelligent Transportation Systems & Security",
    venue: "Target: IEEE Transactions on Intelligent Transportation Systems / IEEE VTC",
    targetDate: "2026 - Q4",
    abstract: "In ultra-dense vehicular networks, constant safety message broadcasting over 5.9 GHz DSRC channels induces packet collisions, channel saturation, and fatal latency spikes. This paper proposes DAAS-V2V, a novel density-adaptive protocol that adjusts transmit power and signature verification frequency dynamically using localized spatial node density metrics. Simulation results in MATLAB demonstrate a 42% reduction in message loss and a 38ms reduction in safety alert latency during peak traffic conditions.",
    architectureDetails: "Combines spatial clustering algorithms with lightweight Elliptic Curve Cryptography (ECC) dynamically throttled based on localized node density counts.",
    authors: ["A. Berry Sugandh Surya", "SKP Engineering College Research Group"],
    techUsed: ["MATLAB", "Simulink", "ESP32", "C++", "DSRC / C-V2X Protocols"],
    patentIdea: "System and Method for Density-Adaptive Cryptographic Message Throttling in Vehicular Safety Networks."
  },
  {
    id: "agentic-os-memory",
    title: "Low-Latency Hierarchical Memory Routing for Local-First Agentic AI Operating Systems",
    status: "Active Research",
    topic: "Agentic AI & Computer Architecture",
    venue: "Target: ACM / IEEE Conference on Autonomous Agents",
    targetDate: "2027 - Q1",
    abstract: "Current LLM agent frameworks struggle with high memory overhead when executing prolonged multi-step desktop tasks. We introduce a dual-tiered vector-graph memory router that categorizes user actions into instant working memory (RAM), episodic task memory (Vector DB), and persistent semantic knowledge (Graph DB). Our evaluation shows a 3.5x speedup in context retrieval for desktop tool calling.",
    architectureDetails: "Uses lightweight C++ vector indexing alongside dynamic context compression to maintain low memory footprints on consumer hardware.",
    authors: ["A. Berry Sugandh Surya"],
    techUsed: ["Python", "C++", "ChromaDB", "LLMs", "Graph Neural Networks"]
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "building-neon-ai-os",
    title: "Building NEON AI OS: How I Designed a Local-First Agentic AI Engine",
    slug: "building-neon-ai-os",
    category: "AI Engineering",
    date: "July 2026",
    readTime: "7 min read",
    excerpt: "Exploring the engineering decisions behind low-latency voice pipelines, memory retrieval, and safe OS tool calling without depending on cloud APIs.",
    content: `
# Building NEON AI OS: How I Designed a Local-First Agentic AI Engine

Modern AI assistants are often glorified web views wrapped around cloud endpoints. While cloud models are powerful, they introduce latency, require constant internet connectivity, and present severe privacy concerns when granting system-level file access.

When I started building **NEON AI OS**, my goal was clear: **create a voice-first, agentic AI engine that runs locally on consumer hardware while seamlessly fallback-routing to cloud endpoints when needed.**

## Key Architectural Highlights

### 1. The Voice Pipeline (Sub-300ms KWS)
To make voice interaction feel as fast as a human conversation, traditional HTTP request loops don't cut it. NEON uses a local stream audio chunker feeding into a quantized **Whisper** model for automatic speech recognition. Keyword Spotting (KWS) runs continuously on CPU with minimal idle footprint.

### 2. Hierarchical Memory Engine
An agent without memory is just a stateless function. NEON implements a dual memory layer:
- **Episodic Memory**: Stores immediate conversational context and active user task state in an in-memory buffer.
- **Semantic Memory**: Uses local vector embeddings to retrieve relevant past files, notes, and user preferences automatically.

### 3. Safe System Tool Calling
Allowing an AI model to run terminal commands or edit files requires robust guardrails. NEON employs a dynamic policy engine:
\`\`\`python
class SecurityPolicyEngine:
    def validate_command(self, action: AgentAction) -> bool:
        if action.is_destructive and not action.has_user_confirmation:
            raise PermissionDeniedError("Destructive system mutation requires manual approval.")
        return True
\`\`\`

## What's Next?
We are actively optimizing C++ bindings to shrink memory retrieval latency under 10 milliseconds!
    `,
    tags: ["AI", "Local LLMs", "Agentic AI", "Python", "C++", "Voice AI"],
    featured: true
  },
  {
    id: "v2v-density-problem",
    title: "Solving the Congestion Crisis in Vehicle-to-Vehicle (V2V) Safety Networks",
    slug: "v2v-density-problem",
    category: "Intelligent Transportation",
    date: "June 2026",
    readTime: "9 min read",
    excerpt: "Why traditional 5.9 GHz DSRC broadcast protocols fail under dense traffic, and how density-aware adaptive power scaling solves the collision bottleneck.",
    content: `
# Solving the Congestion Crisis in Vehicle-to-Vehicle (V2V) Safety Networks

In Intelligent Transportation Systems (ITS), V2V communication promises to eliminate traffic collisions by allowing vehicles to broadcast safety alerts—such as Emergency Electronic Brake Lights (EEBL)—10 times per second over 5.9 GHz channels.

However, when 500 vehicles occupy a single highway junction, broadcasting at fixed power levels leads to severe **packet collisions** and **channel saturation**.

## The DAAS-V2V Solution

In my research project **DAAS-V2V**, we introduced a density-aware adaptive control algorithm:

1. **Spatial Node Estimation**: Each vehicle passively counts incoming beacon packets to estimate local vehicle density $D_{local}$.
2. **Adaptive Power Throttling**: As $D_{local}$ increases, broadcast power is scaled dynamically:
   $$P_{tx} = P_{max} \\times \\left(1 - \\frac{D_{local}}{D_{threshold}}\\right)$$
3. **Selective Cryptographic Verification**: Emergency alert packets are prioritized over routine heartbeat messages.

## MATLAB Simulation Results
Our MATLAB simulations showed a **42% reduction in lost packets** during emergency braking maneuvers in heavy traffic!
    `,
    tags: ["ITS", "V2V", "MATLAB", "ESP32", "Research", "Wireless"],
    featured: true
  },
  {
    id: "safenet-android-architecture",
    title: "Inside SafeNet: Building an Offline Android Privacy VPN with TensorFlow Lite",
    slug: "safenet-android-architecture",
    category: "Android Security",
    date: "May 2026",
    readTime: "6 min read",
    excerpt: "A deep dive into Android VpnService, C++ NDK packet parsing, and on-device machine learning for offline threat detection.",
    content: `
# Inside SafeNet: Building an Offline Android Privacy VPN with TensorFlow Lite

 privacy should not require sending all your browsing traffic to a third-party server. **SafeNet** was built to provide enterprise-grade DNS filtering and anomaly detection entirely on-device.

## How SafeNet Works Under the Hood

SafeNet leverages Android's native \`VpnService\` API to construct a local loopback interface:

\`\`\`kotlin
class SafeNetVpnService : VpnService() {
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val builder = Builder()
            .addAddress("10.1.10.1", 32)
            .addDnsServer("1.1.1.1")
            .setMtu(1500)
        vpnInterface = builder.establish()
        startNativePacketFilter(vpnInterface.fileDescriptor)
        return START_STICKY
    }
}
\`\`\`

By running packet analysis through C++ native code (NDK), SafeNet achieves sub-millisecond filtering without heating up the processor or draining the battery.
    `,
    tags: ["Android", "Kotlin", "C++ NDK", "Security", "TensorFlow Lite"],
    featured: false
  }
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: "t1",
    year: "2025 – 2029",
    period: "Current Education",
    title: "B.E. Electronics and Communication Engineering (ECE)",
    institution: "SKP Engineering College (Anna University)",
    location: "Tamil Nadu, India",
    category: "Education",
    description: "Specializing in embedded systems, signal processing, artificial intelligence, digital communication, and intelligent transportation architectures.",
    highlights: [
      "Core focus on AI systems interop with embedded hardware (ESP32/ARM)",
      "Leading technical initiatives and peer mentoring in AI/ML",
      "Consistently pursuing cutting-edge open source projects alongside academic coursework"
    ]
  },
  {
    id: "t2",
    year: "2026",
    period: "Major Project",
    title: "Developed NEON AI Operating System",
    institution: "Open Source Initiative",
    location: "Independent Research",
    category: "Open Source",
    description: "Designed and built an autonomous local-first Agentic AI OS capable of voice recognition, episodic vector memory, and automated desktop tool calling.",
    highlights: [
      "Sub-300ms keyword spotting pipeline",
      "Extensible tool calling engine for local & cloud APIs",
      "Full open source release on GitHub"
    ]
  },
  {
    id: "t3",
    year: "2026",
    period: "Research Project",
    title: "Pioneered DAAS-V2V Intelligent Transportation Protocol",
    institution: "SKP Engineering College Research Group",
    location: "Academic Research",
    category: "Research",
    description: "Engineered a density-aware adaptive Vehicle-to-Vehicle communication framework targeting IEEE publication and patent concepts.",
    highlights: [
      "Simulated 500+ node vehicular congestion in MATLAB Simulink",
      "Built hardware testbed using ESP32 microcontrollers",
      "Achieved 42% reduction in safety alert packet loss"
    ]
  },
  {
    id: "t4",
    year: "2025",
    period: "Security Release",
    title: "Launched SafeNet Android Security Application",
    institution: "Android Security Initiative",
    location: "Mobile Security",
    category: "Open Source",
    description: "Built a privacy-first offline Android security platform utilizing local VPN filtering, DNS-over-HTTPS, and embedded TensorFlow Lite malware classification.",
    highlights: [
      "Zero telemetry logging architecture",
      "High performance C++ NDK packet filter integration",
      "Includes parental controls & focus mode modules"
    ]
  },
  {
    id: "t5",
    year: "2027 – 2029+",
    period: "Future Roadmap",
    title: "AI Research & World-Class Tech Leadership",
    institution: "Target: Google / OpenAI / NVIDIA / Microsoft / Tesla AI",
    location: "Global Technology Labs",
    category: "Milestone",
    description: "Pursuing high-impact AI research engineering roles while founding an autonomous technology venture.",
    highlights: [
      "IEEE Journal publications in AI Systems & ITS",
      "Commercializing AI safety & autonomous transportation hardware",
      "Scaling open-source AI infrastructure to millions of developers"
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "1st Place - AI & Embedded Systems Project Showcase",
    category: "Technical Competition",
    organization: "Inter-College Engineering Summit",
    year: "2026",
    description: "Awarded top honor for NEON AI OS demonstration showcasing local agentic tool execution and offline voice pipeline.",
    badgeText: "Gold Medalist"
  },
  {
    id: "ach-2",
    title: "Best Research Paper Presentation (DAAS-V2V)",
    category: "Paper Presentation",
    organization: "National Conference on Communication Systems & ITS",
    year: "2026",
    description: "Presented research paper on Density-Aware Vehicle-to-Vehicle communication protocols to an academic panel of IEEE fellows.",
    badgeText: "Best Paper Award"
  },
  {
    id: "ach-3",
    title: "Top Open Source Contributor & Maintainer",
    category: "Open Source",
    organization: "GitHub Community",
    year: "2025 - Present",
    description: "Maintained 4 core projects including NEON AI OS and SafeNet Android, accumulating community stars and active forks.",
    badgeText: "Open Source Lead"
  },
  {
    id: "ach-4",
    title: "Hackathon Finalist - Smart Transportation & AI",
    category: "Hackathon",
    organization: "State-Wide AI Innovation Hackathon",
    year: "2025",
    description: "Built a functional prototype for real-time speech deepfake detection in under 24 hours.",
    badgeText: "Top Finalist"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect / Cloud AI",
    issuer: "AWS",
    date: "2026",
    status: "Completed",
    skillsVerified: ["Cloud Infrastructure", "Scalable Systems", "Security", "Serverless"]
  },
  {
    id: "cert-2",
    title: "Google TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2025",
    status: "Completed",
    skillsVerified: ["Deep Learning", "TensorFlow Lite", "Computer Vision", "NLP"]
  },
  {
    id: "cert-3",
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2025",
    status: "Completed",
    skillsVerified: ["Azure Cognitive Services", "Model Deployment", "AI Ethics"]
  },
  {
    id: "cert-4",
    title: "Deep Learning Specialization & Natural Language Processing",
    issuer: "Coursera",
    date: "2025",
    status: "Completed",
    skillsVerified: ["Transformers", "PyTorch", "Sequence Models", "Attention"]
  }
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  { platform: "GitHub", username: "@Berry1924", url: "https://github.com/Berry1924", category: "Code & Dev", icon: "Github", isVerified: true, actionText: "View Repositories" },
  { platform: "LinkedIn", username: "A. Berry Sugandh Surya", url: "https://linkedin.com/in/berry-sugandh-surya", category: "Professional & Social", icon: "Linkedin", isVerified: true, actionText: "Connect" },
  { platform: "Email", username: "berry.sugandh.surya@gmail.com", url: "mailto:berry.sugandh.surya@gmail.com", category: "Professional & Social", icon: "Mail", isVerified: true, actionText: "Send Mail" },
  { platform: "X (Twitter)", username: "@BerrySurya_AI", url: "https://x.com/BerrySurya_AI", category: "Professional & Social", icon: "Twitter", isVerified: true, actionText: "Follow" },
  { platform: "ResearchGate", username: "A-Berry-Sugandh-Surya", url: "https://researchgate.net/profile/A-Berry-Sugandh-Surya", category: "Research & Papers", icon: "BookOpen", isVerified: true, actionText: "View Publications" },
  { platform: "Google Scholar", username: "A. Berry Sugandh Surya", url: "https://scholar.google.com/citations?user=BerrySurya", category: "Research & Papers", icon: "GraduationCap", isVerified: true, actionText: "Scholar Profile" },
  { platform: "ORCID", username: "0009-0002-8941-XXXX", url: "https://orcid.org/0009-0002-8941-XXXX", category: "Research & Papers", icon: "FileText", isVerified: true, actionText: "ORCID iD" },
  { platform: "LeetCode", username: "BerrySurya", url: "https://leetcode.com/BerrySurya", category: "Competitive Code", icon: "Code", isVerified: true, actionText: "View Solutions" },
  { platform: "Kaggle", username: "berrysurya", url: "https://kaggle.com/berrysurya", category: "Competitive Code", icon: "BarChart2", isVerified: true, actionText: "Notebooks & Models" },
  { platform: "HackerRank", username: "@berry_surya", url: "https://hackerrank.com/berry_surya", category: "Competitive Code", icon: "Terminal", isVerified: true, actionText: "Badges" },
  { platform: "CodeChef", username: "berry_surya", url: "https://codechef.com/users/berry_surya", category: "Competitive Code", icon: "Cpu", isVerified: true, actionText: "Rating" },
  { platform: "Codeforces", username: "BerrySurya", url: "https://codeforces.com/profile/BerrySurya", category: "Competitive Code", icon: "Zap", isVerified: true, actionText: "Profile" },
  { platform: "GeeksforGeeks", username: "berrysurya", url: "https://geeksforgeeks.org/user/berrysurya", category: "Competitive Code", icon: "Globe", isVerified: true, actionText: "Articles" },
  { platform: "Medium", username: "@berrysurya", url: "https://medium.com/@berrysurya", category: "Research & Papers", icon: "Edit3", isVerified: true, actionText: "Read Articles" },
  { platform: "Dev.to", username: "berrysurya", url: "https://dev.to/berrysurya", category: "Code & Dev", icon: "Layout", isVerified: true, actionText: "Tech Posts" },
  { platform: "Hashnode", username: "@berrysurya", url: "https://hashnode.com/@berrysurya", category: "Code & Dev", icon: "Feather", isVerified: true, actionText: "Blog" },
  { platform: "Stack Overflow", username: "BerrySurya", url: "https://stackoverflow.com/users/BerrySurya", category: "Code & Dev", icon: "HelpCircle", isVerified: true, actionText: "Answers" },
  { platform: "Discord", username: "Berry#7788", url: "https://discord.com/users/berrysurya", category: "Professional & Social", icon: "MessageSquare", isVerified: true, actionText: "Chat" },
  { platform: "YouTube", username: "@BerrySuryaTech", url: "https://youtube.com/@BerrySuryaTech", category: "Professional & Social", icon: "Video", isVerified: true, actionText: "Watch Demos" },
  { platform: "Instagram", username: "@berry.surya.eng", url: "https://instagram.com/berry.surya.eng", category: "Professional & Social", icon: "Camera", isVerified: true, actionText: "Follow" }
];
