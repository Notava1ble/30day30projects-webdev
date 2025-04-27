It's good that we have all these kind of functions but wouldn't it be nice to create our own. 

## Hello Function
---
Lets go back to `hello.py` file we created earlier. For this improvement delete everything and start from scratch. Let's pretend for a moment that a function named `hello()` exists.

```python
name = input("Whats your name? ")

hello()

print(name)
```

Running this code gives us an error saying that this function doesn't exist. So to use the function we first have to create it. We can create a function using the keyword `def`

```python
def hello():
	print("hello")

name = input("Whats your name? ")

hello()

print(name)
```

Here we have defined a function called hello. The colon after `hello()` means that whatever goes after has to be indented and its part of the function. In this case the function prints hello upon being run. The output is this

```console
Whats your name? Visar
hello
Visar
```

Just like the first time creating this app, we have to improve it. How about we add some parameters to this functions. 

```python
def hello(name):
	print("Hello," , name)

name = input("Whats your name? ")

hello(name)
```

In this case what we did is that we defined a parameter that can be passed to our function. The parameter is defined by putting it inside the parenthesis of the function we are defining. Then when calling the function we pass the variable name as an argument. This argument is then used inside the print function in the hello function.

The parameter defined at the top does not need to be the same as the argument that we pass. It can very well be like this

```python
def hello(name):
	print("Hello," , name)

hello("Visar")
```

Now what if we call the hello function without giving an argument? We can make the argument in out function optional. The way we do this is like follows:

```python
def hello(name="World"):
	print("Hello," , name)

name = input("Whats your name? ")

hello(name)

```

This way the parameter by default has the value of `world` so even if the user doesn't pass any arguments the  function will print `Hello, World`.

The code looks messy so now I want to def the function at the end.

```python
name = input("Whats your name? ")

hello(name)
.
.
.
def hello(name="World"):
	print("Hello," , name)

```

A problem arises. If we run the code an error with pop-up saying that hello is not defined. Well when the file interprets it firstly reads the part that runs hello first, and then stops because it hasn't defined it yet. so the function needs to be always after it's definition.

This quickly starts to get messy as your main part of the code is down. A common convention to fix this is to define a function with the main part of the code and then call it at the end of the code.

```python
def main():
	name = input("Whats your name? ")
	hello(name)

def hello(name="world"):
	print("Hello," , name)

main()
```

This way the interpreter reads that we're calling the hello function which has not yet been defined but doesn't we are not running it so we're fine. Then it reads that we are defining the hello function. Finally it calls the main function that has the main part of our code. When the hello function ends up being called it is already defined.

Another think to keep in mind in this case if we naively type the function hello like this

```python
def main():
	name = input("Whats your name? ")
	hello(name)

def hello():
	print("Hello," , name)

main()
```

Here thinking that we have defined name previously, we pass it to the print function directly. The problem here is when we define a variable inside a function, that variable only exists inside that function and no other function can access it.

> **Scope:** A variable only existing in the context in which you defined it

This is why we pass name as an argument.

## Return Value
---
Our function only has a side-effect but what if we want our function to return a value. Lets go to the calculator.py and implement a square feature.

```python
def main():
	x = int(inpit("Whats x? "))
	print("x squared is", square())

def square(x):
	return x * x

main()
```

In this case we get x from the user and then use the print function giving 2 arguments. The second argument is the return value from the function square, which in the definition returns $x*x$.   

[[Coding]], [[Python]]