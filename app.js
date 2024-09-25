console.log('hello 11')

        //function input
        function createInstructor(firstName, lastName){
            return {
              firstName: firstName,
              lastName: lastName
            }
          }

        //ES2015 Version
        function createInstructor(firstName, lastName) {
            return {
                firstName,
                lastName,
            }
        }

//Exercise input
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
  }
  
  instructor[favoriteNumber] = "That is my favorite!"

  //Computer Property Names ES2015
  var favoriteNumber = 42;

  const instructor = {
      firstName: "Colt",
      [favoriteNumber]: "That is my favorite!"
    }


        //Object Method Exercise:
        var instructor = {
            firstName: "Colt",
            sayHi: function(){
              return "Hi!";
            },
            sayBye: function(){
              return this.firstName " + "says bye!";
            }
          }

        // Answer
        const instructor = {
            firstName: "Colt",
            sayHi () {
                return "Hi!"
            },
            sayBye () {
                return this.firstName + " says bye!"
            }
        }

const d = createAnimal("dog", "bark", "Woooof!")

d.bark()  

const s = createAnimal("sheep", "bleet", "BAAAAaa")

s.bleet()


function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise
        }
    }
}
