import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 3001;

const state = {
  players: [
    { name: 'Alex', chips: 2500, bet: 50 },
    { name: 'Sam', chips: 3200, bet: 75 },
    { name: 'Mia', chips: 4100, bet: 125 },
    { name: 'Noah', chips: 2900, bet: 95 },
    { name: 'Luna', chips: 3600, bet: 80 },
  ],
  selectedGame: 'blackjack',
  betAmount: 25,
  tablePlayers: 6,
};

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', app: 'live-casino-demo' });
});

app.get('/api/lobby', (_req, res) => {
  res.json(state);
});

io.on('connection', (socket) => {
  socket.emit('lobby:update', state);

  socket.on('lobby:sync', () => {
    socket.emit('lobby:update', state);
  });

  socket.on('join:table', (payload) => {
    const newPlayer = {
      name: payload?.name || `Guest ${state.players.length + 1}`,
      chips: 2500,
      bet: 25,
    };

    state.players = [...state.players, newPlayer];
    state.tablePlayers = state.players.length;
    io.emit('lobby:update', state);
  });

  socket.on('game:bet', (payload = {}) => {
    const amount = Number(payload.amount) || 10;
    state.betAmount = amount;
    io.emit('lobby:update', state);
  });

  socket.on('game:select', (payload = {}) => {
    state.selectedGame = payload.game || 'blackjack';
    io.emit('lobby:update', state);
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`Live casino demo server listening on http://localhost:${PORT}`);
});
