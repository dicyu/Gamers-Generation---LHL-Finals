DROP TABLE IF EXISTS gamers;

CREATE TABLE gamers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  gamer_tag VARCHAR(255),
  avatar VARCHAR(255) DEFAULT 'https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/feature/images/server/public/images/pngaaa.com-3210352.png',
  bio TEXT,
  email VARCHAR(255),
  password VARCHAR(255),
  language VARCHAR(255) DEFAULT 'English',
  timezone VARCHAR(255) DEFAULT 'UTC'
);