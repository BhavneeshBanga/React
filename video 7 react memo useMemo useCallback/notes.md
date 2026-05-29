# React Optimization Hooks: React.memo, useMemo, and useCallback

These notes cover the core concepts of optimization in React by preventing unnecessary re-renders and heavy calculations.

---

## 1. The Core Problem: Unnecessary Re-renders
In React, when a **Parent component** re-renders (e.g., due to a state change), all of its **Child components** also re-render by default.
*   **Default Behaviour:** Even if the child’s data (props) hasn't changed, React recreates the child component's elements and executes its code again.
*   **The Issue:** This can lead to performance lag, especially if the child component is complex or contains heavy logic.

---

## 2. React.memo
`React.memo` is a Higher-Order Component (HOC) used to **memorise a component**.

*   **How it works:** It wraps a component. Before re-rendering the child, React checks if the **props** passed to it have changed.
*   **Result:** 
    *   If props are the **same**, React skips re-rendering the child and uses the previous version.
    *   If props **change**, the child re-renders.
*   **Example Usage:**
    ```javascript
    const MyComponent = React.memo((props) => {
      // Component code
    });
    ```
*   **Note:** It uses "Shallow Comparison." It works perfectly for primitive values (like numbers or strings) but needs extra care for objects and functions.

---

## 3. useMemo Hook
While `React.memo` is for components, `useMemo` is used to **memorise the result of a calculation**.

*   **The Problem (Heavy Calculation):** If you have a function that takes a lot of time (like finding all prime numbers up to 100,000), it will run on every re-render, causing a visible **lag** in the UI.
*   **The Solution:** `useMemo` caches the calculated value and only recalculates it if its **dependencies** change.
*   **Syntax:**
    ```javascript
    const cachedValue = useMemo(() => {
        return performHeavyCalculation(number);
    }, [number]); // Only recalculates when 'number' changes
    ```
*   **Key Benefit:** It prevents expensive functions from running unnecessarily when unrelated state (like a counter) changes.

---

## 4. useCallback Hook
`useCallback` is used to **memorise a function definition** itself.

*   **The Problem (Function References):** In JavaScript, functions are objects. Every time a component re-renders, a **new function reference** is created.
*   **Why this breaks React.memo:** If you pass a function as a prop to a memorised child (`React.memo`), the child will think the prop has changed (because the reference is new) and will re-render anyway.
*   **The Solution:** `useCallback` ensures the function reference remains the same across re-renders unless its dependencies change.
*   **Dependency Array & Closures:** You must include variables used inside the function in the dependency array. If you don't, the function might "remember" old values (stale closures) from the initial render.

---

## 5. Advanced Concept: The Object Reference Issue
Passing objects as props to `React.memo` components often causes them to re-render unnecessarily because `{} !== {}` in JavaScript.

*   **Scenario:** If you pass `value={{ name: "Rohit" }}` as a prop, a new object is created every render.
*   **Fix with useMemo:** You can wrap the object in `useMemo` so the same reference is passed every time.
    ```javascript
    const user = useMemo(() => ({ name: "Rohit", age: 20 }), []);
    // Now passing 'user' as a prop won't trigger unnecessary re-renders in a Memo child.
    ```

---

## Summary Table

| Feature | Purpose | What it caches |
| :--- | :--- | :--- |
| **React.memo** | Optimization for Components | The entire component UI |
| **useMemo** | Optimization for Values | The result of a function/calculation |
| **useCallback** | Optimization for Functions | The function definition itself |

---

### Important Tips for Revision:
*   **Dependency Arrays:** Always be careful with these. If you forget a dependency, your code might use "stale" (old) data.
*   **When to use:** Don't use these everywhere. Use them when you notice performance lags or have very large component trees where skipping re-renders provides a real benefit.


react memo, kya mere parent k chnge hone se mujhe chage hona chahiyae


agar child k props change honge tabhi call hoga
agar child k props change nahi honge tab call nahi karega 


usememo ===> value ko memorize karke rakhega
dubara calculation perform nahi karega


useCallback aapke funcion ko remember karke rakhta hai across the rerender

function ek object hai jo memeory leta hai


object ka comparison reference k basis par hota hai