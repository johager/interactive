create table users (
    user_id serial primary key,
    name varchar(150) not null,
    email varchar(150) not null,
    passwd varchar(500) not null,
    created timestamp not null
);

create table following (
    following_id serial primary key,
    user_id_following not null references users(user_id),
    user_id_followed not null references users(user_id),
    date timestamp not null
);

create table posts (
    post_id serial primary key,
    user_id not null references users(user_id),
    text varchar(2000),
    created timestamp not null
);

create table pictures (
    picture_id serial primary key,
    post_id not null references posts(post_id),
    photo_url varchar(500) not null
);

create table comments (
    comment_id serial primary key,
    post_id not null references posts(post_id),
    user_id not null references users(user_id),
    text varchar(1000) not null,
    created timestamp not null
);

create table groups (
    group_id serial primary key,
    name varchar(150) not null,
    created timestamp not null
);

create table users_groups (
    id serial primary key,
    user_id not null references users(user_id),
    group_id not null references groups(group_id)
);

create table group_posts (
    id serial primary key,
    group_id not null references groups(group_id),
    post_id not null references posts(post_id)
);