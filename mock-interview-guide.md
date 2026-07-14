# Mock Interview Guide — Frontend Developer

> For the interviewer: This guide has questions on the left and expected answers on the right. Ask the question, then check the candidate's answer against the key points listed. Mark ✅ for correct, ❌ for missed.

---

## How to Use This Guide

- Pick **any section** and go through the questions one by one.
- Let the candidate answer fully before checking the key points.
- For coding questions, have the candidate write on a whiteboard or share their screen.
- Time yourself: target **45–60 minutes** total.

---

# 1. JavaScript Fundamentals

## Variables: `var`, `let`, `const`

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 1.1 | What's the difference between var, let, and const? | **Scope**: `var` is function-scoped, `let`/`const` are block-scoped. **Hoisting**: `var` is hoisted to `undefined`, `let`/`const` are hoisted but in TDZ. **Reassign**: `var`/`let` allow reassignment, `const` does not. **Redeclare**: `var` allows redeclaration, `let`/`const` do not. |
| 1.2 | What is hoisting? Give an example. | Hoisting = declarations moved to top during Memory Creation Phase. `console.log(a); var a = 5;` → `undefined`. `console.log(b); let b = 10;` → ReferenceError (TDZ). |
| 1.3 | What is the Temporal Dead Zone? | The period between entering a block and the `let`/`const` declaration. Accessing the variable in this zone throws a ReferenceError. |
| 1.4 | What's the difference between reassignment and redeclaration? | Reassignment = changing value (`x = 2`). Redeclaration = declaring same name again (`let x = 2`). `var` allows both; `let` allows reassignment only; `const` allows neither. |

---

## Scope & Closures

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 1.5 | What is a closure? Explain with the counter example. | A function that remembers variables from its outer scope even after the outer function has finished executing. In the counter example: `outer()` returns an inner function that closes over `count`; every call to `increment()` updates the same `count`. |
| 1.6 | Why are closures useful? Give a real example. | **Data encapsulation** (private state), **factory functions**, **memoization**, **event handlers**. Real example: `createCounter(start)` returns `{ increment, decrement, getCount }` — each instance has its own private `count`. |

---

## Execution Context & Event Loop

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 1.7 | What is the Call Stack? | A LIFO data structure tracking function calls. When a function is called, it's pushed; when it returns, it's popped. |
| 1.8 | What is the output of this code and why? `console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);` | Output: `1, 4, 3, 2`. Reason: synchronous code runs first (`1`, `4`). Microtask queue (Promise `.then`) runs before callback queue (`setTimeout`). So `3` before `2`. |
| 1.9 | Explain the Event Loop. | JS is single-threaded. Event Loop checks if Call Stack is empty → first drains **microtask queue** (Promise callbacks) → then **callback queue** (setTimeout, DOM events). |

---

## Async JavaScript & Promises

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 1.10 | What are the three states of a Promise? | Pending, Fulfilled, Rejected. |
| 1.11 | What's the difference between Promise.all, Promise.allSettled, and Promise.race? | **all**: fails fast (rejects if any rejects). **allSettled**: waits for all to settle (fulfilled or rejected). **race**: returns whichever settles first. |
| 1.12 | Why use async/await over .then() chaining? | Easier to read/write, better error handling with try/catch, cleaner stack traces. |

---

## Array Methods

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 1.13 | Explain map, filter, reduce, find, some, every. | **map**: transform each element → new array. **filter**: keep elements passing test → new array. **reduce**: accumulate to single value. **find**: return first matching element. **some**: true if any element passes. **every**: true if all elements pass. |
| 1.14 | Implement `Array.prototype.myMap` manually. | See answer.md — loop with `result.push(callback(this[i], i, this))` pattern. |

---

## Objects & ES6+

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 1.15 | What's the difference between shallow copy and deep copy? | Shallow copy duplicates top-level properties only; nested objects are still referenced. Deep copy creates a fully independent clone. Methods: spread `{...obj}` (shallow), `JSON.parse(JSON.stringify(obj))` or `structuredClone()` (deep). |
| 1.16 | Explain destructuring, rest/spread, template literals, arrow functions, modules. | **Destructuring**: unpack arrays/objects into variables. **Rest**: collect remaining args with `...`. **Spread**: expand iterables. **Template literals**: `` `${var}` `` interpolation. **Arrow functions**: shorter syntax, no own `this`. **Modules**: `export`/`import` syntax. |

---

# 2. TypeScript

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 2.1 | Interface vs Type — what's the difference? | **Interface**: extends with `extends`, supports declaration merging, for object shapes. **Type**: uses `&` for intersection, supports unions/primitives/computed keys. Rule: use `interface` for objects, `type` for unions/primitives. |
| 2.2 | What are generics and why use them? | Write reusable type-safe code. `function identity<T>(value: T): T` — preserves the type without using `any`. |
| 2.3 | Explain Partial, Pick, Omit, Record, Required. | **Partial\<T\>**: all optional. **Pick\<T,K\>**: select keys. **Omit\<T,K\>**: exclude keys. **Record\<K,V\>**: object with key/value types. **Required\<T\>**: all required. |
| 2.4 | What's the difference between `any` and `unknown`? | `unknown` is type-safe `any`. You must narrow `unknown` before using it. Prefer `unknown` over `any`. |

