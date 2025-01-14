import benePerson from "./assets/bene.png";
import beneRelato from "./assets/beneRelato.png";
import beneName from "./assets/beneName.png";
import dijalmaPerson from "./assets/dijalma.png";
import dijalmaRelato from "./assets/dijalmaRelato.png";
import dijalmaName from "./assets/dijalmaName.png";
import kauanPerson from "./assets/kauan.png";
import kauanName from "./assets/kauanName.png";
import kauanRelato from "./assets/kauanRelato.png";
import wallacePerson from "./assets/wallace.png";
import wallaceRelato from "./assets/wallaceRelato.png";
import wallaceName from "./assets/wallaceName.png";
import lucasPerson from "./assets/lucas.png";
import lucasRelato from "./assets/lucasRelato.png";
import lucasName from "./assets/lucasName.png";

const charactersArray = [
  {
    name: "bene",
    person: benePerson,
    description: beneRelato,
    risk: beneName,
  },
  {
    name: "dijalma",
    person: dijalmaPerson,
    description: dijalmaRelato,
    risk: dijalmaName,
  },
  {
    name: "wallace",
    person: wallacePerson,
    description: wallaceRelato,
    risk: wallaceName,
  },
  {
    name: "kauan",
    person: kauanPerson,
    description: kauanRelato,
    risk: kauanName,
  },
  {
    name: "lucas",
    person: lucasPerson,
    description: lucasRelato,
    risk: lucasName,
  },
];

const characters = {
  bene: {
    name: "bene",
    description: beneRelato,
    person: benePerson,
    risk: beneName,
  },
  dijalma: {
    name: "dijalma",
    description: dijalmaRelato,
    person: dijalmaPerson,
    risk: dijalmaName,
  },
  wallace: {
    name: "wallace",
    description: wallaceRelato,
    person: wallacePerson,
    risk: wallaceName,
  },
  kauan: {
    name: "kauan",
    description: kauanRelato,
    person: kauanPerson,
    risk: kauanName,
  },
  lucas: {
    name: "lucas",
    description: lucasRelato,
    person: lucasPerson,
    risk: lucasName,
  },
};

export { charactersArray, characters };
