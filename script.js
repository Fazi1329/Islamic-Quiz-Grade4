/**
 * Surah Al-Fatiha: Meaning Challenge
 * Interactive Educational Quiz Application
 */

// ==========================================================
// 1. DATASET: The 7 Verses of Surah Al-Fatiha
// ==========================================================
const DEFAULT_VERSES = [
  {
    id: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001001.mp3",
    reference: "In the name of Allah, the Most Compassionate, the Most Merciful.",
    alternatives: [
      "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      "In the name of God, the Most Gracious, the Most Merciful.",
      "In the name of Allah, Most Gracious, Most Merciful.",
      "In the name of Allah, the Beneficent, the Merciful.",
      "In the name of God, the Lord of Mercy, the Giver of Mercy."
    ],
    components: [
      { name: "Name of Allah", keywords: ["name", "allah", "god"] },
      { name: "Most Compassionate / Gracious", keywords: ["compassionate", "gracious", "entirely merciful", "beneficent", "all-merciful", "lord of mercy"] },
      { name: "Most Merciful", keywords: ["merciful", "giver of mercy", "especially merciful"] }
    ],
    hint: "Start with 'In the name of Allah...' and include both divine attributes of mercy."
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Al-ḥamdu lillāhi Rabbil-ʿālamīn",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001002.mp3",
    reference: "All praise is due to Allah, Lord of all the worlds.",
    alternatives: [
      "Praise be to Allah, Lord of the worlds.",
      "All praise is for Allah, Lord of all the worlds.",
      "Praise belongs to God, Lord of the universe.",
      "Praise be to Allah, the Cherisher and Sustainer of the worlds.",
      "All praise is due to God, the Lord of all creation."
    ],
    components: [
      { name: "All praise is due to Allah", keywords: ["praise", "allah", "god"] },
      { name: "Lord of all the worlds", keywords: ["lord", "cherisher", "sustainer", "worlds", "universe", "creation"] }
    ],
    hint: "Mention that all praise belongs to Allah, followed by His title as Lord of the worlds or universe."
  },
  {
    id: 3,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Ar-Raḥmānir-Raḥīm",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001003.mp3",
    reference: "The Most Compassionate, the Most Merciful.",
    alternatives: [
      "The Entirely Merciful, the Especially Merciful.",
      "The Most Gracious, the Most Merciful.",
      "The Beneficent, the Merciful.",
      "The Lord of Mercy, the Giver of Mercy.",
      "Most Gracious, Most Merciful."
    ],
    components: [
      { name: "The Most Compassionate / Gracious", keywords: ["compassionate", "gracious", "entirely merciful", "beneficent", "lord of mercy", "all-merciful"] },
      { name: "The Most Merciful", keywords: ["merciful", "especially merciful", "giver of mercy"] }
    ],
    hint: "This verse mentions two beautiful qualities: boundless compassion and endless mercy."
  },
  {
    id: 4,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    transliteration: "Māliki Yawmid-Dīn",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001004.mp3",
    reference: "Master of the Day of Judgment.",
    alternatives: [
      "Sovereign of the Day of Recompense.",
      "Owner of the Day of Judgment.",
      "Lord of the Day of Judgment.",
      "Master of the Day of Judgement.",
      "King of the Day of Judgment.",
      "Ruler of the Day of Reckoning."
    ],
    components: [
      { name: "Master / Sovereign / Owner", keywords: ["master", "sovereign", "owner", "king", "lord", "ruler"] },
      { name: "Day of Judgment / Recompense", keywords: ["day of judgment", "day of judgement", "day of recompense", "day of reckoning", "day of doom"] }
    ],
    hint: "Identify who is the Master/Owner and which specific Day is being referred to (Judgment/Recompense)."
  },
  {
    id: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    transliteration: "Iyyāka naʿbudu wa-iyyāka nastaʿīn",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001005.mp3",
    reference: "You alone we worship, and You alone we ask for help.",
    alternatives: [
      "It is You we worship and You we ask for help.",
      "Thee alone we worship, and Thee alone we ask for help.",
      "You alone do we worship, and You alone do we ask for help.",
      "You alone we worship and You alone we seek help from.",
      "It is You we worship and Your aid we seek.",
      "You alone we worship and from You alone we ask for help."
    ],
    components: [
      { name: "You alone we worship", keywords: ["worship", "you alone", "it is you", "thee alone", "serve"] },
      { name: "You alone we ask for help", keywords: ["help", "aid", "ask for help", "seek help", "beseech"] }
    ],
    hint: "Make sure you include BOTH essential commitments: worshipping Him alone, and asking Him alone for help."
  },
  {
    id: 6,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdinaṣ-ṣirāṭal-mustaqīm",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001006.mp3",
    reference: "Guide us to the straight path.",
    alternatives: [
      "Guide us on the straight path.",
      "Show us the straight path.",
      "Guide us to the path that is straight.",
      "Direct us to the straight path.",
      "Keep us on the straight path."
    ],
    components: [
      { name: "Guide us / Show us", keywords: ["guide us", "show us", "direct us", "lead us"] },
      { name: "The straight path", keywords: ["straight path", "path that is straight", "right path"] }
    ],
    hint: "This is our primary dua in the Surah: asking for guidance to the straight path."
  },
  {
    id: 7,
    arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration: "Ṣirāṭal-ladhīna anʿamta ʿalayhim ghayril-maghḍūbi ʿalayhim wa-laḍ-ḍāllīn",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001007.mp3",
    reference: "The path of those upon whom You have bestowed Your favor, not of those who have earned Your anger, nor of those who have gone astray.",
    alternatives: [
      "The path of those You have blessed, not of those who have evoked Your anger, or of those who are astray.",
      "The path of those on whom You have bestowed favors, not the path of those who earn Your wrath, nor of those who go astray.",
      "The way of those on whom You have bestowed Your grace, not of those whose portion is wrath, and not of those who go astray.",
      "The path of those whom You have favored, not of those who earned anger, nor of those who are lost.",
      "The path of those You have bestowed favor upon, not those who incur anger, nor those who went astray."
    ],
    components: [
      { 
        name: "1. The path of those You blessed / favored", 
        keywords: ["path", "those", "bestowed", "favor", "blessed", "favors", "grace", "favored", "rewarded"] 
      },
      { 
        name: "2. Not those who earned anger / wrath", 
        keywords: ["not", "anger", "wrath", "earned", "incurred", "evoked", "displeasure"] 
      },
      { 
        name: "3. Nor those who have gone astray", 
        keywords: ["nor", "not", "astray", "gone astray", "lost", "erring"] 
      }
    ],
    hint: "Verse 7 has 3 essential parts: 1) Those blessed by Allah, 2) Not those who earned anger, and 3) Nor those who have gone astray."
  }
];

