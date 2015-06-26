create table main_branch(branch_id varchar(10),manager_name char(30),location varchar(40))

desc main_branch

select * from main_branch

insert into main_branch values('ICIC000123','partha','10 sigma troad');

alter table main_branch add sub_branch VARCHAR(10);

create table branch(branch_id varchar(10),manager_name char(30),location varchar(40),main_branch_code varchar(10));

desc branch

insert into branch values ('ICIC21212','konark','20 420 road','ICIC000123')

insert into main_branch values('ICIC000124','partha','10 sigma troad','ICIC232');





