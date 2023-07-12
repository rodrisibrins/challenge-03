# Qubika

## Introduction
The purpose of this repository is to fulfill the objective of challenge 03 by creating a test to cover a portion of the Austin office workflow and also to ensure that the schedule popup is displayed and functions correctly.

## WebdriverIO
To achieve this objective, the webdriverIO automation framework was used. Various assertion methods such as toBeExisting, toBeDisplayed, toHaveText, etc., have been employed. It is a tool that provides several methods to fulfill our task.

## Steps to run the test
1. First you gonna need to clone the repository:

> git clone https://github.com/rodrisibrins/challenge-03.git

2. Then, you'll need to install the dependencies:

> npm install

3. After that, you will be ready to run the test:

>npm run wdio

## Solution
After setting up the framework, the next step was to create the corresponding page objects. This will help us better organize our selectors and reuse code. The following step was to have a clear understanding of the workflow to be tested, allowing us to inspect the website and create the necessary selectors.
Once the selectors were created, the next step was to start adding the steps to be tested. For the test structure, I used the syntax of Jasmine. As mentioned earlier, I utilized assertion methods provided by webdriverIO to perform the assertions.

## QA
**Rodrigo Gonzalez Sibrins**

**Email:** rodrigosib2017@gmail.com