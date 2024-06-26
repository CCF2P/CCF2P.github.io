export let HEROES = [
  {
    "Имя": "Alchemist",
    "Роль героя": "carry",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 2
  },
  {
    "Имя": "Axe",
    "Роль героя": "initiator",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Bristleback",
    "Роль героя": "durable",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Dragon knight",
    "Роль героя": "pusher",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Ogre magi",
    "Роль героя": "support",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Kunkka",
    "Роль героя": "disabler",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 2
  },
  {
    "Имя": "Pudge",
    "Роль героя": "nuker",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 2
  },
  {
    "Имя": "Earth spirit",
    "Роль героя": "escape",
    "Основной атрибут": "Сила",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 3
  },
  {
    "Имя": "Anti magi",
    "Роль героя": "carry",
    "Основной атрибут": "Ловкость",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Bloodseaker",
    "Роль героя": "disabler",
    "Основной атрибут": "Ловкость",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Clinkz",
    "Роль героя": "pusher",
    "Основной атрибут": "ловкость",
    "Тип атаки": "Дальний бой",
    "Сложность героя": 2
  },
  {
    "Имя": "Juggernaut",
    "Роль героя": "initiator",
    "Основной атрибут": "Ловкость",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Meepo",
    "Роль героя": "carry",
    "Основной атрибут": "Ловкость",
    "Тип атаки": "Ближний бой",
    "Сложность героя": 3
  },
  {
    "Имя": "Jakiro",
    "Роль героя": "support",
    "Основной атрибут": "интеллект",
    "Тип атаки": "Дальний бой",
    "Сложность героя": 1
  },
  {
    "Имя": "Lion",
    "Роль героя": "support",
    "Основной атрибут": "интеллект",
    "Тип атаки": "Дальний бой",
    "Сложность героя": 2
  },
  {
    "Имя": "Puck",
    "Роль героя": "carry",
    "Основной атрибут": "универсальный",
    "Тип атаки": "Дальний бой",
    "Сложность героя": 2
  },
  {
    "Имя": "Invoker",
    "Роль героя": "carry",
    "Основной атрибут": "Интеллект",
    "Тип атаки": "Дальний бой",
    "Сложность героя": 3
  }
]

export let PROPERTIES = [
  {
    "Name": "Роль героя",
    "Type": "String",
    "PossibleValue": [
      "carry",
      "initiator",
      "durable",
      "pusher"
    ]
  },
  {
    "Name": "Основной атрибут",
    "Type": "String",
    "PossibleValue": [
      "сила",
      "ловкость",
      "интеллект",
      "универсальный"
    ]
  },
  {
    "Name": "Тип атаки",
    "Type": "String",
    "PossibleValue": [
      "Дальний бой",
      "Ближний бой"
    ]
  },
  {
    "Name": "Сложность героя",
    "Type": "Integer",
    "PossibleValue": [1, 2, 3]
  }
]