import { useState, useEffect, useCallback } from 'react';
import { curriculum, allConcepts, isChapterUnlocked } from './curriculum.js';

// ─── Utilitaires ───────────────────────────────────────────────────────────
function normalize(str) {
  return str
    .split('\n')
    .map(l => l.trim().replace(/\s+/g, ' '))
    .filter(l => l.length > 0)
    .join('\n')
    .toLowerCase();
}

function loadProgress() {
  try {
    const raw = localStorage.getItem('c-learning-v2');
    if (raw) {
      const data = JSON.parse(raw);
      return new Set(data);
    }
  } catch {}
  return new Set();
}

function saveProgress(set) {
  localStorage.setItem('c-learning-v2', JSON.stringify([...set]));
}

function loadTheme() {
  return localStorage.getItem('c-learning-dark') === '1';
}

// ─── Confettis ─────────────────────────────────────────────────────────────
function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.8,
    color: ['#ff453a','#30d158','#0071e3','#ff9f0a','#af52de','#5856d6'][i % 6],
  }));
  return (
    <div className="confetti-overlay" aria-hidden="true">
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, background: p.color }}
        />
      ))}
    </div>
  );
}

// ─── Barre de progression globale ──────────────────────────────────────────
function GlobalProgress({ completed }) {
  const total = allConcepts.length;
  const pct = Math.round((completed / total) * 100);
  return (
    <div className="global-progress">
      <span>{completed}/{total} concepts maîtrisés</span>
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span>{pct}%</span>
    </div>
  );
}

// ─── Écran d'accueil ────────────────────────────────────────────────────────
function HomeScreen({ onStart, onQuiz, completedIds, setCompletedIds, darkMode, toggleDark }) {
  const total = allConcepts.length;
  const done = completedIds.size;
  
  function handleExport() {
    const data = JSON.stringify([...completedIds]);
    navigator.clipboard.writeText(data).then(() => alert('Code de sauvegarde copié dans le presse-papier !'));
  }

  function handleImport() {
    const code = prompt('Colle ici ton code de sauvegarde :');
    if (code) {
      try {
        const parsed = JSON.parse(code);
        setCompletedIds(new Set(parsed));
        saveProgress(new Set(parsed));
        alert('Progression restaurée avec succès !');
      } catch {
        alert('Code invalide.');
      }
    }
  }

  return (
    <div className="screen home-screen">
      <button className="theme-toggle" onClick={toggleDark} title="Changer le thème">
        {darkMode ? '☀️' : '🌙'}
      </button>
      <div className="home-hero">
        <div className="home-icon">⚙️</div>
        <h1>Maîtrise du Langage C</h1>
        <p className="home-subtitle">
          Du débutant absolu au niveau recherche/doctorat.<br />
          <strong>{total} concepts</strong> • <strong>6 niveaux</strong> • <strong>70 chapitres</strong>
        </p>
        {done > 0 && <GlobalProgress completed={done} />}
      </div>
      <div className="home-actions">
        <button className="btn btn-primary" onClick={onStart}>
          {done === 0 ? '🚀 Commencer' : '📚 Continuer l\'apprentissage'}
        </button>
        {done > 0 && (
          <button className="btn btn-secondary" onClick={onQuiz}>
            🎮 Mode Quiz ({done} concept{done > 1 ? 's' : ''} disponible{done > 1 ? 's' : ''})
          </button>
        )}
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <button className="btn btn-ghost" onClick={handleExport} style={{ flex: 1 }}>📤 Exporter code</button>
          <button className="btn btn-ghost" onClick={handleImport} style={{ flex: 1 }}>📥 Importer code</button>
        </div>
      </div>
    </div>
  );
}

