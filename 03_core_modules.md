# 03_core_modules.md

## 1. path

Handles file and directory paths across different operating systems.

- `path.join()`: Connects path segments together using the correct platform-specific separator.
- `path.resolve()`: Resolves a sequence of paths into an absolute path, starting from the root directory.

## 2. fs (File System)

Interacts with the file system.

- Synchronous methods like `fs.readFileSync` block the event loop entirely. The entire application freezes until the file is fully read. This is a massive anti-pattern in production web servers.
- Asynchronous methods like `fs.promises.readFile` handle the I/O in the background and return a Promise.

## 3. events

Node.js core API is built around an asynchronous event-driven architecture. The `EventEmitter` class allows you to emit named events and register listeners that trigger when those events occur.

## 4. stream

Streams are used to handle reading and writing large amounts of data. Instead of loading an entire 1GB file into RAM, streams process the data in small chunks.

- **Readable**: Streams that can be read from (e.g., `fs.createReadStream()`).
- **Writable**: Streams that you can write to (e.g., `fs.createWriteStream()`).
- **Duplex**: Streams that are both Readable and Writable (e.g., a TCP socket).
- **Transform**: Duplex streams that can modify the data as it is written and read (e.g., zlib compression).
