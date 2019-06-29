DROP DATABASE IF EXISTS dinguser_db;

Create DATABASE dinguser_db;

USE dinguser_db;

Create Table user_info(
	id Integer(11) auto_increment not null,
    user_name VARCHAR(30) not null,
    user_pass VARCHAR(30) not null,
    super_user boolean default true,
    PRIMARY key(id)
);

INSERT INTO user_info(user_name, user_pass, super_user)
	VALUES('MastrBlastr', 'Wh0runsb4rt3rt0wn?', true);

SELECT * FROM user_info;