---

# 3. React

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 3.1 | What is the Virtual DOM? | Lightweight JS representation of the real DOM. React diffs new VDOM with previous → only updates changed nodes in real DOM. Faster because it batches updates and minimizes expensive DOM operations. |
| 3.2 | Explain useState and why use functional updater. | Returns `[state, setState]`. Use functional updater `setCount(prev => prev + 1)` when new state depends on old state to avoid stale closure bugs. |
| 3.3 | Explain useEffect — dependency array, cleanup, infinite re-render. | **Dep array**: `[]` (mount once), `[dep]` (on dep change), none (every render — bug). **Cleanup**: returned function runs before next effect/unmount (e.g., cancel fetch). **Infinite loop**: setting state without proper deps. |
| 3.4 | When to use useMemo vs useCallback? | **useMemo**: memoize expensive computed values. **useCallback**: memoize function references (for memoized children). |
| 3.5 | What does useRef do? | Mutable object persisting across renders without causing re-renders. Uses: DOM refs, storing previous values, intervals. |
| 3.6 | Controlled vs Uncontrolled components? | **Controlled**: React state is source of truth (`value` + `onChange`). **Uncontrolled**: DOM manages its own state (access via `ref`). Controlled for instant validation; uncontrolled for simple forms/third-party libs. |
| 3.7 | Why does a component re-render? How prevent it? | Reasons: state change, props change, parent re-render, context change. Prevention: `React.memo`, `useMemo`, `useCallback`. |
| 3.8 | What is Context API and what problem does it solve? | Solves **prop drilling**. `createContext` → `Provider` → `useContext`. Downside: all consumers re-render on value change. |
| 3.9 | Why React Hook Form over useState? | Minimal re-renders (uncontrolled), built-in validation (Zod/Yup), less boilerplate, better performance on large forms. |

---

# 4. Next.js

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 4.1 | What is SSR? Benefits and drawbacks? | HTML generated on server per request. **Pros**: fresh data, good SEO. **Cons**: slower TTFB, server load. |
| 4.2 | What is SSG? Difference from SSR? | HTML generated at build time. **SSG**: static files, CDN-cacheable, fastest loads, potentially stale. **SSR**: on every request, always fresh, slower. |
| 4.3 | Compare CSR vs SSR vs SSG. When to use each? | **CSR**: rich interactivity, bad initial load/SEO. **SSR**: fresh data, good SEO. **SSG**: fastest, best for static content. Choose: Blog→SSG, Dashboard→CSR, Products→SSR, Blog with hourly updates→ISR. |
| 4.4 | Explain App Router file conventions: layout, page, loading, error. | **layout.tsx**: persistent wrapper. **page.tsx**: route UI. **loading.tsx**: Suspense fallback. **error.tsx**: error boundary. |
| 4.5 | What are Server Components vs Client Components? | **Server Components** (default): run on server, zero JS to browser, can access DB directly, no hooks. **Client Components** (`"use client"`): for interactivity, can use hooks/state. Best practice: Client Components as leaf nodes. |
| 4.6 | How does data fetching work in Server Components vs Client Components? | **Server**: `async` component with `await fetch()` directly. **Client**: `useEffect` + `fetch` or a data fetching library (SWR/React Query). |
| 4.7 | Explain caching in Next.js. Name the caching layers. | Layers: **Request Memoization** (dedupe same fetch in one render), **Data Cache** (persist fetch results), **Full Route Cache** (cached rendered pages), **Router Cache** (client-side). Revalidation: time-based (`revalidate: 60`), tag-based (`revalidateTag`), path-based (`revalidatePath`). |

---

# 5. API Integration

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 5.1 | What's the difference between PUT and PATCH? | **PUT**: replaces entire resource. **PATCH**: partially updates specified fields only. |
| 5.2 | What do these status codes mean: 200, 201, 400, 401, 403, 404, 500? | **200**: OK. **201**: Created. **400**: Bad Request. **401**: Unauthorized (not logged in). **403**: Forbidden (no permission). **404**: Not Found. **500**: Internal Server Error. |
| 5.3 | Explain JWT authentication flow. | User logs in → server creates JWT → client stores it → sends in `Authorization: Bearer <token>` header → server validates signature without DB lookup. |
| 5.4 | Access Token vs Refresh Token? | **Access Token**: short-lived (15min), authorizes requests. **Refresh Token**: long-lived (7-30 days), used only to get new access tokens. |
| 5.5 | What is GraphQL? How is it different from REST? | Query language for APIs. **Single endpoint** (`/graphql`), client requests exactly what needed (no over/under-fetching), strongly typed schema. **REST**: multiple endpoints, may over/under-fetch, versioned via URL. |
| 5.6 | What is a Query? What is a Mutation? | **Query**: read data (GET equivalent). **Mutation**: write data (POST/PUT/PATCH/DELETE equivalent). |

---

