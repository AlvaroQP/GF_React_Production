import ahImage from "./../assets/images/ty-ah.jpeg";
import bbImage from "./../assets/images/sm-bb.jpeg";
import dbImage from "./../assets/images/da-db.jpg";
import rlImage from "./../assets/images/ne-rl.jpeg";
import bsImage from "./../assets/images/sb-bs.jpeg";
import daImage from "./../assets/images/ta-du.jpeg";
import dgImage from "./../assets/images/lv-dg.jpeg";
import hwImage from "./../assets/images/cs-hw.jpeg";
import armyDefaultImage from "./../assets/images/army-default.jpeg";

export default function GetArmyImage(army) {
  let armyImage;
  if (army === "Alien Hives") {
    armyImage = ahImage;
  } else if (army === "Battle Brothers") {
    armyImage = bbImage;
  } else if (army === "Dark Brothers") {
    armyImage = dbImage;
  } else if (army === "Robot Legions") {
    armyImage = rlImage;
  } else if (army === "Blessed Sisters") {
    armyImage = bsImage;
  } else if (army === "DAO Union") {
    armyImage = daImage;
  } else if (army === "Dwarf Guilds") {
    armyImage = dgImage;
  } else if (army === "Havoc Brothers") {
    armyImage = hwImage;
  } else {
    armyImage = armyDefaultImage;
  }

  return armyImage;
}
