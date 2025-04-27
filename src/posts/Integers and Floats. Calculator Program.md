### Introduction

Just like in math, an integer like its name suggests is another data-type that stores any integer $\mathbb{Z}$ . So it includes $(0,1,2,3,4,5,...)$ as also $(-1,-2,-3,-4,-5,...)$. In an integer there is no decimal point. With integers you can do all the operations as in math. 

| Operator | Function                 |
| -------- | ------------------------ |
| +        | Adds                     |
| -        | Subtracts                |
| *        | Multiply                 |
| /        | Devide                   |
| %        | Mod(takes the remainder) |

Additionally going on the terminal and just typing python allows you to run lines of code directly in there.

## Calculator Program
---
Just like in math we make `x=1` and `y=2` and assign the sum to another variable `z` which we print.

```python
x = 1
y = 2

z = x + y

print(z)
```

It does the job right adding 1+2 and outputting 3. But it isn't really that useful. Lets allow the user to input the numbers himself using `input()`

``` python
x = input("Enter first number? ")
y = input("Enter second number? ")

z = x + y

print(z)
```

Now the calculator it's interactive and adds the numbers the user wants. But does it really give the right answer?

We have seen that the plus operator it's used differently on str, instead of adding it stitches the strings together. So instead of adding $1+2=3$ it joins the strings together $1+2=12$ . And the `input()` function always returns a string, even if a number is entered. 

So we need the input as an integer and not a string. This is done using another function that changes the data type. The `int()` function.

``` python
x = int(input("Enter first number? "))
y = int(input("Enter second number? "))

z = x + y

print(z)
```

Now the program should turn the string to number and correctly output the value. Lets try make some improvements. We actually do not need the z variable instead we can directly print the sum.

``` python
x = int(input("Enter first number? "))
y = int(input("Enter second number? "))

print(x + y)
```

## Floats
---
A float it's just like an integer but slightly different. It is any real number.

> **Float:** Another data type that stores a number that contains a decimal point

Out current calculator only works when the user cooperates ant types an integer. If the user types any number that contains a decimal point the int function is not going to works. We can fix this by using the `float()` function instead.

``` python
x = float(input("Enter first number? "))
y = float(input("Enter second number? "))

print(x + y)
```

Now we can use Floating point values in our app.

> **Floating point Value:** A number that contains a decimal place

Now lets say we want to round the final result. We can use the `round()` function for this. If we look at the documentation we see this

```python
round(number[, ndigits])
```

This means that the round function takes any one number as a argument. the square brackets mean that those arguments are optional. The `ndigits` specifies how many digits you want after the decimal point. If the `ndigits` its not specified it rounds us to the nearest integer.

``` python
x = float(input("Enter first number? "))
y = float(input("Enter second number? "))

roundedSum = round(x + y)

print(roundedSum)
```

Now lets add another feature. We want this, on big numbers, to add a comma every 3 digits from the end.

```python
x = float(input("Enter first number? "))
y = float(input("Enter second number? "))

roundedSum = round(x + y)

print(f"{roundedSum:,}")
```

```console
Enter first number? 999
Enter second number? 1
1,000
```

We see that the number is automatically formatted.

## Division
---
Now lets try with division instead of addition. And kindly simplify our code a little

```python
x = float(input("Enter first number? "))
y = float(input("Enter second number? "))

z = x / y

print(z)
```

```console
Enter first number? 2
Enter second number? 3
0.6666666666666666
```

We can still round the output. Lets try to round to 2 digits after the decimal point.

```python
x = float(input("Enter first number? "))
y = float(input("Enter second number? "))

roundedZ = round(x / y, 2)

print(roundedZ)
```

Doing this the output will round 2 digits after the decimal point.

Another way to round a digit is to use another feature of the f-string.

```python
x = float(input("Enter first number? "))
y = float(input("Enter second number? "))

roundedZ = round(x / y, 2)

print(f"{roundedZ:.2f}")
```

Differently then `f"{roundedSum:,}"` this time we add `.2f` after the colon. According to the documentation this is how we round the the 2nd digit after the decimal place in python.

## Tags
---
- [[Coding]]
- [[Python]]