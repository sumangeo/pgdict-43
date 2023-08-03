---
sidebar_position: 5
---

# DBMS Class on xampp install

## SQL Statement

#### Characteristics of Primary Key:

> Must be Unique value
> not null
> PK Assign when create a table.
> Table a kiki data thakbe ta dite hoy.

I deleted first row from 'employee' table using this code:

```
DELETE FROM employee WHERE `Emp_Num` = (SELECT MIN(`Emp_Num`) FROM employee);
```

#### I added data/rows into 'employee' table by this code:

```
INSERT INTO employee (Emp_Num, Emp_LName, Emp_FName, Emp_Initial, EMP_Hiredate, Job_Code)
VALUES
    (102, 'Smith', 'John', 'J', '2023-08-03', '503'),
    (103, 'Johnson', 'Jane', 'A', '2023-08-04', '504'),
    (104, 'Williams', 'Michael', 'M', '2023-08-05', '505');
```

#### Created table using command:

```
CREATE TABLE EmpInfo (
EmpID int(10) PRIMARY KEY,
Name varchar(30),
Jdate date,
Basic float(10,2));

```

#### Query using command, adding calculations:

```
SELECT
  EmpID,
  Name,
  totalSal,
  PF,
  totalSal - PF AS NetSal
FROM
  (SELECT
    EmpID,
    Name,
    Basic + Basic * 0.5 + 1500 AS totalSal,
    Basic + Basic * 0.10 AS PF
  FROM
    empinfo) AS subquery_alias;
```

or

```
SELECT EmpID,Name,Basic+Basic*.5+1500 totalSal,
(Basic+Basic*.15) PF,
(Basic+Basic*.5+1500)- (Basic+Basic*.15) NetSal FROM empinfo;

```

To Data Conditionaly,
.... Where EmpID=1000;

Example:

```
SELECT EmpID, Name, Basic FROM empinfo WHERE Name="Abdul Latif";
```
___

