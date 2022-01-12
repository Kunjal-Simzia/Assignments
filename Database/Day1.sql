create database DB;
use DB;

CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  name varchar(20) NOT NULL,
  post varchar(30) NOT NULL,
  age INTEGER default 21);

INSERT INTO employee VALUES (1, 'Kunjal', 'Trainee',22);
INSERT INTO employee VALUES (2, 'Ishant', 'FullStack Developer',default);
INSERT INTO employee VALUES (3, 'Virat', 'Frontend Developer',25);
INSERT INTO employee VALUES (4, 'Rohit', 'Database Admin',29);
INSERT INTO employee VALUES (5, 'Sumit', 'System Admin',35);
INSERT INTO employee VALUES (6, 'Risabh', 'System Admin',30);

SELECT * FROM employee;

SELECT * FROM employee where age=25;

SELECT * FROM employee where name LIKE '%it';
SELECT * FROM employee where post LIKE '%Admin';
SELECT * FROM employee where post LIKE '%Developer';

select count(*) age from employee group by age; 

select count(distinct post) from employee;

select * from employee
where age between 20 and 25;

select AVG(age) from employee;

select * from employee
where post in ('System Admin');

alter table employee
add Email varchar(50);

alter table employee
add phno varchar(10);

alter table employee
drop phno;

alter table employee 
modify column email varchar(30);

alter table employee
drop column email;

select * from employee;

UPDATE employee
SET name = 'Ajinkya'
WHERE id = 5;

delete from employee where id =6;

drop table employee;