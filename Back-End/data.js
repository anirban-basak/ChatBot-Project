// These are words/phrases the user could type in

const trigger = [
    ["hii", "hello"],
    ["who are you"],
    ["can i know about your company"],
    ["can i talk to your service provider"],
    ["visiting time of your company"],
    ["how many branches of your company in india"],
    ["who is the ceo of your company"]
   ];
  
  // These are bot responses, paired in order with the above 'trigger' phrases
  
   const reply = [
    ["Hello ! How can I help you ?"],
    ["I am a bot"],
    ["Yes. BigCo is a large E-commerce company"],
    ["Yes."],
    ["You can visit Monday to Friday from 11 am to 3 pm ."],
    ["There are total 7 branches in India ."],
    ["Mr. Sourav Roy"]
  ];
  
  // This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases
  
  const alternative = [
    "Try again",
    "I'm listening..."
  ];


// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ["Please stay home"];

  module.exports = {trigger, reply, alternative, coronavirus};
