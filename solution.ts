const formatValue = (value: string | number | boolean): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
};


const getLength = (value: string | any[]): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


interface RatedItem {
  title: string;
  rating: number;
}

const filterByRating = (items: RatedItem[]): RatedItem[] => {
  return items.filter((item) => item.rating >= 4);
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? 'Yes' : 'No';
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};


const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const finalArray: (string | number)[] = [];

  for (const item of arr1) {
    if (!finalArray.includes(item)) {
      finalArray.push(item);
    }
  }

  for (const item of arr2) {
    if (!finalArray.includes(item)) {
      finalArray.push(item);
    }
  }

  return finalArray;
};


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    let totalPrice = product.price * product.quantity;

    if (product.discount !== undefined) {
      totalPrice = totalPrice - (totalPrice * product.discount) / 100;
    }

    return total + totalPrice;
  }, 0);
};
