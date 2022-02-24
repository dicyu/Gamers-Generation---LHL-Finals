DROP TABLE IF EXISTS friends_list CASCADE;
DROP TABLE IF EXISTS blocked_list CASCADE;
DROP TABLE IF EXISTS gamers_games CASCADE;
DROP TABLE IF EXISTS gamers CASCADE;
DROP TABLE IF EXISTS games_genres CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS reports CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS likes CASCADE;
DROP TABLE IF EXISTS matches CASCADE;
DROP TABLE IF EXISTS conversations CASCADE;
DROP TABLE IF EXISTS chats CASCADE;

CREATE TABLE gamers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  gamer_tag VARCHAR(255),
  avatar VARCHAR(255),
  bio TEXT,
  email VARCHAR(255),
  password VARCHAR(255),
  language VARCHAR(255) DEFAULT 'English',
  timezone VARCHAR(255) DEFAULT 'UTC'
);

CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  game_name VARCHAR(255),
  released TIMESTAMP
);

CREATE TABLE gamers_games(
  gamer_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  game_id INT REFERENCES games(id) ON DELETE CASCADE,
  CONSTRAINT gamer_game_pkey PRIMARY KEY (gamer_id, game_id),
  play_style VARCHAR(255) DEFAULT 'Casual',
  favourites BOOLEAN DEFAULT FALSE
);

CREATE TABLE genres(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);


CREATE TABLE messages(
  id SERIAL PRIMARY KEY NOT NULL,
  message text,
  date TIMESTAMP
);

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

CREATE TABLE games_genres(
  genre_id INT REFERENCES genres(id),
  game_id INT REFERENCES games(id),
  CONSTRAINT game_genre_pkey PRIMARY KEY (game_id, genre_id)
);

CREATE TABLE reports(
  id SERIAL PRIMARY KEY NOT NULL,
  gamer_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  reported_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  message_id INT REFERENCES messages(id),
  reason text,
  active BOOLEAN default TRUE
);

CREATE TABLE likes(
  id SERIAL PRIMARY KEY NOT NULL,
  sent_like INT REFERENCES gamers(id) ON DELETE CASCADE,
  received_like INT REFERENCES gamers(id) ON DELETE CASCADE
);

CREATE TABLE matches(
  id SERIAL PRIMARY KEY NOT NULL,
  gamer_first_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  gamer_second_id INT REFERENCES gamers(id) ON DELETE CASCADE
);

CREATE TABLE conversations(
  id SERIAL PRIMARY KEY NOT NULL,
  gamer_1_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  gamer_2_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  timecheck TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chats(
  id SERIAL PRIMARY KEY NOT NULL,
  conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  receiver_id INT REFERENCES gamers(id) ON DELETE CASCADE,
  chat text,
  timecheck TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

  -- something to implement post-bootcamp
  -- users [gamer_id1, gamer_id2] INT[] REFERENCES gamers(id) ON DELETE CASCADE,