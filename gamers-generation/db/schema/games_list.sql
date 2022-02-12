DROP TABLE IF EXISTS games_list;

CREATE TABLE games_list(
  id SERIAL PRIMARY KEY NOT NULL,
  game_id INTEGER,
  game_name VARCHAR(255),
  released TIMESTAMP,
  kid_friendly BOOLEAN DEFAULT FALSE
  genres FOREIGN KEY REFERENCES genres(id),
  skill_level VARCHAR(25)
);


-- NOTE TO DEVS: no, not a typo for skill level, it just doesn't need a lot of characters