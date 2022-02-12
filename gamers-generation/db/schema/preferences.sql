DROP TABLE preferences_list;

CREATE TABLE preferences_list(
  id SERIAL PRIMARY KEY,
  language VARCHAR(255),
  games FOREIGN KEY REFERENCES games_list(id),
  skill_level
  timezone TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT(current_timestamp AT TIME ZONE 'UTC')
);