# Task 1: Node.js Architecture & Runtime Documentation

Node.js runs on a single thread. The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded. When you execute an asynchronous operation like reading a file or making a network request, Node.js offloads this task to the operating system kernel. When the task finishes, the kernel tells Node.js to add the attached callback to a queue, which the Event Loop then picks up and executes.

The execution order of asynchronous callbacks in Node.js is strictly defined by the Event Loop's phases and microtask queues. When evaluating process.nextTick(), Promise.then(), setTimeout(), and setImmediate(), microtasks always take precedence over macrotasks. Specifically, process.nextTick() callbacks are executed first, immediately after the current operation completes and before the event loop continues. Promise.then() callbacks are executed next, resolving the rest of the microtask queue. Only after microtasks are cleared does the loop move to the timers phase to execute setTimeout() callbacks. Finally, setImmediate() executes during the check phase, which occurs after I/O callbacks.

1. process.nextTick(): Executes immediately after the current operation finishes, before anything else.
2. Promise.then(): Executes right after process.nextTick() tasks are cleared.
3. setTimeout(): Executes next in the timer phase of the event loop.
4. setImmediate(): Executes in the check phase, after the current poll phase completes.

The V8 Engine compiles JavaScript code directly into machine code. Libuv is a C library that handles the thread pool and interactions with the operating system. Heavy synchronous operations block the single-threaded event loop because V8 cannot move on to the next task until the current one finishes. Libuv prevents I/O tasks from blocking by distributing them to its internal thread pool (which defaults to 4 threads) to run in the background.

# Task 2: Asynchronous Flow & Error Handling Documentation

Callback Hell happens when the nest multiple asynchronous operations inside each other. The code shifts to the right, forming a pyramid shape that is incredibly difficult to read and debug. Promises fix this by flattening the structure. We can chain .then() methods one after another instead of nesting them.

```js
const fs = require("fs");

fs.readFile("data.json", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.readFile("data2.json", (err2, data2) => {
        if (err2) {
            console.error(err2);
            return;
        }
        console.log("Files read successfully");
    });
});

async function readData() {
    try {
        const data = await fs.readFile("data.json");
        const data2 = await fs.readFile("data2.json");
        console.log("Files read successfully");
    } catch (err) {
        console.error(err);
    }
}
```

If a Promise fails and you do not have a .catch() or try/catch block handling it, it results in an unhandled rejection. By default, newer versions of Node.js terminates the entire process when this happens

# Task 4: Express Architecture & Middleware Pipeline

Express Middleware is simply a function that has access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. The next() function is critical; calling it passes control to the next middleware in line. If you don't call next() or send a response back to the client, the request will hang forever.

## Middleware Types

1. Application-level: Bound to an instance of the Express app object. They run for every request that hits the server, or for specific route paths.
2. Router-level: Works identically to application-level middleware, but bound to an instance of express.Router(). Useful for splitting large APIs into smaller modules.
3. Error-handling: Always takes exactly four arguments: (err, req, res, next). This signature tells Express it is an error handler.

## Request Parameters

1. req.params: Captures variables directly from the URL path route (eg /users/:id captures the ID)
2. req.query: Captures key-value pairs at the end of the URL after the question mark (eg /users?sort=asc)
3. req.body: Captures data sent inside the request payload, typically from POST or PUT requests.

# Security & Error Architecture

Instead of embedding error response logic in every route, centralized error handling organizes error processing into a single middleware. When an error occurs within a route, throwing an error or passing it to next() causes Express to bypass standard middleware and execute the centralized error handler directly.

## Essential Security Practices

1. Environment Variables: Sensitive data such as API keys, database passwords, and secrets must not be hardcoded in source code. Storing these values in a .env file allows the dotenv package to load them into process.env.
2. Input Validation: Incoming data must not be trusted implicitly. Validating req.body, req.query, and req.params against strict schemas ensures data integrity before processing.
3. Helmet: The helmet package secures Express applications by setting HTTP headers that defend against common vulnerabilities such as Cross-Site Scripting (XSS) and clickjacking.
4. CORS (Cross-Origin Resource Sharing): Browsers block requests originating from external domains by default. Implementing the cors package configures response headers to specify permitted origins for API access.
