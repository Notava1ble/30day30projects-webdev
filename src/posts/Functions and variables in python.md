### Introduction
---
>**Terminal** is a CLI (Command Line interface)

We can create a new file by typing in the terminal
```console
code hello.py
```

## First Program
---
We can now write our first program. In the new file type:

```python
print("Hello, World")
```

To run this program we use the following command after installing python and we will see `Hello, World` printed to the console:

```console
python hello.py
```

 In this case `print()` is a build-in function. It takes `"Hello, World"` as an **argument** which it uses to print in the terminal.
 
 > **Argument:** Input to functions that influence it's behaviour.
 > **Side Effects:** A side effect that a function has. In this case the side effect is outputting `Hello, World`

## Getting inputs. Variables
---
Lets say instead if hello world we want to use the users name. To to that we utilise the build-in `input()` function.

```python
input("What's Your Name? ")
print("Hello, World")
```

Unfortunately, this doesn't do much. we are taking the input but not using it, still printing `Hello, World`. The name `World` is Hardcoded. This means that we cannot change the name with the input.

>**Hardcode:** To put information into a software program so that it cannot be easily changed by a user

Another feature of functions is that they can have return values.

> **Return Values:** Some functions can return a value upon completing its task.

For example the `input()` function after getting the name of the user, it returns it as a value. But in our code we are not reading/using this value. To get the value we use **Variables**.

> **Variable:** A storage that contains some known or unknown quantity of data referred to as a value

```python
name = input("What's Your Name? ")
print("Hello, World")
```

We assign the variable `name` the return value of the `input()` function. The equal sign '`=`' assign a value to a variable almost like in math "$x=10$" . The last thing we have to do is print out the users name.

```python
name = input("What's Your Name? ")
print("Hello,")
print(name)
```

As we can see, when printing `name` we don't surround it with quotes, because using quotes it prints put the literal text written inside them. Without the quotes it prints the value that `name` has. The output is this(the text between the // is my input, // is not really there).

```console
What's Your Name? /Visar/
Hello,
Visar
```

We have now fixed the problem but not very well. We want it all in the same line.

## Fixing the Problem
---
Before we continue, when we make a program soon enough it is going to get very large. We use **comments** to help us read and organise the code better.

> **Comments:** Lines of code that are not interpreted by the computer. They are ignored in the code

To add a comment we use the prefix `#` (hash) in the beginning of a line. Commenting our code looks like this

```python
# Ask User For Their Name
name = input("What's Your Name? ")

# Say Hello To User
print("Hello,")
print(name)
```

The code looks much cleaner. 

Now back the the main topic, we want to improve the code to say `Hello, Visar` in the same line. In programming there are multiple ways of doing something.

1. One way is using the plus operator

```python
# Ask User For Their Name
name = input("What's Your Name? ")

# Say Hello To User
print("Hello, " + name)
```

The plus operator it's not adding them together but its stitching them together into one big string. The space after the `hello,` is there to separate the words.

2. Passing as a second argument

```python
# Ask User For Their Name
name = input("What's Your Name? ")

# Say Hello To User
print("Hello,", name)
```

Adding a comma allows us to mass multiple arguments into a function, thus printing all of them. When doing this, the `print()` adds a space in between the printed arguments itself.

3. Overwriting default behaviour

We'll look at the `print()` parameters to see why when printing twice we get the result into 2 different lines.

> **Parameters:** The values that the functions expects.

Differently from arguments that are the values that you pass to the function, parameters are the arguments that the function expects. For example the `input()` function expects a `string` which it uses it to display the question. The parameters that print expects, from the documentation are

```python
print(*objects, sep=' ', end='\n', file=None, flush=False)
```

Everything inside the parenthesis are are parameters of the `print()` function. Ignoring the 2 last ones, we see that the function expects any type of object i.e., how many strings you want. `sep` and `end` are optional arguments that tell you with what to separate different arguments and what to put to the end. We see than the `sep` argument has a default value of ` ` so that is why when using a comma the words were initially separated.

The `end` argument has a default value of `\n` which is the code for a new line. Changing that to nothing will fix the problem

```python
# Ask User For Their Name
name = input("What's Your Name? ")

# Say Hello To User
print("Hello,   ", end="")
print(name)
```

```console
What's Your Name? /Visar/
Hello, Visar
```

4. Using Format String


```python
# Ask User For Their Name
name = input("What's Your Name? ")

# Say Hello To User
print(f"Hello, {name}")
```

Adding `f` in front of a string turns it into a `format string` and by adding curly brackets around the variable we print its value. Similar to

```js
colsole.log(`Hello ${name}`)
```

in JavaScript.

## Formatting input
---
Often users don't give the input in the intended format. They might start it with lowercase, and accidental spaces etc. Well Strings come with some extra functionality that can help us manipulate and format them.

```python
# Ask the User For the Name
name = input("What's Your Name? ")

# Format The Name
name = name.strip().capitalize()  

# Say Hello To User
print(f"Hello, {name}")
```

In this case the variable `name` which stores a string, is manipulated by 2 Methods.

> **Method:** A function that “belongs to” an object(in this case a string)

The first method removes any white space around and the second capitalises the name. The output is like this

```console
What's Your Name? /    ViSAr   /
Hello, Visar
```

Note that everything between the // is what I inputted. My input is formatted before printing. Another way to do this is

```python
# Ask the User For the Name AND Format
name = input("What's Your Name? ").strip().capitalise()

# Say Hello To User
print(f"Hello, {name}")
```

A problem that rises here is what if the user Inputs its full name. The output will be something like this

```
What's Your Name? /    ViSAr mUllaj   /
Hello, Visar mullaj
```

The last name it's not capitalized. Why? The `capitalize()` method only capitalized the 1st letter of the entire string. If we look at the documentation we will find another method that does what we want. The updated code looks like this

```python
# Ask the User For the Name AND Format
name = input("What's Your Name? ").strip().title()

# Say Hello To User
print(f"Hello, {name}")
```

Title capitalizes every first letter of a word. Now if we want to say only the name when sating hello then we use another method called split,

```python
# Ask the User For the Name AND Format
name = input("What's Your Name? ").strip().title()

# Split Name
first, last = name.split(" ")

# Say Hello To User
print(f"Hello, {first}")
```

The split method returned 2 values for which we need 2 variables to store them and when printing we only use the one that has the first name.

## Tags
---
- [[Python]]
- [[Coding]]