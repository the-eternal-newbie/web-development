# Python elemental concepts

## Variables

### Instance variables
### Class variables

## Methods

### Decorators

Before looking at the differences between types of methods, it's important to understand a design pattern known as the decorator pattern, or simply called a decorator.

Decorators are simply functions. You can write them yourself, or use those included in libraries, or the Python standard library.

Like any function, decorators perform a task. The difference here is that decorators apply logic or change the behavior of other functions. They are an excellent way to reuse code, and can help to separate logic into individual concerns.

The decorator pattern is Python's preferred way of defining static or class methods. Here's what one looks like in Python:

```python
class DecoratorExample:
  """ Example Class """
  def __init__(self):
    """ Example Setup """
    print('Hello, World!')
  @staticmethod
  def example_function():
    """ This method is decorated! """
    print('I\'m a decorated function!')
de = DecoratorExample()
de.example_function()
```

Decorators have to immediately precede a function or class declaration. They start with the `@` sign, and unlike normal methods, you don't have to put parentheses on the end unless you are passing in arguments.

It's possible to combine multiple decorators, write your own, and apply them to classes as well.

### Instance methods

Instance methods are the most common type of methods in Python classes. These are so called because they can access unique data of their instance. If you have two objects each created from a car class, then they each may have different properties. They may have different colors, engine sizes, seats, and so on.

Instance methods must have self as a parameter, but you don't need to pass this in every time. Self is another Python special term. Inside any instance method, you can use self to access any data or methods that may reside in your class. You won't be able to access them without going through self.

Finally, as instance methods are the most common, there's no decorator needed. Any method you create will automatically be created as an instance method, unless you tell Python otherwise.

Here's an example:

```python
class DecoratorExample:
  """ Example Class """
  def __init__(self):
    """ Example Setup """
    print('Hello, World!')
    self.name = 'Decorator_Example'
  def example_function(self):
    """ This method is an instance method! """
    print('I\'m an instance method!')
    print('My name is ' + self.name)
de = DecoratorExample()
de.example_function()
```

The `name` variable is accessed through self. Notice that when example_function is called, you don't have to pass self in---Python does this for you.

### Static methods

Static methods are methods that are related to a class in some way, but don't need to access any class-specific data. You don't have to use self, and you don't even need to instantiate an instance, you can simply call your method:

```python
class DecoratorExample:
  """ Example Class """
  def __init__(self):
    """ Example Setup """
    print('Hello, World!')
  @staticmethod
  def example_function():
    """ This method is a static method! """
    print('I\'m a static method!')
de = DecoratorExample.example_function()
```

The `@staticmethod` decorator was used to tell Python that this method is a static method.

Static methods are great for utility functions, which perform a task in isolation. They don't need to (and cannot) access class data. They should be completely self-contained, and only work with data passed in as arguments. You may use a static method to add two numbers together, or print a given string.

### Class methods

Class methods are the third and final OOP method type to know. Class methods know about their class. They can't access specific instance data, but they can call other static methods.

Class methods don't need `self` as an argument, but they do need a parameter called `cls`. This stands for `class`, and like `self`, gets automatically passed in by Python.

Class methods are created using the `@classmethod` decorator.

```python
class DecoratorExample:
  """ Example Class """
  def __init__(self):
    """ Example Setup """
    print('Hello, World!')
  @classmethod
  def example_function(cls):
    """ This method is a class method! """
    print('I\'m a class method!')
    cls.some_other_function()
  @staticmethod
    def some_other_function():
    print('Hello!')
de = DecoratorExample()
de.example_function()
```

Class methods are possibly the more confusing method types of the three, but they do have their uses. Class methods can manipulate the class itself, which is useful when you're working on larger, more complex projects.

### When to use each method type

In summary:

1. Instance Methods: The most common method type. Able to access data and properties unique to each instance.
2. Static Methods: Cannot access anything else in the class. Totally self-contained code.
3. Class Methods: Can access limited methods in the class. Can modify class specific details.

## Polymorphism

## Introspection