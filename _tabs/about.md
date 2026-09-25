---
# the default layout is 'page'
icon: fas fa-info-circle
order: 1
---

<style>
  .hero-intro {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    border-radius: 16px;
    padding: 2rem 2.5rem;
    color: white;
    margin-bottom: 2rem;
  }

  .hero-intro h2 {
    font-size: 1.8rem;
    margin: 0 0 0.5rem 0;
    color: white;
    border: none;
  }

  .hero-intro p {
    font-size: 1.05rem;
    opacity: 0.92;
    margin: 0;
    line-height: 1.7;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .skill-tag {
    background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 20px;
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
    color: white;
    font-weight: 500;
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.25rem;
    flex-wrap: wrap;
  }

  .social-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none !important;
    transition: opacity 0.2s;
  }

  .social-btn:hover { opacity: 0.85; }

  .social-btn.linkedin { background: #0a66c2; color: white !important; }
  .social-btn.github   { background: #24292e; color: white !important; }
  .social-btn.credly   { background: #ff6b00; color: white !important; }

  .timeline {
    position: relative;
    padding-left: 1.5rem;
    border-left: 3px solid #6a11cb;
    margin: 1rem 0;
  }

  .timeline-item {
    margin-bottom: 1.5rem;
    position: relative;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: -1.85rem;
    top: 0.35rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #6a11cb;
    border: 2px solid white;
    box-shadow: 0 0 0 2px #6a11cb;
  }

  .timeline-role {
    font-weight: 700;
    font-size: 1rem;
    margin: 0 0 0.1rem 0;
  }

  .timeline-org {
    font-size: 0.9rem;
    opacity: 0.75;
  }

  .timeline-date {
    display: inline-block;
    margin-top: 0.3rem;
    font-size: 0.78rem;
    background: #6a11cb22;
    color: #6a11cb;
    border-radius: 20px;
    padding: 0.1rem 0.6rem;
    font-weight: 600;
  }

  .edu-card {
    border-left: 4px solid #2575fc;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    border-radius: 0 8px 8px 0;
    background: var(--card-bg, rgba(100,100,255,0.04));
  }

  .edu-degree { font-weight: 700; font-size: 0.95rem; }
  .edu-inst   { font-size: 0.85rem; opacity: 0.75; }
  .edu-meta   { margin-top: 0.3rem; font-size: 0.8rem; }
  .edu-score  {
    display: inline-block;
    background: #43cea222;
    color: #185a9d;
    border-radius: 20px;
    padding: 0.1rem 0.6rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }

  .cert-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: start;
  }

  .cert-grid-item {
    width: 220px;
    height: 160px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1rem;
  }

  .cert-grid-item:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }

  .cert-icon    { font-size: 1.8rem; margin-bottom: 0.5rem; }
  .cert-caption { font-size: 0.9rem; font-weight: bold; }
  .cert-detail  { font-size: 0.75rem; opacity: 0.9; }

  .cert-grid-item:nth-child(12n+1)  { background: linear-gradient(135deg, #ff7e5f, #feb47b); }
  .cert-grid-item:nth-child(12n+2)  { background: linear-gradient(135deg, #6a11cb, #2575fc); }
  .cert-grid-item:nth-child(12n+3)  { background: linear-gradient(135deg, #43cea2, #185a9d); }
  .cert-grid-item:nth-child(12n+4)  { background: linear-gradient(135deg, #f7971e, #ffd200); }
  .cert-grid-item:nth-child(12n+5)  { background: linear-gradient(135deg, #ff4e50, #f9d423); }
  .cert-grid-item:nth-child(12n+6)  { background: linear-gradient(135deg, #00c6ff, #0072ff); }
  .cert-grid-item:nth-child(12n+7)  { background: linear-gradient(135deg, #f953c6, #b91d73); }
  .cert-grid-item:nth-child(12n+8)  { background: linear-gradient(135deg, #00b09b, #96c93d); }
  .cert-grid-item:nth-child(12n+9)  { background: linear-gradient(135deg, #f7797d, #FBD786); }
  .cert-grid-item:nth-child(12n+10) { background: linear-gradient(135deg, #4facfe, #00f2fe); }
  .cert-grid-item:nth-child(12n+11) { background: linear-gradient(135deg, #a18cd1, #fbc2eb); }
  .cert-grid-item:nth-child(12n)    { background: linear-gradient(135deg, #84fab0, #8fd3f4); }
</style>

<div class="hero-intro">
  <h2>Hi, I'm Riya George 👋</h2>
  <p>AI Engineer focused on building real-time conversational AI systems — voice agents, multi-agent pipelines, and LLM-powered solutions. Currently working at <strong>Innovation Incubator Advisory</strong>, leveraging AWS Bedrock, Aws Bedrock Agentcore, and cutting-edge speech models to ship production AI for telecom.</p>
  <div class="skill-tags">
    <span class="skill-tag">🤖 LLMs</span>
    <span class="skill-tag">☁️ AWS Bedrock</span>
    <span class="skill-tag">🔗 Multi-Agent Systems</span>
    <span class="skill-tag">🐍 Python</span>
    <span class="skill-tag">⚡ FastAPI</span>
    <span class="skill-tag">🧠 RAG</span>
    <span class="skill-tag">🔍 Prompt Engineering</span>
  </div>
  <div class="social-links">
    <a class="social-btn linkedin" href="https://www.linkedin.com/in/riyageorgek" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
    <a class="social-btn github"   href="https://github.com/riyageorgek" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    <a class="social-btn twitter"  href="https://twitter.com/riyageorgek" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
    <a class="social-btn credly"   href="https://www.credly.com/users/riyageorge" target="_blank"><i class="fas fa-medal"></i> Credly</a>
  </div>
</div>

---

#### 💼 Experience

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-role">AI Engineer</div>
    <div class="timeline-org">Innovation Incubator Advisory</div>
    <span class="timeline-date">Aug 2025 – Present</span>
  </div>
  <div class="timeline-item">
    <div class="timeline-role">Junior AI Engineer</div>
    <div class="timeline-org">Innovation Incubator Advisory</div>
    <span class="timeline-date">Aug 2024 – Jul 2025</span>
  </div>
  <div class="timeline-item">
    <div class="timeline-role">Artificial Intelligence Intern</div>
    <div class="timeline-org">Innovation Incubator Advisory</div>
    <span class="timeline-date">Feb 2024 – Jul 2024</span>
  </div>
</div>

---

#### 🎓 Education

<div class="edu-card">
  <div class="edu-degree">MSc Computer Science with Data Analytics</div>
  <div class="edu-inst">Digital University Kerala</div>
  <div class="edu-meta">2022 – 2024 <span class="edu-score">CGPA: 8.06</span></div>
</div>

<div class="edu-card">
  <div class="edu-degree">BSc. Mathematics</div>
  <div class="edu-inst">Alphonsa College Pala, MG University Kottayam</div>
  <div class="edu-meta">2018 – 2021 <span class="edu-score">CGPA: 8.73</span></div>
</div>

<div class="edu-card">
  <div class="edu-degree">Higher Secondary Education (Plus Two)</div>
  <div class="edu-inst">St. Sebastian's HSS, Kadanad</div>
  <div class="edu-meta">2016 – 2018 <span class="edu-score">94%</span></div>
</div>

---

#### 🏅 Certifications
> 📚 Showcase of diverse certifications in AI, development and personal growth.

<div class="cert-grid"></div>

<script>
  const certificates = [
    { title: "AWS Partner: Generative AI Essentials", url: "https://www.credly.com/badges/0730ebab-2173-4374-940b-5d52ed7086f3", icon: "fab fa-aws", provider: "AWS", date: "2026" },
    { title: "AWS Partner: Agentic AI Essentials", url: "https://www.credly.com/badges/1fcb3ac5-8586-4d58-9a25-fdb24834584d", icon: "fab fa-aws", provider: "AWS", date: "2026" },
    { title: "AWS Cloud Quest: Generative AI Practitioner", url: "https://www.credly.com/badges/1e272b70-83b4-4ea6-8013-ad62900dccdc", icon: "fab fa-aws", provider: "AWS", date: "2026" },
    { title: "Agentic Workflows", url: "https://www.sololearn.com/en/certificates/CC-UBHSAEZN", icon: "fas fa-code-branch", provider: "Sololearn", date: "March 2026" },
    { title: "Project Management Essentials", url: "https://drive.google.com/file/d/1QcG_0_XWjXJnnajUjYSEWKr5-EZCiRA2/view?usp=drive_link", icon: "fas fa-award", provider: "Innovation Incubator Advisory", date: "September 2025" },
    { title: "Vibe Coding", url: "https://www.sololearn.com/certificates/CC-2ZEIVTFH", icon: "fas fa-robot", provider: "Sololearn", date: "August 2025" },
    { title: "Generative AI in Practice", url: "https://www.sololearn.com/en/certificates/CC-X98QU8L5", icon: "fas fa-brain", provider: "Sololearn", date: "July 2025" },
    { title: "Prompt Engineering", url: "https://www.sololearn.com/en/certificates/CC-JO9M0AWF", icon: "fas fa-code", provider: "Sololearn", date: "July 2025" },
    { title: "Neo4j Fundamentals", url: "https://graphacademy.neo4j.com/c/891c5176-8d60-497e-824d-93217199bc70/", icon: "fas fa-project-diagram", provider: "Neo4j", date: "July 2024" },
    { title: "OpenCV Bootcamp", url: "https://courses.opencv.org/certificates/6dd2df8e0e2b4b37bcacc8c5f573a788", icon: "fas fa-camera", provider: "OpenCV University", date: "February 2024" },
    { title: "Certified Blockchain Associate", url: "https://verify.kba.ai/view/IIITMK-KBA-CBA-OL-31692", icon: "fas fa-link", provider: "KBA", date: "December 2023" },
    { title: "Decision Tree", url: "https://verify.mygreatlearning.com/verify/VUMDNAKN", icon: "fas fa-code-branch", provider: "Great Learning", date: "December 2023" },
    { title: "Introduction to SQL", url: "https://www.sololearn.com/certificates/CC-UEVKUMUC", icon: "fas fa-database", provider: "Sololearn", date: "December 2023" },
    { title: "KNN Algorithm", url: "https://verify.mygreatlearning.com/verify/ZUESYLNS", icon: "fas fa-cogs", provider: "Great Learning", date: "December 2023" },
    { title: "Linear Regression", url: "https://verify.mygreatlearning.com/verify/XJLPKKRB", icon: "fas fa-chart-line", provider: "Great Learning", date: "December 2023" },
    { title: "Object Localization with TensorFlow", url: "https://www.coursera.org/account/accomplishments/certificate/L52NMH9S5YST", icon: "fas fa-crosshairs", provider: "Coursera", date: "December 2023" },
    { title: "Overview of Data Visualization", url: "https://www.coursera.org/account/accomplishments/certificate/L52NMH9S5YST", icon: "fas fa-chart-pie", provider: "Coursera", date: "December 2023" },
    { title: "Python (Basic) Certificate", url: "https://www.hackerrank.com/certificates/7edf79af0693", icon: "fab fa-python", provider: "HackerRank", date: "December 2023" },
    { title: "SQL Intermediate", url: "https://www.sololearn.com/certificates/CC-IR6DBC6B", icon: "fas fa-database", provider: "Sololearn", date: "December 2023" },
    { title: "Support Vector Machines", url: "https://verify.mygreatlearning.com/verify/QUUHTBBA", icon: "fas fa-sliders-h", provider: "Great Learning", date: "December 2023" },
    { title: "Ethereum Fundamentals Program", url: "https://verify.kba.ai/view/IIITMK-KBA-EFP-OL-31418", icon: "fab fa-ethereum", provider: "KBA", date: "November 2023" },
    { title: "Blockchain Foundation Program", url: "https://verify.kba.ai/view/IIITMK-KBA-BFP-OL-31155", icon: "fas fa-cube", provider: "KBA", date: "October 2023" },
    { title: "Data Analysis using PySpark", url: "https://verify.mygreatlearning.com/verify/RRXKSIHU", icon: "fas fa-fire", provider: "Great Learning", date: "October 2023" },
    { title: "Graph Modeling with Neo4j", url: "https://skillsoft.digitalbadges.skillsoft.com/6625bfe7-b42d-4181-8d4e-4720091afea2#gs.6ju96t", icon: "fas fa-project-diagram", provider: "Skillsoft", date: "October 2023" },
    { title: "Introduction to Big Data and Hadoop", url: "https://verify.mygreatlearning.com/verify/HADSRHYE", icon: "fas fa-server", provider: "Great Learning", date: "October 2023" },
    { title: "Photography Competition Participation", url: "https://drive.google.com/file/d/1g3Q7dJOSi-39QeNyeq5raOFoVswW2SvF/view?usp=sharing", icon: "fas fa-camera-retro", provider: "Digital University Kerala", date: "September 2023" },
    { title: "ChatGPT for Data Analytics", url: "https://certificates.mavenanalytics.io/32d18d2c-c70b-4fa8-bd1d-0723e2854003", icon: "fas fa-brain", provider: "Maven Analytics", date: "August 2023" },
    { title: "Data Visualization With Power BI", url: "https://verify.mygreatlearning.com/verify/YORTMJHI", icon: "fas fa-chart-bar", provider: "Great Learning", date: "August 2023" },
    { title: "Data Visualization using Tableau", url: "https://verify.mygreatlearning.com/verify/HPIDILDO", icon: "fas fa-chart-area", provider: "Great Learning", date: "August 2023" },
    { title: "Data Visualization: Empowering Business with Effective Insights", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata_YSk44E4ZjCzCyYXQ4_1692007030550_completion_certificate.pdf", icon: "fas fa-lightbulb", provider: "Tata", date: "August 2023" },
    { title: "Flipkart GRiD 5.0 - Certificate of Participation", url: "https://unstop.com/certificate-preview/55c8e890-d1a8-4eeb-aba5-fcf9f3ee7bb3", icon: "fas fa-award", provider: "Unstop", date: "August 2023" },
    { title: "Generative AI Fundamentals", url: "https://www.cloudskillsboost.google/public_profiles/46ba3b88-4272-453e-a1e7-998a3e68b42c/badges/4638913", icon: "fas fa-microchip", provider: "Google Cloud Skills Boost", date: "August 2024" },
    { title: "Introduction to Deep Learning", url: "https://verify.mygreatlearning.com/verify/EGRKLXSV", icon: "fas fa-brain", provider: "Great Learning", date: "August 2024" },
    { title: "Data Analytics Virtual Experience Program", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Quantium/NkaC7knWtjSbi6aYv_Quantium_YSk44E4ZjCzCyYXQ4_1688730581209_completion_certificate.pdf", icon: "fas fa-laptop-code", provider: "Quantium", date: "July 2023" },
    { title: "Data Analytics and Visualization Virtual Experience", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_YSk44E4ZjCzCyYXQ4_1688726615494_completion_certificate.pdf", icon: "fas fa-chart-line", provider: "Accenture", date: "July 2023" },
    { title: "Introduction to CSS", url: "https://www.sololearn.com/certificates/CC-A91ZB9XP", icon: "fab fa-css3-alt", provider: "Sololearn", date: "July 2023" },
    { title: "Introduction to HTML", url: "https://www.sololearn.com/certificates/CC-D0SGUARH", icon: "fab fa-html5", provider: "Sololearn", date: "July 2023" },
    { title: "Introduction to JavaScript", url: "https://www.sololearn.com/certificates/CC-ZKJDWMAV", icon: "fab fa-js", provider: "Sololearn", date: "July 2023" },
    { title: "Intro to Natural Language Processing", url: "https://verify.mygreatlearning.com/EULYSWJK", icon: "fas fa-language", provider: "Great Learning", date: "June 2023" },
    { title: "Machine Learning", url: "https://www.sololearn.com/certificates/CT-HXJ37NJY", icon: "fas fa-robot", provider: "Sololearn", date: "June 2023" },
    { title: "Python Core", url: "https://www.sololearn.com/certificates/CT-M2JTXGYW", icon: "fab fa-python", provider: "Sololearn", date: "June 2023" },
    { title: "Python for Beginners", url: "https://www.sololearn.com/certificates/CT-ISSV0LZD", icon: "fab fa-python", provider: "Sololearn", date: "June 2023" },
    { title: "Unsupervised ML with K-Means", url: "https://verify.mygreatlearning.com/FTBILYTO", icon: "fas fa-project-diagram", provider: "Great Learning", date: "June 2023" },
    { title: "Data Analytics Consulting Virtual Internship", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_YSk44E4ZjCzCyYXQ4_1682220132382_completion_certificate.pdf", icon: "fas fa-briefcase", provider: "KPMG", date: "April 2023" },
    { title: "Introduction to Data Analytics", url: "https://coursera.org/verify/44PVMR7GE6M8", icon: "fas fa-database", provider: "Coursera", date: "April 2023" },
    { title: "IEEE Ideation Workshop", url: "https://drive.google.com/file/d/1fmbmKP72wWIK-rUVDtRLdF8lI_S-CYdw/view", icon: "fas fa-lightbulb", provider: "IEEE CASS", date: "September 2022" },
    { title: "Geometrical Charts - Merit", url: "https://drive.google.com/file/d/1lvbqk-jHVOWgN1CmK3Y0GaTSzbKLx0ab/view?usp=sharing", icon: "fas fa-shapes", provider: "Educational Sub-district", date: "October 2015" }
  ];

  const container = document.querySelector('.cert-grid');
  certificates.forEach(cert => {
    container.innerHTML += `
      <div class="cert-grid-item">
        <a href="${cert.url}" target="_blank" style="color: inherit; text-decoration: none;">
          <div class="cert-icon"><i class="${cert.icon}"></i></div>
          <div class="cert-caption">${cert.title}</div>
          <div class="cert-detail">${cert.provider} · ${cert.date}</div>
        </a>
      </div>
    `;
  });
</script>
