---
sidebar_position: 2
---

# DBMS Class 2

June 22, 2023

Composite primary key- data is not identified by one pk, so another key needed, that pk is compost key.

Column/attribute ||

Row=

who is dependent on who

Prime attribute: when dependent on PK is Prime attribute.

Transitive Attribute: dependency non k on non key

Normalization- একটা টেবিল ভেঙ্গে চারটা

Step 3 - অনুযায়ী আলাদা হল।

1st, 2nd and 3rd Normalization যদি পারা যায় তাহলে ডাটাবেজের কাজ আরামে করতে পারবেন।

……………………………

**Question for Exam**

What is data?> piece of info

What is Record/Information? > collection of related data.

What is Table?> Collection of related record.

What is DB?> Collection of table

What is DBMS> software এর মাধ্যমে ..

Example?>

## **RDBMS:** Relational DBMS

SQL> Structured Query Language

Relational Database Management System (RDBMS) consists of A set of related tables

**A schema**

A schema: A database schema is the skeleton structure that represents the logical view of the entire data.

**Tables/relations:**

Stores information about an entity or theme-Consist of columns (fields) and rows (records).

Rows /tuples, describing information about a single item, ie A specific student

columns /attributes, describing a single characteristic (attributes) of its item. ie id, name, address etc

Every row is unique & identified by a key

(Sample of RDBMS)

একই টেবিলে দুইটা ফরেন কি থাকতে পারে

# **Data types in MYSQL**

MySQL uses many different data types broken into three main categories -

- Numeric
- Date and Time
- String Types.

## Numeric Data Types

The following list shows the common numeric data types and their descriptions -

- **INT**-_A normal-sized integer that can be signed or unsigned. If signed, the allowable range is from -2147483648 to 2147483647. If unsigned, the allowable range is from 0 to 4294967295. You can specify a width of up to 11 digits._

(Not important, **int** used mostly)

- **TINYINT** A very small integer that can be signed or unsigned. If signed, the allowable range is from -128 to 127. If unsigned, the allowable range is from 0 to 255. You can specify a width of up to 4 digits.
- **SMALLINT** - A small Integer that can be signed or unsigned. If signed, the allowable range is from -32768 to 32767. If unsigned, the allowable range is from 0 to 65535. You can specify a width of up to 5 digits.
- **MEDIUMINT** - A medium-sized integer that can be signed or unsigned. If signed, the allowable range is from -8388608 to 8388607. If unsigned, the allowable range is from 0 to 16777215. You can specify a width of up to 9 digits.
- **BIGINT** A large integer that can be signed or unsigned. If signed, the allowable range is from -9223372036854775808 to 9223372036854775807. If unsigned, the allowable range is from 0 to 18446744073709551615. You can specify a width of up to 20 digits.
- **FLOAT(M,D)**- A floating-point number that cannot be unsigned. You can define the display length (M) and the number of decimals (D). This is not required and will default to 10,2, where 2 is the number of decimals and 10 is the total number of digits (including decimals). Decimal precision can go to 24 places for a FLOAT.
- **DOUBLE(M,D)**- A double precision floating-point number that cannot be unsigned. You can define the display length (M) and the number of decimals (D). This is not required and will default to 16,4, where 4 is the number of decimals. Decimal precision can go to 53 places for a DOUBLE. REAL is a synonym for DOUBLE.

Among these **Int, Big Int, Double and Float needed.**

Date handle করা সবচে Difficult.
