use db;

create table customer(
cust_id integer primary key,
name varchar(20),
age int default 18,
city varchar(50),
salary int
);

select * from customer;

drop table cust_order;

create table cust_order(
order_id integer primary key,
cust_id integer,
pid integer,
amount integer,
foreign key (cust_id) references customer (cust_id),
foreign key (pid) references product (pid));

insert into customer values(1,"Kunjal",22,"Vadodara",35000),(2,"Virat",22,"vadodra",20000),(3,"Shreyas",23,"Ahmedabad",33000),(4,"Umesh",21,"rajkot",40000),(5,"Jasprit",21,"rajkot",23000);
insert into cust_order values(1,1,1,3000),(2,2,1,2000),(3,2,3,5000),(4,3,4,3000);
show tables;
select * from cust_order
inner join
customer on cust_order.cust_id = customer.cust_id;

select * from cust_order
left join
customer on cust_order.cust_id = customer.cust_id;

select * from cust_order
right join
customer on cust_order.cust_id = customer.cust_id;

select * from cust_order
right join
customer on cust_order.cust_id = customer.cust_id
union
select * from cust_order
left join
customer on cust_order.cust_id = customer.cust_id;

select * from cust_order
cross join
customer on cust_order.cust_id = customer.cust_id;

select customer.name, cust_order.amount from cust_order
inner join
customer on cust_order.cust_id = customer.cust_id;

select o.amount, c.name from cust_order o
inner join
customer c on o.cust_id = c.cust_id;

select c.name, o.amount
from customer as c, cust_order as o
where c.name = "Kunjal" and c.cust_id = o.cust_id;

select name as CustomerName from customer;
select * from customer;

delete from customer where cust_id = 4;

create table product(
pid integer primary key,
pname varchar(30),
price integer
);
insert into product values(1,"LG",8000),(2,"Sony",18000),(3,"Dell",40000),(4,"HP",20000);
drop table product;

select * from cust_order
inner join customer on cust_order.cust_id=customer.cust_id
inner join product on cust_order.pid=product.pid;

create view ViewCustomer as
select cust_id,name,age from customer;

select * from employee;

CREATE DEFINER=`root`@`localhost` PROCEDURE `first`()
BEGIN
select * from employee;
END

call first();

CREATE DEFINER=`root`@`localhost` PROCEDURE `second`(in E_age int)
BEGIN
select * from employee
where age=E_age;
END

call second(22);

CREATE DEFINER=`root`@`localhost` PROCEDURE `third`(out cnt int)
BEGIN
select count(*) into cnt from employee;
END

call third(@emp_count);

select @emp_count;
