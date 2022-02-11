DROP TABLE gamers ON DELETE CASCADE;

CREATE TABLE gamers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  gamer_tag VARCHAR(255),
  games_list_id FOREIGN KEY,
  friends_list FOREIGN KEY,
  blocked_list FOREIGN KEY,
  preferences_list_id FOREIGN KEY,
  bio text
);