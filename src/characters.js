import benePerson from "./assets/bene.png";
import beneName from "./assets/beneName.png";
import dijalmaPerson from "./assets/dijalma.png";
import dijalmaName from "./assets/dijalmaName.png";
import kauanPerson from "./assets/kauan.png";
import kauanName from "./assets/kauanName.png";
import wallacePerson from "./assets/wallace.png";
import wallaceName from "./assets/wallaceName.png";
import lucasPerson from "./assets/lucas.png";
import lucasName from "./assets/lucasName.png";

const charactersArray = [
  {
    name: "bene",
    person: benePerson,
    risk: beneName,
  },
  {
    name: "dijalma",
    person: dijalmaPerson,
    risk: dijalmaName,
  },
  {
    name: "wallace",
    person: wallacePerson,
    risk: wallaceName,
  },
  {
    name: "kauan",
    person: kauanPerson,
    risk: kauanName,
  },
  {
    name: "lucas",
    person: lucasPerson,
    risk: lucasName,
  },
];

const characters = {
  bene: {
    name: "bene",
    person: benePerson,
    risk: beneName,
  },
  dijalma: {
    name: "dijalma",
    person: dijalmaPerson,
    risk: dijalmaName,
  },
  wallace: {
    name: "wallace",
    person: wallacePerson,
    risk: wallaceName,
  },
  kauan: {
    name: "kauan",
    person: kauanPerson,
    risk: kauanName,
  },
  lucas: {
    name: "lucas",
    person: lucasPerson,
    risk: lucasName,
  },
};

export { charactersArray, characters };
