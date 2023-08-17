---
sidebar_position: 7
---

# DBMS Design

## Database Design

Craete Table Student43

## 3rd table 1st

```
Create Table Location (
LocationID int(4) Primary Key,
Location Name VARCHAR(30));
```

## 2nd Table 2nd

```
Create Table Department(
DeptID int(2) Primary Key,
DName VARCHAR (30),
Location ID int(4),
Foreign Key(LocationID) Reference Location (LocationID));

```

## 1st Table 3rd

```
Create Table EMP(
EmpID int(4) Primary Key,
EmpName VARCHAR (30),
Basic float(10,2),
JDate Date,
Address VARCHAR (30),
DeptID int(2),
Foreign Key(DeptID) Reference Dept (DeptID));

```

## Function two types

Function two types

1. Single row
2.

Some function single এর অপর effect পড়ে, কিছু কিছু ফাংশন Gruoup এর ওপর ইফেক্ট পড়ে।

## Character FUnction

Case Manipulation functions
LOWER
UPPER
INITCAP

Character Manipulation Function

CONCAT
SUBSTR
