DROP TABLE IF EXISTS gamers;

CREATE TABLE gamers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  gamer_tag VARCHAR(255),
  avatar VARCHAR(255),
  bio TEXT,
  email VARCHAR(255),
  password VARCHAR(255),
  language VARCHAR(255) DEFAULT 'English',
  timezone TIMESTAMP WITH TIME ZONE DEFAULT(current_timestamp AT TIME ZONE 'UTC')
);