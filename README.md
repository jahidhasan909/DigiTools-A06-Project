Digitools একটি React ভিত্তিক ই-কমার্স প্রজেক্ট যেখানে Product এবং Cart সিস্টেম সম্পূর্ণভাবে React Hooks ব্যবহার করে তৈরি করা হয়েছে।

Project Overview:
এই প্রজেক্টে প্রথমে সম্পূর্ণ স্ট্যাটিক ডিজাইন তৈরি করা হয়েছে, এরপর ধাপে ধাপে ডাইনামিক ফাংশনালিটি যুক্ত করা হয়েছে।

Static Sections:
Navbar
Banner
Footer others..

Data Management:
Custom JSON data তৈরি করে public ফোল্ডারে রাখা হয়েছে
fetch() ব্যবহার করে data load করা হয়েছে
Suspense ব্যবহার করা হয়েছে
useState দিয়ে state management করা হয়েছে
props এর মাধ্যমে data component গুলোতে পাঠানো হয়েছে

Product & Cart System:
Add to Cart Functionality
"Buy Now" বাটনে ক্লিক করলে প্রোডাক্ট Cart এ যুক্ত হয়
useState ব্যবহার করে cart manage করা হয়েছে
বাটন disable হয়ে যায়
Button text পরিবর্তন হয়ে "Added to Cart" হয়
Button color green হয়ে যায়
Navbar এ cart count update হয়

Toggle System:
Product Tab এবং Cart Tab এর মধ্যে toggle system রয়েছে

Remove Product System:
Cart section এ প্রতিটি product এর পাশে Remove button রয়েছে
filter() method ব্যবহার করে product remove করা হয়েছে
Remove করার সাথে সাথে total price update হয়
Toastify notification দেখানো হয়

Total Price Calculation:
reduce() method ব্যবহার করে total price হিসাব করা হয়েছে
Product add বা remove করলে total price automatic update হয়

Checkout System:
"Process Checkout" button এ ক্লিক করলে
Cart এর সব product remove হয়ে যায়
Toastify notification দেখায়

Notification System:
React Toastify ব্যবহার করা হয়েছে
নিচের action গুলোতে notification দেখানো হয়:
Add to Cart
Remove Product
Checkout Complete

Technologies Used:
React.js
JavaScript (ES6)
DaisyUi
Tailwind CSS
React Hooks (useState, useEffect)
React Toastify