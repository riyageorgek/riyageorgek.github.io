// ============================================================
// EXPERIENCE DATA
// ============================================================

export const experience = [
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    company: 'Innovation Incubator Advisory',
    period: 'August 2025 — Present',
    current: true,
    description:
      'Working on agentic AI systems and AI-powered business workflows. My focus is on building multi-agent architectures that can reason over tasks, use tools, and coordinate work across cloud services — designed to operate reliably in production environments.',
    highlights: [
      'Designing and building multi-agent systems using Amazon Bedrock Strands and Bedrock AgentCore, focused on task reasoning, tool use, and workflow coordination.',
      'Building real-time voice AI experiences using LiveKit for audio transport, Amazon Polly for speech synthesis, and Amazon Connect for telephony integration.',
      'Developing AI-powered business workflow automation — integrating AI models with APIs, cloud services, and business logic using Python and FastAPI.',
      'Designing production AI solutions on AWS, working across Lambda, S3, EventBridge, CloudWatch and related services to build observable, scalable AI pipelines.',
      'Exploring workflow optimization patterns — identifying where AI can reduce manual processes and improve reliability in real business operations.',
    ],
    technologies: [
      'Amazon Bedrock', 'Strands', 'Bedrock AgentCore', 'LiveKit',
      'Amazon Polly', 'Amazon Connect', 'Python', 'FastAPI', 'AWS Lambda', 'AWS',
    ],
  },
  {
    id: 'junior-ai-engineer',
    role: 'Junior AI Engineer',
    company: 'Innovation Incubator Advisory',
    period: 'August 2024 — July 2025',
    current: false,
    description:
      'Earlier work focused on conversational AI, document intelligence and AI prototyping. This role involved hands-on experimentation with AI models, building early-stage prototypes and working through the practical challenges of integrating AI into real workflows.',
    highlights: [
      'Developed conversational AI prototypes using Amazon Bedrock and Amazon Lex, experimenting with intent recognition and dialog management patterns.',
      'Built document digitization and OCR pipelines using Amazon Textract, processing structured and unstructured document formats for downstream AI tasks.',
      'Worked on prompt engineering and evaluation — testing prompt patterns for reliability, accuracy, and appropriate response behavior across different model configurations.',
      'Built early AI prototypes that explored integrating LLMs with business workflows, identifying practical constraints and integration patterns.',
      'Gained hands-on experience with the AWS AI services ecosystem, including Bedrock, Lex, Textract, and related services.',
    ],
    technologies: [
      'Amazon Bedrock', 'Amazon Lex', 'Amazon Textract', 'OCR',
      'Prompt Engineering', 'Python', 'AWS',
    ],
  },
  {
    id: 'ai-intern',
    role: 'Artificial Intelligence Intern',
    company: 'Innovation Incubator Advisory',
    period: 'February 2024 — July 2024',
    current: false,
    description:
      'Starting point for hands-on AI engineering work. Gained practical experience with AWS AI services, explored conversational AI patterns, and contributed to early prototype development under mentorship.',
    highlights: [
      'Explored Amazon Bedrock and AWS AI service capabilities through prototype development and experimentation.',
      'Worked on early-stage conversational AI concepts and document processing with Amazon Textract.',
      'Supported research and evaluation of AI tools and approaches for practical business applications.',
    ],
    technologies: ['Amazon Bedrock', 'Amazon Textract', 'Python', 'AWS'],
  },
];
