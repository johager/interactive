create table users (
    user_id serial primary key,
    name varchar(150) not null,
    email varchar(150) not null,
    passwd varchar(500) not null,
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

-- to get the group names for a user with name "UserName",

select name from users, users_groups, groups
where users.user_id = users_groups.user_id and
users_groups.group_id = groups.group.id and
name = 'UserName';

-- won't work because "name" is ambiguous: it's in both users and groups

--  to fix it, specify which "name" is being used as follows

select groups.name from users, users_groups, groups
where users.user_id = users_groups.user_id and
users_groups.group_id = groups.group.id and
users.name = 'UserName';

-- so, in this example, having user_name and group_name _might_ be useful

-- however, in reality, users would probably have first_name and last_name, so the ambiguity wouldn't be there

-- naming is largely up to the developer, but maybe a company has a style they want developers to adopt