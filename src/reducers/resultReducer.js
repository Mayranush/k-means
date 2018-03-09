import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState ={
  count: [1,2,3],
  data: [
    {    
      "sentence1": "be very detail so sciency i like very thorough in explain the benefit and price it be interesting to see the two brand compare in a visual manner the internet they provide be very fast and I get interested .",
      "sentence2": "it be a ok ad it be unique and catch my attention informative I like it even tho I do not understand what the scientist be do but the message be clear .",
      "info1": [{
        "word": "aaaaaaaaBoring",
        "vector": 0
      },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },{
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },
        {
          "word": "aaaaaaaaBoring",
          "vector": 0
        },

      {
        "word": "Boring",
        "vector": 0
      },{
        "word": "Boring",
        "vector": 0
      }],
      "info2": [{
        "word": "ssssssssssBoring",
        "vector": 0
      },
      {
        "word": "Boring",
        "vector": 0
      },{
        "word": "Boring",
        "vector": 0
      }]      
    },
    {
      "sentence1": "be very detail so sciency i like very thorough in explain the benefit and price it be interesting to see the two brand compare in a visual manner the internet they provide be very fast and I get interested .",
      "sentence2": "it be a ok ad it be unique and catch my attention informative I like it even tho I do not understand what the scientist be do but the message be clear .",
      "info1": [{
        "word": "aaaaaaaaBoring",
        "vector": 0
      },
        {
          "word": "Boring",
          "vector": 0
        },{
          "word": "Boring",
          "vector": 0
        }],
      "info2": [{
        "word": "ssssssssssBoring",
        "vector": 0
      },
        {
          "word": "Boring",
          "vector": 0
        },{
          "word": "Boring",
          "vector": 0
        }]
    },
    {
      "sentence1": "be very detail so sciency i like very thorough in explain the benefit and price it be interesting to see the two brand compare in a visual manner the internet they provide be very fast and I get interested .",
      "sentence3": "it be a ok ad it be unique and catch my attention informative I like it even tho I do not understand what the scientist be do but the message be clear .",
      "info1": [{
        "word": "aaaaaaaaBoring",
        "vector": 0
      },
        {
          "word": "Boring",
          "vector": 0
        },{
          "word": "Boring",
          "vector": 0
        }],
      "info3": [{
        "word": "ssssssssssBoring",
        "vector": 0
      },
        {
          "word": "Boring",
          "vector": 0
        },{
          "word": "Boring",
          "vector": 0
        }]
    },
     {    
      "sentence1": "be very detail so sciency i like very thorough in explain the benefit and price it be interesting to see the two brand compare in a visual manner the internet they provide be very fast and I get interested .",
      "sentence2": "it be a ok ad it be unique and catch my attention informative I like it even tho I do not understand what the scientist be do but the message be clear .",
      "info1": [{
        "word": "xxxxxxxxBoring",
        "vector": 0
      },
      {
        "word": "Boring",
        "vector": 0
      },{
        "word": "Boring",
        "vector": 0
      }],
      "info2": [{
        "word": "Boring",
        "vector": 0
      },
      {
        "word": "Boring",
        "vector": 0
      },{
        "word": "Boring",
        "vector": 0
      }]
    },
    {    
      "sentence1": "be very detail so sciency i like very thorough in explain the benefit and price it be interesting to see the two brand compare in a visual manner the internet they provide be very fast and I get interested .",
      "sentence2": "it be a ok ad it be unique and catch my attention informative I like it even tho I do not understand what the scientist be do but the message be clear .",
      "info1": [{
        "word": "Boring",
        "vector": 0
      },
      {
        "word": "Boring",
        "vector": 0
      },{
        "word": "Boring",
        "vector": 0
      }],
      "info2": [{
        "word": "Boring",
        "vector": 0
      },
      {
        "word": "Boring",
        "vector": 0
      },{
        "word": "Boring",
        "vector": 0
      }]
    }
  ]};

  
  // data: [
  //   [{
  //     "cluster": 1,
  //     "sentences": [{
  //       "sentence": "be very detail so sciency i like very thorough in explain the benefit and price it be interesting to see the two brand compare in a visual manner the internet they provide be very fast and I get interested .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "i do not like it I like that there be visual as well as auditory mention of the price and speed difference between two brand .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "it make it easier to see how much of a difference there be in the two service .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "I think the stats be interesting but nothing else tell I that verizon offer internet now .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "the visual part be good and i like how it almost compare to a car dash informative it be dynamic and cheaper than other internet provider .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "the visual be kind of weird I do not really understand what be go on .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "it be ok i think it be a interesting commercial it be a good ad .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }]
  //   }, {
  //     "cluster": 2,
  //     "sentences": [{
  //       "sentence": "it be a ok ad it be unique and catch my attention informative I like it even tho I do not understand what the scientist be do but the message be clear .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "I think it be a good ad because it catch my attention and talk clearly of what it be .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "it grab my attention and be straight to the point .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     }, {
  //       "sentence": "the giant speedometer catch my attention right away .",
  //       "words": ["Boring", "Absolutely", "nothing", "new", "forgettable", "didn't", "visual", "well", "auditory", "mention", "price", "speed", "difference", "between", "two", "brands", "made", "easier", "see", "much", "services", "thought", "stats", "interesting", "Telling", "verizon", "offers", "internet", "now", "detailed", "sciency", "thorough", "explaining", "benefits", "compared", "manner", "provide", "fast", "interested", "part", "good", "liked", "cars", "dash", "informative", "It's", "dynamic", "cheaper", "provider", "ok", "unique", "caught", "attention", "even", "tho", "don't", "understand", "scientists", "doing", "message", "clear", "think", "catches", "talks", "clearly", "visuals", "kind", "weird", "really", "going", "OK", "commercial", "grabbed", "straight", "point", "giant", "speedometers", "right", "away", "Voice", "bland", "generic", "gigabit", "unkown", "unsure"],
  //       "vector": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0]
  //     }]
  //   }]
  // ]

export default handleActions({

  [ActionTypes.getDataResponseCluster]: (state, {payload}) => {
    return ({...state, data: payload});
  },


}, defaultState);
