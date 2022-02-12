DROP TABLE IF EXISTS gamers ON DELETE CASCADE;

CREATE TABLE gamers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  gamer_tag VARCHAR(255),
  games_list FOREIGN KEY REFERENCES games_list(id),
  friends_list FOREIGN KEY REFERENCES friends_list(id),
  blocked_list FOREIGN KEY REFERENCES blocked_list(id),
  preferences_list_id FOREIGN KEY REFERENCES preferences(id),
  bio text
);