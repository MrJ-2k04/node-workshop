## 🧠 Key Differences Between var, let, and const

| Feature            | `var`             | `let`        | `const`      |
| ------------------ | ----------------- | ------------ | ------------ |
| Scope              | Function-scoped   | Block-scoped | Block-scoped |
| Redeclaration      | ✅ Allowed         | ❌ Error      | ❌ Error      |
| Reassignment       | ✅ Allowed         | ✅ Allowed    | ❌ Error      |
| Hoisting           | ✅ Yes      | ✅ Yes (TDZ)  | ✅ Yes (TDZ)  |
| Temporal Dead Zone | ❌ No              | ✅ Yes        | ✅ Yes        |

## ⚠️ What Happens If You Declare a Variable Without `var`, `let`, or `const`?

### ✅ It Becomes a Global Variable (Automatically)

If you assign a value to a variable **without declaring it**, JavaScript implicitly creates it as a **global variable**, even if it’s inside a function.

### 🧪 Example:

```js
function demo() {
  x = 10; // No var/let/const
}

demo();

console.log(x); // ✅ Works: x is now global
```

## ⚠️ Why Undeclared Variables Are Dangerous

- Creates **global variables** by mistake.
- Can **overwrite** existing variables.
- Pollutes the **global** scope.
- Leads to **bugs**.


## 🔐 'use strict'

- Enables **strict mode** in JavaScript.
- Helps catch **common mistakes** and **unsafe actions**.
- Prevents use of **undeclared variables**.

### ✅ Example

```js
'use strict';

x = 5; // ❌ Error: x is not defined
```