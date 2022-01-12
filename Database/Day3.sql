use db;

desc employee;
select * from employee;

select count(id) from employee;
select max(age) from employee;
select min(age) from employee;
select sum(age) from employee;
select avg(age) from employee;
select ceil(3.4576) from dual;
select floor(3.4576) from dual;
select abs(3.4576) from dual;

select upper(name) from employee;
select lower(name) from employee;
select length(name) from employee;
select now() from employee;

show grants for root;

start transaction ;
select * from employee;
update employee set age = 55 where id =2;
commit;
rollback;

select user from mysql.user;

show grants for admin;

grant select,insert,update,delete on employee to admin;

revoke update on employee from admin;
