DROP TABLE IF EXISTS riends_list ON DELETE CASCADE;
DROP TABLE IF EXISTS blocked_list ON DELETE CASCADE;


CREATE TABLE friends_list(
  id SERIAL PRIMARY KEY,
  gamer FOREIGN KEY REFERENCES gamers(id) NOT NULL,
  friend FOREIGN KEY REFERENCES gamers(id) NOT NULL,
  games FOREIGN KEY REFERENCES games_list(id) NOT NULL
);

CREATE TABLE blocked_list(
  id SERIAL PRIMARY KEY,
  gamer FOREIGN KEY NOT NULL,
  friend FOREIGN KEY NOT NULL
);