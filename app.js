function revCount() {
  for (let i = 0; i <= 100; i++) {
    console.log(i)
  }

  for (let i = 100; i >= 0; i--) {

  }
}
revCount()


/*
has a start and a condition
A for loop has a start and a condition as well
Whiteboard problems in order to see how you asess an issue less about
if you actually get the correct answer
*/

function varLoop(start, condition) {
  for (let i = start; i < condition; i++) {
    console.log(i)

  }
}
varLoop(4, 7)

// >>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<
//line break




let peeps = [
  {
    name: 'Jonsey', role: "TA"
  },
  {
    name: 'Justin', role: 'TA'
  },
  {
    name: 'Nik', role: 'Student'
  },
  {
    name: 'Jake', role: 'CEO'
  }
]

//aliesed 
//banana word

function greet(data) {
  for (let i = 0; i < data.length; i++) {
    let people = data[i].name
    if (person.role == "Instructor") {
      console.log('Hello ${person.role} ${person.name}')
    } else if (persoon.role == 'Recruiter') {
      console.log('Hello ${person.role} ${person.name}. Have a great day!')
    } else if (person.role == 'Recruiter') {
      console.log(
        "hello" + person.role + person.name + "have a great day!"
      )
    }

  }
  greetGreet(peeps)

}

findById {
  let staff.paindf => (
  )



  // beginner
  let largest = 0
  for (let i = 0; i <= arr.length; i++)
    if (arr[i] > largest)
      largest = arr[i]
  return largest





  function largestNum(arr) {
    let largestNumber = [arr];
    return largestNumber

    let largest = 0
    for (let i = 0; i <= arr.length; i++)
      if (arr[i] > largest)
        largest = arr[i]
    return largest
  }



  function largestNum(arr) {
    return (Math.max(...arr))
  }