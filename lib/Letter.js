const alphanums = "abcdefghijklmnopqrstuvwxyz1234567890";

function isAlphanums(char)
{
    return alphanums.indexOf(char.toLowerCase()) >= 0;
}

class Letter {
  constructor(char)
  {
      this.char = char;
      this.visible = !(isAlphanums(char));
  }

  toString()
  {
      return this.visible ? this.char : "_";
  }

  guess(char)
  {
      return char.toLowerCase() === this.char.toLowerCase();
  }

  getSolution()
  {
      return this.char.toLowerCase();
  }
}

module.exports = Letter;
