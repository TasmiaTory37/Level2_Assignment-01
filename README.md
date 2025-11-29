1. What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type দুটোই প্রধানত object এর কাঠামো বা shape নির্ধারণ করতে ব্যবহৃত হয়। কাজ অনেকটাই মিল থাকলেও কিছু ক্ষেত্রে উল্লেখযোগ্য পার্থক্য রয়েছে।

1) Declaration Merging (শুধু interface এ সম্ভব)

একই নামে interface দুইবার লিখলে TypeScript সেগুলো merge করে দেয়।

Example:
interface User {
  name: string;
}

interface User {
  age: number;
}

// Final merged interface:
// { name: string; age: number }


কিন্তু type alias-এর ক্ষেত্রে এটি সম্ভব নয়।

type User = { name: string };
type User = { age: number }; 
//  Error: Duplicate type name

2) Extending (interface সহজ, type একটু আলাদা)

interface খুব সহজে inherit করা যায়:

Example:
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}


type-এ inheritance করতে intersection operator (&) ব্যবহার করতে হয়:

type Person = { name: string };
type Employee = Person & { salary: number };

3) Flexibility (type বেশি flexible)

type alias দিয়ে union, tuple, primitive type alias ইত্যাদি বানানো যায়।

Example:
type ID = string | number;
type Point = [number, number];


interface দিয়ে এগুলো করা যায় না।





3.Explain the difference between any, unknown, and never types in TypeScript.

TypeScript-এর type safety বোঝার জন্য any, unknown এবং never এই তিনটি টাইপ গুরুত্বপূর্ণ ভূমিকা রাখে। এগুলোর আচরণ একে অপরের থেকে পুরোপুরি আলাদা।

1) any (সবচেয়ে ঢিলা টাইপ)

any মানে হলো এই ভেরিয়েবলের উপর TypeScript আর কোন নিয়ম প্রয়োগ করবে না।

Example:
let value: any = 10;
value = "Hello";
value = true;
value = { x: 1 };


যেকোনো মান assign করা যায়

ভুল ধরার সুযোগ কম

বড় প্রজেক্টে বেশি ব্যবহার করা ঝুঁকিপূর্ণ

2) unknown (safer any)

unknown এ যেকোনো মান assign করা যায়, কিন্তু ব্যবহার করার আগে অবশ্যই type-check করতে হয়।

Example:
let data: unknown = "Hi";

// data.toUpperCase(); // Direct use not allowed

if (typeof data === "string") {
  data.toUpperCase(); // Safe
}


flexible, কিন্তু নিরাপদ

API response বা dynamic data handle করার জন্য উপযোগী

3) never (যেখানে কিছুই return করা হয় না)

never সেই টাইপ যা নির্দেশ করে যে এই ফাংশন কখনোই return করবে না।

Example 1 — error:
function throwError(msg: string): never {
  throw new Error(msg);
}

Example 2 — infinite loop:
function loopForever(): never {
  while (true) {}
}


সাধারণত error handling বা exhaustive checking-এ ব্যবহৃত হয়
