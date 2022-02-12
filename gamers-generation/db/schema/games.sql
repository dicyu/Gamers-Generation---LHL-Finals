DROP TABLE IF EXISTS games_list;

CREATE TABLE games(
  id SERIAL PRIMARY KEY NOT NULL,
  game_name VARCHAR(255),
  released TIMESTAMP,
  genres FOREIGN KEY REFERENCES genres(id)
);


-- NOTE TO DEVS: no, not a typo for skill level, it just doesn't need a lot of characters