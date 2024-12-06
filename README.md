# Improper Null Handling in JavaScript

This repository demonstrates a common error in JavaScript: improper handling of null values. The `bug.js` file contains a function that attempts to add two numbers but fails to correctly handle null inputs. The `bugSolution.js` file provides a corrected version with improved error handling.

## Bug Description

The `foo` function in `bug.js` does not check for null values before attempting to perform the addition. This can lead to unexpected behavior or errors if null values are passed as arguments.

## Solution

The `bugSolution.js` file shows the corrected version of the `foo` function. It explicitly checks for null values and returns 0 if either input is null. This improved error handling ensures that the function behaves predictably even with unexpected inputs.