# 6. HTML & CSS

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 6.1 | Name some semantic HTML tags and why they matter. | `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`. Give meaning to content → better SEO, screen readers, accessibility. |
| 6.2 | What is ARIA? Give examples of ARIA attributes. | ARIA adds semantic meaning for assistive technologies. Examples: `aria-label`, `aria-labelledby`, `aria-hidden`, `aria-expanded`, `role="alert"`. |
| 6.3 | Why does accessibility matter? | ~15% of population has disability, legal requirement (WCAG/ADA), better SEO, improves UX for everyone. |
| 6.4 | Explain Flexbox vs Grid. | **Flexbox**: one-dimensional (row OR column). **Grid**: two-dimensional (rows AND columns). Flexbox for layout in one direction; Grid for full page layouts. |
| 6.5 | Explain CSS specificity order. | `!important` > Inline styles > IDs > Classes/pseudo-classes/attributes > Elements/pseudo-elements. |
| 6.6 | What is mobile-first design? Why use it? | Start with small screen styles, add `min-width` breakpoints for larger screens. Forces content prioritization, better mobile performance, aligns with user behavior. |

---

# 7. Performance Optimization

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 7.1 | What Lighthouse metrics matter? What are good targets? | **LCP** ≤ 2.5s (loading), **FID** ≤ 100ms (interactivity), **CLS** ≤ 0.1 (stability), **FCP** (first content), **TTFB** (server response). |
| 7.2 | How does `next/image` optimize images? | Auto WebP/AVIF, lazy loads by default, prevents CLS with reserved space, serves correct size per viewport. |
| 7.3 | What is lazy loading? Why use it? | Defers loading non-critical resources until needed (viewport). Benefits: faster initial load, lower bandwidth, better LCP. Methods: `next/image` (default), `dynamic()` imports, `React.lazy`. |
| 7.4 | How do you reduce JavaScript bundle size? | Tree shaking (import only what needed), dynamic imports / code splitting, bundle analysis, avoid large deps (date-fns over moment), `next/font`. |

---

# 8. Git

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 8.1 | Merge vs Rebase — when to use each? | **Merge**: creates merge commit, preserves full history, use on shared branches. **Rebase**: linear history, replays commits on top, use on private branches. Golden rule: never rebase shared/public branches. |
| 8.2 | How do you resolve a merge conflict? | 1. Open file with conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) 2. Decide which version to keep 3. Remove markers 4. `git add <file>` 5. `git commit` (or `git rebase --continue`). |

---

# 9. DSA (Coding Round)

| # | Interviewer: Ask this | Expected Answer (Key Points) |
|---|---|---|
| 9.1 | Implement Two Sum using a hash map. | Use a `seen` object storing `value → index`. For each element, check if `target - nums[i]` exists in `seen`. |
| 9.2 | Implement Valid Parentheses using a stack. | Push opening brackets to stack. For closing brackets, pop and compare. Return `stack.length === 0`. |
| 9.3 | Implement Binary Search. | Two pointers (`left`, `right`), calculate `mid`, narrow down based on comparison. |
| 9.4 | Reverse a Linked List iteratively. | Three pointers: `prev = null`, `curr = head`, `next`. For each node: save `next`, point `curr.next` to `prev`, move all forward. |
| 9.5 | Level Order Traversal of a Binary Tree (BFS). | Use queue. Process level by level: for each level size, shift nodes, push children, add to result array. |

---

# 10. Resume Project Deep Dive

For these, listen to the candidate's answer and assess clarity, depth of understanding, and honesty.

| # | Interviewer: Ask this | What to look for |
|---|---|---|
| 10.1 | Why did you choose Next.js for Halal Fly? | Should mention SSR for SEO, file-based routing, built-in optimizations (images, fonts), or similar reasoned answer. |
| 10.2 | How did you implement caching in Halal Fly? | Should mention Next.js Data Cache, `revalidate` option, ISR, or client-side caching strategy. Even if simple, they should explain their approach honestly. |
| 10.3 | What was your biggest challenge on Halal Fly? How did you solve it? | Look for specific technical problem → structured approach → solution reasoning. Avoid generic "it was hard" answers. |
| 10.4 | How did GraphQL work in Sundarban Courier? | Should explain single endpoint, typed schema, queries requesting only needed fields, Apollo/urql client setup. |
| 10.5 | Why React Hook Form for Sundarban Courier? What validation library? | Should mention performance (minimal re-renders), Zod/Yup integration, ease of use with complex forms. |
| 10.6 | How did you build animations in Skitto? What library? | Should mention Framer Motion, CSS transitions/animations, or similar. Explain performance considerations. |

---

## Scoring Guide

| Score | Meaning |
|---|---|
| **Pass (80%+)** | Candidate answered most questions with depth and clarity. Can give a strong hire recommendation for junior role. |
| **Borderline (65-79%)** | Some weak areas (especially JS fundamentals or React). Needs more study before interviews. |
| **Fail (<65%)** | Significant gaps in fundamentals. Revisit JavaScript and React basics before applying. |

---

_Good luck with the interview prep! — Built from question.md and answer.md_
