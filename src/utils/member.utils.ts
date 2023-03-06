import uniqid from "uniqid";

export type Member = {
  id: string;
  firstName: string;
  lastName: string;
};

export const memberData: Member[] = [
  {
    id: uniqid(),
    firstName: "Joe",
    lastName: "Bloggs",
  },
  {
    id: uniqid(),
    firstName: "Mary",
    lastName: "Smith",
  },
  {
    id: uniqid(),
    firstName: "Trevor",
    lastName: "Small",
  },
  {
    id: uniqid(),
    firstName: "Billy",
    lastName: "Tubbins",
  },
  {
    id: uniqid(),
    firstName: "Maya",
    lastName: "Sprinkleson",
  },
  {
    id: uniqid(),
    firstName: "Noah",
    lastName: "Bongton",
  },
  {
    id: uniqid(),
    firstName: "Rachel",
    lastName: "Rachelson",
  },
  {
    id: uniqid(),
    firstName: "Ted",
    lastName: "Fred",
  },
  {
    id: uniqid(),
    firstName: "Maude",
    lastName: "Pillowcase",
  },
];
