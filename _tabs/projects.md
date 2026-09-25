---
title: "Projects"
icon: fas fa-laptop-code
order: 2
---

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .project-card {
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid rgba(128,128,128,0.15);
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.15);
  }

  .project-card-header {
    padding: 1.25rem 1.25rem 0.75rem;
    color: white;
    position: relative;
  }

  .project-card-header h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0.4rem 0 0.3rem;
    color: white;
    border: none;
  }

  .project-emoji {
    font-size: 1.6rem;
    line-height: 1;
  }

  .project-meta {
    font-size: 0.75rem;
    opacity: 0.85;
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .project-card-body {
    padding: 1rem 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-desc {
    font-size: 0.88rem;
    line-height: 1.6;
    opacity: 0.9;
    margin: 0;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .tech-tag {
    font-size: 0.72rem;
    padding: 0.15rem 0.55rem;
    border-radius: 20px;
    background: rgba(100,100,255,0.1);
    border: 1px solid rgba(100,100,255,0.2);
    font-weight: 500;
  }

  .project-links {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: auto;
    padding-top: 0.5rem;
  }

  .project-link-btn {
    font-size: 0.78rem;
    padding: 0.3rem 0.75rem;
    border-radius: 6px;
    text-decoration: none !important;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    transition: opacity 0.2s;
    color: white !important;
  }

  .project-link-btn:hover { opacity: 0.85; }
  .btn-article { background: #6a11cb; }
  .btn-github  { background: #24292e; }
  .btn-demo    { background: #00b09b; }

  /* Card header gradients cycling through 10 */
  .project-card:nth-child(10n+1)  .project-card-header { background: linear-gradient(135deg, #6a11cb, #2575fc); }
  .project-card:nth-child(10n+2)  .project-card-header { background: linear-gradient(135deg, #ff7e5f, #feb47b); }
  .project-card:nth-child(10n+3)  .project-card-header { background: linear-gradient(135deg, #43cea2, #185a9d); }
  .project-card:nth-child(10n+4)  .project-card-header { background: linear-gradient(135deg, #f953c6, #b91d73); }
  .project-card:nth-child(10n+5)  .project-card-header { background: linear-gradient(135deg, #f7971e, #ffd200); }
  .project-card:nth-child(10n+6)  .project-card-header { background: linear-gradient(135deg, #00c6ff, #0072ff); }
  .project-card:nth-child(10n+7)  .project-card-header { background: linear-gradient(135deg, #ff4e50, #f9d423); }
  .project-card:nth-child(10n+8)  .project-card-header { background: linear-gradient(135deg, #4facfe, #00f2fe); }
  .project-card:nth-child(10n+9)  .project-card-header { background: linear-gradient(135deg, #a18cd1, #fbc2eb); }
  .project-card:nth-child(10n)    .project-card-header { background: linear-gradient(135deg, #84fab0, #8fd3f4); }
</style>

<div class="projects-grid">

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🗣️</div>
      <h3>Real-Time AI Voice Agent for Telecom</h3>
      <div class="project-meta"><span>📅 2025</span><span>🏢 Innovation Incubator Advisory</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Real-time voice agent for outbound/inbound telecom calls using Livekit and Amazon Nova Sonic (speech-to-speech). Integrated knowledge base for live telecom data retrieval with human-like prompt-engineered workflows.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">Livekit</span><span class="tech-tag">Amazon Bedrock</span><span class="tech-tag">Amazon Chime</span><span class="tech-tag">Twilio</span><span class="tech-tag">FastAPI</span>
      </div>
      <div class="project-links">
        <a class="project-link-btn btn-article" href="https://dev.to/innovationincubator/building-real-time-conversational-ai-agent-for-telecom-using-livekit-with-amazon-bedrock-and-nova-4kgk" target="_blank"><i class="fas fa-newspaper"></i> Article</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🤖</div>
      <h3>AI-Powered Telecom Chatbot</h3>
      <div class="project-meta"><span>📅 2024–25</span><span>🏢 Innovation Incubator Advisory</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">AI chatbot to automate telecom customer support. Implemented intent classification and entity recognition with Amazon Lex, real-time knowledge retrieval via AWS Bedrock, and optimized responses through prompt engineering.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">Amazon Lex</span><span class="tech-tag">Amazon Bedrock</span><span class="tech-tag">Boto3</span><span class="tech-tag">Django</span>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🧠</div>
      <h3>Multi-Agent AI System for Telecom Automation</h3>
      <div class="project-meta"><span>📅 2024–25</span><span>🏢 Innovation Incubator Advisory</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Multi-agent AI system for telecom operations — agents handling customer queries, API interactions, and knowledge retrieval with optimized workflows for automated support.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">Amazon Bedrock</span><span class="tech-tag">Boto3</span><span class="tech-tag">Django</span>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🗣️</div>
      <h3>AI Voice Agent with AWS Bedrock, Lambda, Lex &amp; Connect</h3>
      <div class="project-meta"><span>📅 2024</span><span>🏢 Innovation Incubator Advisory</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Voice agent for telecom using AWS Connect, Lex, and Lambda. Integrated Amazon Bedrock Agents with Anthropic models for dynamic conversational responses and real-time knowledge base retrieval.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">AWS Bedrock</span><span class="tech-tag">AWS Lex</span><span class="tech-tag">AWS Connect</span><span class="tech-tag">AWS Lambda</span><span class="tech-tag">Boto3</span>
      </div>
      <div class="project-links">
        <a class="project-link-btn btn-article" href="https://dev.to/thomas_george_b5f25de89e4/leveraging-amazon-bedrock-agents-for-comprehensive-business-solutions-in-telecom-and-beyond-583h" target="_blank"><i class="fas fa-newspaper"></i> Article</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🗂️</div>
      <h3>Appraisal Digitization</h3>
      <div class="project-meta"><span>📅 2024</span><span>🏢 Innovation Incubator Advisory</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Automated digitization of appraisal documents — document classification model and data extraction pipeline using OCR techniques with prompt engineering for efficient extraction.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">Scikit-learn</span><span class="tech-tag">SpaCy</span><span class="tech-tag">Tesseract OCR</span><span class="tech-tag">Paddle OCR</span><span class="tech-tag">AWS Textract</span><span class="tech-tag">FastAPI</span>
      </div>
      <div class="project-links">
        <a class="project-link-btn btn-github" href="https://github.com/riyageorgek/Appraisal-Digitization" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🌾</div>
      <h3>Citation Network Analysis — Robotics in Agriculture</h3>
      <div class="project-meta"><span>📅 2023</span><span>🏢 Digital University Kerala</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Citation network analysis on robotics in agriculture using Web of Science data. Applied NLP for word frequency analysis, thematic clustering via word clouds, and identified developmental trajectories in agricultural tech.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">Gephi</span><span class="tech-tag">Pajek</span><span class="tech-tag">Matplotlib</span><span class="tech-tag">NLTK</span>
      </div>
      <div class="project-links">
        <a class="project-link-btn btn-github" href="https://github.com/riyageorgek/CITATION-NETWORK-ANALYSIS-OF-ROBOTICS-IN-AGRICULTURE" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">📸</div>
      <h3>Real-time Attendance System with Face Recognition</h3>
      <div class="project-meta"><span>📅 2023</span><span>🏢 Digital University Kerala</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Facial recognition-based attendance system using TensorFlow Lite (SSD MobileNetV2). Dataset created with Label Studio and enhanced via Roboflow. Auto-updates Excel sheet from detected faces in real time.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">TensorFlow Lite</span><span class="tech-tag">Label Studio</span><span class="tech-tag">Roboflow</span>
      </div>
      <div class="project-links">
        <a class="project-link-btn btn-github" href="https://github.com/riyageorgek/PROJECT-Real-time-Attendance-Marking-System-with-Automatic-Face-Recognition-using-TensorFlow-Lite" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🎬</div>
      <h3>Multitasking Deep Learning App</h3>
      <div class="project-meta"><span>📅 2023</span><span>🏢 Digital University Kerala</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Streamlit app combining three deep learning tasks: Tumor Detection (CNN), SMS Spam Detection (RNN/LSTM), and Movie Sentiment Analysis (GRU). All in one interactive UI.</p>
      <div class="tech-tags">
        <span class="tech-tag">Python</span><span class="tech-tag">TensorFlow</span><span class="tech-tag">Streamlit</span><span class="tech-tag">CNN</span><span class="tech-tag">LSTM</span><span class="tech-tag">GRU</span>
      </div>
      <div class="project-links">
        <a class="project-link-btn btn-github" href="https://github.com/riyageorgek/Multitasking-Streamlit-Application-for-Tumor-Detection-and-Sentiment-Analysis-with-Deep-Learning" target="_blank"><i class="fab fa-github"></i> GitHub</a>
        <a class="project-link-btn btn-demo" href="https://huggingface.co/spaces/riyageorge/Multitasking_App" target="_blank"><i class="fas fa-play"></i> Demo</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-emoji">🗑️</div>
      <h3>Smart Dustbin using Arduino</h3>
      <div class="project-meta"><span>📅 2022</span><span>🏢 Digital University Kerala</span></div>
    </div>
    <div class="project-card-body">
      <p class="project-desc">Smart dustbin prototype with ultrasonic sensing for automated lid opening/closing based on proximity. Integrates UV sensor and Servo motor for hygienic, touch-free waste disposal.</p>
      <div class="tech-tags">
        <span class="tech-tag">Arduino Uno</span><span class="tech-tag">Ultrasonic Sensor</span><span class="tech-tag">Servo Motor</span>
      </div>
      <div class="project-links">
        <a class="project-link-btn btn-github" href="https://github.com/riyageorgek/Smart-Dustbin" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>

</div>