// ==========================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================
class QuizState {
  constructor() {
    this.loadSettings();
    this.currentVerseIndex = 0;
    this.score = 0;
    this.studentAnswers = Array(7).fill("");
    this.attemptsPerVerse = Array(7).fill(0);
    this.isCompleted = false;
    this.soundEnabled = localStorage.getItem("soundEnabled") !== "false";
  }

  loadSettings() {
    const savedVerses = localStorage.getItem("customVerses");
    if (savedVerses) {
      try {
        this.verses = JSON.parse(savedVerses);
      } catch (e) {
        this.verses = JSON.parse(JSON.stringify(DEFAULT_VERSES));
      }
    } else {
      this.verses = JSON.parse(JSON.stringify(DEFAULT_VERSES));
    }

    this.allowRevealHint = localStorage.getItem("setting_allow_reveal") === "true";
    this.strictMode = localStorage.getItem("setting_strict_mode") === "true";
  }

  saveCustomVerses() {
    localStorage.setItem("customVerses", JSON.stringify(this.verses));
  }

  resetProgress() {
    this.currentVerseIndex = 0;
    this.score = 0;
    this.studentAnswers = Array(7).fill("");
    this.attemptsPerVerse = Array(7).fill(0);
    this.isCompleted = false;
  }
}

const quiz = new QuizState();

