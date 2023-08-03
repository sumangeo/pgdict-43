---
sidebar_position: 5
---

# DBMS Class on xampp install

## SQL Statement

I deleted first row from 'emploee' table using this code:

```
DELETE FROM employee WHERE `Emp_Num` = (SELECT MIN(`Emp_Num`) FROM employee);
```

I added data/rows into 'employee' table by this code:

```
INSERT INTO employee (Emp_Num, Emp_LName, Emp_FName, Emp_Initial, EMP_Hiredate, Job_Code)
VALUES
    (102, 'Smith', 'John', 'J', '2023-08-03', '503'),
    (103, 'Johnson', 'Jane', 'A', '2023-08-04', '504'),
    (104, 'Williams', 'Michael', 'M', '2023-08-05', '505');
```

Created table using command:

```
CREATE TABLE EmpInfo (
EmpID int(10) PRIMARY KEY,
Name varchar(30),
Jdate date,
Basic float(10,2));

```
