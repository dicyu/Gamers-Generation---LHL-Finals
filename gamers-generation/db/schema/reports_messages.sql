DROP TABLE reports;
DROP TABLE messages;

CREATE TABLE reports(
  id SERIAL PRIMARY KEY NOT NULL,
  reporter_id INT,
    FOREIGN KEY (reporter_id) REFERENCES gamers(id),
  reported_id INT, 
    FOREIGN KEY (reported_id) REFERENCES gamers(id),
  messages_id INT, 
    FOREIGN KEY (messages_id) REFERENCES messages(id),
  reason text,
  active BOOLEAN default TRUE
);

CREATE TABLE messages(
  id SERIAL PRIMARY KEY NOT NULL,
  message text,
  date TIMESTAMP
);

