DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    favorite_character TEXT NOT NULL,
    tagline TEXT NOT NULL
);

