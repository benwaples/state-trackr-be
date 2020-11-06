DROP TABLE IF EXISTS states_visited;

CREATE TABLE states_visited (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  date_visited TEXT NOT NULL,
  was_fun BOOLEAN NOT NULL
)