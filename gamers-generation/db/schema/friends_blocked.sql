DROP TABLE IF EXISTS friends_list;
DROP TABLE IF EXISTS blocked_list;


CREATE TABLE friends_list(
  id SERIAL PRIMARY KEY,
  gamer_id INT,
    FOREIGN KEY (gamer_id) REFERENCES gamers(id),
  gamer_id INT,
    FOREIGN KEY (gamer_id) REFERENCES gamers(id)
);

CREATE TABLE blocked_list(
  id SERIAL PRIMARY KEY,
  gamer_id INT,
    FOREIGN KEY (gamer_id) REFERENCES gamers(id),
  gamer_id INT,
    FOREIGN KEY (gamer_id) REFERENCES gamers(id)
);