import * as React from 'react'

const BasicTypes = () => {
  const isBoolean : boolean = true
  const age : number = 38
  const name : string = 'Sven'
  const sentence : string = `His name is ${name} and his age is ${age}`
  const numberList : number[] = [1, 2, 3]
  const notSure : any = 'This can be anything'
  const anyList : any[] = ['Sven', 1, 50]
   const someObject : object = { first: 'Sven', last: 'Kohn' }

  // Tuple
  const x : [string, number] = ['Sven', 6]

  // Function without return
  const functionWithoutReturn = () : void => console.log('Test')
  functionWithoutReturn()
  
  // Function that accepts an object or null without return
  const functionObjectNull = (o : object | null) : void => {
    console.log(JSON.stringify(o))
  }
  functionObjectNull({ name: 'Sven', age: 20 })
  functionObjectNull(null)

  // Type assertions
  const someString : string = 'Hello there'
  const someNumber : number = (someString as string).length

  return (
    <div>
      <p>{isBoolean.toString()}</p>
      <p>{age}</p>
      <p>{name}</p>
      <p>{sentence}</p>
      <p>{numberList}</p>
      <p>{notSure}</p>
      <p>{anyList}</p>
      <p>{JSON.stringify(someObject)}</p>
      <p>{someNumber}</p>
    </div>
  )
}

export default BasicTypes