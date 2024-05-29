function wrapInArray<T>(value: T): (T)[] {
  return [value];
}
const result1 = wrapInArray<string>('ssfafds');
const result2 = wrapInArray<number>(123);

function toRecord<T>(id: T, value: string) {
  return {
    id, value
  }
}
const result3 = toRecord<number>(123, 'my@email.com');
const result4 = toRecord<string>('ee01', 'other@email.com');

/**
 * multiple generics
 */
function toRecord2<T, E>(id: T, value: E) {
  return {
    id, value
  }
}
const result5 = toRecord2<number, string>(123, 'my@email.com');
const result6 = toRecord2<string, string[]>('ee01', ['other@email.com', 'host@email.com']);

/**
 * Generics with fetch
 */
interface User {
  name: string
}
interface Message {
  message: string
}
interface Image {
  src: string
}

// @ts-ignore
async function fetchData<T>(path: string):Promise<T> {
  const res = await fetch(path);
  const json = await res.json();
  return json as T;
}

// @ts-ignore
const run = async () => {
  const user = await fetchData<User>('/users');
  const message = await fetchData<Message>('/messages');
  const image = await fetchData<Image>('/images');
}

/**
 * more on Generic Type Inference
 */
function callAndReturn<T>(fn: () => T): T{
  return fn();
}

const result11 = callAndReturn(() => 5);
const result22 = callAndReturn(() => 'dfsgd');

/**
 * Generic Type Constraints
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return {...objA, ...objB};
}

const result = merge(
  { id: 1 },
  { color: 'red' }
);

/**
 * more on Generic Type Constraints
 */
interface Product {
  name: string,
  count: number,
}
type ProductKeys = keyof Product;
// constraints, need 'name' or 'count'
// const key: ProductKeys = 'adfsdf';
const key: ProductKeys = 'name';

/**
 * U type constrains object,
 * T type constrains U and type need U's key
 */
function collect<T extends keyof U, U extends object>(key: T, arr: U[]) {
  return arr.map(el => el[key]);
}

const resultCollect = collect('count', [
  { count: 1, name: 'asdf' },
  { count: 20, name: 'apple' }
])