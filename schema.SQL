CREATE TABLE livsmedel (
	id SERIAL,
	namn VARCHAR(128),
	kcal integer,
	prot integer,
	carbs integer,
	fat integer,
	PRIMARY KEY(id)
);

CREATE TABLE recipee (
	id SERIAL,
	namn VARCHAR(128),
	portions integer,
	PRIMARY KEY(id)
);

CREATE TABLE recipee_ingredients (
	id SERIAL
	grams INTEGER,
	recipee_id  INTEGER REFERENCES recipee(id) ON DELETE CASCADE,
	livsmedel_id INTEGER REFERENCES livsmedel(id) ON DELETE CASCADE
);
