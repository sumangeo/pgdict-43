---
sidebar_position: 7
---

# DBMS Design

## Database Design

Craete Table Student43

## 3rd table 1st

```
CREATE TABLE Location (
    LocationID INT(4) PRIMARY KEY,
    LocationName VARCHAR(30)
);

```

## 2nd Table 2nd

```
CREATE TABLE Department (
    DeptID INT(2) PRIMARY KEY,
    DeptName VARCHAR(30),
    LocationID INT(4)
);



Foreign Key(LocationID) Reference Location (LocationID));

```

## 1st Table 3rd

```
CREATE TABLE EMPLOYEE (
    EmpID INT(4) PRIMARY KEY,
    EmpName VARCHAR(30),
    Basic FLOAT(10,2),
    JDate DATE,
    Address VARCHAR(30),
    DeptID INT(2)

);


FOREIGN KEY (DeptID) REFERENCES Department(DeptID)

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

Date and Text must be QUOTATION ''