// ==========================================================
// 3. SYNTHESIZED SOUND SYSTEM (Web Audio API)
// 100% Offline Reliable Sound Effects
// ==========================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playCorrect() {
    if (!quiz.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Pleasant arpeggio: C5 (523.25), E5 (659.25), G5 (783.99), C6 (1046.50)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + index * 0.08);

      gain.gain.setValueAtTime(0, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.35);
    });
  }

  playRetry() {
    if (!quiz.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(260, now + 0.2);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  playVictory() {
    if (!quiz.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Celebratory triumph chords
    const chord = [523.25, 659.25, 783.99, 1046.50];
    chord.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    });
  }
}

const sfx = new SoundFX();

// Recitation Audio Player
let activeAudio = null;
function playVerseAudio(url) {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  const listenBtn = document.getElementById("listen-verse-btn");
  listenBtn.classList.add("playing");
  listenBtn.querySelector(".audio-label").textContent = "Playing...";

  activeAudio = new Audio(url);
  activeAudio.onended = () => {
    listenBtn.classList.remove("playing");
    listenBtn.querySelector(".audio-label").textContent = "Listen";
  };
  activeAudio.onerror = () => {
    listenBtn.classList.remove("playing");
    listenBtn.querySelector(".audio-label").textContent = "Listen";
  };
  activeAudio.play().catch(() => {
    listenBtn.classList.remove("playing");
    listenBtn.querySelector(".audio-label").textContent = "Listen";
  });
}

