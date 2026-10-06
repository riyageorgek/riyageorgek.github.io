// ============================================================
// PROJECTS DATA
// Add / edit projects here. Components handle presentation.
// ============================================================

export const projects = [
  {
    id: 'real-time-voice-agent-telecom',
    num: '01',
    category: 'VOICE AI',
    categoryVariant: 'violet',
    title: 'Real-Time AI Voice Agent for Telecom',
    emoji: '🗣️',
    shortDesc: 'Real-time voice agent for telecom calls using Livekit and Amazon Nova Sonic with integrated knowledge base.',
    period: '2025',
    company: 'Innovation Incubator Advisory',
    description: 'Real-time voice agent for outbound/inbound telecom calls using Livekit and Amazon Nova Sonic (speech-to-speech). Integrated knowledge base for live telecom data retrieval with human-like prompt-engineered workflows.',
    technologies: ['Python', 'Livekit', 'Amazon Bedrock', 'Amazon Chime', 'Twilio', 'FastAPI'],
    links: [
      {
        type: 'article',
        label: 'Article',
        url: 'https://dev.to/innovationincubator/building-real-time-conversational-ai-agent-for-telecom-using-livekit-with-amazon-bedrock-and-nova-4kgk'
      }
    ]
  },
  {
    id: 'ai-powered-telecom-chatbot',
    num: '02',
    category: 'CONVERSATIONAL AI',
    categoryVariant: 'blue',
    title: 'AI-Powered Telecom Chatbot',
    emoji: '🤖',
    shortDesc: 'AI chatbot for telecom customer support with intent classification and real-time knowledge retrieval.',
    period: '2024–25',
    company: 'Innovation Incubator Advisory',
    description: 'AI chatbot to automate telecom customer support. Implemented intent classification and entity recognition with Amazon Lex, real-time knowledge retrieval via AWS Bedrock, and optimized responses through prompt engineering.',
    technologies: ['Python', 'Amazon Lex', 'Amazon Bedrock', 'Boto3', 'Django'],
    links: []
  },
  {
    id: 'multi-agent-ai-telecom',
    num: '03',
    category: 'AGENTIC AI',
    categoryVariant: 'blue',
    title: 'Multi-Agent AI System for Telecom Automation',
    emoji: '🧠',
    shortDesc: 'Multi-agent AI system handling customer queries, API interactions, and knowledge retrieval for telecom.',
    period: '2024–25',
    company: 'Innovation Incubator Advisory',
    description: 'Multi-agent AI system for telecom operations — agents handling customer queries, API interactions, and knowledge retrieval with optimized workflows for automated support.',
    technologies: ['Python', 'Amazon Bedrock', 'Boto3', 'Django'],
    links: []
  },
  {
    id: 'voice-agent-aws-bedrock',
    num: '04',
    category: 'VOICE AI',
    categoryVariant: 'violet',
    title: 'AI Voice Agent with AWS Bedrock, Lambda, Lex & Connect',
    emoji: '🗣️',
    shortDesc: 'Voice agent for telecom using AWS Connect, Lex, and Lambda with Amazon Bedrock integration.',
    period: '2024',
    company: 'Innovation Incubator Advisory',
    description: 'Voice agent for telecom using AWS Connect, Lex, and Lambda. Integrated Amazon Bedrock Agents with Anthropic models for dynamic conversational responses and real-time knowledge base retrieval.',
    technologies: ['Python', 'AWS Bedrock', 'AWS Lex', 'AWS Connect', 'AWS Lambda', 'Boto3'],
    links: [
      {
        type: 'article',
        label: 'Article',
        url: 'https://dev.to/thomas_george_b5f25de89e4/leveraging-amazon-bedrock-agents-for-comprehensive-business-solutions-in-telecom-and-beyond-583h'
      }
    ]
  },
  {
    id: 'appraisal-digitization',
    num: '05',
    category: 'DOCUMENT AI',
    categoryVariant: 'blue',
    title: 'Appraisal Digitization',
    emoji: '🗂️',
    shortDesc: 'Automated digitization of appraisal documents using OCR and document classification.',
    period: '2024',
    company: 'Innovation Incubator Advisory',
    description: 'Automated digitization of appraisal documents — document classification model and data extraction pipeline using OCR techniques with prompt engineering for efficient extraction.',
    technologies: ['Python', 'Scikit-learn', 'SpaCy', 'Tesseract OCR', 'Paddle OCR', 'AWS Textract', 'FastAPI'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/riyageorgek/Appraisal-Digitization'
      }
    ]
  },
  {
    id: 'citation-network-analysis',
    num: '06',
    category: 'DATA SCIENCE',
    categoryVariant: 'blue',
    title: 'Citation Network Analysis — Robotics in Agriculture',
    emoji: '🌾',
    shortDesc: 'Citation network analysis on robotics in agriculture using NLP and network visualization.',
    period: '2023',
    company: 'Digital University Kerala',
    description: 'Citation network analysis on robotics in agriculture using Web of Science data. Applied NLP for word frequency analysis, thematic clustering via word clouds, and identified developmental trajectories in agricultural tech.',
    technologies: ['Python', 'Gephi', 'Pajek', 'Matplotlib', 'NLTK'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/riyageorgek/CITATION-NETWORK-ANALYSIS-OF-ROBOTICS-IN-AGRICULTURE'
      }
    ]
  },
  {
    id: 'attendance-face-recognition',
    num: '07',
    category: 'COMPUTER VISION',
    categoryVariant: 'blue',
    title: 'Real-time Attendance System with Face Recognition',
    emoji: '📸',
    shortDesc: 'Facial recognition-based attendance system using TensorFlow Lite with automated Excel updates.',
    period: '2023',
    company: 'Digital University Kerala',
    description: 'Facial recognition-based attendance system using TensorFlow Lite (SSD MobileNetV2). Dataset created with Label Studio and enhanced via Roboflow. Auto-updates Excel sheet from detected faces in real time.',
    technologies: ['Python', 'TensorFlow Lite', 'Label Studio', 'Roboflow'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/riyageorgek/PROJECT-Real-time-Attendance-Marking-System-with-Automatic-Face-Recognition-using-TensorFlow-Lite'
      }
    ]
  },
  {
    id: 'multitasking-deep-learning',
    num: '08',
    category: 'DEEP LEARNING',
    categoryVariant: 'blue',
    title: 'Multitasking Deep Learning App',
    emoji: '🎬',
    shortDesc: 'Streamlit app combining tumor detection, SMS spam detection, and sentiment analysis.',
    period: '2023',
    company: 'Digital University Kerala',
    description: 'Streamlit app combining three deep learning tasks: Tumor Detection (CNN), SMS Spam Detection (RNN/LSTM), and Movie Sentiment Analysis (GRU). All in one interactive UI.',
    technologies: ['Python', 'TensorFlow', 'Streamlit', 'CNN', 'LSTM', 'GRU'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/riyageorgek/Multitasking-Streamlit-Application-for-Tumor-Detection-and-Sentiment-Analysis-with-Deep-Learning'
      },
      {
        type: 'demo',
        label: 'Demo',
        url: 'https://huggingface.co/spaces/riyageorge/Multitasking_App'
      }
    ]
  },
  {
    id: 'smart-dustbin',
    num: '09',
    category: 'IOT',
    categoryVariant: 'blue',
    title: 'Smart Dustbin using Arduino',
    emoji: '🗑️',
    shortDesc: 'Smart dustbin prototype with ultrasonic sensing for automated lid control.',
    period: '2022',
    company: 'Digital University Kerala',
    description: 'Smart dustbin prototype with ultrasonic sensing for automated lid opening/closing based on proximity. Integrates UV sensor and Servo motor for hygienic, touch-free waste disposal.',
    technologies: ['Arduino Uno', 'Ultrasonic Sensor', 'Servo Motor'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/riyageorgek/Smart-Dustbin'
      }
    ]
  }
];
