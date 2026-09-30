import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { io } from 'socket.io-client';
import './styles.css';

const dealerName = 'Renee';
const tableGames = {
  blackjack: {
    label: 'Blackjack',
    description: 'Beat the dealer without going over 21.',
  },
  roulette: {
    label: 'Roulette',
    description: 'Pick your favorite number and watch the wheel spin.',
  },
};

const defaultPlayers = [
  { name: 'Alex', chips: 2500, bet: 50 },
  { name: 'Sam', chips: 3200, bet: 75 },
  { name: 'Mia', chips: 4100, bet: 125 },
  { name: 'Noah', chips: 2900, bet: 95 },
];

const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const randomCard = () => {
  const value = values[Math.floor(Math.random() * values.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  return `${value}${suit}`;
};

const randomRouletteNumber = () => Math.floor(Math.random() * 37);

function App() {
  const [selectedGame, setSelectedGame] = useState('blackjack');
  const [betAmount, setBetAmount] = useState(25);
  const [players, setPlayers] = useState(defaultPlayers);
  const [dealerStatus, setDealerStatus] = useState('Ready for the next round');
  const [resultText, setResultText] = useState('Dealer is waiting for the next round.');
  const [dealerHand, setDealerHand] = useState(['K♠', '9♥']);
  const [playerHand, setPlayerHand] = useState(['10♣', '7♦']);
  const [rouletteNumber, setRouletteNumber] = useState(17);
  const [tablePlayers, setTablePlayers] = useState(6);
  const [socketStatus, setSocketStatus] = useState('Connecting...');

  useEffect(() => {
    const socket = io({ autoConnect: true });

    socket.on('connect', () => {
      setSocketStatus('Live feed connected');
      socket.emit('lobby:sync');
    });

    socket.on('disconnect', () => {
      setSocketStatus('Reconnecting...');
    });

    socket.on('lobby:update', (payload) => {
      if (payload?.players) {
        setPlayers(payload.players);
      }
      if (payload?.selectedGame) {
        setSelectedGame(payload.selectedGame);
      }
      if (payload?.betAmount) {
        setBetAmount(payload.betAmount);
      }
      if (payload?.tablePlayers) {
        setTablePlayers(payload.tablePlayers);
      }
    });

    return () => socket.disconnect();
  }, []);

  const currentGame = useMemo(() => tableGames[selectedGame], [selectedGame]);

  const handleJoinTable = () => {
    setTablePlayers((count) => count + 1);
    setDealerStatus('New player joined the table');
    setResultText('Welcome to the live table. Your chips are ready.');
  };

  const handlePlaceBet = () => {
    const nextPlayers = players.map((player, index) =>
      index === 0 ? { ...player, chips: player.chips - betAmount, bet: player.bet + betAmount } : player,
    );
    setPlayers(nextPlayers);
    setDealerStatus('Bet placed');
    setResultText(`You placed a ${betAmount} chip bet on ${currentGame.label}.`);
  };

  const handleDealRound = () => {
    setDealerHand([randomCard(), randomCard()]);
    setPlayerHand([randomCard(), randomCard()]);
    setDealerStatus('Cards dealt');
    setResultText(`Deal complete. ${currentGame.label} round is live.`);
  };

  const handleSpinWheel = () => {
    const winner = randomRouletteNumber();
    setRouletteNumber(winner);
    setDealerStatus('Wheel spinning');
    setResultText(`Roulette landed on ${winner}. Wagers are being settled.`);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar-panel">
        <div className="brand-row">
          <div className="brand-mark">◈</div>
          <div>
            <p className="eyebrow">Premium tables</p>
            <h1>Live Casino</h1>
          </div>
        </div>

        <div className="status-box">
          <span className="status-dot" />
          <span>{socketStatus}</span>
        </div>

        <div className="nav-section">
          <p className="section-label">Game selection</p>
          <div className="game-tabs">
            {Object.entries(tableGames).map(([key, game]) => (
              <button
                key={key}
                className={selectedGame === key ? 'game-tab active' : 'game-tab'}
                onClick={() => setSelectedGame(key)}
              >
                {game.label}
              </button>
            ))}
          </div>
        </div>

        <div className="summary-card">
          <p className="section-label">Current table</p>
          <h2>{currentGame.label}</h2>
          <p>{currentGame.description}</p>
        </div>

        <div className="stat-list">
          <div>
            <span>Players seated</span>
            <strong>{tablePlayers}</strong>
          </div>
          <div>
            <span>Dealer</span>
            <strong>{dealerName}</strong>
          </div>
          <div>
            <span>Round status</span>
            <strong>{dealerStatus}</strong>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">VIP table</p>
            <h2>{currentGame.label} live lounge</h2>
          </div>
          <button className="join-button" onClick={handleJoinTable}>Join table</button>
        </header>

        <section className="dealer-stage">
          <div className="video-wrap">
            <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
            <div className="live-tag">LIVE</div>
            <div className="dealer-overlay">
              <div className="dealer-avatar">R</div>
              <div>
                <p className="eyebrow">Dealer</p>
                <h3>{dealerName}</h3>
              </div>
            </div>
          </div>

          <div className="table-info">
            <div className="info-chip">Demo chips</div>
            <h3>Table rules</h3>
            <p>Join the table, place a bet, and watch the live dealer manage the round.</p>
            <div className="bet-controls">
              <label htmlFor="betAmount">Bet amount</label>
              <div className="bet-box">
                <input
                  id="betAmount"
                  type="number"
                  min="10"
                  step="5"
                  value={betAmount}
                  onChange={(e) => setBetAmount(Number(e.target.value) || 10)}
                />
                <button onClick={handlePlaceBet}>Place bet</button>
              </div>
            </div>
            <div className="action-row">
              <button className="secondary" onClick={handleDealRound}>Deal hand</button>
              <button className="secondary" onClick={handleSpinWheel}>Spin wheel</button>
            </div>
          </div>
        </section>

        <section className="game-surface">
          {selectedGame === 'blackjack' ? (
            <div className="blackjack-board">
              <div className="hand-panel">
                <span className="hand-label">Dealer</span>
                <div className="cards-row">
                  {dealerHand.map((card, index) => (
                    <div key={`${card}-${index}`} className="card">
                      {card}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hand-panel player-panel">
                <span className="hand-label">Player</span>
                <div className="cards-row">
                  {playerHand.map((card, index) => (
                    <div key={`${card}-${index}`} className="card player-card">
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="roulette-board">
              <div className="roulette-wheel">
                <div className="wheel-center">{rouletteNumber}</div>
              </div>
              <div className="roulette-result">
                <span>Winning number</span>
                <strong>{rouletteNumber}</strong>
              </div>
            </div>
          )}
        </section>

        <section className="bottom-bar">
          <div className="result-panel">
            <p className="section-label">Table update</p>
            <h3>{dealerStatus}</h3>
            <p>{resultText}</p>
          </div>

          <div className="player-list">
            {players.map((player, index) => (
              <div key={`${player.name}-${index}`} className="player-card-pill">
                <div className="player-avatar">{player.name[0]}</div>
                <div>
                  <strong>{player.name}</strong>
                  <span>{player.chips} chips</span>
                </div>
                <em>{player.bet} bet</em>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
