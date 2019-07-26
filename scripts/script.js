class mercList {
  constructor() {
    this.contact = [];
  }


  add(name, friendly, flyingSkill, dejarikSkill, fearFirstOrder) {
    let newFriend = new Friend(
      name,
      friendly,
      flyingSkill,
      dejarikSkill,
      fearFirstOrder
    );
    this.contact.push(newFriend);
  }

  rankingsystem() {
    let highestscore = 0;
    let lowestscore = 
      this.contact[0].friendly + this.contact[0].flyingSkill + this.contact[0].dejarikSkill - this.contact[0].fearFirstOrder;
    let currentFriend = 0;
    let highestname;
    let lowestname;

    for (let i = 0; i<this.contact.length; i++) {
      currentFriend =
        this.contact[i].friendly + this.contact[0].flyingSkill + this.contact[0].dejarikSkill - this.contact[0].fearFirstOrder;

        if (currentFriend > highestscore) {
          highestscore = currentFriend;
          highestname = this.contact[i].name;
        }
        if (currentFriend < lowestscore) {
          highestscore = currentFriend;
          lowestname = this.contact[i].name;
        }
    }

    console.log(
      `${highestname} is your best friend.  ${lowestname} is your worst friend`);

  }

  print() {
    this.contact.forEach(friend => {
      console.log(friend);
    });
  }
}


class Friend {
  constructor(name = "bob", friendly = 0, flyingSkill = 0, dejarikSkill = 0, fearFirstOrder = 0) {
    this.name = name;
    this.friendly = friendly;
    this.flyingSkill = flyingSkill;
    this.dejarikSkill = dejarikSkill;
    this.fearFirstOrder = fearFirstOrder;
  }
}



// while (true) {

const mymercList = new mercList();

mymercList.add(("Darth Maul", 3, 2, 10, 3));
mymercList.add(("Darth Vader", 1, 10, 4, 1));
mymercList.add(("Lando Calrissian", 9, 7, 2, 8));
mymercList.add(("Jar Jar", 8, 2, 1, 10));
mymercList.print();
  
  while (true) {


    let name;
    let friendly;
    let flyingSkill;
    let dejarikSkill;
    let fearFirstOrder;

    name = prompt("What is your name?")
    friendly = prompt("On a scale of 1-10, how friendly are you? (1-unfriendly, 10-most friendly)")
    flyingSkill = prompt("On a scale of 1-10, how skilled are you as a pilot? (1-unskilled, 10-most skilled)")
    dejarikSkill = prompt("On a scale of 1-10, how skilled are you at Dejarik? (1-unskilled, 10-skilled)")
    fearFirstOrder = prompt("On a scale of 1-10, how afraid are you of the First Order? (1-brave, 10-scared)")

    mymercList.add(name, friendly, flyingSkill, dejarikSkill, fearFirstOrder);

    break;






    



  // let yesNo = prompt(`Do you want to be Chewbacca's Friend?`);
  // if (yesNo === "yes"){
  //     prompt(`Please enter your name`){
          
  //     }
  // }else{
  //     console.log("Bye Nerf-Herder")
  // }
}

console.log(mymercList);