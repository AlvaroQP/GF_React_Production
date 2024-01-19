import { useEffect } from "react";
import ArmyCard from "../../../components/ui/card/ArmyCard";
import { useArmies } from "../../../context/armies/ArmyProvider";
import GetArmyImage from "../../../utils/GetArmyImage";
import styles from "./Armies.module.css";

export default function Armies() {
  const { armies } = useArmies();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles["armies-container"]}>
        {armies.map((army) => {
          return (
            <ArmyCard
              key={army.id}
              id={army.id}
              armyName={army.name}
              armyImage={GetArmyImage(army.name)}
              armyDescription={army.description}
              className={styles["army-card"]}
            />
          );
        })}
      </div>
    </>
  );
}
