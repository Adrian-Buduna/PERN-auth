--- users table
create table users(
    user_id serial primary key,
    user_name varchar(255) not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date
);