// ─── Écran des niveaux ──────────────────────────────────────────────────────
function LevelsScreen({ completedIds, onSelectLevel, onBack }) {
  return (
    <div className="screen levels-screen">
      <button className="back-btn" onClick={onBack}>← Accueil</button>
      <h2>Choisir un niveau</h2>
      <p className="screen-subtitle">Chaque niveau se déverrouille en terminant le précédent</p>
      <div className="levels-grid">
        {curriculum.map((level, li) => {
          const totalConcepts = level.chapters.reduce((s, ch) => s + ch.concepts.length, 0);
          const doneConcepts = level.chapters.reduce(
            (s, ch) => s + ch.concepts.filter(c => completedIds.has(c.id)).length, 0
          );
          const pct = Math.round((doneConcepts / totalConcepts) * 100);
          const unlocked = isChapterUnlocked(li, 0, completedIds);
          return (
            <button
              key={level.id}
              className={`level-card ${unlocked ? 'unlocked' : 'locked'}`}
              style={{ '--level-color': level.color }}
              onClick={() => unlocked && onSelectLevel(li)}
              disabled={!unlocked}
            >
              <span className="level-icon">{level.icon}</span>
              <span className="level-name">{level.title}</span>
              <div className="level-chapters-count">
                {level.chapters.length} chapitre{level.chapters.length > 1 ? 's' : ''}
              </div>
              <div className="level-progress-track">
                <div className="level-progress-fill" style={{ width: `${pct}%`, background: level.color }} />
              </div>
              <span className="level-pct">{pct}%</span>
              {!unlocked && <span className="lock-icon">🔒</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Écran des chapitres ─────────────────────────────────────────────────────
function ChaptersScreen({ levelIdx, completedIds, onSelectChapter, onBack }) {
  const level = curriculum[levelIdx];
  return (
    <div className="screen chapters-screen">
      <button className="back-btn" onClick={onBack}>← Niveaux</button>
      <div className="level-header" style={{ '--level-color': level.color }}>
        <span className="level-icon-lg">{level.icon}</span>
        <h2>{level.title}</h2>
      </div>
      <div className="chapters-list">
        {level.chapters.map((chapter, ci) => {
          const done = chapter.concepts.filter(c => completedIds.has(c.id)).length;
          const total = chapter.concepts.length;
          const unlocked = isChapterUnlocked(levelIdx, ci, completedIds);
          const pct = Math.round((done / total) * 100);
          const completed = done === total;
          return (
            <button
              key={chapter.id}
              className={`chapter-card ${unlocked ? 'unlocked' : 'locked'} ${completed ? 'completed' : ''}`}
              style={{ '--level-color': level.color }}
              onClick={() => unlocked && onSelectChapter(ci)}
              disabled={!unlocked}
            >
              <span className="chapter-icon">{chapter.icon || '📖'}</span>
              <div className="chapter-info">
                <span className="chapter-title">{chapter.title}</span>
                <div className="chapter-progress-track">
                  <div className="chapter-progress-fill" style={{ width: `${pct}%`, background: level.color }} />
                </div>
                <span className="chapter-count">{done}/{total} concepts</span>
              </div>
              {completed && <span className="check-icon">✅</span>}
              {!unlocked && <span className="lock-icon">🔒</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Apprentissage d'un chapitre ─────────────────────────────────────────────
const PHASE_READ    = 'read';
const PHASE_COPY    = 'copy';
const PHASE_MEMORY  = 'memory';
const PHASE_EVAL    = 'eval';
const PHASE_DONE    = 'done';

function LearnScreen({ levelIdx, chapterIdx, completedIds, onComplete, onBack }) {
  const level   = curriculum[levelIdx];
  const chapter = level.chapters[chapterIdx];
  const concepts = chapter.concepts;

  // Trouver le premier concept non maîtrisé
  const firstUnmastered = concepts.findIndex(c => !completedIds.has(c.id));
  const [conceptIdx, setConceptIdx] = useState(firstUnmastered >= 0 ? firstUnmastered : 0);
  const [phase, setPhase] = useState(PHASE_READ);
  const [evalQueue, setEvalQueue] = useState([]);
  const [copyCount, setCopyCount] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'ok' | 'error'
  const [showConfetti, setShowConfetti] = useState(false);
  const [hint, setHint] = useState(false);

  const isEval = phase === PHASE_EVAL;
  const currentConcept = isEval ? concepts[evalQueue[0]] : concepts[conceptIdx];
  const alreadyDone = completedIds.has(currentConcept.id);

  function reset() {
    setInput('');
    setFeedback(null);
    setHint(false);
  }

  function check() {
    if (normalize(input) === normalize(currentConcept.code)) {
      setFeedback('ok');
      
      if (isEval) {
        // En mode Eval, on passe au suivant dans la file
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          const nextQueue = evalQueue.slice(1);
          if (nextQueue.length > 0) {
            setEvalQueue(nextQueue);
            reset();
          } else {
            // L'éval est finie, on passe au concept d'apprentissage suivant ou on a fini le chapitre
            const nextIdx = conceptIdx + 1;
            if (nextIdx < concepts.length) {
              setConceptIdx(nextIdx);
              setPhase(PHASE_READ);
              setCopyCount(0);
              reset();
            } else {
              setPhase(PHASE_DONE);
            }
          }
        }, 800);
        return;
      }

      // Apprentissage normal
      if (phase === PHASE_COPY) {
        const next = copyCount + 1;
        setCopyCount(next);
        if (next >= 3) {
          setTimeout(() => { setPhase(PHASE_MEMORY); reset(); }, 700);
        } else {
          setTimeout(() => reset(), 700);
        }
      } else if (phase === PHASE_MEMORY) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          onComplete(currentConcept.id);
          
          const nextIdx = conceptIdx + 1;
          
          // Faut-il déclencher une mini-évaluation ? (tous les 3 concepts, ou fin du chapitre)
          // Mais seulement si on a vu au moins un concept non maîtrisé dans ce bloc.
          // Pour simplifier : on déclenche une éval si conceptIdx + 1 est un multiple de 3, ou si c'est la fin du chapitre
          // et on sélectionne les concepts du bloc actuel (jusqu'à 3)
          const shouldEval = (nextIdx % 3 === 0) || nextIdx === concepts.length;
          
          if (shouldEval) {
            const startIdx = Math.floor(conceptIdx / 3) * 3;
            const queue = [];
            for (let i = startIdx; i <= conceptIdx; i++) {
              queue.push(i);
            }
            setPhase(PHASE_EVAL);
            setEvalQueue(queue);
            reset();
          } else if (nextIdx < concepts.length) {
            setConceptIdx(nextIdx);
            setPhase(PHASE_READ);
            setCopyCount(0);
            reset();
          } else {
            setPhase(PHASE_DONE);
          }
        }, 1200);
      }
    } else {
      setFeedback('error');
      setTimeout(() => setFeedback(null), 800);
    }
  }

  function handleKey(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (phase === PHASE_COPY || phase === PHASE_MEMORY || phase === PHASE_EVAL) check();
    }
  }

  if (phase === PHASE_DONE) {
    return (
      <div className="screen done-screen">
        <div className="done-emoji">🏆</div>
        <h2>Chapitre terminé !</h2>
        <p><strong>{chapter.title}</strong> — tous les concepts maîtrisés.</p>
        <button className="btn btn-primary" onClick={onBack}>← Retour aux chapitres</button>
      </div>
    );
  }

  const phaseLabels = { 
    read: 'Lire et comprendre', 
    copy: `Copier (${copyCount}/3)`, 
    memory: 'De mémoire',
    eval: `Mini-Éval (${3 - evalQueue.length + 1}/3)`
  };

  return (
    <div className="screen learn-screen">
      {showConfetti && <Confetti />}
      <button className="back-btn" onClick={onBack}>← Chapitres</button>

      {/* Header */}
      <div className="learn-header">
        <div className="chapter-breadcrumb" style={{ color: level.color }}>
          {level.icon} {level.title} › {chapter.title}
        </div>
        {!isEval && (
          <div className="concept-count">
            {conceptIdx + 1} / {concepts.length}
          </div>
        )}
      </div>

      {/* Barre de progression du chapitre */}
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${(conceptIdx / concepts.length) * 100}%`, background: level.color }}
        />
      </div>

      {/* Carte concept */}
      <div className="concept-card">
        <div className="phase-badge" style={{ background: isEval ? '#ff453a' : level.color }}>
          {phaseLabels[phase]}
        </div>
        <h3 className="concept-title">{currentConcept.title}</h3>

        {phase === PHASE_READ && (
          <>
            <pre className="code-display">{currentConcept.code}</pre>
            <div className="explanation-list">
              {currentConcept.explanation.map((e, i) => (
                <div key={i} className="explanation-item">
                  {e.term && <code className="term">{e.term}</code>}
                  <span>{e.desc}</span>
                </div>
              ))}
            </div>
            {alreadyDone ? (
              <div className="already-done-note">✅ Déjà maîtrisé — révision optionnelle</div>
            ) : null}
            <button
              className="btn btn-primary"
              onClick={() => { setPhase(PHASE_COPY); setCopyCount(0); reset(); }}
            >
              {alreadyDone ? '🔁 Réviser quand même' : '✏️ Je comprends, à moi de copier !'}
            </button>
          </>
        )}

        {(phase === PHASE_COPY || phase === PHASE_MEMORY || phase === PHASE_EVAL) && (
          <>
            {phase === PHASE_COPY && (
              <pre className="code-display reference">{currentConcept.code}</pre>
            )}
            {isEval && feedback === 'error' && (
              <pre className="code-display correction">{currentConcept.code}</pre>
            )}
            {(phase === PHASE_MEMORY || isEval) && hint && (
              <div className="hint-box">💡 {currentConcept.hint}</div>
            )}
            <textarea
              className={`code-input ${feedback === 'ok' ? 'input-ok' : feedback === 'error' ? 'input-error' : ''}`}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={phase === PHASE_COPY ? 'Recopie le code ici...' : 'Écris le code de mémoire...'}
              autoFocus
              spellCheck={false}
            />
            <div className="input-actions">
              <button className="btn btn-primary" onClick={check}>
                ✅ Vérifier <span className="kbd">Ctrl+↵</span>
              </button>
              {(phase === PHASE_MEMORY || isEval) && !hint && (
                <button className="btn btn-ghost" onClick={() => setHint(true)}>💡 Indice</button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Quiz ───────────────────────────────────────────────────────────────────
function QuizScreen({ completedIds, onBack }) {
  const pool = allConcepts.filter(c => completedIds.has(c.id));
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * pool.length));
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState({ ok: 0, total: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  if (pool.length === 0) {
    return (
      <div className="screen done-screen">
        <h2>Aucun concept maîtrisé pour l'instant !</h2>
        <button className="btn btn-primary" onClick={onBack}>← Retour</button>
      </div>
    );
  }

  const concept = pool[idx];

  function next() {
    setInput('');
    setFeedback(null);
    setIdx(Math.floor(Math.random() * pool.length));
  }

  function check() {
    const ok = normalize(input) === normalize(concept.code);
    setScore(s => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }));
    setFeedback(ok ? 'ok' : 'error');
    if (ok) { setShowConfetti(true); setTimeout(() => setShowConfetti(false), 1200); }
  }

  return (
    <div className="screen quiz-screen">
      {showConfetti && <Confetti />}
      <button className="back-btn" onClick={onBack}>← Retour</button>
      <div className="quiz-header">
        <h2>🎮 Mode Quiz</h2>
        <div className="quiz-score">
          Score : <strong>{score.ok}</strong>/{score.total}
          {score.total > 0 && ` (${Math.round(score.ok/score.total*100)}%)`}
        </div>
      </div>
      <div className="concept-card">
        <div className="phase-badge" style={{ background: '#ff9f0a' }}>Quiz</div>
        <div className="quiz-origin">{concept.levelTitle} › {concept.chapterTitle}</div>
        <h3 className="concept-title">{concept.title}</h3>
        {feedback === 'error' && <pre className="code-display correction">{concept.code}</pre>}
        <textarea
          className={`code-input ${feedback === 'ok' ? 'input-ok' : feedback === 'error' ? 'input-error' : ''}`}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if ((e.ctrlKey||e.metaKey) && e.key === 'Enter') { e.preventDefault(); feedback ? next() : check(); }}}
          placeholder="Écris le code de mémoire..."
          autoFocus
          spellCheck={false}
          disabled={!!feedback}
        />
        {!feedback ? (
          <button className="btn btn-primary" onClick={check}>✅ Vérifier</button>
        ) : (
          <button className="btn btn-primary" onClick={next}>→ Suivant</button>
        )}
      </div>
    </div>
  );
}

// ─── App principale ──────────────────────────────────────────────────────────
export default function App() {
  const [darkMode, setDarkMode] = useState(loadTheme);
  const [completedIds, setCompletedIds] = useState(loadProgress);
  const [screen, setScreen] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('c-learning-dark', darkMode ? '1' : '0');
  }, [darkMode]);

  const markComplete = useCallback((id) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      next.add(id);
      saveProgress(next);
      return next;
    });
  }, []);

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen
          completedIds={completedIds}
          setCompletedIds={setCompletedIds}
          darkMode={darkMode}
          toggleDark={() => setDarkMode(d => !d)}
          onStart={() => setScreen('levels')}
          onQuiz={() => setScreen('quiz')}
        />
      )}

      {screen === 'levels' && (
        <LevelsScreen
          completedIds={completedIds}
          onBack={() => setScreen('home')}
          onSelectLevel={(li) => { setSelectedLevel(li); setScreen('chapters'); }}
        />
      )}

      {screen === 'chapters' && selectedLevel !== null && (
        <ChaptersScreen
          levelIdx={selectedLevel}
          completedIds={completedIds}
          onBack={() => setScreen('levels')}
          onSelectChapter={(ci) => { setSelectedChapter(ci); setScreen('learn'); }}
        />
      )}

      {screen === 'learn' && selectedLevel !== null && selectedChapter !== null && (
        <LearnScreen
          levelIdx={selectedLevel}
          chapterIdx={selectedChapter}
          completedIds={completedIds}
          onComplete={markComplete}
          onBack={() => setScreen('chapters')}
        />
      )}

      {screen === 'quiz' && (
        <QuizScreen
          completedIds={completedIds}
          onBack={() => setScreen('home')}
        />
      )}
    </div>
  );
}
