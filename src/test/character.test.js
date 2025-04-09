import Character from '../characters';

test('checking the length of the name', () => {
  expect(() => new Character('a', 'Bowman')).toThrow(new Error('Ошибка'));
});

test('check Character no name', () => {
  expect(() => new Character('Player', 'Hero')).toThrow(new Error('Ошибка'));
});

test('should levelUp the defence', () => {
  const character = new Character('Player', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
  character.damage(1000)
  expect(function() {
    character.levelUp()
  }).toThrow(new Error("Нельзя повысить уровень умершего"));
});

test('should points damage the health', () => {
  const character = new Character('Player', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
  character.damage(1000)
  expect(function() {
    character.damage()
  }).toThrow(new Error("Нельзя наносить вред умершему"));
});
