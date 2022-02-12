DROP TABLE IF EXISTS gamers;

CREATE TABLE gamers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  gamer_tag VARCHAR(255),
  games_id INT, FOREIGN KEY (games_id) REFERENCES games(id),
  friends_list_id INT, 
    FOREIGN KEY (friends_list_id) REFERENCES friends_list(id),
  blocked_list_id INT, 
    FOREIGN KEY (blocked_list_id) REFERENCES blocked_list(id),
  bio TEXT,
  email VARCHAR(255),
  password VARCHAR(255),
  language VARCHAR(255) NOT NULL DEFAULT 'English',
  timezone TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT(current_timestamp AT TIME ZONE 'UTC')
);