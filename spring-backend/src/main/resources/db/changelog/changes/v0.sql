create table todo (
  id bigserial not null,
  title text not null,
  description text,
  completed boolean not null,
  deleted boolean not null,
  primary key (id)
);