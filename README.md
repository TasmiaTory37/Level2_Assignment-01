1. What are some differences between interfaces and types in TypeScript?

TypeScript-এ `interface` এবং `type` দুটোই মূলত object-এর গঠন বা কাঠামো বর্ণনা করতে ব্যবহৃত হয়। কাজ অনেকটাই মিল থাকলেও, তাদের আচরণ ও ব্যবহারের ক্ষেত্র কিছু দিক থেকে আলাদা।
একটি বড় পার্থক্য হলো declaration merging। interface একাধিকবার একই নামে ঘোষণা করলে TypeScript স্বয়ংক্রিয়ভাবে এগুলো merge করে ফেলে। এটি তখনই কাজে লাগে যখন একটি বড় object-এর ভিন্ন ভিন্ন অংশ আলাদা ফাইলে সংজ্ঞায়িত করতে হয়। অপরদিকে, type alias কখনো merge হয় না এটি একবারই declare করা যায়।
আরেকটি পার্থক্য হলো extending বা inheritance। interface খুব সহজেই extend করা যায়, অনেকটা class এর মতো। অন্যদিকে, type alias দিয়ে inheritance করা যায়, তবে সেটি করতে intersection (`&`) ব্যবহার করতে হয়। এই কারণে interface object এর shape নির্ধারণে বেশি natural লাগে।
তবে flexibility এর ক্ষেত্রে type alias এগিয়ে। type দিয়ে শুধু object structure নয়, বরং union, tuple, primitive, function signature—সব ধরনের টাইপ তৈরি করা যায়। interface এই বৈচিত্র্য দিতে পারে না।



3.Explain the difference between any, unknown, and never types in TypeScript.

TypeScript-এর type safety বোঝার জন্য `any`, `unknown`, এবং `never` এই তিনটি টাইপ ভালোভাবে বোঝা জরুরি। এরা দেখতে ছোট হলেও ব্যবহারিক ক্ষেত্রে বড় পার্থক্য সৃষ্টি করে।
`any` হলো সবচেয়ে ঢিলা টাইপ। এতে যেকোনো মান রাখা যায় এবং মান ব্যবহার করার সময় TypeScript কোনো চেক করে না। ফলে কোড দ্রুত লেখা যায়, তবে ভুল ধরার সুযোগ কমে যায়। বড় অ্যাপ্লিকেশনে বেশি any ব্যবহার করলে bug হওয়ার ঝুঁকি বেড়ে যায়।
`unknown` অনেকটা any-এর মতো এখানেও যেকোনো মান assign করা যায়। কিন্তু পার্থক্য হলো, unknown টাইপের ভ্যালু ব্যবহার করার আগে অবশ্যই type-check করতে হয়। এতে কোড কিছুটা নিরাপদ হয়, কারণ TypeScript নিশ্চিত হতে চায় যে ডেভেলপার মানটি ব্যবহার করার আগে তার টাইপ জানে।
অন্যদিকে, `never` এমন একটি টাইপ যা এমন পরিস্থিতিকে নির্দেশ করে যেখানে কোনো মানই return হবে না। উদাহরণ হিসেবে একটি function সর্বদা error ছুঁড়ে দিলে বা infinite loop-এর মধ্যে চললে সে কখনো return করতে পারে না। তাই TypeScript এটিকে never টাইপ হিসেবে ধরে। সাধারণত edge case বা exhaustive checking এর ক্ষেত্রে এটি ব্যবহৃত হয়।
