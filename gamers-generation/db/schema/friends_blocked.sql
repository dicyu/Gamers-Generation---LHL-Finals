DROP TABLE IF EXISTS friends_list;
DROP TABLE IF EXISTS blocked_list;


CREATE TABLE friends_list(
  id SERIAL PRIMARY KEY,
  gamer_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  friend_id INT REFERENCES gamers(id) ON DELETE CASCADE
);

CREATE TABLE blocked_list(
  id SERIAL PRIMARY KEY,
  gamer_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  blocked_id INT REFERENCES gamers(id) ON DELETE CASCADE
);