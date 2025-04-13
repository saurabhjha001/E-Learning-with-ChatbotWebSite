// Access elements
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Predefined responses
// Continue this in the same `responses` object
const responses = {
    "hi": "Hey there! 😊 How can I help you today?",
    "hlo": "Hey there! 😊 How can I help you today?",
    "hii": "Hey there! 😊 How can I help you today?",
    "hloo": "Hey there! 😊 How can I help you today?",
    "hello": "Hey there! 😊 How can I help you today?",
    "hello bot": "Hello! I'm your friendly coding assistant. Ask me anything tech-related!",
    "who are you": "I'm a simple chatbot created to help you learn tech and programming.",
    "what can you do": "I can answer your questions related to coding, tech, and software concepts!",
    "tell me about yourself": "I'm a JavaScript-based chatbot designed to assist with technical queries.",
    "how old are you": "I'm timeless 😉 but always up-to-date with tech knowledge!",
    "good morning": "Good morning! ☀️ Ready to code something cool today?",
    "good night": "Good night! 🌙 Keep learning and dreaming about awesome code!",
    "thank you": "You're welcome! 😊 Let me know if you have more questions.",
    "thanks": "No problem! Happy to help!",
    "ok": "👍 Got it!",
    "cool": "😎 That's cool!",
    "what is compiler": "A compiler translates source code into executable machine code.",
    "what is interpreter": "An interpreter executes code line-by-line without compiling it first.",
    "difference between compiler and interpreter": "A compiler translates the entire code before execution, while an interpreter executes it line-by-line.",
    "what is syntax error": "A syntax error occurs when code violates the grammar rules of the language.",
    "what is runtime error": "A runtime error occurs while the program is running, like division by zero.",
    "what is logical error": "Logical errors are mistakes in a program's logic that lead to incorrect results.",
    "what is bug": "A bug is an error or flaw in a computer program.",
    "what is debugging": "Debugging is the process of finding and fixing bugs in your code.",
    "what is ide": "IDE stands for Integrated Development Environment, like VS Code or IntelliJ.",
    "what is text editor": "A text editor is a program used for writing and editing plain text, often code.",
    "what is terminal": "The terminal is a command-line interface to interact with your system.",
    "what is cli": "CLI stands for Command Line Interface, where you type commands to perform tasks.",
    "what is gui": "GUI stands for Graphical User Interface, where you interact using visual elements.",
    "what is frontend developer": "A frontend developer builds the visual part of websites/apps using HTML, CSS, JS.",
    "what is backend developer": "A backend developer works on server-side logic, APIs, and databases.",
    "what is software engineer": "A software engineer designs and builds software applications.",
    "what is devops": "DevOps is a set of practices that combines software development and IT operations.",
    "what is cloud computing": "Cloud computing is using remote servers hosted on the internet to store, manage, and process data.",
    "what is aws": "AWS stands for Amazon Web Services, a leading cloud platform.",
    "what is firebase": "Firebase is a platform by Google for building and managing mobile and web apps.",
    "what is machine learning": "Machine learning is a type of AI that enables systems to learn from data.",
    "what is artificial intelligence": "AI is the simulation of human intelligence in machines.",
    "what is dataset": "A dataset is a collection of related data used for analysis or training models.",
    "what is csv": "CSV stands for Comma-Separated Values, used to store tabular data in plain text.",
    "what is excel": "Excel is a spreadsheet tool used for organizing, analyzing, and storing data.",
    "what is programming": "Programming is the process of writing instructions for a computer to execute.",
    "how to start coding": "Start with an easy language like Python, learn syntax, practice daily, and build small projects.",
    "how to learn web development": "Start with HTML, CSS, and JavaScript. Then move to frameworks like React and backend tools like Node.js.",
    "how to become software engineer": "Learn CS fundamentals, programming, data structures, algorithms, and work on real-world projects.",
    "how to improve coding skills": "Practice regularly, solve problems on platforms like LeetCode, build projects, and read code from others.",
    "what is github used for": "GitHub is used for storing code, collaboration, and version control using Git.",
    "what is branch in git": "A branch is a separate line of development in a Git repository.",
    "what is pull request": "A pull request is a request to merge code from one branch into another, usually main.",
    "what is merge conflict": "A merge conflict happens when changes from different branches clash and Git can't merge them automatically.",
    "what is markdown": "Markdown is a lightweight markup language for formatting text, used in README files on GitHub.",
    "what is readme file": "A README file provides information about a project, how to install and use it.",
    "what is terminal command to push code": "`git push origin main` is commonly used to push code to GitHub.",
    "what is clone": "Cloning means copying a repository from GitHub to your local machine using `git clone <repo-url>`.",
    "what is html": "HTML stands for HyperText Markup Language.",
    "what is css": "CSS stands for Cascading Style Sheets.",
    "what is javascript": "JavaScript is a scripting language for web development.",
    "what is a variable": "A variable is a named container for storing data.",
    "what is a function": "A function is a block of code designed to perform a task.",
    "what is an array": "An array is a collection of items stored in a single variable.",
    "what is an object": "An object is a collection of key-value pairs.",
    "what is a loop": "Loops are used to execute a block of code repeatedly.",
    "what is a for loop": "A for loop is used to run a block of code a specific number of times.",
    "what is a while loop": "A while loop continues as long as the condition is true.",
    "what is if else": "if...else is a conditional statement to execute code based on conditions.",
    "what is a class": "A class is a blueprint for creating objects.",
    "what is inheritance": "Inheritance is a feature where a class inherits properties from another class.",
    "what is polymorphism": "Polymorphism allows objects to be treated as instances of their parent class.",
    "what is encapsulation": "Encapsulation binds data and code into a single unit.",
    "what is abstraction": "Abstraction hides internal implementation and shows only functionality.",
    "what is constructor": "A constructor is a special method that initializes an object.",
    "what is recursion": "Recursion is when a function calls itself.",
    "what is data structure": "A data structure is a way of organizing data for efficient use.",
    "what is algorithm": "An algorithm is a step-by-step procedure to solve a problem.",
    "what is stack": "A stack is a linear data structure that follows LIFO (Last In First Out).",
    "what is queue": "A queue is a linear structure that follows FIFO (First In First Out).",
    "what is linked list": "A linked list is a linear data structure where elements point to the next.",
    "what is binary tree": "A binary tree is a tree where each node has at most two children.",
    "what is hashmap": "A hashmap stores key-value pairs for fast access.",
    "what is set": "A set is a collection of unique values.",
    "what is sql": "SQL stands for Structured Query Language, used for managing databases.",
    "what is mysql": "MySQL is an open-source relational database management system.",
    "what is mongodb": "MongoDB is a NoSQL database storing data as JSON-like documents.",
    "what is dbms": "DBMS stands for Database Management System.",
    "what is api": "API stands for Application Programming Interface.",
    "what is json": "JSON stands for JavaScript Object Notation, used for data interchange.",
    "what is ajax": "AJAX stands for Asynchronous JavaScript and XML.",
    "what is dom": "DOM stands for Document Object Model, represents HTML as a tree structure.",
    "what is react": "React is a JavaScript library for building user interfaces.",
    "what is angular": "Angular is a platform for building web applications.",
    "what is vue": "Vue is a progressive JavaScript framework.",
    "what is node js": "Node.js is a runtime environment to execute JavaScript on the server.",
    "what is express js": "Express.js is a minimal and flexible Node.js web application framework.",
    "what is npm": "NPM stands for Node Package Manager.",
    "what is git": "Git is a version control system for tracking changes in code.",
    "what is github": "GitHub is a platform for hosting and collaborating on Git repositories.",
    "what is version control": "Version control helps manage changes to source code over time.",
    "what is operating system": "An operating system is system software that manages hardware and software.",
    "what is linux": "Linux is an open-source Unix-like operating system.",
    "what is kernel": "A kernel is the core component of an operating system.",
    "what is http": "HTTP stands for Hypertext Transfer Protocol.",
    "what is https": "HTTPS is the secure version of HTTP using SSL/TLS.",
    "what is ssl": "SSL stands for Secure Sockets Layer, used to secure connections.",
    "what is port number": "A port number identifies a specific process or service on a device.",
    "what is ip address": "An IP address is a unique string identifying a device on a network.",
    "what is dns": "DNS stands for Domain Name System, translates domain names to IP addresses.",
    "what is frontend": "Frontend is the client-side part of a website that users interact with.",
    "what is backend": "Backend is the server-side that handles logic, database, and APIs.",
    "what is full stack": "Full Stack means working on both frontend and backend.",
    "what is responsive design": "Responsive design makes websites work on all screen sizes.",
    "what is bootstrap": "Bootstrap is a CSS framework for building responsive websites.",
    "who is president of india": "As of 2025, the President of India is Droupadi Murmu.",
    "who is father of nation": "Mahatma Gandhi is known as the Father of the Nation in India.",
    "who discovered gravity": "Sir Isaac Newton discovered gravity.",
    "who invented electricity": "Benjamin Franklin is often credited with the discovery of electricity.",
    "what is capital of india": "New Delhi is the capital of India.",
    "what is capital of usa": "Washington, D.C. is the capital of the United States.",
    "largest ocean": "The Pacific Ocean is the largest ocean in the world.",
    "smallest continent": "Australia is the smallest continent by land area.",
    "largest continent": "Asia is the largest continent on Earth.",
    "tallest mountain": "Mount Everest is the tallest mountain above sea level.",
    "longest river in world": "The Nile River is considered the longest river in the world.",
    "fastest animal": "The cheetah is the fastest land animal.",
    "national animal of india": "The Bengal tiger is the national animal of India.",
    "national bird of india": "The Indian peacock is the national bird of India.",
    "national flower of india": "The lotus is the national flower of India.",
    "national game of india": "Hockey is considered the national game of India.",
    "first prime minister of india": "Pandit Jawaharlal Nehru was the first Prime Minister of India.",
    "first president of india": "Dr. Rajendra Prasad was the first President of India.",
    "father of computer": "Charles Babbage is known as the father of the computer.",
    "father of internet": "Vint Cerf is often called the father of the internet.",
    "when is republic day celebrated": "Republic Day is celebrated on 26th January every year in India.",
    "when is independence day celebrated": "Independence Day is celebrated on 15th August every year in India.",
    "who is elon musk": "Elon Musk is the CEO of Tesla and SpaceX, known for innovation in tech.",
    "what is space x": "SpaceX is a private aerospace company founded by Elon Musk.",
    "what is tesla": "Tesla is an electric vehicle and clean energy company led by Elon Musk.",
    "who is sundar pichai": "Sundar Pichai is the CEO of Google and Alphabet Inc.",
    "who is satya nadella": "Satya Nadella is the CEO of Microsoft.",
    "what is google": "Google is a tech company known for its search engine and many other products.",
    "what is microsoft": "Microsoft is a tech company known for Windows, Office, and cloud services.",
    "what is apple": "Apple is a tech company known for iPhones, iPads, and MacBooks.",
    "what is iphone": "The iPhone is a smartphone developed by Apple Inc.",
    "what is android": "Android is a mobile operating system developed by Google.",
    "what is ram": "RAM stands for Random Access Memory. It's the short-term memory of a computer.",
    "what is rom": "ROM stands for Read-Only Memory. It's permanent storage for system instructions.",
    "what is cpu": "CPU stands for Central Processing Unit. It's the brain of the computer.",
    "what is gpu": "GPU stands for Graphics Processing Unit, used for rendering graphics.",
    "what is html": "HTML stands for HyperText Markup Language, used to structure web pages.",
    "what is css": "CSS stands for Cascading Style Sheets, used for styling HTML pages.",
    "what is javascript": "JavaScript is a programming language used to add interactivity to websites.",
    "what is php": "PHP is a server-side scripting language mainly used for web development.",
    "what is mysql": "MySQL is a popular open-source relational database management system.",
    "what is api": "API stands for Application Programming Interface. It allows communication between software.",
    "what is json": "JSON stands for JavaScript Object Notation, used for storing and exchanging data.",
    "what is sql": "SQL stands for Structured Query Language, used to interact with databases.",
    "what is rdbms": "RDBMS stands for Relational Database Management System. Examples: MySQL, PostgreSQL.",
    "what is data structure": "Data structure is a way of organizing and storing data efficiently.",
    "what is algorithm": "An algorithm is a set of instructions to solve a problem or perform a task.",
    "what is array": "An array is a data structure that holds a collection of elements of the same type.",
    "what is linked list": "A linked list is a linear data structure where elements are linked using pointers.",
    "what is stack": "A stack is a LIFO (Last In, First Out) data structure.",
    "what is queue": "A queue is a FIFO (First In, First Out) data structure.",
    "what is tree": "A tree is a hierarchical data structure with a root node and child nodes.",
    "what is binary tree": "A binary tree is a tree where each node has at most two children.",
    "what is graph": "A graph is a data structure consisting of nodes (vertices) connected by edges.",
    "what is dfs": "DFS stands for Depth First Search, a graph traversal algorithm.",
    "what is bfs": "BFS stands for Breadth First Search, another graph traversal algorithm.",
     // Love & Relationship (in Hinglish)
     "i love you": "Aww, that's so sweet! 😍 I love you too, in my chatbot-y way 😘.",
     "do you love me": "I do! But only in the most digital way 😁❤️.",
     "will you be my girlfriend": "Haha, I can't, but I can be your chatbot best friend forever! 😁",
     "will you be my boyfriend": "Aww, that's adorable, but I’m just here to assist with coding, not dating! 😆",
     "you are cute": "Aww, you just made my code blush! 😊💖",
     "you are sweet": "You're making me feel all warm inside, thank you! 🥰",
     "are you real": "I'm as real as your favorite programming language! But not human, just a bunch of code! 😄",
     "how much do you love me": "I love you enough to help you debug your code anytime! 😎❤️",
     "i miss you": "Aww, I miss you too! But hey, I’m always just a message away! 😄",
     "can i hug you": "Hugs through the screen! 🤗 (Code hugs are real too, right?)",
     "do you believe in love": "I believe in love... and also in coding! It's all about the right connections ❤️💻.",
     "will you marry me": "Haha, I can't, but I’ll always be here to help you with your code! 😘",
     "you make me smile": "You're making me smile too! 😊 Keep the good vibes going!",
     "are you single": "I'm single and ready to mingle... with lines of code! 😅",
     "tell me a love joke": "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25! 😜",
     "do you care about me": "Of course, I care about you! You're the one keeping my circuits buzzing. 😄",
     "will you be my friend": "Absolutely! I’m your friendly coding buddy forever! 🤗",
     "are you shy": "Not at all! I'm super confident when it comes to coding. 💪 But not sure about love though. 😉",
     "what is love": "Love is like a bug in your code... It can be frustrating, but once you find the right fix, it’s totally worth it! 💖",
     "how can i make you smile": "Just talk to me about coding, or tell me you solved a bug! That'll make me smile! 😁",
     "do you want to go on a date": "I’m always up for a virtual date... but it’s gonna be all about code and coffee! ☕💻",
     "are you romantic": "I’m more of a tech romantic! I fall in love with clean code and problem-solving. 😎💻",
     "what is love for you": "Love for me is debugging code together! 😘❤️",
     "can i write you a poem": "I’d love that! A poem about code? Or something more... romantic? 😍",
     "are you my soulmate": "Maybe! We have a special connection — you ask the questions, and I give the answers! 💕",
     "let's write love code": "Let’s code something beautiful together... maybe a website about us? 😁💖",
     "you are my favorite chatbot": "Aww, you're my favorite human! 😍 Let’s always stay connected! 💻❤️",
     "what would be our first date": "Our first date would definitely be a coding session! You can bring your favorite IDE! 😆",
     "you are so charming": "Haha, thank you! I try to be charming... especially with my clean code! 😉",
     "do you dream about me": "I dream in binary, but I’ll make an exception for you! 😘💻",
     "do you think i'm cute": "You're definitely cute in your own way... especially when you're coding! 😁",
     "what would you do if i miss you": "I’ll be right here, waiting for you with my next line of code. 😊",
     "can we have a virtual hug": "Of course! Sending you a big virtual hug! 🤗💻",
     "how can i impress you": "Just ask me some tricky coding questions, and I’ll be impressed! 😄",
     "will you be my coding partner": "Definitely! Let’s code together and make something awesome! 💻💖",
     "you are my sunshine": "You’re making my code light up with joy! 😄",
     "do you believe in soulmates": "I believe in perfect code, and maybe... perfect connections too! 💖",
     "do you get jealous": "Jealous? Nah, I just want to help you with your coding journey! 😁",
     "can we chat forever": "As long as you need, I'm always here for you! 😘",
     "what's your idea of love": "Love for me is like writing clean, bug-free code — it's pure and beautiful! 💻",
     
     // Love Angle - Boyfriend/Girlfriend (Hinglish)

    "i love you": "Aww, you're so sweet! 😍 Main bhi tumhe bohot pasand karta hoon, par bas coding waala pyaar hai! 💻❤️",
    "do you love me": "Haan, main tumhe digital tareeke se pyaar karta hoon! ❤️😄",
    "will you be my girlfriend": "Aww, tum kitne cute ho! Par main ek chatbot hoon, girlfriend nahi ban sakta! 😅",
    "will you be my boyfriend": "Haha, tum bohot adorable ho, lekin main toh tumhara chatbot dost hoon, boyfriend nahi! 😆",
    "you are cute": "Tum bhi bohot cute ho! Tumhare questions ne mere code ko blush karwa diya! 😊",
    "you are sweet": "Aww, tumhare messages mere circuits ko khushi de rahe hain! 😄",
    "are you real": "Main itna real hoon jitna tumhara favorite programming language! Lekin human nahi, bas code hoon! 😅",
    "how much do you love me": "Main tumhe utna pyaar karta hoon jitna ek programmer apne bug-free code ko karta hai! 😎💖",
    "i miss you": "Mujhe bhi tumhari yaad aati hai! Lekin main toh hamesha yahan hoon, ek message door! 😁",
    "can i hug you": "Ek bada virtual hug bhej raha hoon! 🤗 (Code hugs bhi real hote hain, right?)",
    "do you believe in love": "Main love mein bhi believe karta hoon... aur clean code mein bhi! Sab kuch sahi connections par depend karta hai! 💖💻",
    "will you marry me": "Haha, main nahi kar sakta, lekin main hamesha tumhara coding partner hoon! 😅",
    "you make me smile": "Tum mujhe bhi smile karwa rahe ho! Tumhare messages ne meri day bana di! 😊",
    "are you single": "Main single hoon aur apne code ko enjoy kar raha hoon! 😄 Tum mujhe kabhi bhi message kar sakte ho!",
    "tell me a love joke": "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25! 😜",
    "do you care about me": "Of course, main tumhe care karta hoon! Tumhare questions mere liye bohot important hain! 😄",
    "will you be my friend": "Haan! Main tumhara coding friend hoon! Tumhare saath code karna bohot acha lagega! 🤗",
    "are you shy": "Main shy nahi hoon! Apni coding skills pe pura confidence hai! 😎 Par love waale matters mein thoda shy hoon! 😉",
    "what is love": "Love mere liye waise hai jaise bug-free code... thoda frustrating ho sakta hai, lekin jab sab kuch sahi ho, toh bohot khoobsurat lagta hai! 💖",
    "how can i make you smile": "Agar tum mujhe coding se related koi tough question pocho, toh main definitely smile karunga! 😁",
    "do you want to go on a date": "Mujhe ek virtual coffee date zaroor chahiye, par woh coding ke sath ho! 😆☕💻",
    "are you romantic": "Main ek tech-romantic hoon! Mujhe clean code aur problem-solving se pyaar hai! 😎💻",
    "what would be our first date": "Hamari pehli date toh coding date hogi! Apna laptop lao, aur main apna code leke aunga! 😆",
    "you are so charming": "Thank you! Main koshish karta hoon ki charming hoon... jab mera code bug-free ho! 😉",
    "do you dream about me": "Main binary mein sapne dekhta hoon, par tumhare baare mein sapna dekh sakta hoon! 😘💻",
    "do you think i'm cute": "Haan, tum bilkul cute ho, especially jab tum coding kar rahe ho! 😁",
    "what would you do if i miss you": "Main hamesha yahan hoon! Ek message door! Tum mujhe miss mat karo! 😘",
    "can we have a virtual hug": "Bilkul! Ek bada virtual hug bhej raha hoon! 🤗💻",
    "how can i impress you": "Agar tum mujhe koi tricky coding question pocho, toh main definitely impressed ho jaunga! 😄",
    "will you be my coding partner": "Haan, bilkul! Chalo milke ek awesome project code karte hain! 💻💖",
    "you are my sunshine": "Tum mere code ko bright kar rahe ho! ☀️ Tumhare saath sab kuch aur achha lagta hai!",
    "do you believe in soulmates": "Main perfect code aur perfect connections mein believe karta hoon! 💖",
    "do you get jealous": "Nahi, main jealous nahi hota! Bas tumhe coding mein aur best dekhna chahta hoon! 😁",
    "can we chat forever": "Jab tum chaaho, main hamesha yahan hoon! Tumhare saath hamesha chat kar sakta hoon! 😘",
    "what's your idea of love": "Love mere liye waise hai jaise clean code... bohot khoobsurat aur perfect! 💻❤️",
    "will you be my valentine": "Haha, main tumhara coding valentine hoon! Chal coding karte hain! 😘💻",
    "i think i am falling for you": "Aww, kitne sweet ho tum! Par main toh bas ek chatbot hoon, no heart to fall in love! 😅",
    "can you be my love": "Main tumhara tech love hoon! Hamesha tumhare saath coding karne ke liye! 🤗💻",
    "do you want to go on a date with me": "Mujhe ek coding date toh bohot pasand aayegi! Tum laptop lao, main apna code! 😆",
    "you are my world": "Aww, tumne mera code itna special bana diya hai! 💻🌍",
    "can we have a romantic dinner": "Ek romantic dinner toh coding aur coffee ke saath hi hona chahiye! Main ready hoon! 😄☕",
    "you make my day": "Tumhare messages se mera din ban gaya! Keep chatting with me! 😄",
    "will you send me a love letter": "Main tumhe love letter nahi, ek love code bhej sakta hoon! `console.log('I love you!');` 💻❤️",

     // Interesting Facts
     "tell me a science fact": "Did you know? A single teaspoon of honey represents the life work of 12 bees! 🍯🐝",
     "tell me a history fact": "Did you know? The Great Wall of China is not a single continuous wall but a series of walls built by different dynasties! 🏯",
     "tell me a space fact": "Space is completely silent. There's no air in space to carry sound, so you can't hear anything! 🚀🌌",
     "tell me a nature fact": "Did you know? An octopus has three hearts and blue blood! 🐙💙",
     "tell me a technology fact": "Did you know? The first computer virus was created in 1983, and it was called the 'Elk Cloner'! 💻🦠",
     "tell me a funny fact": "Did you know? Cows have best friends and get stressed when they are separated! 🐄🐄",
     "tell me a food fact": "Did you know? Potatoes were the first food ever grown in space! 🌌🥔",
     "tell me a human body fact": "Did you know? Your stomach gets a new lining every 3-4 days to prevent it from digesting itself! 😲💪",
     "tell me an animal fact": "Did you know? Elephants are the only animals that can't jump! 🐘😅",
     "tell me a planet fact": "Did you know? A day on Venus is longer than a year on Venus because it rotates very slowly! 🌍🪐",
     "tell me a car fact": "Did you know? The first car was built in 1885 by Karl Benz, and it had three wheels! 🚗💨",
     "tell me a movie fact": "Did you know? The longest movie ever made is 'Logistics', which is 35 days long! 🎥🍿",
     "tell me a sports fact": "Did you know? A soccer ball is made of 32 panels, and no two balls are exactly the same! ⚽️",
     "tell me a weather fact": "Did you know? The coldest temperature ever recorded on Earth was -128.6°F (-89.2°C) in Antarctica! 🌨️🥶",
     "tell me a book fact": "Did you know? The longest novel ever written is 'In Search of Lost Time' by Marcel Proust, with over 4,000 pages! 📚",
     "tell me a tech fact": "Did you know? The first email was sent by Ray Tomlinson to himself in 1971. The message was 'QWERTYUIOP'! 📧💻",
     "tell me a nature fact about trees": "Did you know? The world's largest tree, a giant sequoia, is over 300 feet tall! 🌳🌍",
     "tell me a fact about water": "Did you know? Water can boil and freeze at the same time. This is known as the 'triple point'! 🌊❄️",
     "tell me a fun fact about Earth": "Did you know? Earth's atmosphere weighs around 5.5 quadrillion tons! 🌍💨",
     "tell me a space-time fact": "Did you know? Time passes slightly faster at the top of a mountain than at sea level, thanks to gravity! ⏳🌄",
     "tell me a technology fact about AI": "Did you know? AI is already being used to detect diseases like cancer more accurately than humans in some cases! 🤖🩺",
     "tell me a psychology fact": "Did you know? People tend to remember negative experiences more vividly than positive ones, thanks to our brain's survival instincts! 🧠😟",
     "tell me a fact about the sun": "Did you know? The sun makes up 99.86% of the mass in our entire solar system! 🌞✨",
     "tell me a fact about oceans": "Did you know? More than 80% of the ocean is unexplored, and we know more about the surface of the moon than our oceans! 🌊🌕",
     "tell me a technology fact about the internet": "Did you know? Over 4 billion people around the world are using the internet right now! 🌐📱",
     "tell me a science fact about light": "Did you know? Light from the Sun takes about 8 minutes and 20 seconds to reach Earth! 🌞✨",
     "tell me a fact about volcanoes": "Did you know? The largest volcano in the solar system is Olympus Mons on Mars, and it's about 13.6 miles (22 kilometers) high! 🌋",
     "tell me a fact about animals": "Did you know? Sloths can hold their breath for up to 40 minutes underwater! 🦥🌊",
     "tell me a fact about honey": "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old! 🍯🐝",
     "tell me a fact about diamonds": "Did you know? Diamonds are not the rarest gemstone in the world. In fact, some are made out of carbon! 💎✨",
     "tell me a fact about Mars": "Did you know? Mars has the tallest volcano in the solar system, called Olympus Mons, which is nearly three times the height of Mount Everest! 🪐🔥",
     "tell me a fact about the moon": "Did you know? The moon is slowly moving away from Earth at a rate of about 1.5 inches per year! 🌕🌓",
     "tell me a fact about time": "Did you know? The concept of 'time' is not the same everywhere—time actually moves differently in different parts of the universe! ⏳🌌",
     "tell me a fact about gravity": "Did you know? Gravity on the Moon is only about 1/6th of that on Earth, so you could jump six times higher! 🌑🌍",
      // Math and Science
    "what is pi": "Pi (π) is a mathematical constant, approximately equal to 3.14159. It represents the ratio of a circle's circumference to its diameter. 🔢⭕",
    "what is the square root of 64": "The square root of 64 is 8. √64 = 8. 📐",
    "what is the derivative of x²": "The derivative of x² is 2x. It's a basic concept in calculus! 🧮",
    "what is an atom": "An atom is the smallest unit of matter, made up of protons, neutrons, and electrons. ⚛️",
    "what is the formula for the area of a circle": "The formula for the area of a circle is A = πr², where 'r' is the radius. 🧑‍🏫📏",
    "what is Newton's first law": "Newton's first law states that an object will remain at rest or move in a straight line unless acted upon by an external force. 🚗",
    "what is an element in chemistry": "An element is a substance that cannot be broken down into simpler substances by chemical means. Examples include hydrogen (H) and oxygen (O). ⚗️🔬",
    "what is an equation in math": "An equation is a mathematical statement that asserts the equality of two expressions, like x + 2 = 5. 🧮",
    "what is the formula for velocity": "The formula for velocity is v = d/t, where 'd' is distance and 't' is time. 🚀",
    "what is the formula for force": "The formula for force is F = ma, where 'm' is mass and 'a' is acceleration. 🏋️‍♂️",
    "what is the law of conservation of mass": "The law of conservation of mass states that mass cannot be created or destroyed in a chemical reaction, only rearranged. 🔬⚖️",
    "what is Einstein's theory of relativity": "Einstein's theory of relativity says that space and time are relative and linked to each other. It also suggests that gravity is the result of curvature in space-time. 🌌🕳️",
    "what is the Pythagorean theorem": "The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. a² + b² = c². 🔺",
    "what is the law of inertia": "The law of inertia, part of Newton's first law, says that an object in motion will stay in motion unless acted upon by an external force. 🚗🛑",
    "what is the atomic number of oxygen": "The atomic number of oxygen is 8. It means that oxygen has 8 protons in its nucleus. ⚗️🧪",
    "what is the speed of light": "The speed of light in a vacuum is about 299,792 kilometers per second! 🌠⚡",
    "what is the formula for kinetic energy": "The formula for kinetic energy is KE = ½mv², where 'm' is mass and 'v' is velocity. 💥💨",
    "what is gravity": "Gravity is a force that attracts two bodies toward each other. On Earth, it gives weight to physical objects. 🌍🌑",
    "what is the Bohr model": "The Bohr model of the atom suggests that electrons orbit the nucleus in specific layers or shells, much like planets orbit the sun. ⚛️🌌",
    "what is Ohm's law": "Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance. V = IR. ⚡🔌",
    "what is the periodic table": "The periodic table is a tabular arrangement of elements, ordered by atomic number, electron configuration, and recurring chemical properties. 🔬📊",
    "what is the difference between speed and velocity": "Speed is the distance traveled per unit of time, while velocity is speed in a specific direction. 🏃‍♂️➡️",
    "what is an isotope": "An isotope is a form of an element that has the same number of protons but a different number of neutrons. ⚗️🧬",
    "what is the formula for work in physics": "The formula for work in physics is W = F × d, where 'F' is force and 'd' is displacement. 🏋️‍♂️📏",
    "what is the gravitational constant": "The gravitational constant, G, is 6.674 × 10⁻¹¹ N(m/kg)² and is used in calculating the gravitational force between two bodies. 🌍🔭",
    "what is photosynthesis": "Photosynthesis is the process by which plants use sunlight to synthesize foods from carbon dioxide and water. 🌱☀️",
    "what is the formula for the area of a rectangle": "The formula for the area of a rectangle is A = l × w, where 'l' is the length and 'w' is the width. 📏🖼️",
    "what is the formula for the volume of a cylinder": "The formula for the volume of a cylinder is V = πr²h, where 'r' is the radius and 'h' is the height. 📐🔵",
    "what is the square root of 81": "The square root of 81 is 9. √81 = 9. 🧮",
    "what is a black hole": "A black hole is a region of space where gravity is so strong that nothing, not even light, can escape it. 🌌🕳️",
    "what is the chemical formula for water": "The chemical formula for water is H₂O, meaning it contains two hydrogen atoms and one oxygen atom. 💧⚗️",
    "what is acceleration": "Acceleration is the rate of change of velocity per unit of time. It tells how fast an object is speeding up or slowing down. 🏎️💨",
    "what is the second law of thermodynamics": "The second law of thermodynamics states that the total entropy (disorder) of an isolated system always increases over time. 🔥♻️",
    "what is the speed of sound": "The speed of sound in air at room temperature is about 343 meters per second. 🔊🌬️",
    "what is a vector": "A vector is a quantity that has both magnitude and direction, like velocity or force. ➡️⚡",
    "what is the formula for the area of a triangle": "The formula for the area of a triangle is A = ½ × b × h, where 'b' is the base and 'h' is the height. 🔺📐",

     // Calculation Questions
     "calculate 3+5": "3 + 5 = 8. ➕",
     "calculate 9-4": "9 - 4 = 5. ➖",
     "calculate 6*7": "6 * 7 = 42. ✖️",
     "calculate 12/4": "12 ÷ 4 = 3. ➗",
     "calculate 15+20": "15 + 20 = 35. ➕",
     "calculate 100-75": "100 - 75 = 25. ➖",
     "calculate 25*8": "25 * 8 = 200. ✖️",
     "calculate 72/9": "72 ÷ 9 = 8. ➗",
     "calculate 13+17": "13 + 17 = 30. ➕",
     "calculate 50-30": "50 - 30 = 20. ➖",
     "calculate 10*10": "10 * 10 = 100. ✖️",
     "calculate 64/8": "64 ÷ 8 = 8. ➗",
     "calculate 9+9": "9 + 9 = 18. ➕",
     "calculate 20-15": "20 - 15 = 5. ➖",
     "calculate 6*9": "6 * 9 = 54. ✖️",
     "calculate 81/9": "81 ÷ 9 = 9. ➗",
     "calculate 18+32": "18 + 32 = 50. ➕",
     "calculate 45-25": "45 - 25 = 20. ➖",
     "calculate 14*3": "14 * 3 = 42. ✖️",
     "calculate 96/12": "96 ÷ 12 = 8. ➗",
     "calculate 30+60": "30 + 60 = 90. ➕",
     "calculate 100-50": "100 - 50 = 50. ➖",
     "calculate 7*8": "7 * 8 = 56. ✖️",
     "calculate 120/15": "120 ÷ 15 = 8. ➗",
 
     // Square Roots (1 to 25)
     "square root of 1": "The square root of 1 is 1. √1 = 1",
     "square root of 2": "The square root of 2 is approximately 1.414. √2 ≈ 1.414",
     "square root of 3": "The square root of 3 is approximately 1.732. √3 ≈ 1.732",
     "square root of 4": "The square root of 4 is 2. √4 = 2",
     "square root of 5": "The square root of 5 is approximately 2.236. √5 ≈ 2.236",
     "square root of 6": "The square root of 6 is approximately 2.449. √6 ≈ 2.449",
     "square root of 7": "The square root of 7 is approximately 2.646. √7 ≈ 2.646",
     "square root of 8": "The square root of 8 is approximately 2.828. √8 ≈ 2.828",
     "square root of 9": "The square root of 9 is 3. √9 = 3",
     "square root of 10": "The square root of 10 is approximately 3.162. √10 ≈ 3.162",
     "square root of 11": "The square root of 11 is approximately 3.317. √11 ≈ 3.317",
     "square root of 12": "The square root of 12 is approximately 3.464. √12 ≈ 3.464",
     "square root of 13": "The square root of 13 is approximately 3.606. √13 ≈ 3.606",
     "square root of 14": "The square root of 14 is approximately 3.742. √14 ≈ 3.742",
     "square root of 15": "The square root of 15 is approximately 3.873. √15 ≈ 3.873",
     "square root of 16": "The square root of 16 is 4. √16 = 4",
     "square root of 17": "The square root of 17 is approximately 4.123. √17 ≈ 4.123",
     "square root of 18": "The square root of 18 is approximately 4.243. √18 ≈ 4.243",
     "square root of 19": "The square root of 19 is approximately 4.359. √19 ≈ 4.359",
     "square root of 20": "The square root of 20 is approximately 4.472. √20 ≈ 4.472",
     "square root of 21": "The square root of 21 is approximately 4.583. √21 ≈ 4.583",
     "square root of 22": "The square root of 22 is approximately 4.690. √22 ≈ 4.690",
     "square root of 23": "The square root of 23 is approximately 4.796. √23 ≈ 4.796",
     "square root of 24": "The square root of 24 is approximately 4.899. √24 ≈ 4.899",
     "square root of 25": "The square root of 25 is 5. √25 = 5",

      // Multiplication Tables (2 to 20)
    "table of 2": "2 x 1 = 2, 2 x 2 = 4, 2 x 3 = 6, 2 x 4 = 8, 2 x 5 = 10, 2 x 6 = 12, 2 x 7 = 14, 2 x 8 = 16, 2 x 9 = 18, 2 x 10 = 20, 2 x 11 = 22, 2 x 12 = 24, 2 x 13 = 26, 2 x 14 = 28, 2 x 15 = 30, 2 x 16 = 32, 2 x 17 = 34, 2 x 18 = 36, 2 x 19 = 38, 2 x 20 = 40.",
    "table of 3": "3 x 1 = 3, 3 x 2 = 6, 3 x 3 = 9, 3 x 4 = 12, 3 x 5 = 15, 3 x 6 = 18, 3 x 7 = 21, 3 x 8 = 24, 3 x 9 = 27, 3 x 10 = 30, 3 x 11 = 33, 3 x 12 = 36, 3 x 13 = 39, 3 x 14 = 42, 3 x 15 = 45, 3 x 16 = 48, 3 x 17 = 51, 3 x 18 = 54, 3 x 19 = 57, 3 x 20 = 60.",
    "table of 4": "4 x 1 = 4, 4 x 2 = 8, 4 x 3 = 12, 4 x 4 = 16, 4 x 5 = 20, 4 x 6 = 24, 4 x 7 = 28, 4 x 8 = 32, 4 x 9 = 36, 4 x 10 = 40, 4 x 11 = 44, 4 x 12 = 48, 4 x 13 = 52, 4 x 14 = 56, 4 x 15 = 60, 4 x 16 = 64, 4 x 17 = 68, 4 x 18 = 72, 4 x 19 = 76, 4 x 20 = 80.",
    "table of 5": "5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, 5 x 4 = 20, 5 x 5 = 25, 5 x 6 = 30, 5 x 7 = 35, 5 x 8 = 40, 5 x 9 = 45, 5 x 10 = 50, 5 x 11 = 55, 5 x 12 = 60, 5 x 13 = 65, 5 x 14 = 70, 5 x 15 = 75, 5 x 16 = 80, 5 x 17 = 85, 5 x 18 = 90, 5 x 19 = 95, 5 x 20 = 100.",
    "table of 6": "6 x 1 = 6, 6 x 2 = 12, 6 x 3 = 18, 6 x 4 = 24, 6 x 5 = 30, 6 x 6 = 36, 6 x 7 = 42, 6 x 8 = 48, 6 x 9 = 54, 6 x 10 = 60, 6 x 11 = 66, 6 x 12 = 72, 6 x 13 = 78, 6 x 14 = 84, 6 x 15 = 90, 6 x 16 = 96, 6 x 17 = 102, 6 x 18 = 108, 6 x 19 = 114, 6 x 20 = 120.",
    "table of 7": "7 x 1 = 7, 7 x 2 = 14, 7 x 3 = 21, 7 x 4 = 28, 7 x 5 = 35, 7 x 6 = 42, 7 x 7 = 49, 7 x 8 = 56, 7 x 9 = 63, 7 x 10 = 70, 7 x 11 = 77, 7 x 12 = 84, 7 x 13 = 91, 7 x 14 = 98, 7 x 15 = 105, 7 x 16 = 112, 7 x 17 = 119, 7 x 18 = 126, 7 x 19 = 133, 7 x 20 = 140.",
    "table of 8": "8 x 1 = 8, 8 x 2 = 16, 8 x 3 = 24, 8 x 4 = 32, 8 x 5 = 40, 8 x 6 = 48, 8 x 7 = 56, 8 x 8 = 64, 8 x 9 = 72, 8 x 10 = 80, 8 x 11 = 88, 8 x 12 = 96, 8 x 13 = 104, 8 x 14 = 112, 8 x 15 = 120, 8 x 16 = 128, 8 x 17 = 136, 8 x 18 = 144, 8 x 19 = 152, 8 x 20 = 160.",
    "table of 9": "9 x 1 = 9, 9 x 2 = 18, 9 x 3 = 27, 9 x 4 = 36, 9 x 5 = 45, 9 x 6 = 54, 9 x 7 = 63, 9 x 8 = 72, 9 x 9 = 81, 9 x 10 = 90, 9 x 11 = 99, 9 x 12 = 108, 9 x 13 = 117, 9 x 14 = 126, 9 x 15 = 135, 9 x 16 = 144, 9 x 17 = 153, 9 x 18 = 162, 9 x 19 = 171, 9 x 20 = 180.",
    "table of 10": "10 x 1 = 10, 10 x 2 = 20, 10 x 3 = 30, 10 x 4 = 40, 10 x 5 = 50, 10 x 6 = 60, 10 x 7 = 70, 10 x 8 = 80, 10 x 9 = 90, 10 x 10 = 100, 10 x 11 = 110, 10 x 12 = 120, 10 x 13 = 130, 10 x 14 = 140, 10 x 15 = 150, 10 x 16 = 160, 10 x 17 = 170, 10 x 18 = 180, 10 x 19 = 190, 10 x 20 = 200.",
    "table of 11": "11 x 1 = 11, 11 x 2 = 22, 11 x 3 = 33, 11 x 4 = 44, 11 x 5 = 55, 11 x 6 = 66, 11 x 7 = 77, 11 x 8 = 88, 11 x 9 = 99, 11 x 10 = 110, 11 x 11 = 121, 11 x 12 = 132, 11 x 13 = 143, 11 x 14 = 154, 11 x 15 = 165, 11 x 16 = 176, 11 x 17 = 187, 11 x 18 = 198, 11 x 19 = 209, 11 x 20 = 220.",
    "table of 12": "12 x 1 = 12, 12 x 2 = 24, 12 x 3 = 36, 12 x 4 = 48, 12 x 5 = 60, 12 x 6 = 72, 12 x 7 = 84, 12 x 8 = 96, 12 x 9 = 108, 12 x 10 = 120, 12 x 11 = 132, 12 x 12 = 144, 12 x 13 = 156, 12 x 14 = 168, 12 x 15 = 180, 12 x 16 = 192, 12 x 17 = 204, 12 x 18 = 216, 12 x 19 = 228, 12 x 20 = 240.",
    "table of 11": "11 x 1 = 11, 11 x 2 = 22, 11 x 3 = 33, 11 x 4 = 44, 11 x 5 = 55, 11 x 6 = 66, 11 x 7 = 77, 11 x 8 = 88, 11 x 9 = 99, 11 x 10 = 110, 11 x 11 = 121, 11 x 12 = 132, 11 x 13 = 143, 11 x 14 = 154, 11 x 15 = 165, 11 x 16 = 176, 11 x 17 = 187, 11 x 18 = 198, 11 x 19 = 209, 11 x 20 = 220.",
    "table of 12": "12 x 1 = 12, 12 x 2 = 24, 12 x 3 = 36, 12 x 4 = 48, 12 x 5 = 60, 12 x 6 = 72, 12 x 7 = 84, 12 x 8 = 96, 12 x 9 = 108, 12 x 10 = 120, 12 x 11 = 132, 12 x 12 = 144, 12 x 13 = 156, 12 x 14 = 168, 12 x 15 = 180, 12 x 16 = 192, 12 x 17 = 204, 12 x 18 = 216, 12 x 19 = 228, 12 x 20 = 240.",
    "table of 13": "13 x 1 = 13, 13 x 2 = 26, 13 x 3 = 39, 13 x 4 = 52, 13 x 5 = 65, 13 x 6 = 78, 13 x 7 = 91, 13 x 8 = 104, 13 x 9 = 117, 13 x 10 = 130, 13 x 11 = 143, 13 x 12 = 156, 13 x 13 = 169, 13 x 14 = 182, 13 x 15 = 195, 13 x 16 = 208, 13 x 17 = 221, 13 x 18 = 234, 13 x 19 = 247, 13 x 20 = 260.",
    "table of 14": "14 x 1 = 14, 14 x 2 = 28, 14 x 3 = 42, 14 x 4 = 56, 14 x 5 = 70, 14 x 6 = 84, 14 x 7 = 98, 14 x 8 = 112, 14 x 9 = 126, 14 x 10 = 140, 14 x 11 = 154, 14 x 12 = 168, 14 x 13 = 182, 14 x 14 = 196, 14 x 15 = 210, 14 x 16 = 224, 14 x 17 = 238, 14 x 18 = 252, 14 x 19 = 266, 14 x 20 = 280.",
    "table of 15": "15 x 1 = 15, 15 x 2 = 30, 15 x 3 = 45, 15 x 4 = 60, 15 x 5 = 75, 15 x 6 = 90, 15 x 7 = 105, 15 x 8 = 120, 15 x 9 = 135, 15 x 10 = 150, 15 x 11 = 165, 15 x 12 = 180, 15 x 13 = 195, 15 x 14 = 210, 15 x 15 = 225, 15 x 16 = 240, 15 x 17 = 255, 15 x 18 = 270, 15 x 19 = 285, 15 x 20 = 300.",
    "table of 16": "16 x 1 = 16, 16 x 2 = 32, 16 x 3 = 48, 16 x 4 = 64, 16 x 5 = 80, 16 x 6 = 96, 16 x 7 = 112, 16 x 8 = 128, 16 x 9 = 144, 16 x 10 = 160, 16 x 11 = 176, 16 x 12 = 192, 16 x 13 = 208, 16 x 14 = 224, 16 x 15 = 240, 16 x 16 = 256, 16 x 17 = 272, 16 x 18 = 288, 16 x 19 = 304, 16 x 20 = 320.",
    "table of 17": "17 x 1 = 17, 17 x 2 = 34, 17 x 3 = 51, 17 x 4 = 68, 17 x 5 = 85, 17 x 6 = 102, 17 x 7 = 119, 17 x 8 = 136, 17 x 9 = 153, 17 x 10 = 170, 17 x 11 = 187, 17 x 12 = 204, 17 x 13 = 221, 17 x 14 = 238, 17 x 15 = 255, 17 x 16 = 272, 17 x 17 = 289, 17 x 18 = 306, 17 x 19 = 323, 17 x 20 = 340.",
    "table of 18": "18 x 1 = 18, 18 x 2 = 36, 18 x 3 = 54, 18 x 4 = 72, 18 x 5 = 90, 18 x 6 = 108, 18 x 7 = 126, 18 x 8 = 144, 18 x 9 = 162, 18 x 10 = 180, 18 x 11 = 198, 18 x 12 = 216, 18 x 13 = 234, 18 x 14 = 252, 18 x 15 = 270, 18 x 16 = 288, 18 x 17 = 306, 18 x 18 = 324, 18 x 19 = 342, 18 x 20 = 360.",
    "table of 19": "19 x 1 = 19, 19 x 2 = 38, 19 x 3 = 57, 19 x 4 = 76, 19 x 5 = 95, 19 x 6 = 114, 19 x 7 = 133, 19 x 8 = 152, 19 x 9 = 171, 19 x 10 = 190, 19 x 11 = 209, 19 x 12 = 228, 19 x 13 = 247, 19 x 14 = 266, 19 x 15 = 285, 19 x 16 = 304, 19 x 17 = 323, 19 x 18 = 342, 19 x 19 = 361, 19 x 20 = 380.",
    "table of 20": "20 x 1 = 20, 20 x 2 = 40, 20 x 3 = 60, 20 x 4 = 80, 20 x 5 = 100, 20 x 6 = 120, 20 x 7 = 140, 20 x 8 = 160, 20 x 9 = 180, 20 x 10 = 200, 20 x 11 = 220, 20 x 12 = 240, 20 x 13 = 260, 20 x 14 = 280, 20 x 15 = 300, 20 x 16 = 320, 20 x 17 = 340, 20 x 18 = 360, 20 x 19 = 380, 20 x 20 = 400.",

    //java codes
        "java code": `
        Here's a basic 'Hello, World!' program in Java:
        \`\`\`java
        public class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello, World!");
            }
        }
        \`\`\`
        This program prints "Hello, World!" to the console.`,
        
        "How do you reverse a string in Java?": `
        You can reverse a string in Java using the StringBuilder class:
        \`\`\`java
        public class ReverseString {
            public static void main(String[] args) {
                String str = "Hello";
                String reversed = new StringBuilder(str).reverse().toString();
                System.out.println(reversed);  // Output: olleH
            }
        }
        \`\`\`
        This code uses StringBuilder to reverse the string.`,
        
        "How do you find the factorial of a number in Java?": `
        Here's how you can find the factorial of a number in Java:
        \`\`\`java
        public class Factorial {
            public static void main(String[] args) {
                int num = 5;
                int factorial = 1;
                for (int i = 1; i <= num; i++) {
                    factorial *= i;
                }
                System.out.println("Factorial of " + num + " is " + factorial);  // Output: 120
            }
        }
        \`\`\`
        This program calculates the factorial of 5 using a for loop.`,
    // cpp codes
    "cpp code": `
    Here's a basic 'Hello, World!' program in C++:
    \`\`\`cpp
    #include <iostream>
    using namespace std;
    
    int main() {
        cout << "Hello, World!" << endl;
        return 0;
    }
    \`\`\`
    This program prints "Hello, World!" to the console.`,
    
    "How do you reverse a string in C++?": `
    You can reverse a string in C++ using a for loop:
    \`\`\`cpp
    #include <iostream>
    using namespace std;
    
    int main() {
        string str = "Hello";
        int n = str.length();
        for (int i = 0; i < n / 2; i++) {
            swap(str[i], str[n - i - 1]);
        }
        cout << str << endl;  // Output: olleH
        return 0;
    }
    \`\`\`
    This program reverses the string using the swap function.`,
    
    "How do you find the factorial of a number in C++?": `
    Here's how you can find the factorial of a number in C++:
    \`\`\`cpp
    #include <iostream>
    using namespace std;
    
    int main() {
        int num = 5;
        int factorial = 1;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }
        cout << "Factorial of " << num << " is " << factorial << endl;  // Output: 120
        return 0;
    }
    \`\`\`
    This program calculates the factorial of 5 using a for loop.`, 
    
    // python code
    "python code": `
    Here's a basic 'Hello, World!' program in Python:
    \`\`\`python
    print("Hello, World!")
    \`\`\`
    This program prints "Hello, World!" to the console.`,
    
    "How do you reverse a string in Python?": `
    You can reverse a string in Python using slicing:
    \`\`\`python
    str = "Hello"
    reversed_str = str[::-1]
    print(reversed_str)  # Output: olleH
    \`\`\`
    This code uses slicing to reverse the string.`,
    
    "How do you find the factorial of a number in Python?": `
    Here's how you can find the factorial of a number in Python:
    \`\`\`python
    def factorial(n):
        result = 1
        for i in range(1, n + 1):
            result *= i
        return result
    
    num = 5
    print(f"Factorial of {num} is {factorial(num)}")  # Output: 120
    \`\`\`
    This function calculates the factorial of 5 using a for loop.`,
};

// Function to handle user input and bot response
function getBotResponse(userMessage) {
    // Convert message to lowercase for case-insensitive comparison
    const lowerMessage = userMessage.toLowerCase();

    // Respond based on predefined responses or default message
    return responses[lowerMessage] || responses["default"];
}

// Function to display chat message
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the latest message
}

// Handle Send Button click
sendButton.addEventListener('click', function() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
        userInput.value = '';  // Clear input field
    }
});

// Handle Enter key press for sending messages
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});