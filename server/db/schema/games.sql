DROP TABLE IF EXISTS games;

CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  game_name VARCHAR(255),
  released TIMESTAMP
);