DROP TABLE reports ON DELETE CASCADE;
DROP TABLE messages ON DELETE CASCADE;

CREATE TABLE reports ON DELETE CASCADE(
  id SERIAL PRIMARY KEY NOT NULL,
  reporter_id FOREIGN KEY REFERENCES gamers(id),
  reported_id FOREIGN KEY REFERENCES gamers(id),
  messages_id FOREIGN KEY REFERENCES messages(id),
  reason text,
  active BOOLEAN default TRUE
);

CREATE TABLE messages(
  id PRIMARY KEY NOT NULL,
  message text,
  date TIMESTAMP
);

