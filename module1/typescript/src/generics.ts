interface ApiResponse<T> { data: T; status: number; message: string; }
 
// Generic
function identity<T>(arg: T): T 
{ 
  return arg; 
} 
const num = identity(42); 
const str = identity("hello");

// Generic with constraints
function logLength<T extends { length: number }>(arg: T): T 
{ 
  console.log(arg.length); return arg; 
}

logLength("hello");