// ==========================================================
// 4. INTELLIGENT ANSWER EVALUATION ENGINE
// ==========================================================
class MeaningEvaluator {
  /**
   * Cleans text: lowercases, strips punctuation, normalizes spacing & synonyms
   */
  static normalize(text) {
    if (!text) return "";
    return text
      .toLowerCase()
      .replace(/[\’\'\`\".,\/#!$%\^&\*;:{}=\-_~()?—]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  /**
   * Levenshtein distance for fuzzy word checking
   */
  static levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  /**
   * Checks if target word or close fuzzy match is in input text
   */
  static containsWordFuzzy(inputWords, targetWord) {
    targetWord = targetWord.toLowerCase();
    for (const word of inputWords) {
      if (word === targetWord) return true;
      // Allow 1 typo for words of length 5-7, 2 typos for longer words
      const maxDistance = targetWord.length >= 7 ? 2 : targetWord.length >= 5 ? 1 : 0;
      if (Math.abs(word.length - targetWord.length) <= maxDistance) {
        if (this.levenshtein(word, targetWord) <= maxDistance) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Checks similarity ratio between two sentences
   */
  static sentenceSimilarity(s1, s2) {
    const w1 = this.normalize(s1).split(" ").filter(Boolean);
    const w2 = this.normalize(s2).split(" ").filter(Boolean);
    if (!w1.length || !w2.length) return 0;

    let matches = 0;
    for (const w of w1) {
      if (this.containsWordFuzzy(w2, w)) {
        matches++;
      }
    }
    return matches / Math.max(w1.length, w2.length);
  }

  /**
   * Evaluates student's answer for a given verse
   * Returns: { isCorrect, message, title, type, missingParts: [] }
   */
  static evaluate(studentText, verse) {
    const normalizedInput = this.normalize(studentText);
    const words = normalizedInput.split(" ").filter(Boolean);

    // Rule 1: Minimum content requirement
    if (words.length < 3) {
      return {
        isCorrect: false,
        title: "Answer Too Short",
        type: "error",
        message: "Please type the complete meaning of the verse.",
        missingParts: []
      };
    }

    // Rule 2: Check match against reference or any teacher alternative
    const candidateTranslations = [verse.reference, ...(verse.alternatives || [])];
    for (const translation of candidateTranslations) {
      const normTrans = this.normalize(translation);
      if (normalizedInput === normTrans) {
        return {
          isCorrect: true,
          title: "Excellent! You got it right!",
          type: "correct",
          message: "MashaAllah! Your answer matches the approved translation perfectly.",
          missingParts: []
        };
      }
      
      const similarity = this.sentenceSimilarity(studentText, translation);
      if (similarity >= 0.85) {
        return {
          isCorrect: true,
          title: "Excellent! You got it right!",
          type: "correct",
          message: "Great job! You clearly understood and expressed the full meaning of this verse.",
          missingParts: []
        };
      }
    }

    // Rule 3: Component-based evaluation (Essential meaning preservation)
    const missingComponents = [];
    const detectedComponents = [];

    if (verse.components && verse.components.length > 0) {
      for (const component of verse.components) {
        let found = false;
        for (const kw of component.keywords) {
          if (kw.includes(" ")) {
            // phrase check
            if (normalizedInput.includes(kw)) {
              found = true;
              break;
            }
          } else {
            // word fuzzy check
            if (this.containsWordFuzzy(words, kw)) {
              found = true;
              break;
            }
          }
        }

        if (found) {
          detectedComponents.push(component.name);
        } else {
          missingComponents.push(component.name);
        }
      }
    }

    // Special thorough validation for Verse 7
    if (verse.id === 7) {
      if (missingComponents.length === 0) {
        return {
          isCorrect: true,
          title: "Excellent! You got it right!",
          type: "correct",
          message: "MashaAllah! You included all three essential parts of Verse 7 accurately!",
          missingParts: []
        };
      } else {
        return {
          isCorrect: false,
          title: "Meaning Needs Correction",
          type: "retry",
          message: "Verse 7 requires all three essential parts to be complete. Check which part(s) need attention below and try again:",
          missingParts: missingComponents
        };
      }
    }

    // For other verses: If all components detected, accept!
    if (missingComponents.length === 0) {
      return {
        isCorrect: true,
        title: "Excellent! You got it right!",
        type: "correct",
        message: "Well done! You preserved the complete essential meaning of the verse.",
        missingParts: []
      };
    }

    // Otherwise constructive feedback
    return {
      isCorrect: false,
      title: "Meaning Needs Correction",
      type: "retry",
      message: "Your answer is almost there, but the meaning needs adjustment. Please review and try again.",
      missingParts: missingComponents
    };
  }
}

// ==========================================================
// 5. UI CONTROLLER & EVENT LISTENERS
// ==========================================================
const DOM = {
  // Screens
  welcomeScreen: document.getElementById("welcome-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  completionScreen: document.getElementById("completion-screen"),
  reviewScreen: document.getElementById("review-screen"),

  // Buttons
  startBtn: document.getElementById("start-btn"),
  submitBtn: document.getElementById("submit-btn"),
  nextVerseBtn: document.getElementById("next-verse-btn"),
  resetBtn: document.getElementById("reset-btn"),
  reviewBtn: document.getElementById("review-btn"),
  retryBtn: document.getElementById("retry-btn"),
  reviewBackBtn: document.getElementById("review-back-btn"),
  reviewPlayAgainBtn: document.getElementById("review-play-again-btn"),
  listenVerseBtn: document.getElementById("listen-verse-btn"),
  soundToggleBtn: document.getElementById("sound-toggle-btn"),
  soundIcon: document.getElementById("sound-icon"),
  teacherModeBtn: document.getElementById("teacher-mode-btn"),
  clearInputBtn: document.getElementById("clear-input-btn"),

  // Quiz dynamic fields
  verseStepBadge: document.getElementById("verse-step-badge"),
  scoreDisplay: document.getElementById("score-display"),
  progressFill: document.getElementById("progress-fill"),
  progressStepsRow: document.getElementById("progress-steps-row"),
  currentVerseTag: document.getElementById("current-verse-tag"),
  arabicVerse: document.getElementById("arabic-verse"),
  verseTransliteration: document.getElementById("verse-transliteration"),
  answerInput: document.getElementById("answer-input"),
  wordCounter: document.getElementById("word-counter"),
  
  // Feedback
  feedbackContainer: document.getElementById("feedback-container"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackMessage: document.getElementById("feedback-message"),
  missingClausesBox: document.getElementById("missing-clauses-box"),

  // Review
  reviewItemsContainer: document.getElementById("review-items-container"),

  // Modals
  teacherModal: document.getElementById("teacher-modal"),
  closeTeacherModal: document.getElementById("close-teacher-modal"),
  saveTeacherBtn: document.getElementById("save-teacher-btn"),
  resetTranslationsBtn: document.getElementById("reset-translations-btn"),
  teacherVersesTabs: document.getElementById("teacher-verses-tabs"),
  teacherVerseEditor: document.getElementById("teacher-verse-editor"),
  settingAllowReveal: document.getElementById("setting-allow-reveal"),
  settingStrictMode: document.getElementById("setting-strict-mode"),

  resetModal: document.getElementById("reset-modal"),
  closeResetModal: document.getElementById("close-reset-modal"),
  confirmResetBtn: document.getElementById("confirm-reset-btn"),
  cancelResetBtn: document.getElementById("cancel-reset-btn")
};

// Switch active view
function showScreen(screenEl) {
  [DOM.welcomeScreen, DOM.quizScreen, DOM.completionScreen, DOM.reviewScreen].forEach((el) => {
    el.classList.remove("active");
  });
  screenEl.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render Progress step dots (1 to 7)
function renderProgressSteps() {
  DOM.progressStepsRow.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const node = document.createElement("div");
    node.className = "step-node";
    node.textContent = i + 1;
    if (i < quiz.score) {
      node.classList.add("completed");
      node.innerHTML = "✓";
    } else if (i === quiz.currentVerseIndex) {
      node.classList.add("current");
    }
    DOM.progressStepsRow.appendChild(node);
  }
}

// Update Verse Display
function updateVerseUI() {
  const v = quiz.verses[quiz.currentVerseIndex];
  DOM.verseStepBadge.textContent = `Verse ${quiz.currentVerseIndex + 1} of 7`;
  DOM.currentVerseTag.textContent = `Verse ${quiz.currentVerseIndex + 1}`;
  DOM.scoreDisplay.innerHTML = `Completed: <strong>${quiz.score}</strong> / 7`;
  
  const percent = ((quiz.currentVerseIndex) / 7) * 100;
  DOM.progressFill.style.width = `${Math.max(percent, 14.28)}%`;

  renderProgressSteps();

  DOM.arabicVerse.textContent = v.arabic;
  DOM.verseTransliteration.textContent = v.transliteration;
  
  DOM.answerInput.value = "";
  DOM.answerInput.disabled = false;
  DOM.answerInput.className = "answer-textarea";
  DOM.wordCounter.textContent = "0 words";

  // Reset feedback
  DOM.feedbackContainer.classList.add("hidden");
  DOM.feedbackContainer.className = "feedback-container hidden";
  DOM.missingClausesBox.classList.add("hidden");
  DOM.missingClausesBox.innerHTML = "";

  // Reset buttons
  DOM.submitBtn.classList.remove("hidden");
  DOM.nextVerseBtn.classList.add("hidden");

  DOM.answerInput.focus();
}

// Check Answer
function handleSubmitAnswer() {
  const currentVerse = quiz.verses[quiz.currentVerseIndex];
  const inputVal = DOM.answerInput.value.trim();

  if (!inputVal) {
    showFeedback("Please Type an Answer", "Type the complete English meaning before submitting.", "error", "⚠️");
    DOM.answerInput.focus();
    return;
  }

  quiz.attemptsPerVerse[quiz.currentVerseIndex]++;
  const result = MeaningEvaluator.evaluate(inputVal, currentVerse);

  if (result.isCorrect) {
    // Record answer
    quiz.studentAnswers[quiz.currentVerseIndex] = inputVal;
    quiz.score = Math.max(quiz.score, quiz.currentVerseIndex + 1);

    // Audio & UI
    sfx.playCorrect();
    DOM.answerInput.classList.remove("input-error");
    DOM.answerInput.classList.add("input-correct");
    DOM.answerInput.disabled = true;

    showFeedback(result.title, result.message, "correct", "🎉");

    DOM.submitBtn.classList.add("hidden");
    DOM.nextVerseBtn.classList.remove("hidden");
    DOM.nextVerseBtn.focus();

    // Update progress steps immediately
    renderProgressSteps();
    DOM.scoreDisplay.innerHTML = `Completed: <strong>${quiz.score}</strong> / 7`;

    // If verse 7 is finished, button label reflects completion
    if (quiz.currentVerseIndex === 6) {
      DOM.nextVerseBtn.innerHTML = `<span>See Achievement 🎉</span><span class="arrow-icon">→</span>`;
    } else {
      DOM.nextVerseBtn.innerHTML = `<span>Next Verse</span><span class="arrow-icon">→</span>`;
    }

  } else {
    // Retry state
    sfx.playRetry();
    DOM.answerInput.classList.remove("input-correct");
    DOM.answerInput.classList.add("input-error");

    let extraMsg = result.message;
    if (quiz.allowRevealHint && quiz.attemptsPerVerse[quiz.currentVerseIndex] >= 3) {
      extraMsg += ` Hint: "${currentVerse.hint}"`;
    }

    showFeedback(result.title, extraMsg, result.type, "💡", result.missingParts);
    DOM.answerInput.focus();
  }
}

// Feedback Helper
function showFeedback(title, message, type, icon, missingParts = []) {
  DOM.feedbackContainer.className = `feedback-container ${type}`;
  DOM.feedbackIcon.textContent = icon;
  DOM.feedbackTitle.textContent = title;
  DOM.feedbackMessage.textContent = message;

  if (missingParts && missingParts.length > 0) {
    DOM.missingClausesBox.classList.remove("hidden");
    DOM.missingClausesBox.innerHTML = `<strong>Missing or incomplete part(s):</strong><br/>` +
      missingParts.map(p => `<span class="missing-clause-tag">⚠️ ${p}</span>`).join(" ");
  } else {
    DOM.missingClausesBox.classList.add("hidden");
    DOM.missingClausesBox.innerHTML = "";
  }

  DOM.feedbackContainer.classList.remove("hidden");
}

// Advance to Next Verse or Victory
function handleNextVerse() {
  if (quiz.currentVerseIndex < 6) {
    quiz.currentVerseIndex++;
    updateVerseUI();
  } else {
    // Finished all 7 verses!
    quiz.isCompleted = true;
    sfx.playVictory();
    showCompletionScreen();
  }
}

// Celebration / Final Screen
function showCompletionScreen() {
  showScreen(DOM.completionScreen);
  triggerConfetti();
}

// Confetti Particle System
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;

  const particles = [];
  const colors = ["#10b981", "#059669", "#f59e0b", "#fbbf24", "#ffffff", "#d97706", "#34d399"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.4 + (Math.random() - 0.5) * 50,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      gravity: 0.35,
      opacity: 1
    });
  }

  let animationFrame;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeCount = 0;

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      if (p.y > canvas.height * 0.7) {
        p.opacity -= 0.015;
      }

      if (p.opacity > 0 && p.y < canvas.height + 20) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    }

    if (activeCount > 0) {
      animationFrame = requestAnimationFrame(updateConfetti);
    }
  }

  cancelAnimationFrame(animationFrame);
  updateConfetti();
}

// Review Answers Screen
function showReviewScreen() {
  DOM.reviewItemsContainer.innerHTML = "";

  quiz.verses.forEach((verse, idx) => {
    const studentAns = quiz.studentAnswers[idx] || "(Not submitted)";
    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-verse-header">
        <span class="badge-pill">Verse ${verse.id} of 7</span>
        <span style="font-weight: 600; color: #047857;">Correctly Verified ✓</span>
      </div>
      <div class="review-ayah-arabic">${verse.arabic}</div>
      <div class="review-comparison">
        <div class="review-box student-answer-box">
          <div class="review-box-title">Your Typed Meaning</div>
          <p>${escapeHTML(studentAns)}</p>
        </div>
        <div class="review-box reference-answer-box">
          <div class="review-box-title">Approved Reference Meaning</div>
          <p>${verse.reference}</p>
        </div>
      </div>
    `;
    DOM.reviewItemsContainer.appendChild(item);
  });

  showScreen(DOM.reviewScreen);
}

function escapeHTML(str) {
  const p = document.createElement("p");
  p.textContent = str;
  return p.innerHTML;
}

// ==========================================================
// 6. TEACHER SETTINGS MODAL & CUSTOM TRANSLATIONS
// ==========================================================
let activeTeacherVerseTab = 0;

function renderTeacherModal() {
  DOM.settingAllowReveal.checked = quiz.allowRevealHint;
  DOM.settingStrictMode.checked = quiz.strictMode;

  // Tabs for Verse 1 to 7
  DOM.teacherVersesTabs.innerHTML = "";
  quiz.verses.forEach((v, idx) => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${idx === activeTeacherVerseTab ? "active" : ""}`;
    btn.textContent = `Verse ${v.id}`;
    btn.addEventListener("click", () => {
      activeTeacherVerseTab = idx;
      renderTeacherModal();
    });
    DOM.teacherVersesTabs.appendChild(btn);
  });

  // Editor for selected verse
  const curV = quiz.verses[activeTeacherVerseTab];
  DOM.teacherVerseEditor.innerHTML = `
    <div class="editor-field-group">
      <label>Arabic Verse (Reference):</label>
      <div style="font-family: var(--font-arabic); font-size: 1.5rem; color: #064e3b; margin-bottom: 8px;">
        ${curV.arabic}
      </div>
    </div>
    <div class="editor-field-group">
      <label>Primary Reference Translation:</label>
      <input type="text" id="edit-reference-input" class="editor-input" value="${escapeHTML(curV.reference)}" />
    </div>
    <div class="editor-field-group">
      <label>Additional Approved Alternatives (one per line):</label>
      <textarea id="edit-alternatives-input" class="editor-input" rows="4">${(curV.alternatives || []).join("\n")}</textarea>
    </div>
    <div class="editor-field-group">
      <label>Student Hint (shown if struggling):</label>
      <input type="text" id="edit-hint-input" class="editor-input" value="${escapeHTML(curV.hint || "")}" />
    </div>
  `;
}

function saveTeacherSettings() {
  const curV = quiz.verses[activeTeacherVerseTab];
  const refInput = document.getElementById("edit-reference-input");
  const altInput = document.getElementById("edit-alternatives-input");
  const hintInput = document.getElementById("edit-hint-input");

  if (refInput && altInput) {
    curV.reference = refInput.value.trim();
    curV.alternatives = altInput.value
      .split("\n")
      .map(s => s.trim())
      .filter(Boolean);
    if (hintInput) curV.hint = hintInput.value.trim();
  }

  quiz.allowRevealHint = DOM.settingAllowReveal.checked;
  quiz.strictMode = DOM.settingStrictMode.checked;

  localStorage.setItem("setting_allow_reveal", quiz.allowRevealHint);
  localStorage.setItem("setting_strict_mode", quiz.strictMode);
  quiz.saveCustomVerses();

  DOM.teacherModal.classList.add("hidden");
  alert("Teacher settings and translations saved successfully!");
}

function resetTeacherDefaults() {
  if (confirm("Reset all translations back to standard defaults?")) {
    quiz.verses = JSON.parse(JSON.stringify(DEFAULT_VERSES));
    quiz.saveCustomVerses();
    renderTeacherModal();
  }
}

// ==========================================================
// 7. INITIALIZATION & ATTACH EVENTS
// ==========================================================
function initEvents() {
  // Start button
  DOM.startBtn.addEventListener("click", () => {
    sfx.init();
    showScreen(DOM.quizScreen);
    updateVerseUI();
  });

  // Submit Answer button
  DOM.submitBtn.addEventListener("click", handleSubmitAnswer);

  // Next Verse button
  DOM.nextVerseBtn.addEventListener("click", handleNextVerse);

  // Clear Input
  DOM.clearInputBtn.addEventListener("click", () => {
    DOM.answerInput.value = "";
    DOM.wordCounter.textContent = "0 words";
    DOM.answerInput.focus();
  });

  // Keyboard support: Enter (or Ctrl+Enter) to submit
  DOM.answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!DOM.submitBtn.classList.contains("hidden")) {
        handleSubmitAnswer();
      } else if (!DOM.nextVerseBtn.classList.contains("hidden")) {
        handleNextVerse();
      }
    }
  });

  // Word counter updater
  DOM.answerInput.addEventListener("input", () => {
    const count = DOM.answerInput.value.trim().split(/\s+/).filter(Boolean).length;
    DOM.wordCounter.textContent = `${count} ${count === 1 ? 'word' : 'words'}`;
  });

  // Listen Recitation
  DOM.listenVerseBtn.addEventListener("click", () => {
    const v = quiz.verses[quiz.currentVerseIndex];
    if (v.audioUrl) {
      playVerseAudio(v.audioUrl);
    }
  });

  // Sound Toggle
  function updateSoundIcon() {
    DOM.soundIcon.textContent = quiz.soundEnabled ? "🔊" : "🔇";
    DOM.soundToggleBtn.title = quiz.soundEnabled ? "Sound: On" : "Sound: Muted";
  }
  updateSoundIcon();

  DOM.soundToggleBtn.addEventListener("click", () => {
    quiz.soundEnabled = !quiz.soundEnabled;
    localStorage.setItem("soundEnabled", quiz.soundEnabled);
    updateSoundIcon();
    if (quiz.soundEnabled) sfx.playCorrect();
  });

  // Reset Modal
  DOM.resetBtn.addEventListener("click", () => {
    DOM.resetModal.classList.remove("hidden");
  });
  DOM.closeResetModal.addEventListener("click", () => {
    DOM.resetModal.classList.add("hidden");
  });
  DOM.cancelResetBtn.addEventListener("click", () => {
    DOM.resetModal.classList.add("hidden");
  });
  DOM.confirmResetBtn.addEventListener("click", () => {
    quiz.resetProgress();
    DOM.resetModal.classList.add("hidden");
    showScreen(DOM.quizScreen);
    updateVerseUI();
  });

  // Completion Screen buttons
  DOM.reviewBtn.addEventListener("click", showReviewScreen);
  DOM.retryBtn.addEventListener("click", () => {
    quiz.resetProgress();
    showScreen(DOM.quizScreen);
    updateVerseUI();
  });

  // Review Screen buttons
  DOM.reviewBackBtn.addEventListener("click", () => {
    showScreen(DOM.completionScreen);
  });
  DOM.reviewPlayAgainBtn.addEventListener("click", () => {
    quiz.resetProgress();
    showScreen(DOM.quizScreen);
    updateVerseUI();
  });

  // Teacher Settings Modal
  DOM.teacherModeBtn.addEventListener("click", () => {
    renderTeacherModal();
    DOM.teacherModal.classList.remove("hidden");
  });
  DOM.closeTeacherModal.addEventListener("click", () => {
    DOM.teacherModal.classList.add("hidden");
  });
  DOM.saveTeacherBtn.addEventListener("click", saveTeacherSettings);
  DOM.resetTranslationsBtn.addEventListener("click", resetTeacherDefaults);

  // Close modals on backdrop click
  [DOM.teacherModal, DOM.resetModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
}

// Start
document.addEventListener("DOMContentLoaded", () => {
  initEvents();
});
