export const gamemodes = [
  {
    icon: require("../../../assets/icons/confetti.png"),
    name: "Party",
    id: "party",
    descriptionKey: "partyDescription",
    description: "Подходит для малознакомых компаний",
  },
  {
    icon: require("../../../assets/icons/cheers.png"),
    name: "Hot-Party",
    id: "hotParty",
    descriptionKey: "hotPartyDescription",
    description: "Для тех,  уже набрался смелости ",
  },
  {
    icon: require("../../../assets/icons/mask.png"),
    name: "Hard",
    id: "hard",
    descriptionKey: "hardDescription",
    description: "Для тех, кому нечего скрывать",
  },
  {
    icon: require("../../../assets/icons/couple.png"),
    name: "For couples",
    id: "forCouples",
    descriptionKey: "couplesDescription",
    description: "Режим для игры с партнером",
  },
  {
    icon: require("../../../assets/icons/family.png"),
    name: "Family",
    id: "family",
    descriptionKey: "familyDescription",
    description: "Подходит для семейных посиделок",
  },
];

// data/data.ts
export const gameData = {
  ru: {
    questions: {
      party: [
        "Какой самый неловкий момент был у тебя в общественном месте?",
        "Какой был твой первый концерт или мероприятие?",
        "Если бы ты мог(ла) выбрать любое место для жизни, куда бы переехал(а)?",
        "Какую самую странную вещь ты когда-либо ел(а)?",
        "Если бы ты мог(ла) поменяться жизнями с кем-то на день, кого бы выбрал(а)?",
      ],
      hotParty: [
        "Какой твой самый большой страх?",
        "Расскажи о самом неудобном моменте в своей жизни",
        "Когда ты последний раз делал(а) что-то по-настоящему безрассудное?",
        "Поделись самым странным сном, который тебе снился",
        "Есть ли у тебя тайные увлечения, о которых никто не знает?",
      ],
      hard: [
        "Когда ты в последний раз плакал(а)?",
        "Какой поступок ты совершил(а) и до сих пор стыдишься?",
        "Расскажи о человеке, которого любил(а), но не сказал(а) ему",
        "Есть ли секреты, которые ты не мог(ла) бы никому рассказать?",
        "Что ты всегда скрываешь, чтобы тебя не осудили?",
      ],
      forCouples: [
        "Что ты ценишь больше всего в партнере?",
        "Какой поступок партнера заставил почувствовать себя любимым(ой)?",
        "Расскажи о самом романтичном моменте ваших отношений",
        "Что бы хотел(а) изменить в ваших отношениях?",
        "Есть что-то, что хотел(а) бы попробовать, но стесняешься?",
      ],
      family: [
        "Какая самая смешная семейная традиция?",
        "Какой самый странный подарок ты получал(а) от семьи?",
        "Какая детская история до сих пор заставляет смеяться?",
        "Какие привычки ты перенял(а) от родителей?",
        "Какое задание было самым сложным в детстве?",
      ],
    },
    actions: {
      party: [
        "Станцуй под песню, которую выберет другой игрок",
        "Простояй на одной ноге 30 секунд",
        "Сделай 10 приседаний",
        "Спой куплет из случайной песни",
        "Сделай смешное селфи и покажи всем",
      ],
      hotParty: [
        "Позвони другу и скажи, что любишь его",
        "Сделай комплимент каждому игроку",
        "Прочитай последнее SMS из своего телефона",
        "Сделай 5 отжиманий",
        "Подпрыгни 10 раз с криком поддержки",
      ],
      hard: [
        "Расскажи о самом странном комплименте в свой адрес",
        "Изобрази супергероя с его суперсилой",
        "Сними 5-секундное видео со своими мыслями",
        "Станцуй как известная знаменитость",
        "Создай костюм из подручных материалов",
      ],
      forCouples: [
        "Обнимай партнера 30 секунд",
        "Пройдись по комнате, держась за руки",
        "Сделай партнеру массаж плеч 2 минуты",
        "Напиши любовное письмо и зачитай вслух",
        "Узнай о странных привычках партнера",
      ],
      family: [
        "Покажи любимую семейную фотографию",
        "Напиши родителям записку с комплиментом",
        "Спой детскую песню с родственником",
        "Сделай смешное лицо для семейного фото",
        "Попрыгай на одной ноге 5 раз",
      ],
    },
  },
  en: {
    questions: {
      party: [
        "What's your most embarrassing moment in public?",
        "What was your first concert or major event?",
        "If you could live anywhere, where would you move?",
        "What's the weirdest thing you've ever eaten?",
        "If you could swap lives with someone for a day, who would it be?",
      ],
      hotParty: [
        "What's your biggest fear?",
        "Share your most awkward life moment",
        "When was the last time you did something reckless?",
        "Describe the strangest dream you've ever had",
        "Do you have any secret hobbies no one knows about?",
      ],
      hard: [
        "When was the last time you cried?",
        "What's something you've done that still makes you ashamed?",
        "Tell us about someone you loved but never told",
        "Do you have secrets you could never share?",
        "What do you always hide to avoid judgment?",
      ],
      forCouples: [
        "What do you value most in your partner?",
        "What did your partner do that made you feel loved?",
        "Share the most romantic moment in your relationship",
        "What would you change about your relationship?",
        "Is there something you want to try but are too shy?",
      ],
      family: [
        "What's your funniest family tradition?",
        "What's the weirdest gift you've received from family?",
        "What childhood story still makes you laugh?",
        "What habits have you inherited from your parents?",
        "What was the hardest chore you had as a child?",
      ],
    },
    actions: {
      party: [
        "Dance to a song chosen by another player",
        "Balance on one leg for 30 seconds",
        "Do 10 squats",
        "Sing a verse from a random song",
        "Take a funny selfie and show everyone",
      ],
      hotParty: [
        "Call a friend and say 'I love you'",
        "Give each player a compliment",
        "Read your last SMS out loud",
        "Do 5 push-ups",
        "Jump 10 times while cheering loudly",
      ],
      hard: [
        "Share the weirdest compliment you've received",
        "Act out a superhero with their power",
        "Record a 5-second video sharing your thoughts",
        "Dance like a famous celebrity",
        "Create a costume using available items",
      ],
      forCouples: [
        "Hug your partner for 30 seconds",
        "Walk around the room holding hands",
        "Give your partner a 2-minute shoulder massage",
        "Write and read aloud a love letter",
        "Discover your partner's strange habits",
      ],
      family: [
        "Show your favorite family photo",
        "Write a compliment note to your parents",
        "Sing a childhood song with a relative",
        "Make a funny face for a family photo",
        "Hop on one foot 5 times",
      ],
    },
  },
};
