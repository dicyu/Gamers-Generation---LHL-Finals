DROP TABLE IF EXISTS games;

CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  game_name VARCHAR(255),
  released TIMESTAMP,
  genres_id INT, 
    FOREIGN KEY (genres_id) REFERENCES genres(id)
);