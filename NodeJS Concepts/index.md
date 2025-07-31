## 📚 NodeJS Concepts (10 minutes)

### 🧩 What is Node.js?

- Open-source, cross-platform runtime environment
- Executes JavaScript code outside the browser
- Built on Chrome’s V8 JavaScript engine
- Used to build scalable network applications

### ❓ Why Node.js?

- JavaScript runtime built for the server side
- Asynchronous and non-blocking I/O for better scalability
- Uses Chrome's V8 engine for fast execution
- Great for building real-time applications (e.g., chat apps, APIs)
- Huge ecosystem via npm

### ⚙️ How Node.js Works?

- **Single-threaded** but **event-driven**
- Uses an **Event Loop** to handle concurrent requests
- No blocking — I/O operations (like reading files or querying DB) are handled via callbacks/promises
- Modules are loaded using the CommonJS module system (`require`)

#### Example: Traditional vs Node.js Model

**Traditional Blocking I/O:**

```js
const data = fs.readFileSync('file.txt');
console.log(data.toString());
```

**Non-Blocking I/O:**

```js
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```
