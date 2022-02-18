DROP TABLE IF EXISTS reports;
DROP TABLE IF EXISTS messages;

CREATE TABLE messages(SELECT
  id SERIAL PRIMARY KEY NOT NULL,
  message text,
  date TIMESTAMP
);

CREATE TABLE reports(
  id SERIAL PRIMARY KEY NOT NULL,
  gamer_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  reported_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  message_id INT REFERENCES messages(id),
  reason text,
  active BOOLEAN default TRUE
);
