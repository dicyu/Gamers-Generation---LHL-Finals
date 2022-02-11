DROP TABLE games_list;

CREATE TABLE games_list(
  id SERIAL PRIMARY KEY NOT NULL
  name VARCHAR(255)
  released TIMESTAMP
  genre_id FOREIGN KEY
  skill_level VARCHAR(25)
);


-- NOTE TO DEVS: no, not a typo for skill level, it just doesn't need a lot of characters