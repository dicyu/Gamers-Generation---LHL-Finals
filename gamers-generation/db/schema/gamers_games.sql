DROP TABLE IF EXISTS gamers_games;

CREATE TABLE gamers_games(
  gamer_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  game_id INT REFERENCES games(id) ON DELETE CASCADE,
  CONSTRAINT gamer_game_pkey PRIMARY KEY (gamer_id, game_id),
  play_style VARCHAR(255) DEFAULT 'Casual',
  favourites BOOLEAN DEFAULT FALSE
);