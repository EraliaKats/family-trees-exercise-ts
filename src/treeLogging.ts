import { Person } from "./personTypes";

/*
function logAllPeopleInTree(topPerson)
    create an empty stack of type Person[]
    put the topPerson onto the top of this new stack

		repeat the following as long as the stack is not empty:
        
		    take (i.e. remove) the top person from the stack
				console log their name
        add their kids to the top of the stack of people (in any order)*/

export function logAllPeopleInTree(topPerson: Person): void {
  const stack: Person[] = [];
  stack.push(topPerson);
  //   for (const descendant of [topPerson]) {
  //   }
  console.log({ eddardChildrenObj: topPerson.children[2].children });
  // console.log("TODO!  First person is " + topPerson.name);
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  console.log("TODO!  First person is " + topPerson.name);
}
