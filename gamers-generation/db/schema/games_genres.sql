DROP TABLE IF EXISTS games_genres;

CREATE TABLE games_genres(
  genre_id INT REFERENCES genres(id),
  game_id INT REFERENCES games(id),
  CONSTRAINT game_genre_pkey PRIMARY KEY (game_id, genre_id)
);