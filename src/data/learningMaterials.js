const learningMaterials = [
  // =====================================================
  // PYTHON
  // =====================================================

  {
    id: 1,
    subject: "Python",
    icon: "🐍",
    title: "Python Variables & Data Types",
    level: "Beginner",

    shortDescription:
      "Learn how Python stores different kinds of information.",

    explanation: `
A variable is a name used to store a value in a program.

Python is dynamically typed, which means you do not have to
declare the data type of a variable before assigning a value.

For example:

name = "Srijita"
age = 22
cgpa = 8.45

Here, name stores text, age stores an integer, and cgpa stores
a decimal number.
`,

    keyPoints: [
      "Variables store values.",
      "Python is dynamically typed.",
      "A variable can refer to different types of objects.",
      "Variable names should be meaningful.",
      "Python is case-sensitive.",
    ],

    concepts: [
      {
        title: "String",
        explanation:
          "A string stores text such as a name or sentence.",
        example: `name = "Srijita"`,
      },

      {
        title: "Integer",
        explanation:
          "An integer is a whole number without a decimal part.",
        example: `age = 22`,
      },

      {
        title: "Float",
        explanation:
          "A float represents a number containing a decimal part.",
        example: `cgpa = 8.45`,
      },

      {
        title: "Boolean",
        explanation:
          "A Boolean represents True or False.",
        example: `is_student = True`,
      },
    ],

    code: `name = "Srijita"
age = 22
cgpa = 8.45
is_student = True

print(name)
print(age)
print(cgpa)
print(is_student)`,

    realWorld:
      "Variables are used everywhere in applications to store user information, prices, scores, settings, and other data.",

    commonMistakes: [
      "Using a variable before assigning a value.",
      "Confusing strings and numbers.",
      "Forgetting that Python is case-sensitive.",
      "Using unclear variable names.",
    ],

    interviewQuestions: [
      {
        question: "What is a variable in Python?",
        answer:
          "A variable is a name that refers to a value or object stored during program execution.",
      },
      {
        question: "Is Python statically typed?",
        answer:
          "No. Python is dynamically typed.",
      },
      {
        question: "What are common Python data types?",
        answer:
          "int, float, str, bool, list, tuple, set, and dict.",
      },
    ],

    quiz: [
      {
        question:
          "Which data type is used to store text?",
        options: [
          "int",
          "str",
          "float",
          "bool",
        ],
        answer: "str",
      },

      {
        question:
          "Which value represents a Boolean?",
        options: [
          '"True"',
          "1",
          "True",
          "true",
        ],
        answer: "True",
      },
    ],

    takeaway:
      "Variables allow programs to store and work with information."
  },


  {
    id: 2,
    subject: "Python",
    icon: "🐍",
    title: "Python Conditions & Loops",
    level: "Beginner",

    shortDescription:
      "Learn how Python makes decisions and repeats operations.",

    explanation: `
Programs often need to make decisions.

For example:

If a student's score is greater than or equal to 40,
the student passes. Otherwise, the student fails.

Python uses if, elif and else for decision making.

Loops are used when we need to repeat a block of code.
Python provides for and while loops.
`,

    keyPoints: [
      "if is used for decision making.",
      "elif checks another condition.",
      "else executes when previous conditions are false.",
      "for loops are useful for iterating over collections.",
      "while loops continue while a condition is true.",
    ],

    concepts: [
      {
        title: "if",
        explanation:
          "Runs code when a condition is true.",
        example: `if age >= 18:
    print("Adult")`,
      },

      {
        title: "for loop",
        explanation:
          "Repeats code for each item in a sequence.",
        example: `for i in range(5):
    print(i)`,
      },

      {
        title: "while loop",
        explanation:
          "Repeats code while a condition remains true.",
        example: `count = 0

while count < 5:
    print(count)
    count += 1`,
      },
    ],

    code: `score = 75

if score >= 40:
    print("Pass")
else:
    print("Fail")

for i in range(1, 6):
    print(i)`,

    realWorld:
      "Conditions are used in login systems, eligibility checks, payment processing, and security systems. Loops are used to process lists of users, transactions, files, and database records.",

    commonMistakes: [
      "Using = instead of == when comparing values.",
      "Creating an infinite while loop.",
      "Incorrect indentation.",
      "Forgetting to update a loop condition.",
    ],

    interviewQuestions: [
      {
        question:
          "What is the difference between if and elif?",
        answer:
          "if checks the first condition, while elif checks additional conditions if previous conditions were false.",
      },

      {
        question:
          "What is an infinite loop?",
        answer:
          "An infinite loop is a loop that never reaches a terminating condition.",
      },

      {
        question:
          "What is the difference between for and while?",
        answer:
          "for is commonly used to iterate over a sequence, while while repeats as long as a condition remains true.",
      },
    ],

    quiz: [
      {
        question:
          "Which keyword is used for another condition?",
        options: [
          "else if",
          "elif",
          "elseif",
          "another",
        ],
        answer: "elif",
      },

      {
        question:
          "Which loop is commonly used with range()?",
        options: [
          "while",
          "for",
          "if",
          "switch",
        ],
        answer: "for",
      },
    ],

    takeaway:
      "Conditions control decisions, while loops automate repeated work."
  },


  {
    id: 3,
    subject: "Python",
    icon: "🐍",
    title: "Python Functions",
    level: "Beginner",

    shortDescription:
      "Learn how to create reusable blocks of Python code.",

    explanation: `
A function is a reusable block of code designed to perform
a particular task.

Functions make programs easier to understand, test and maintain.

Python functions are created using the def keyword.
`,

    keyPoints: [
      "Functions reduce repeated code.",
      "def is used to define a function.",
      "Parameters receive input.",
      "return sends a result back.",
      "A function can be called multiple times.",
    ],

    concepts: [
      {
        title: "Function Definition",
        explanation:
          "The def keyword starts a function definition.",
        example: `def greet():
    print("Hello")`,
      },

      {
        title: "Parameter",
        explanation:
          "A parameter allows a function to receive data.",
        example: `def greet(name):
    print("Hello", name)`,
      },

      {
        title: "Return",
        explanation:
          "return sends a value back to the caller.",
        example: `def add(a, b):
    return a + b`,
      },
    ],

    code: `def add(a, b):
    return a + b

result = add(10, 20)

print(result)`,

    realWorld:
      "Functions are used in almost every software application to divide large programs into smaller reusable pieces.",

    commonMistakes: [
      "Forgetting parentheses when calling a function.",
      "Confusing parameters with arguments.",
      "Forgetting return when a result is needed.",
      "Writing one very large function instead of smaller reusable functions.",
    ],

    interviewQuestions: [
      {
        question:
          "Why are functions used?",
        answer:
          "Functions improve code reuse, readability, testing, and maintainability.",
      },

      {
        question:
          "What is a parameter?",
        answer:
          "A parameter is a variable defined in a function that receives an input value.",
      },

      {
        question:
          "What does return do?",
        answer:
          "return sends a value from a function back to its caller.",
      },
    ],

    quiz: [
      {
        question:
          "Which keyword creates a function?",
        options: [
          "function",
          "def",
          "func",
          "create",
        ],
        answer: "def",
      },

      {
        question:
          "Which keyword sends a value back?",
        options: [
          "send",
          "output",
          "return",
          "back",
        ],
        answer: "return",
      },
    ],

    takeaway:
      "Functions make code reusable, organized and easier to maintain."
  },


  {
    id: 4,
    subject: "Python",
    icon: "🐍",
    title: "Python Lists, Tuples, Sets & Dictionaries",
    level: "Intermediate",

    shortDescription:
      "Understand Python's most important collection data structures.",

    explanation: `
Python provides several built-in collection types.

Lists are ordered and mutable.

Tuples are ordered but immutable.

Sets store unique values.

Dictionaries store data using key-value pairs.
`,

    keyPoints: [
      "Lists are ordered and mutable.",
      "Tuples are ordered and immutable.",
      "Sets contain unique elements.",
      "Dictionaries store key-value pairs.",
      "Choosing the right data structure improves program design.",
    ],

    concepts: [
      {
        title: "List",
        explanation:
          "A list is an ordered, mutable collection.",
        example: `numbers = [10, 20, 30]`,
      },

      {
        title: "Tuple",
        explanation:
          "A tuple is an ordered collection that cannot be changed after creation.",
        example: `point = (10, 20)`,
      },

      {
        title: "Set",
        explanation:
          "A set stores unique elements.",
        example: `numbers = {1, 2, 3}`,
      },

      {
        title: "Dictionary",
        explanation:
          "A dictionary stores values using keys.",
        example: `student = {
    "name": "Srijita",
    "age": 22
}`,
      },
    ],

    code: `students = ["A", "B", "C"]

student = {
    "name": "Srijita",
    "course": "CSE"
}

print(students)
print(student["name"])`,

    realWorld:
      "Collections are used to store user records, product lists, configuration data, unique IDs and many other forms of structured information.",

    commonMistakes: [
      "Using a list when a dictionary would be more appropriate.",
      "Assuming sets preserve a meaningful order.",
      "Trying to modify a tuple.",
      "Using duplicate dictionary keys.",
    ],

    interviewQuestions: [
      {
        question:
          "What is the difference between a list and tuple?",
        answer:
          "Both are ordered collections, but lists are mutable while tuples are immutable.",
      },

      {
        question:
          "What is a dictionary?",
        answer:
          "A dictionary stores data as key-value pairs.",
      },

      {
        question:
          "Why are sets useful?",
        answer:
          "Sets are useful when you need unique elements and efficient membership testing.",
      },
    ],

    quiz: [
      {
        question:
          "Which collection stores key-value pairs?",
        options: [
          "List",
          "Tuple",
          "Dictionary",
          "Set",
        ],
        answer: "Dictionary",
      },

      {
        question:
          "Which collection is immutable?",
        options: [
          "List",
          "Tuple",
          "Set",
          "Dictionary",
        ],
        answer: "Tuple",
      },
    ],

    takeaway:
      "Choosing the right collection makes Python programs clearer and more efficient."
  },


  {
    id: 5,
    subject: "Python",
    icon: "🐍",
    title: "Object-Oriented Programming",
    level: "Intermediate",

    shortDescription:
      "Learn classes, objects, inheritance and encapsulation.",

    explanation: `
Object-Oriented Programming, or OOP, organizes software around
objects that contain data and behavior.

A class is a blueprint.

An object is an instance of a class.

Python supports important OOP concepts such as encapsulation,
inheritance, polymorphism and abstraction.
`,

    keyPoints: [
      "A class is a blueprint for objects.",
      "An object is an instance of a class.",
      "Inheritance allows classes to reuse behavior.",
      "Encapsulation controls how data and behavior are organized.",
      "Polymorphism allows different objects to respond to the same interface.",
    ],

    concepts: [
      {
        title: "Class",
        explanation:
          "A class defines the structure and behavior of objects.",
        example: `class Student:
    pass`,
      },

      {
        title: "Object",
        explanation:
          "An object is created from a class.",
        example: `student = Student()`,
      },

      {
        title: "Inheritance",
        explanation:
          "Inheritance allows a class to derive behavior from another class.",
        example: `class Dog(Animal):
    pass`,
      },
    ],

    code: `class Student:

    def __init__(self, name):
        self.name = name

    def introduce(self):
        print("My name is", self.name)


student = Student("Srijita")

student.introduce()`,

    realWorld:
      "OOP is widely used to model users, products, accounts, vehicles, employees and other entities in software systems.",

    commonMistakes: [
      "Confusing classes and objects.",
      "Forgetting self in instance methods.",
      "Creating unnecessarily complicated class hierarchies.",
      "Misunderstanding inheritance.",
    ],

    interviewQuestions: [
      {
        question:
          "What is a class?",
        answer:
          "A class is a blueprint that defines the data and behavior of objects.",
      },

      {
        question:
          "What is an object?",
        answer:
          "An object is an instance of a class.",
      },

      {
        question:
          "What is inheritance?",
        answer:
          "Inheritance allows one class to derive properties and behavior from another class.",
      },
    ],

    quiz: [
      {
        question:
          "A class is best described as:",
        options: [
          "A database",
          "A blueprint",
          "A variable",
          "A loop",
        ],
        answer: "A blueprint",
      },

      {
        question:
          "An object is:",
        options: [
          "An instance of a class",
          "A function",
          "A loop",
          "A data type",
        ],
        answer: "An instance of a class",
      },
    ],

    takeaway:
      "OOP helps developers organize large applications using reusable objects and classes."
  },


  {
    id: 6,
    subject: "Python",
    icon: "🐍",
    title: "Exception Handling",
    level: "Intermediate",

    shortDescription:
      "Learn how Python programs handle unexpected errors.",

    explanation: `
Programs can encounter errors during execution.

Python provides try, except, else and finally for handling
many runtime exceptions.

Exception handling allows programs to respond gracefully
instead of crashing unexpectedly.
`,

    keyPoints: [
      "try contains code that may raise an exception.",
      "except handles a matching exception.",
      "else runs when no exception occurs.",
      "finally runs whether an exception occurs or not.",
      "Specific exceptions are generally better than catching everything.",
    ],

    concepts: [
      {
        title: "try",
        explanation:
          "Contains code that may produce an exception.",
        example: `try:
    number = int(input())`,
      },

      {
        title: "except",
        explanation:
          "Handles an exception.",
        example: `except ValueError:
    print("Invalid number")`,
      },
    ],

    code: `try:
    number = int(input("Enter a number: "))
    print(10 / number)

except ValueError:
    print("Please enter a valid number.")

except ZeroDivisionError:
    print("Cannot divide by zero.")`,

    realWorld:
      "Exception handling is important in applications that process user input, files, network requests, databases and external services.",

    commonMistakes: [
      "Catching every exception without understanding it.",
      "Ignoring useful error information.",
      "Using exceptions instead of normal control flow unnecessarily.",
    ],

    interviewQuestions: [
      {
        question:
          "Why is exception handling important?",
        answer:
          "It allows programs to handle runtime errors gracefully and continue or terminate in a controlled way.",
      },

      {
        question:
          "What is the purpose of finally?",
        answer:
          "finally contains code that should run regardless of whether an exception occurs.",
      },
    ],

    quiz: [
      {
        question:
          "Which block handles an exception?",
        options: [
          "try",
          "except",
          "else",
          "finally",
        ],
        answer: "except",
      },

      {
        question:
          "Which block normally runs regardless of an exception?",
        options: [
          "try",
          "except",
          "finally",
          "catch",
        ],
        answer: "finally",
      },
    ],

    takeaway:
      "Exception handling helps applications deal with unexpected runtime problems safely."
  },


  {
    id: 7,
    subject: "Python",
    icon: "🐍",
    title: "File Handling",
    level: "Intermediate",

    shortDescription:
      "Learn how Python reads and writes files.",

    explanation: `
File handling allows programs to work with information stored
outside the program itself.

Python provides the open() function for opening files.

Common modes include:

r = read
w = write
a = append

Using with is recommended because it automatically manages
closing the file.
`,

    keyPoints: [
      "open() is used to open files.",
      "r means read.",
      "w means write.",
      "a means append.",
      "with automatically manages the file resource.",
    ],

    concepts: [
      {
        title: "Reading",
        explanation:
          "Read data from an existing file.",
        example: `with open("data.txt", "r") as file:
    data = file.read()`,
      },

      {
        title: "Writing",
        explanation:
          "Write data to a file.",
        example: `with open("data.txt", "w") as file:
    file.write("Hello")`,
      },
    ],

    code: `with open("notes.txt", "w") as file:
    file.write("Study Python")

with open("notes.txt", "r") as file:
    content = file.read()

print(content)`,

    realWorld:
      "File handling is used for logs, reports, configuration files, exported data and document processing.",

    commonMistakes: [
      "Using the wrong file mode.",
      "Forgetting that w can overwrite existing content.",
      "Not handling missing files.",
      "Manually managing files when with would be safer.",
    ],

    interviewQuestions: [
      {
        question:
          "What is the difference between r and w?",
        answer:
          "r opens a file for reading, while w opens it for writing and can overwrite existing content.",
      },

      {
        question:
          "Why use with open()?",
        answer:
          "It automatically handles closing the file after the block finishes.",
      },
    ],

    quiz: [
      {
        question:
          "Which mode is used for reading?",
        options: [
          "r",
          "w",
          "a",
          "x",
        ],
        answer: "r",
      },

      {
        question:
          "Which mode appends data?",
        options: [
          "r",
          "w",
          "a",
          "x",
        ],
        answer: "a",
      },
    ],

    takeaway:
      "File handling lets Python applications store and retrieve information from files."
  },


  {
    id: 8,
    subject: "Python",
    icon: "🐍",
    title: "NumPy & Pandas Basics",
    level: "Intermediate",

    shortDescription:
      "Learn two important Python libraries used in data analysis and machine learning.",

    explanation: `
NumPy is a Python library designed for numerical computing.

Pandas is a library designed for data manipulation and analysis.

NumPy provides powerful array operations.

Pandas provides structures such as Series and DataFrame.
`,

    keyPoints: [
      "NumPy is widely used for numerical computing.",
      "NumPy arrays support efficient numerical operations.",
      "Pandas is useful for structured data.",
      "A DataFrame is a two-dimensional labeled data structure.",
      "Both libraries are widely used in data science and ML workflows.",
    ],

    concepts: [
      {
        title: "NumPy Array",
        explanation:
          "An array stores numerical data efficiently.",
        example: `import numpy as np

numbers = np.array([1, 2, 3])`,
      },

      {
        title: "Pandas DataFrame",
        explanation:
          "A DataFrame represents tabular data.",
        example: `import pandas as pd

data = pd.DataFrame({
    "Name": ["A", "B"],
    "Score": [80, 90]
})`,
      },
    ],

    code: `import numpy as np
import pandas as pd

numbers = np.array([10, 20, 30])

data = pd.DataFrame({
    "Name": ["A", "B"],
    "Score": [80, 90]
})

print(numbers)
print(data)`,

    realWorld:
      "NumPy and Pandas are commonly used for data analysis, preprocessing, machine learning and scientific computing.",

    commonMistakes: [
      "Confusing a NumPy array with a Python list.",
      "Ignoring missing values in datasets.",
      "Not checking data types before analysis.",
    ],

    interviewQuestions: [
      {
        question:
          "What is NumPy used for?",
        answer:
          "NumPy is mainly used for numerical computing and efficient array operations.",
      },

      {
        question:
          "What is a Pandas DataFrame?",
        answer:
          "A DataFrame is a two-dimensional labeled data structure used to work with tabular data.",
      },
    ],

    quiz: [
      {
        question:
          "Which library is mainly used for tabular data analysis?",
        options: [
          "Pandas",
          "Flask",
          "React",
          "Express",
        ],
        answer: "Pandas",
      },

      {
        question:
          "Which library provides NumPy arrays?",
        options: [
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Django",
        ],
        answer: "NumPy",
      },
    ],

    takeaway:
      "NumPy and Pandas form an important foundation for Python-based data science."
  },


  // =====================================================
  // AI / MACHINE LEARNING
  // =====================================================

  {
    id: 101,
    subject: "AI / ML",
    icon: "🤖",
    title: "AI vs Machine Learning vs Deep Learning",
    level: "Beginner",

    shortDescription:
      "Understand the relationship between AI, ML and Deep Learning.",

    explanation: `
Artificial Intelligence is the broad field of building systems
that perform tasks associated with intelligent behavior.

Machine Learning is a subset of AI where systems learn patterns
from data.

Deep Learning is a subset of machine learning that uses
multi-layer neural networks.
`,

    keyPoints: [
      "AI is the broadest concept.",
      "Machine Learning is a subset of AI.",
      "Deep Learning is a subset of Machine Learning.",
      "ML usually depends heavily on data.",
      "Deep learning is especially useful for complex unstructured data.",
    ],

    concepts: [
      {
        title: "Artificial Intelligence",
        explanation:
          "AI focuses on creating systems capable of tasks associated with intelligent behavior.",
        example:
          "A system that plans routes or answers questions.",
      },

      {
        title: "Machine Learning",
        explanation:
          "ML learns patterns from data to make predictions or decisions.",
        example:
          "Predicting whether an email is spam.",
      },

      {
        title: "Deep Learning",
        explanation:
          "Deep learning uses neural networks with multiple layers.",
        example:
          "Image classification using a convolutional neural network.",
      },
    ],

    code: `AI
│
└── Machine Learning
    │
    └── Deep Learning`,

    realWorld:
      "AI, ML and deep learning are used in recommendation systems, fraud detection, computer vision, speech recognition and natural language processing.",

    commonMistakes: [
      "Treating AI and ML as exactly the same thing.",
      "Assuming every AI system uses deep learning.",
      "Thinking more data automatically guarantees a better model.",
    ],

    interviewQuestions: [
      {
        question:
          "What is AI?",
        answer:
          "AI is the broader field of building systems capable of tasks associated with intelligent behavior.",
      },

      {
        question:
          "What is Machine Learning?",
        answer:
          "Machine Learning enables systems to learn patterns from data and use them to make predictions or decisions.",
      },

      {
        question:
          "What is Deep Learning?",
        answer:
          "Deep Learning is a branch of machine learning based on multi-layer neural networks.",
      },
    ],

    quiz: [
      {
        question:
          "Which is the broadest concept?",
        options: [
          "Deep Learning",
          "Machine Learning",
          "Artificial Intelligence",
          "Neural Network",
        ],
        answer: "Artificial Intelligence",
      },

      {
        question:
          "Deep Learning is a subset of:",
        options: [
          "DBMS",
          "Machine Learning",
          "Operating Systems",
          "Networking",
        ],
        answer: "Machine Learning",
      },
    ],

    takeaway:
      "AI is the broad field, ML is a subset of AI, and Deep Learning is a subset of ML."
  },


  {
    id: 102,
    subject: "AI / ML",
    icon: "🤖",
    title: "Supervised Learning",
    level: "Beginner",

    shortDescription:
      "Learn how models learn from labeled examples.",

    explanation: `
Supervised learning uses labeled training data.

Each training example contains an input and a known target output.

The model learns a relationship between inputs and outputs
and then uses that relationship to make predictions for new data.

Two major supervised learning tasks are classification and regression.
`,

    keyPoints: [
      "Training data contains known target values.",
      "Classification predicts categories.",
      "Regression predicts numerical values.",
      "The model learns from examples.",
      "Evaluation is performed on data that was not used for training.",
    ],

    concepts: [
      {
        title: "Classification",
        explanation:
          "Predicts a category or class.",
        example:
          "Spam vs Not Spam.",
      },

      {
        title: "Regression",
        explanation:
          "Predicts a numerical value.",
        example:
          "Predicting house price.",
      },
    ],

    code: `Input Data
    ↓
Labeled Training Data
    ↓
Machine Learning Algorithm
    ↓
Trained Model
    ↓
New Input
    ↓
Prediction`,

    realWorld:
      "Supervised learning is used for spam detection, credit-risk prediction, medical classification and price prediction.",

    commonMistakes: [
      "Using labels from the test set during training.",
      "Assuming training accuracy alone proves a model is good.",
      "Ignoring class imbalance.",
    ],

    interviewQuestions: [
      {
        question:
          "What is supervised learning?",
        answer:
          "It is machine learning using labeled examples to learn a mapping from inputs to target outputs.",
      },

      {
        question:
          "What is classification?",
        answer:
          "Classification predicts a discrete category or class.",
      },

      {
        question:
          "What is regression?",
        answer:
          "Regression predicts a numerical value.",
      },
    ],

    quiz: [
      {
        question:
          "Supervised learning uses:",
        options: [
          "Only unlabeled data",
          "Labeled data",
          "No data",
          "Only images",
        ],
        answer: "Labeled data",
      },

      {
        question:
          "Predicting house price is usually:",
        options: [
          "Classification",
          "Regression",
          "Clustering",
          "Association",
        ],
        answer: "Regression",
      },
    ],

    takeaway:
      "Supervised learning learns from examples where the desired output is known."
  },


  {
    id: 103,
    subject: "AI / ML",
    icon: "🤖",
    title: "Unsupervised Learning",
    level: "Intermediate",

    shortDescription:
      "Learn how models find patterns in data without labeled targets.",

    explanation: `
Unsupervised learning works with data where the target output
is not provided.

The algorithm attempts to discover useful structure or patterns.

Clustering is one common example.

For instance, a company may group customers based on purchasing
behavior without already knowing the customer categories.
`,

    keyPoints: [
      "Training data does not contain target labels.",
      "The algorithm looks for structure or patterns.",
      "Clustering is a common unsupervised technique.",
      "Dimensionality reduction is another common application.",
    ],

    concepts: [
      {
        title: "Clustering",
        explanation:
          "Groups similar observations together.",
        example:
          "Grouping customers by shopping behavior.",
      },

      {
        title: "Dimensionality Reduction",
        explanation:
          "Reduces the number of variables while attempting to preserve useful information.",
        example:
          "Reducing hundreds of features to a smaller representation.",
      },
    ],

    code: `Customer Data
      ↓
No Labels
      ↓
Clustering Algorithm
      ↓
Group 1
Group 2
Group 3`,

    realWorld:
      "Unsupervised learning is useful for customer segmentation, anomaly detection and exploratory data analysis.",

    commonMistakes: [
      "Assuming clusters automatically represent meaningful business categories.",
      "Choosing the number of clusters without justification.",
      "Ignoring feature scaling when the algorithm is sensitive to scale.",
    ],

    interviewQuestions: [
      {
        question:
          "What is unsupervised learning?",
        answer:
          "It is learning from data without labeled target outputs.",
      },

      {
        question:
          "Give an example of unsupervised learning.",
        answer:
          "Customer segmentation using clustering.",
      },
    ],

    quiz: [
      {
        question:
          "Unsupervised learning generally uses:",
        options: [
          "Labeled data",
          "Unlabeled data",
          "Only text",
          "Only images",
        ],
        answer: "Unlabeled data",
      },

      {
        question:
          "Which is a common unsupervised technique?",
        options: [
          "Clustering",
          "Linear regression",
          "Logistic regression",
          "Decision classification",
        ],
        answer: "Clustering",
      },
    ],

    takeaway:
      "Unsupervised learning discovers structure in data without predefined target labels."
  },


  {
    id: 104,
    subject: "AI / ML",
    icon: "📈",
    title: "Regression",
    level: "Intermediate",

    shortDescription:
      "Learn how machine learning predicts numerical values.",

    explanation: `
Regression is a supervised learning task in which the target
is numerical.

For example, a model can predict house price, temperature,
sales or salary.

Linear regression is one of the simplest regression algorithms.
`,

    keyPoints: [
      "Regression predicts numerical values.",
      "It is a supervised learning task.",
      "Linear regression models a relationship using a linear equation.",
      "Features are used to predict the target.",
    ],

    concepts: [
      {
        title: "Feature",
        explanation:
          "An input variable used by the model.",
        example:
          "House area.",
      },

      {
        title: "Target",
        explanation:
          "The value the model tries to predict.",
        example:
          "House price.",
      },
    ],

    code: `Area → Model → Price

800 sq ft  →  ₹40L
1000 sq ft →  ₹50L
1200 sq ft →  ₹60L`,

    realWorld:
      "Regression is used for demand forecasting, sales prediction, price prediction and estimating continuous measurements.",

    commonMistakes: [
      "Using regression for categorical outputs.",
      "Ignoring outliers.",
      "Assuming a linear relationship when the problem is strongly nonlinear.",
    ],

    interviewQuestions: [
      {
        question:
          "What does regression predict?",
        answer:
          "Regression predicts numerical or continuous values.",
      },

      {
        question:
          "Give an example of regression.",
        answer:
          "Predicting house prices.",
      },
    ],

    quiz: [
      {
        question:
          "Regression predicts:",
        options: [
          "Categories only",
          "Numerical values",
          "Images only",
          "Text only",
        ],
        answer: "Numerical values",
      },
    ],

    takeaway:
      "Regression is used when the prediction target is a numerical value."
  },


  {
    id: 105,
    subject: "AI / ML",
    icon: "🌳",
    title: "Decision Trees",
    level: "Intermediate",

    shortDescription:
      "Understand one of the most intuitive machine learning algorithms.",

    explanation: `
A Decision Tree makes predictions by repeatedly splitting data
based on feature values.

It looks similar to a flowchart.

Each internal node represents a decision,
each branch represents an outcome,
and a leaf represents a prediction.
`,

    keyPoints: [
      "Decision Trees can be used for classification and regression.",
      "They split data using feature-based decisions.",
      "Trees are easy to visualize and explain.",
      "Very deep trees can overfit.",
      "Pruning or regularization can help control complexity.",
    ],

    concepts: [
      {
        title: "Root",
        explanation:
          "The starting point of the tree.",
        example:
          "Is income greater than ₹50,000?",
      },

      {
        title: "Branch",
        explanation:
          "Represents the outcome of a decision.",
        example:
          "Yes or No.",
      },

      {
        title: "Leaf",
        explanation:
          "Represents the final prediction.",
        example:
          "Approved / Rejected.",
      },
    ],

    code: `Income > 50000?
       /       \\
     Yes       No
      |         |
   Approve    Reject`,

    realWorld:
      "Decision trees are used in classification, risk assessment, customer decisions and interpretable prediction systems.",

    commonMistakes: [
      "Allowing the tree to grow unnecessarily deep.",
      "Ignoring overfitting.",
      "Assuming trees always perform best without tuning.",
    ],

    interviewQuestions: [
      {
        question:
          "What is a Decision Tree?",
        answer:
          "It is a model that makes predictions by recursively splitting data using feature-based decisions.",
      },

      {
        question:
          "Can Decision Trees perform regression?",
        answer:
          "Yes. They can be used for both classification and regression.",
      },
    ],

    quiz: [
      {
        question:
          "A leaf in a Decision Tree represents:",
        options: [
          "The final prediction",
          "The dataset",
          "The input file",
          "The algorithm",
        ],
        answer: "The final prediction",
      },
    ],

    takeaway:
      "Decision Trees are intuitive models that make predictions through a sequence of decisions."
  },


  {
    id: 106,
    subject: "AI / ML",
    icon: "🌲",
    title: "Random Forest",
    level: "Intermediate",

    shortDescription:
      "Learn how multiple decision trees can work together.",

    explanation: `
Random Forest is an ensemble learning algorithm.

Instead of depending on one decision tree, it combines predictions
from many decision trees.

For classification, trees typically vote on the predicted class.
For regression, predictions can be averaged.
`,

    keyPoints: [
      "Random Forest combines multiple decision trees.",
      "It is an ensemble learning method.",
      "It can be used for classification and regression.",
      "Combining many trees can improve robustness compared with a single tree.",
      "Random Forest can estimate feature importance in several implementations.",
    ],

    concepts: [
      {
        title: "Ensemble",
        explanation:
          "Combines multiple models to produce a final prediction.",
        example:
          "Many decision trees voting together.",
      },

      {
        title: "Bagging",
        explanation:
          "Builds models on different bootstrap samples of the training data.",
        example:
          "Each tree sees a different sampled training set.",
      },
    ],

    code: `Tree 1 → Cat
Tree 2 → Cat
Tree 3 → Dog
Tree 4 → Cat
Tree 5 → Cat

Final Prediction → Cat`,

    realWorld:
      "Random Forest is used in classification, risk prediction, feature analysis and many tabular-data machine learning tasks.",

    commonMistakes: [
      "Assuming more trees always produce unlimited improvement.",
      "Ignoring data leakage.",
      "Using inappropriate evaluation methods.",
    ],

    interviewQuestions: [
      {
        question:
          "What is Random Forest?",
        answer:
          "Random Forest is an ensemble algorithm that combines predictions from multiple decision trees.",
      },

      {
        question:
          "Why use multiple trees?",
        answer:
          "Combining multiple trees can reduce dependence on a single tree and improve generalization.",
      },
    ],

    quiz: [
      {
        question:
          "Random Forest is made from multiple:",
        options: [
          "Neural networks",
          "Decision Trees",
          "Databases",
          "APIs",
        ],
        answer: "Decision Trees",
      },
    ],

    takeaway:
      "Random Forest combines multiple decision trees to produce more robust predictions."
  },


  {
    id: 107,
    subject: "AI / ML",
    icon: "⚠️",
    title: "Overfitting & Underfitting",
    level: "Intermediate",

    shortDescription:
      "Understand two common machine learning problems.",

    explanation: `
Overfitting occurs when a model learns the training data too
closely, including noise, and performs poorly on unseen data.

Underfitting occurs when a model is too simple to capture the
important patterns in the data.

A good model should generalize well to new examples.
`,

    keyPoints: [
      "Overfitting means the model is too closely adapted to training data.",
      "Underfitting means the model is too simple.",
      "Validation data helps evaluate generalization.",
      "Regularization can help reduce overfitting.",
      "More complex models are not automatically better.",
    ],

    concepts: [
      {
        title: "Overfitting",
        explanation:
          "Training performance is very good but unseen-data performance is poor.",
        example:
          "Training accuracy 99%, test accuracy 65%.",
      },

      {
        title: "Underfitting",
        explanation:
          "The model performs poorly even on training data because it has not captured enough structure.",
        example:
          "Training accuracy 60%, test accuracy 58%.",
      },
    ],

    code: `Underfitting
Model too simple
       ↓
Poor training performance

Good Fit
Balanced model
       ↓
Good generalization

Overfitting
Model too complex
       ↓
Excellent training
Poor test performance`,

    realWorld:
      "Avoiding overfitting is essential when building reliable machine learning systems.",

    commonMistakes: [
      "Looking only at training accuracy.",
      "Using the test set repeatedly during model selection.",
      "Assuming a more complex model must be better.",
    ],

    interviewQuestions: [
      {
        question:
          "What is overfitting?",
        answer:
          "Overfitting occurs when a model learns training data too closely and fails to generalize well to unseen data.",
      },

      {
        question:
          "How can overfitting be reduced?",
        answer:
          "Methods include regularization, simpler models, more representative data, cross-validation and appropriate early stopping for some models.",
      },
    ],

    quiz: [
      {
        question:
          "A model with very high training accuracy but poor test accuracy may be:",
        options: [
          "Underfitting",
          "Overfitting",
          "Clustering",
          "Normalizing",
        ],
        answer: "Overfitting",
      },
    ],

    takeaway:
      "The goal is not to memorize training data but to generalize well to unseen examples."
  },


  {
    id: 108,
    subject: "AI / ML",
    icon: "📊",
    title: "Model Evaluation Metrics",
    level: "Intermediate",

    shortDescription:
      "Learn accuracy, precision, recall and F1-score.",

    explanation: `
A machine learning model needs to be evaluated using appropriate
metrics.

Accuracy measures the proportion of correct predictions.

Precision measures how many predicted positive cases were actually
positive.

Recall measures how many actual positive cases were successfully
identified.

F1-score combines precision and recall using their harmonic mean.
`,

    keyPoints: [
      "Accuracy = correct predictions / total predictions.",
      "Precision focuses on predicted positives.",
      "Recall focuses on actual positives.",
      "F1-score balances precision and recall.",
      "The best metric depends on the problem.",
    ],

    concepts: [
      {
        title: "Accuracy",
        explanation:
          "Measures overall proportion of correct predictions.",
        example:
          "90 correct predictions out of 100 = 90% accuracy.",
      },

      {
        title: "Precision",
        explanation:
          "Among predicted positives, measures how many are truly positive.",
        example:
          "Important when false positives are costly.",
      },

      {
        title: "Recall",
        explanation:
          "Among actual positives, measures how many were identified.",
        example:
          "Important when missing a positive case is costly.",
      },

      {
        title: "F1-score",
        explanation:
          "Combines precision and recall into one measure.",
        example:
          "Useful when both false positives and false negatives matter.",
      },
    ],

    code: `Accuracy
= Correct Predictions / Total Predictions

Precision
= True Positives / (True Positives + False Positives)

Recall
= True Positives / (True Positives + False Negatives)`,

    realWorld:
      "Evaluation metrics are essential in fraud detection, medical diagnosis, spam filtering and other classification systems.",

    commonMistakes: [
      "Using accuracy alone for highly imbalanced datasets.",
      "Confusing precision and recall.",
      "Choosing metrics without considering the business problem.",
    ],

    interviewQuestions: [
      {
        question:
          "What is precision?",
        answer:
          "Precision is the proportion of predicted positive cases that are actually positive.",
      },

      {
        question:
          "What is recall?",
        answer:
          "Recall is the proportion of actual positive cases that the model successfully identifies.",
      },

      {
        question:
          "What is F1-score?",
        answer:
          "F1-score is the harmonic mean of precision and recall.",
      },
    ],

    quiz: [
      {
        question:
          "Which metric combines precision and recall?",
        options: [
          "Accuracy",
          "F1-score",
          "MAE",
          "R²",
        ],
        answer: "F1-score",
      },

      {
        question:
          "Recall focuses on:",
        options: [
          "Actual positive cases",
          "Only true negatives",
          "Training time",
          "Number of features",
        ],
        answer: "Actual positive cases",
      },
    ],

    takeaway:
      "Choose evaluation metrics based on what mistakes matter most in your application."
  },


  {
    id: 109,
    subject: "AI / ML",
    icon: "🧪",
    title: "Train, Validation & Test Data",
    level: "Intermediate",

    shortDescription:
      "Understand how datasets are separated during machine learning.",

    explanation: `
A dataset is often divided into training, validation and test sets.

The training set is used to learn model parameters.

The validation set can be used for model selection and hyperparameter
tuning.

The test set is kept separate and used for final evaluation.
`,

    keyPoints: [
      "Training data teaches the model.",
      "Validation data helps choose models or settings.",
      "Test data provides a final estimate of generalization.",
      "The test set should not be repeatedly used for tuning.",
      "Data leakage can make evaluation misleading.",
    ],

    concepts: [
      {
        title: "Training Set",
        explanation:
          "Used to fit the model.",
        example:
          "80% of a dataset in a simple split.",
      },

      {
        title: "Validation Set",
        explanation:
          "Used during model development.",
        example:
          "Choosing hyperparameters.",
      },

      {
        title: "Test Set",
        explanation:
          "Used for final evaluation.",
        example:
          "Measuring performance after model selection.",
      },
    ],

    code: `Dataset
   │
   ├── Training
   │
   ├── Validation
   │
   └── Test`,

    realWorld:
      "Proper data splitting is critical for trustworthy machine learning experiments.",

    commonMistakes: [
      "Training directly on test data.",
      "Using test results to repeatedly tune the model.",
      "Allowing preprocessing to leak information from the test set.",
    ],

    interviewQuestions: [
      {
        question:
          "Why do we split data?",
        answer:
          "To evaluate how well the model generalizes to data that was not used to fit it.",
      },

      {
        question:
          "What is data leakage?",
        answer:
          "Data leakage occurs when information that should be unavailable during training influences the model or evaluation.",
      },
    ],

    quiz: [
      {
        question:
          "Which dataset is normally used to fit model parameters?",
        options: [
          "Training",
          "Validation",
          "Test",
          "Production",
        ],
        answer: "Training",
      },
    ],

    takeaway:
      "Separating training, validation and test data helps produce more trustworthy model evaluation."
  },


  {
    id: 110,
    subject: "AI / ML",
    icon: "🧩",
    title: "Feature Engineering",
    level: "Intermediate",

    shortDescription:
      "Learn how input data can be transformed into useful model features.",

    explanation: `
Feature engineering is the process of creating, transforming or
selecting input variables that help a machine learning model.

Good features can make patterns easier for a model to learn.

Examples include extracting the day of the week from a date,
encoding categories and creating ratios.
`,

    keyPoints: [
      "Features are inputs used by a model.",
      "Feature engineering can improve model performance.",
      "Categorical data may need suitable encoding.",
      "Scaling may be important for some algorithms.",
      "Feature engineering should be performed without leaking test information.",
    ],

    concepts: [
      {
        title: "Feature Creation",
        explanation:
          "Create a new variable from existing information.",
        example:
          "Create age from date of birth.",
      },

      {
        title: "Encoding",
        explanation:
          "Convert categorical information into numerical representations suitable for a model.",
        example:
          "Encoding 'Red', 'Blue', 'Green' as model-compatible values.",
      },
    ],

    code: `Date
 ↓
2026-10-05

Extract:

Day = 5
Month = 10
Year = 2026
DayOfWeek = Monday`,

    realWorld:
      "Feature engineering is common in recommendation systems, fraud detection, forecasting and tabular machine learning.",

    commonMistakes: [
      "Creating features using future information.",
      "Ignoring missing values.",
      "Using an encoding method that introduces unintended relationships.",
    ],

    interviewQuestions: [
      {
        question:
          "What is feature engineering?",
        answer:
          "It is the process of creating, transforming or selecting useful input features for a machine learning model.",
      },

      {
        question:
          "Why is feature engineering important?",
        answer:
          "Useful features can make relevant patterns easier for a model to learn.",
      },
    ],

    quiz: [
      {
        question:
          "Feature engineering involves:",
        options: [
          "Creating useful input variables",
          "Deleting the model",
          "Creating a database",
          "Writing HTML only",
        ],
        answer: "Creating useful input variables",
      },
    ],

    takeaway:
      "Good features can help a machine learning model learn useful patterns more effectively."
  },


  // =====================================================
  // DBMS
  // =====================================================

  {
    id: 201,
    subject: "DBMS",
    icon: "🗄️",
    title: "Database Fundamentals",
    level: "Beginner",

    shortDescription:
      "Understand databases, tables, rows and columns.",

    explanation: `
A database is an organized collection of information.

A relational database stores information in tables.

A table contains rows and columns.

A row usually represents a record, while a column represents
an attribute of that record.
`,

    keyPoints: [
      "Database stores organized information.",
      "Tables contain rows and columns.",
      "Rows represent records.",
      "Columns represent attributes.",
      "DBMS software helps users create and manage databases.",
    ],

    concepts: [
      {
        title: "Table",
        explanation:
          "A structured collection of related records.",
        example:
          "Students table.",
      },

      {
        title: "Row",
        explanation:
          "Represents one record.",
        example:
          "One student's information.",
      },

      {
        title: "Column",
        explanation:
          "Represents one attribute.",
        example:
          "Student name.",
      },
    ],

    code: `Students

ID | Name     | Course
1  | Srijita  | CSE
2  | Rahul    | CSE
3  | Ananya   | ECE`,

    realWorld:
      "Databases are used in banking, e-commerce, education, healthcare and almost every large software system.",

    commonMistakes: [
      "Duplicating data unnecessarily.",
      "Using poor column names.",
      "Not defining appropriate keys.",
    ],

    interviewQuestions: [
      {
        question:
          "What is a database?",
        answer:
          "A database is an organized collection of information that can be stored and managed electronically.",
      },

      {
        question:
          "What is a DBMS?",
        answer:
          "A DBMS is software used to create, store, retrieve and manage data in databases.",
      },
    ],

    quiz: [
      {
        question:
          "A row in a relational table generally represents:",
        options: [
          "A record",
          "A database",
          "A server",
          "A query",
        ],
        answer: "A record",
      },
    ],

    takeaway:
      "Databases organize information so applications can store, retrieve and manage it efficiently."
  },


  {
    id: 202,
    subject: "DBMS",
    icon: "🔑",
    title: "Primary Key & Foreign Key",
    level: "Beginner",

    shortDescription:
      "Understand how database tables identify and connect records.",

    explanation: `
A primary key uniquely identifies rows within a table.

A foreign key is a column or group of columns that references
a key in another table, commonly a primary key.

Foreign keys help establish relationships between tables.
`,

    keyPoints: [
      "Primary keys uniquely identify records.",
      "Primary key values should be unique.",
      "A primary key cannot contain NULL values.",
      "Foreign keys establish relationships between tables.",
      "Foreign keys can contain repeated values.",
    ],

    concepts: [
      {
        title: "Primary Key",
        explanation:
          "Uniquely identifies a record.",
        example:
          "student_id.",
      },

      {
        title: "Foreign Key",
        explanation:
          "References a key in another table.",
        example:
          "student_id in an Enrollment table.",
      },
    ],

    code: `Students

student_id | name
1          | Srijita
2          | Rahul


Enrollments

enrollment_id | student_id | course
101           | 1          | Python
102           | 2          | DBMS`,

    realWorld:
      "Keys are essential for maintaining relationships and data integrity in relational databases.",

    commonMistakes: [
      "Using non-unique values as a primary key.",
      "Confusing primary and foreign keys.",
      "Deleting referenced records without considering relationships.",
    ],

    interviewQuestions: [
      {
        question:
          "What is a primary key?",
        answer:
          "A primary key uniquely identifies each row in a table.",
      },

      {
        question:
          "What is a foreign key?",
        answer:
          "A foreign key references a key in another table to establish a relationship.",
      },
    ],

    quiz: [
      {
        question:
          "Which key uniquely identifies a record?",
        options: [
          "Foreign Key",
          "Primary Key",
          "Candidate Value",
          "Index",
        ],
        answer: "Primary Key",
      },

      {
        question:
          "A foreign key is mainly used to:",
        options: [
          "Connect related tables",
          "Delete a database",
          "Create a server",
          "Encrypt a password",
        ],
        answer: "Connect related tables",
      },
    ],

    takeaway:
      "Primary keys identify records, while foreign keys connect related tables."
  },


  {
    id: 203,
    subject: "DBMS",
    icon: "💻",
    title: "SQL Basics",
    level: "Beginner",

    shortDescription:
      "Learn how SQL is used to interact with relational databases.",

    explanation: `
SQL stands for Structured Query Language.

SQL is commonly used to create, retrieve, update and delete
data in relational databases.

The four basic data manipulation operations are commonly described
as CRUD:

Create
Read
Update
Delete
`,

    keyPoints: [
      "SELECT retrieves data.",
      "INSERT adds data.",
      "UPDATE modifies data.",
      "DELETE removes data.",
      "WHERE filters rows.",
    ],

    concepts: [
      {
        title: "SELECT",
        explanation:
          "Retrieves data.",
        example:
          "SELECT * FROM students;",
      },

      {
        title: "WHERE",
        explanation:
          "Filters rows based on a condition.",
        example:
          "SELECT * FROM students WHERE age > 20;",
      },

      {
        title: "INSERT",
        explanation:
          "Adds a new record.",
        example:
          "INSERT INTO students VALUES (1, 'Srijita');",
      },
    ],

    code: `SELECT name, course
FROM students
WHERE course = 'CSE';`,

    realWorld:
      "SQL is widely used by backend applications to work with relational databases.",

    commonMistakes: [
      "Forgetting the WHERE clause in an UPDATE or DELETE.",
      "Using incorrect column names.",
      "Writing SQL without understanding the data relationships.",
    ],

    interviewQuestions: [
      {
        question:
          "What is SQL?",
        answer:
          "SQL is a language used to interact with relational databases.",
      },

      {
        question:
          "What does SELECT do?",
        answer:
          "SELECT retrieves data from one or more tables.",
      },

      {
        question:
          "What does WHERE do?",
        answer:
          "WHERE filters rows according to a condition.",
      },
    ],

    quiz: [
      {
        question:
          "Which command retrieves data?",
        options: [
          "SELECT",
          "INSERT",
          "DELETE",
          "UPDATE",
        ],
        answer: "SELECT",
      },

      {
        question:
          "Which clause filters rows?",
        options: [
          "ORDER",
          "WHERE",
          "GROUP",
          "FILTER",
        ],
        answer: "WHERE",
      },
    ],

    takeaway:
      "SQL provides the main language for interacting with relational databases."
  },


  {
    id: 204,
    subject: "DBMS",
    icon: "🔗",
    title: "SQL Joins",
    level: "Intermediate",

    shortDescription:
      "Learn how SQL combines related information from multiple tables.",

    explanation: `
A JOIN combines rows from two or more tables based on a related
column.

Common joins include:

INNER JOIN
LEFT JOIN
RIGHT JOIN
FULL OUTER JOIN

The exact availability of some join types depends on the database
system.
`,

    keyPoints: [
      "Joins combine related table data.",
      "INNER JOIN returns matching rows.",
      "LEFT JOIN keeps all rows from the left table.",
      "RIGHT JOIN keeps all rows from the right table.",
      "Joins are extremely common in relational database queries.",
    ],

    concepts: [
      {
        title: "INNER JOIN",
        explanation:
          "Returns rows where the join condition matches.",
        example: `SELECT *
FROM students s
INNER JOIN courses c
ON s.course_id = c.id;`,
      },

      {
        title: "LEFT JOIN",
        explanation:
          "Returns all rows from the left table and matching rows from the right table.",
        example: `SELECT *
FROM students s
LEFT JOIN courses c
ON s.course_id = c.id;`,
      },
    ],

    code: `SELECT students.name, courses.name
FROM students
INNER JOIN courses
ON students.course_id = courses.id;`,

    realWorld:
      "Joins are used when information is distributed across related database tables.",

    commonMistakes: [
      "Joining on the wrong columns.",
      "Forgetting the join condition.",
      "Not understanding how unmatched rows behave.",
    ],

    interviewQuestions: [
      {
        question:
          "What is a JOIN?",
        answer:
          "A JOIN combines related rows from multiple tables based on a condition.",
      },

      {
        question:
          "What does INNER JOIN return?",
        answer:
          "It returns rows where the join condition matches in both tables.",
      },

      {
        question:
          "What does LEFT JOIN do?",
        answer:
          "It keeps all rows from the left table and adds matching rows from the right table.",
      },
    ],

    quiz: [
      {
        question:
          "Which join returns matching rows from both tables?",
        options: [
          "INNER JOIN",
          "LEFT JOIN",
          "CROSS JOIN",
          "UNMATCHED JOIN",
        ],
        answer: "INNER JOIN",
      },
    ],

    takeaway:
      "Joins allow applications to retrieve related information stored across multiple tables."
  },


  {
    id: 205,
    subject: "DBMS",
    icon: "📐",
    title: "Database Normalization",
    level: "Intermediate",

    shortDescription:
      "Learn how normalization reduces unnecessary data duplication.",

    explanation: `
Normalization is a database design technique used to organize
data and reduce unnecessary redundancy.

Common normal forms include 1NF, 2NF and 3NF.

Normalization can improve consistency and reduce update anomalies.
`,

    keyPoints: [
      "Normalization organizes relational data.",
      "It reduces unnecessary duplication.",
      "1NF requires atomic values in a relational table.",
      "Higher normal forms address additional dependency problems.",
      "Normalization can improve data consistency.",
    ],

    concepts: [
      {
        title: "1NF",
        explanation:
          "Values should be atomic rather than containing repeating groups.",
        example:
          "Store one phone number value per cell rather than a list of numbers in one cell.",
      },

      {
        title: "2NF",
        explanation:
          "Builds on 1NF and addresses partial dependency for composite keys.",
        example:
          "Non-key attributes should depend on the whole composite key.",
      },

      {
        title: "3NF",
        explanation:
          "Builds on 2NF and addresses transitive dependency.",
        example:
          "Non-key attributes should depend on the key rather than another non-key attribute.",
      },
    ],

    code: `Poor Design

Student → Course → Teacher


Better Design

Students
Courses
Teachers
Enrollments`,

    realWorld:
      "Normalization is important when designing relational database schemas for large applications.",

    commonMistakes: [
      "Memorizing normal forms without understanding dependencies.",
      "Over-normalizing every database without considering practical requirements.",
      "Ignoring query performance and access patterns.",
    ],

    interviewQuestions: [
      {
        question:
          "What is normalization?",
        answer:
          "Normalization is the process of organizing relational data to reduce unnecessary redundancy and improve consistency.",
      },

      {
        question:
          "What is 1NF?",
        answer:
          "First Normal Form requires atomic values and no repeating groups in the relation.",
      },
    ],

    quiz: [
      {
        question:
          "Normalization mainly helps reduce:",
        options: [
          "Data redundancy",
          "CPU speed",
          "Network bandwidth",
          "Programming syntax",
        ],
        answer: "Data redundancy",
      },
    ],

    takeaway:
      "Normalization helps create cleaner relational database designs with less unnecessary duplication."
  },


  {
    id: 206,
    subject: "DBMS",
    icon: "🔄",
    title: "Transactions & ACID Properties",
    level: "Intermediate",

    shortDescription:
      "Understand how databases maintain reliable transactions.",

    explanation: `
A transaction is a logical unit of work performed by a database.

For example, transferring money between two accounts may involve
debiting one account and crediting another.

ACID describes four important transaction properties:

Atomicity
Consistency
Isolation
Durability
`,

    keyPoints: [
      "Atomicity means a transaction is treated as a unit.",
      "Consistency preserves valid database rules.",
      "Isolation controls how concurrent transactions interact.",
      "Durability means committed changes survive failures.",
    ],

    concepts: [
      {
        title: "Atomicity",
        explanation:
          "All operations in a transaction succeed together or the transaction is rolled back.",
        example:
          "Money should not disappear from one account without reaching the other.",
      },

      {
        title: "Consistency",
        explanation:
          "A transaction should preserve database constraints.",
        example:
          "Account balance rules remain valid.",
      },

      {
        title: "Isolation",
        explanation:
          "Concurrent transactions should not incorrectly interfere with each other.",
        example:
          "Two users updating related records simultaneously.",
      },

      {
        title: "Durability",
        explanation:
          "Committed changes should remain after a system failure.",
        example:
          "A completed payment remains recorded after a restart.",
      },
    ],

    code: `BEGIN TRANSACTION

Debit Account A

Credit Account B

COMMIT`,

    realWorld:
      "Transactions are critical in banking, e-commerce orders, payments and inventory management.",

    commonMistakes: [
      "Confusing atomicity with durability.",
      "Ignoring transaction boundaries.",
      "Using transactions without understanding concurrency.",
    ],

    interviewQuestions: [
      {
        question:
          "What does ACID stand for?",
        answer:
          "Atomicity, Consistency, Isolation and Durability.",
      },

      {
        question:
          "What is atomicity?",
        answer:
          "Atomicity means the transaction is treated as one unit: it fully succeeds or is rolled back.",
      },
    ],

    quiz: [
      {
        question:
          "Which ACID property means committed data survives failure?",
        options: [
          "Atomicity",
          "Consistency",
          "Isolation",
          "Durability",
        ],
        answer: "Durability",
      },
    ],

    takeaway:
      "ACID properties help databases maintain reliable and consistent transactions."
  },


  {
    id: 207,
    subject: "DBMS",
    icon: "⚡",
    title: "Database Indexing",
    level: "Advanced",

    shortDescription:
      "Understand how indexes can speed up database queries.",

    explanation: `
An index is a database structure that can help the database locate
rows more efficiently.

Indexes can make some read queries faster, but they also require
storage and can add overhead to inserts, updates and deletes.

Indexes should therefore be created based on actual query patterns.
`,

    keyPoints: [
      "Indexes can speed up suitable queries.",
      "Indexes require additional storage.",
      "Too many indexes can slow write operations.",
      "Indexes should be designed around access patterns.",
      "Database systems use different index structures and strategies.",
    ],

    concepts: [
      {
        title: "Index",
        explanation:
          "A data structure used to speed up certain data lookups.",
        example:
          "Indexing a frequently searched email column.",
      },

      {
        title: "Trade-off",
        explanation:
          "Indexes improve some reads but can increase write and storage costs.",
        example:
          "An index on a frequently updated field may have maintenance overhead.",
      },
    ],

    code: `CREATE INDEX idx_student_email
ON students(email);`,

    realWorld:
      "Indexes are important in large databases where searching millions of records needs to be efficient.",

    commonMistakes: [
      "Creating indexes on every column.",
      "Ignoring query execution plans.",
      "Assuming an index always makes every query faster.",
    ],

    interviewQuestions: [
      {
        question:
          "What is an index?",
        answer:
          "An index is a database structure designed to speed up suitable data retrieval operations.",
      },

      {
        question:
          "Can indexes slow down a database?",
        answer:
          "Yes. They can add storage and maintenance overhead to insert, update and delete operations.",
      },
    ],

    quiz: [
      {
        question:
          "The main purpose of an index is to:",
        options: [
          "Speed up suitable data retrieval",
          "Delete duplicate data",
          "Create tables",
          "Encrypt data",
        ],
        answer:
          "Speed up suitable data retrieval",
      },
    ],

    takeaway:
      "Indexes can make important queries faster, but they come with storage and write-maintenance costs."
  },


  {
    id: 208,
    subject: "DBMS",
    icon: "🛡️",
    title: "Database Security Basics",
    level: "Intermediate",

    shortDescription:
      "Learn the basics of protecting database information.",

    explanation: `
Database security protects data from unauthorized access,
modification, disclosure and destruction.

Security includes authentication, authorization, encryption,
secure application design and auditing.

Applications should use parameterized queries rather than building
SQL statements by directly concatenating untrusted input.
`,

    keyPoints: [
      "Authentication verifies identity.",
      "Authorization controls permissions.",
      "Least privilege reduces unnecessary access.",
      "Encryption can protect sensitive information.",
      "Parameterized queries help prevent SQL injection.",
    ],

    concepts: [
      {
        title: "Authentication",
        explanation:
          "Determines who a user or system is.",
        example:
          "Logging into an application.",
      },

      {
        title: "Authorization",
        explanation:
          "Determines what an authenticated user is allowed to do.",
        example:
          "An admin can delete users while a normal user cannot.",
      },

      {
        title: "SQL Injection",
        explanation:
          "An attack where untrusted input changes the meaning of an SQL query.",
        example:
          "Unsafe string concatenation in SQL queries.",
      },
    ],

    code: `Unsafe:

"SELECT * FROM users WHERE name = '" + userInput + "'"


Better:

Use parameterized queries.`,

    realWorld:
      "Database security is critical for banking, healthcare, e-commerce and applications containing personal information.",

    commonMistakes: [
      "Storing passwords as plain text.",
      "Giving every user excessive database privileges.",
      "Building SQL queries using raw user input.",
      "Ignoring database backups and recovery planning.",
    ],

    interviewQuestions: [
      {
        question:
          "What is SQL injection?",
        answer:
          "SQL injection is an attack where untrusted input manipulates the meaning of a database query.",
      },

      {
        question:
          "How can SQL injection be prevented?",
        answer:
          "Use parameterized queries or prepared statements and validate input appropriately.",
      },
    ],

    quiz: [
      {
        question:
          "Which approach helps prevent SQL injection?",
        options: [
          "String concatenation",
          "Parameterized queries",
          "Removing the database",
          "Using larger tables",
        ],
        answer: "Parameterized queries",
      },
    ],

    takeaway:
      "Database security requires controlled access, secure queries and protection of sensitive information."
  },
];

export default learningMaterials;