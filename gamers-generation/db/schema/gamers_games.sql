DROP TABLE IF EXISTS gamers_games;

CREATE TABLE gamers_games(
  id PRIMARY KEY,
  gamers_id FOREIGN KEY REFERENCES gamers(id),
  games_id FOREIGN KEY REFERENCES games(id),
  play_style VARCHAR(255) DEFAULT "Casual",
  favourites BOOLEAN DEFAULT FALSE
);