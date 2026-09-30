* {
  box-sizing: border-box;
}

:root {
  color-scheme: dark;
  --bg: #050b14;
  --panel: rgba(13, 22, 34, 0.9);
  --panel-alt: rgba(19, 34, 48, 0.9);
  --gold: #f2c76e;
  --gold-strong: #dba944;
  --green: #2ed2a5;
  --green-soft: rgba(46, 210, 165, 0.15);
  --line: rgba(255, 255, 255, 0.08);
  --text: #eef6ff;
  --muted: #a2b5c7;
  --shadow: rgba(0, 0, 0, 0.35);
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: Inter, 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top, rgba(36, 98, 146, 0.35), transparent 30%),
    linear-gradient(160deg, #04070d 0%, #09161f 30%, #060b10 100%);
  color: var(--text);
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
  gap: 24px;
  padding: 24px;
}

.sidebar-panel,
.main-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 26px 60px var(--shadow);
}

.sidebar-panel {
  padding: 24px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(242, 199, 110, 0.22), rgba(74, 122, 255, 0.18));
  border: 1px solid rgba(242, 199, 110, 0.5);
  color: var(--gold);
  font-size: 1.7rem;
}

h1, h2, h3, p {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

.eyebrow {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.status-box {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(46, 210, 165, 0.08);
  border: 1px solid rgba(46, 210, 165, 0.18);
  border-radius: 999px;
  padding: 8px 14px;
  margin-bottom: 22px;
  color: #d5fff4;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 12px rgba(46, 210, 165, 0.8);
}

.nav-section,
.summary-card {
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  padding: 18px 16px;
}

.section-label {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  margin-bottom: 12px;
}

.game-tabs {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.game-tab {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 12px 14px;
  text-align: left;
  transition: all 0.2s ease;
}

.game-tab.active {
  border-color: rgba(242, 199, 110, 0.7);
  background: linear-gradient(135deg, rgba(242, 199, 110, 0.1), rgba(255, 255, 255, 0.02));
  box-shadow: inset 0 0 0 1px rgba(242, 199, 110, 0.3);
}

.summary-card {
  margin-top: 18px;
}

.summary-card h2 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.summary-card p {
  color: var(--muted);
  line-height: 1.6;
}

.stat-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.stat-list div {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
}

.stat-list strong {
  color: var(--text);
  font-weight: 600;
}

.main-panel {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.join-button,
.secondary,
.bet-box button {
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--gold), var(--gold-strong));
  color: #1b1606;
  font-weight: 700;
  padding: 12px 18px;
}

.dealer-stage {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 20px;
}

.video-wrap {
  position: relative;
  min-height: 380px;
  overflow: hidden;
  border-radius: 26px;
  border: 1px solid var(--line);
  background: #02070d;
}

.video-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.1) brightness(0.8) contrast(1.1);
}

.live-tag {
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(255, 76, 76, 0.85);
  color: white;
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.dealer-overlay {
  position: absolute;
  left: 18px;
  bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(4, 11, 18, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 10px 14px;
}

.dealer-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #1a1509;
  background: linear-gradient(135deg, var(--gold), #f5d996);
}

.table-info {
  background: var(--panel-alt);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(242, 199, 110, 0.12);
  color: var(--gold);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.table-info h3 {
  font-size: 1.8rem;
  margin: 18px 0 8px;
}

.table-info p {
  color: var(--muted);
  line-height: 1.6;
}

.bet-controls {
  margin-top: 18px;
}

.bet-controls label {
  display: block;
  color: var(--muted);
  margin-bottom: 10px;
}

.bet-box {
  display: flex;
  gap: 10px;
}

.bet-box input {
  flex: 1;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 12px 14px;
}

.action-row {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}

.secondary {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--line);
}

.game-surface {
  background: linear-gradient(180deg, rgba(18, 32, 41, 0.96), rgba(8, 15, 19, 0.96));
  border: 1px solid var(--line);
  border-radius: 26px;
  min-height: 230px;
  padding: 20px;
}

.blackjack-board {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 190px;
  justify-content: center;
}

.hand-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hand-label {
  color: var(--muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.cards-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.card {
  display: grid;
  place-items: center;
  width: 70px;
  height: 98px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, #f7f9ff, #dfe8f5);
  color: #182433;
  font-size: 1.6rem;
  font-weight: 700;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.18);
}

.player-card {
  background: linear-gradient(135deg, #dbe7ff, #dfe8f5);
}

.roulette-board {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 190px;
}

.roulette-wheel {
  position: relative;
  display: grid;
  place-items: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #d6a84a 0deg 16deg,
    #13587d 16deg 32deg,
    #d6a84a 32deg 48deg,
    #13587d 48deg 64deg,
    #d6a84a 64deg 80deg,
    #13587d 80deg 96deg,
    #d6a84a 96deg 112deg,
    #13587d 112deg 128deg,
    #d6a84a 128deg 144deg,
    #13587d 144deg 160deg,
    #d6a84a 160deg 176deg,
    #13587d 176deg 192deg,
    #d6a84a 192deg 208deg,
    #13587d 208deg 224deg,
    #d6a84a 224deg 240deg,
    #13587d 240deg 256deg,
    #d6a84a 256deg 272deg,
    #13587d 272deg 288deg,
    #d6a84a 288deg 304deg,
    #13587d 304deg 320deg,
    #d6a84a 320deg 336deg,
    #13587d 336deg 352deg,
    #d6a84a 352deg 360deg
  );
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2), 0 30px 50px rgba(0, 0, 0, 0.4);
}

.roulette-wheel::before {
  content: '';
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.12);
}

.wheel-center {
  position: relative;
  display: grid;
  place-items: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0a1c2d, #0d2331);
  border: 2px solid rgba(242, 199, 110, 0.7);
  font-size: 2rem;
  font-weight: 700;
}

.roulette-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px;
  min-width: 180px;
}

.roulette-result span {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.roulette-result strong {
  font-size: 4rem;
  color: var(--gold);
}

.bottom-bar {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 18px;
}

.result-panel,
.player-list {
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  padding: 18px;
}

.result-panel h3 {
  margin-bottom: 8px;
}

.result-panel p:last-child {
  color: var(--muted);
  line-height: 1.6;
}

.player-list {
  display: grid;
  gap: 10px;
}

.player-card-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 14px;
  padding: 10px 12px;
}

.player-avatar {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(242, 199, 110, 0.3), rgba(58, 123, 255, 0.2));
  color: var(--gold);
  font-weight: 700;
}

.player-card-pill > div {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.player-card-pill span,
.player-card-pill em {
  color: var(--muted);
  font-style: normal;
}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .dealer-stage,
  .bottom-bar {
    grid-template-columns: 1fr;
  }
}
