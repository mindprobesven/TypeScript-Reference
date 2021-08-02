/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Class definitions
// --------------------------------------------------------------------------------------

import assert from 'assert';

// Private properties
// --------------------------------------------------------------------------------------
// - Private properties are a TypeScript-only (static) feature. Any property can be made
// private by prefixing it with the keyword private.
//
// - Important: No encapsulation at runtime! 'private' has 'NO EFFECT' at runtime, only at
// compile-time. Private properties aren’t protected at runtime.
//
// - We can’t reuse the names of private properties in subclasses (because the properties
// aren’t private at runtime).
class MyClass1 {
  private privateProperty: string;

  constructor(value: string) {
    this.privateProperty = value;
  }

  private testMethod() {
    return this.privateProperty + this.privateProperty;
  }

  get privatePropertyValue() {
    return this.privateProperty;
  }

  static accessPrivateMembers() {
    const inst = new MyClass1('foo');
    // Private members can be accessed from inside class definitions
    assert.strictEqual(inst.privateProperty, 'foo');
    assert.strictEqual(inst.testMethod(), 'foofoo');
  }
}

MyClass1.accessPrivateMembers();

const inst1 = new MyClass1('foo');
assert.strictEqual(inst1.privatePropertyValue, 'foo');

// @ts-error: Property 'privateProperty' is private and only accessible within class 'MyClass1'.
// assert.strictEqual(inst1.privateProperty, 'foo');

// @ts-error: Property 'testMethod' is private and only accessible within class 'MyClass1'
// assert.strictEqual(inst1.testMethod(), 'foo');

// Private fields
// --------------------------------------------------------------------------------------
// - Completely encapsulated at runtime
// - Uses WeakMap technique to keep instance data private
class MyClass2 {
  #privateField: string;

  constructor(value: string) {
    this.#privateField = value;
  }

  #privateMethod() {
    return this.#privateField + this.#privateField;
  }

  get privateFieldValue() {
    return this.#privateField;
  }

  static accessPrivateMembers() {
    const inst = new MyClass2('foo');
    // Private members can be accessed from inside class definitions
    assert.strictEqual(inst.#privateField, 'foo');
    assert.strictEqual(inst.#privateMethod(), 'foofoo');
  }
}

MyClass2.accessPrivateMembers();

const inst2 = new MyClass2('bar');
assert.strictEqual(inst2.privateFieldValue, 'bar');

// @ts-error: Property '#privateField' is not accessible outside class 'MyClass2' because it has a private identifier
// assert.strictEqual(inst2.#privateField, 'foo');

// @ts-error: Property '#privateMethod' is not accessible outside class 'MyClass2' because it has a private identifier
// assert.strictEqual(inst2.#privateMethod(), 'foo');

// Private fields
// --------------------------------------------------------------------------------------
// Private fields and private properties can’t be accessed in subclasses
// We can fix this by switching from 'private' to 'protected'
//
// - Important: No encapsulation at runtime! 'protected' has 'NO EFFECT' at runtime, only at
// compile-time. Protected properties aren’t protected at runtime.
class Person {
  protected first: string;

  constructor(first: string) {
    this.first = first;
  }

  get firstName() {
    return this.first;
  }
}

class Employee extends Person {
  protected title: string;

  constructor(first: string, title: string) {
    super(first);
    this.title = title;
  }

  get employeeInfo() {
    return `${this.first} - ${this.title}`;
  }
}

const sven = new Employee('Sven', 'CTO');
assert.strictEqual(sven.firstName, 'Sven');
assert.strictEqual(sven.employeeInfo, 'Sven - CTO');

// @ts-error: Property 'title' is protected and only accessible within class 'Employee' and its subclasses
// assert.strictEqual(sven.title, 'CTO');

// Private constructors
// --------------------------------------------------------------------------------------
// Constructors can be private too. This is usefull when we have static factory methods (e.g. create())
// and want clients to always use those methods, never construct directly.
class MyClass3 {
  #data: string;

  static create(data: string) {
    return new this(data);
  }

  private constructor(data: string) {
    this.#data = data;
  }

  getData() {
    return this.#data;
  }
}

// The class cannot be instantiated directly using 'new' (constructor function)

// @ts-error: Constructor of class 'MyClass3' is private and only accessible within the class declaration.
// const inst3 = new MyClass3('bar');

// Instead, the client is forced to use the static factory method create()
const inst3 = MyClass3.create('bar');
assert.strictEqual(inst3.getData(), 'bar');

// Using an object as instance property
// --------------------------------------------------------------------------------------
// If the compiler setting --strictPropertyInitialization is switched on (which is the case if we use --strict),
// then TypeScript checks if all declared instance properties are correctly 'initialized'

// 'Implements' ensures that the class declares all properties (first and last) that are part of interface 'Props'
class MyClass4 implements Props {
  // @ts-error: Property 'first' has no initializer and is not definitely assigned in the constructor.
  // first: string;
  // last: string;

  first!: string;
  last!: string;

  constructor(props: Props) {
    // this.first = props.first;
    // this.last = props.last;

    // Instead of the above way of initializing instance properties, we use Object.assign to copy the properties
    // of parameter props into this.
    // TypeScript doesn't recognize initializing properties in this manner and throws an error.
    // We can use exclamation marks (definite assignment assertions) to switch off TypeScript’s warnings
    Object.assign(this, props);
  }
}

interface Props {
  first: string,
  last: string,
}

const inst4 = new MyClass4({ first: 'Sven', last: 'Kohn' });
assert.strictEqual(inst4.first, 'Sven');

// Making constructor parameters public, private, or protected
// --------------------------------------------------------------------------------------
// If we use the keyword public for a constructor parameter, then TypeScript does two things for us:

// It declares a public instance property with the same name.
// It assigns the parameter to that instance property.

// - Important: No encapsulation at runtime! 'public, private and protected' have 'NO EFFECT' at runtime, only at
// compile-time.

class MyClass5 {
  constructor(public x:number, private y:number) {}
}
