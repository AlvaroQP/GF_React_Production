import React from "react";
import CustomTooltip from "../../../../../../components/ui/tooltip/CustomTooltip";
import CustomStepper from "../../../../../../components/ui/stepper/CustomStepper";
import CustomButton from "../../../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../../../components/ui/divider/CustomDivider";
import {
  acceleratorDrone,
  ap,
  banner,
  battleHaste,
  battleLore,
  beam,
  blast,
  blindFaith,
  canticleMegaphone,
  celestialInfantry,
  coherency,
  cover,
  dangerousTerrain,
  deadly,
  devout,
  difficultTerrain,
  entrenched,
  explode,
  fast,
  fearless,
  flux,
  flying,
  gloomProtocol,
  goodShot,
  grim,
  hero,
  highlyDevout,
  magma,
  medicalTraining,
  movementAndCoherency,
  multipleRangedWeapons,
  noRetreat,
  indirect,
  limited,
  lockOn,
  protectedBS,
  poison,
  psyBarrier,
  reanimator,
  regeneration,
  regenProtocol,
  reliable,
  rending,
  resistance,
  robot,
  rollToBlock,
  rollToHit,
  royalMarch,
  royalMarchOrder,
  selfRepair,
  shaken,
  shieldDrone,
  shieldWall,
  shootingAndSpellsMoraleTest,
  shootingAtAircraft,
  slow,
  sniper,
  spectrumScanner,
  spiritualGuidance,
  spores,
  spottingLaser,
  stealth,
  stealthDrone,
  strider,
  swift,
  tough,
  veteranInfantry,
  veteranWalker,
  volleyFire,
} from "../../../../utilities/tooltip-content/TooltipContent";
import { useGame } from "../../../../../../context/game/GameProvider";
import { useStepper } from "../../../../../../context/stepper/StepperProvider";
import styles from "./Advance.module.css";

export default function Advance({ handleEndActivation }) {
  const { playerA, playerB } = useGame();
  const { handleNext } = useStepper();

  const steps = [
    {
      title: "Advance",
      content: (
        <>
          <ol>
            <li>
              <p>
                <strong>Check Keywords Before Advancing</strong>
              </p>
            </li>

            <ul>
              <li>
                <p>
                  <CustomTooltip keyword={fast} /> |{" "}
                  <CustomTooltip keyword={slow} /> |{" "}
                  <CustomTooltip keyword={strider} /> |{" "}
                  <CustomTooltip keyword={flying} />
                </p>
              </li>

              {(playerA.army.name === "Alien Hives" ||
                playerB.army.name === "Alien Hives") && (
                <li>
                  <p>
                    {" "}
                    <strong>Alien Hives: </strong>
                    <CustomTooltip keyword={explode} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Dwarf Guilds" ||
                playerB.army.name === "Dwarf Guilds") && (
                <li>
                  <p>
                    {" "}
                    <strong>Dwarf Guilds: </strong>
                    <CustomTooltip keyword={battleHaste} /> |{" "}
                    <CustomTooltip keyword={swift} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Robot Legions" ||
                playerB.army.name === "Robot Legions") && (
                <li>
                  <p>
                    {" "}
                    <strong>Robot Legions: </strong>
                    <CustomTooltip keyword={royalMarch} /> |{" "}
                    <CustomTooltip keyword={royalMarchOrder} />
                  </p>
                </li>
              )}
            </ul>

            <CustomDivider />

            <li>
              <p>
                <strong>Check Terrain: </strong>
                <CustomTooltip keyword={dangerousTerrain} /> |{" "}
                <CustomTooltip keyword={difficultTerrain} />
              </p>
            </li>
            <CustomDivider />

            <li>
              <p>
                <strong>Advance (6'')</strong>
                <span className={styles["movement-and-coherency"]}>
                  [
                  <CustomTooltip keyword={movementAndCoherency} />]
                </span>
              </p>
            </li>
            <CustomDivider />
          </ol>
        </>
      ),
    },
    {
      title: "Shoot?",
      content: (
        <>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="Yes"
              variant="contained"
              color="primary"
              onClick={handleNext}
            />
            <CustomButton
              text="No: End Activation"
              variant="contained"
              color="primary"
              onClick={handleEndActivation}
            />
          </div>
        </>
      ),
    },
    {
      title: "Check Range and Line of Sight",
      content: (
        <>
          <p>
            <strong>In Range</strong> + (<strong>Line of Sight</strong> ||{" "}
            <CustomTooltip keyword={indirect} />)<strong> ?</strong>
            <span className={styles["remember-aircraft"]}>
              [Remember: <CustomTooltip keyword={shootingAtAircraft} />]
            </span>
          </p>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="Yes"
              variant="contained"
              color="primary"
              onClick={handleNext}
            />
            <CustomButton
              text="No: End Activation"
              variant="contained"
              color="primary"
              onClick={handleEndActivation}
            />
          </div>
        </>
      ),
    },
    {
      title: "Shoot",
      content: (
        <ol>
          <li>
            <strong>Check Keywords Before Shooting</strong>
            <ul>
              <li>
                <p>
                  <strong>Enemy:</strong>{" "}
                  <CustomTooltip keyword={shootingAtAircraft} /> |{" "}
                  <CustomTooltip keyword={entrenched} /> |{" "}
                  <CustomTooltip keyword={stealth} />
                </p>
              </li>

              <li>
                <p>
                  <strong>Shooter: </strong>
                  <CustomTooltip keyword={ap} /> |{" "}
                  <CustomTooltip keyword={blast} /> |{" "}
                  <CustomTooltip keyword={deadly} /> |{" "}
                  <CustomTooltip keyword={indirect} /> |{" "}
                  <CustomTooltip keyword={limited} /> |{" "}
                  <CustomTooltip keyword={lockOn} /> |{" "}
                  <CustomTooltip keyword={poison} /> |{" "}
                  <CustomTooltip keyword={reliable} /> |{" "}
                  <CustomTooltip keyword={rending} /> |{" "}
                  <CustomTooltip keyword={sniper} />
                </p>
              </li>

              {(playerA.army.name === "Alien Hives" ||
                playerB.army.name === "Alien Hives") && (
                <li>
                  <p>
                    <strong>Alien Hives: </strong>
                    <CustomTooltip keyword={spores} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Battle Brothers" ||
                playerB.army.name === "Battle Brothers") && (
                <li>
                  <p>
                    <strong>Battle Brothers: </strong>
                    <CustomTooltip keyword={shieldWall} /> |{" "}
                    <CustomTooltip keyword={veteranInfantry} /> |{" "}
                    <CustomTooltip keyword={veteranWalker} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Blessed Sisters" ||
                playerB.army.name === "Blessed Sisters") && (
                <li>
                  <p>
                    <strong>Blessed Sisters: </strong>
                    <CustomTooltip keyword={blindFaith} /> |{" "}
                    <CustomTooltip keyword={celestialInfantry} /> |{" "}
                    <CustomTooltip keyword={devout} /> |{" "}
                    <CustomTooltip keyword={highlyDevout} /> |{" "}
                    <CustomTooltip keyword={protectedBS} /> |{" "}
                    <CustomTooltip keyword={shieldWall} /> |{" "}
                    <CustomTooltip keyword={spiritualGuidance} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "DAO Union" ||
                playerB.army.name === "DAO Union") && (
                <li>
                  <p>
                    <strong>DAO Union: </strong>
                    <CustomTooltip keyword={acceleratorDrone} /> |{" "}
                    <CustomTooltip keyword={goodShot} /> |{" "}
                    <CustomTooltip keyword={shieldDrone} /> |{" "}
                    <CustomTooltip keyword={shieldWall} /> |{" "}
                    <CustomTooltip keyword={spottingLaser} /> |{" "}
                    <CustomTooltip keyword={stealthDrone} /> |{" "}
                    <CustomTooltip keyword={volleyFire} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Dark Brothers" ||
                playerB.army.name === "Dark Brothers") && (
                <li>
                  <p>
                    <strong>Dark Brothers: </strong>
                    <CustomTooltip keyword={shieldWall} /> |{" "}
                    <CustomTooltip keyword={veteranInfantry} /> |{" "}
                    <CustomTooltip keyword={veteranWalker} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Dwarf Guilds" ||
                playerB.army.name === "Dwarf Guilds") && (
                <li>
                  <p>
                    <strong>Dwarf Guilds: </strong>
                    <CustomTooltip keyword={battleLore} /> |{" "}
                    <CustomTooltip keyword={beam} /> |{" "}
                    <CustomTooltip keyword={magma} /> |{" "}
                    <CustomTooltip keyword={shieldWall} /> |{" "}
                    <CustomTooltip keyword={spectrumScanner} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Robot Legions" ||
                playerB.army.name === "Robot Legions") && (
                <li>
                  <p>
                    <strong>Robot Legions: </strong>
                    <CustomTooltip keyword={flux} /> |{" "}
                    <CustomTooltip keyword={shieldWall} />
                  </p>
                </li>
              )}
            </ul>
          </li>
          <CustomDivider />
          <li>
            <p>
              <strong>Determine Attacks</strong>
              <span className={styles["multiple-ranged-weapons"]}>
                [
                <CustomTooltip keyword={multipleRangedWeapons} />
                ?]
              </span>
            </p>
          </li>
          <CustomDivider />
          <li>
            <p>
              <CustomTooltip keyword={rollToHit} /> {""}
              <em>(check keywords for modifiers).</em>
            </p>
          </li>
          <CustomDivider />
          <li>
            <p>
              <strong>
                Enemy in <CustomTooltip keyword={cover} />?
              </strong>{" "}
              <em>(check keywords that ignore cover).</em>
            </p>
          </li>
          <CustomDivider />
          <li>
            <p>
              <CustomTooltip keyword={rollToBlock} />{" "}
              <em>(check keywords for modifiers).</em>
            </p>
          </li>
          <CustomDivider />
          <li>
            <p>
              <strong>Ignore Wounds</strong>
            </p>
            <ul>
              <li>
                <CustomTooltip keyword={regeneration} />{" "}
                <em>(check keywords that ignore regeneration).</em>
              </li>

              {(playerA.army.name === "Alien Hives" ||
                playerB.army.name === "Alien Hives") && (
                <li>
                  <p>
                    <strong>Alien Hives: </strong>
                    <CustomTooltip keyword={psyBarrier} /> |{" "}
                    <CustomTooltip keyword={resistance} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Battle Brothers" ||
                playerB.army.name === "Battle Brothers") && (
                <li>
                  <p>
                    <strong>Battle Brothers: </strong>
                    <CustomTooltip keyword={medicalTraining} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Blessed Sisters" ||
                playerB.army.name === "Blessed Sisters") && (
                <li>
                  <p>
                    <strong>Blessed Sisters: </strong>
                    <CustomTooltip keyword={medicalTraining} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Dark Brothers" ||
                playerB.army.name === "Dark Brothers") && (
                <li>
                  <p>
                    <strong>Dark Brothers: </strong>
                    <CustomTooltip keyword={medicalTraining} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Dwarf Guilds" ||
                playerB.army.name === "Dwarf Guilds") && (
                <li>
                  <p>
                    <strong>Dwarf Guilds: </strong>
                    <CustomTooltip keyword={medicalTraining} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Robot Legions" ||
                playerB.army.name === "Robot Legions") && (
                <li>
                  <p>
                    <strong>Robot Legions: </strong>
                    <CustomTooltip keyword={gloomProtocol} /> |{" "}
                    <CustomTooltip keyword={reanimator} /> |{" "}
                    <CustomTooltip keyword={regenProtocol} /> |{" "}
                    <CustomTooltip keyword={selfRepair} />
                  </p>
                </li>
              )}
            </ul>
          </li>

          <CustomDivider />
          <li>
            <strong>Remove Casualties</strong>{" "}
            <em>
              (keep <CustomTooltip keyword={coherency} />
              ).
            </em>
            <ul>
              <li>
                <p>
                  <CustomTooltip keyword={tough} />
                </p>
              </li>
            </ul>
          </li>
          <CustomDivider />
        </ol>
      ),
    },
    {
      title: "Enemy Unit Check",
      content: (
        <>
          <p>
            <strong>
              Enemy unit &lt;= 50% of its starting size or Tough value?{" "}
            </strong>
          </p>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="Yes"
              variant="contained"
              color="primary"
              onClick={handleNext}
            />
            <CustomButton
              text="No: End Activation"
              variant="contained"
              color="primary"
              onClick={handleEndActivation}
            />
          </div>
        </>
      ),
    },
    {
      title: "Enemy Shaken?",
      content: (
        <>
          <p>
            Is the enemy unit <CustomTooltip keyword={shaken} /> 🚩? {""}
            <strong>Auto-fails the morale test (remains shaken).</strong>
          </p>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="No"
              variant="contained"
              color="primary"
              onClick={handleNext}
            />
            <CustomButton
              text="Yes: End Activation"
              variant="contained"
              color="primary"
              onClick={handleEndActivation}
            />
          </div>
        </>
      ),
    },
    {
      title: "Morale Test",
      content: (
        <>
          <ol>
            <li>
              <div>
                <strong>Check Keywords: </strong>
                <ul>
                  <li>
                    <p>
                      <CustomTooltip keyword={hero} />
                      {(playerA.army.name === "Alien Hives" ||
                        playerB.army.name === "Alien Hives") && (
                        <>
                          <strong> | Alien Hives: </strong>
                          <CustomTooltip keyword={explode} />
                        </>
                      )}

                      {(playerA.army.name === "Battle Brothers" ||
                        playerB.army.name === "Battle Brothers") && (
                        <>
                          <strong> | Battle Brothers: </strong>
                          <CustomTooltip keyword={banner} />
                        </>
                      )}

                      {(playerA.army.name === "Blessed Sisters" ||
                        playerB.army.name === "Blessed Sisters") && (
                        <>
                          <strong> | Blessed Sisters: </strong>
                          <CustomTooltip keyword={canticleMegaphone} />
                        </>
                      )}

                      {(playerA.army.name === "Dark Brothers" ||
                        playerB.army.name === "Dark Brothers") && (
                        <>
                          <strong> | Dark Brothers: </strong>
                          <CustomTooltip keyword={banner} />
                        </>
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <CustomDivider />
            <li>
              <p>
                <strong>
                  Enemy unit takes a{" "}
                  <CustomTooltip keyword={shootingAndSpellsMoraleTest} />.{" "}
                </strong>
              </p>
            </li>

            <CustomDivider />
            <li>
              <p>
                <strong>Did the unit pass the test?</strong>
              </p>

              <div className={styles["buttons-container"]}>
                <CustomButton
                  text="No"
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                />
                <CustomButton
                  text="Yes: End Activation"
                  variant="contained"
                  color="primary"
                  onClick={handleEndActivation}
                />
              </div>
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "After Failed Morale Test",
      content: (
        <>
          <p>Check for any of the following keywords.</p>
          <ul>
            <li>
              <p>
                <CustomTooltip keyword={fearless} /> success?
                {(playerA.army.name === "Alien Hives" ||
                  playerB.army.name === "Alien Hives") && (
                  <>
                    <strong> | Alien Hives: </strong>
                    <CustomTooltip keyword={noRetreat} />
                  </>
                )}
                {(playerA.army.name === "Robot Legions" ||
                  playerB.army.name === "Robot Legions") && (
                  <>
                    <strong> | Robot Legions: </strong>
                    <CustomTooltip keyword={robot} />
                  </>
                )}
                {(playerA.army.name === "Dark Brothers" ||
                  playerB.army.name === "Dark Brothers") && (
                  <>
                    <strong> | Dark Brothers: </strong>
                    <CustomTooltip keyword={grim} />
                  </>
                )}
              </p>
            </li>
          </ul>

          <CustomDivider />
          <p>
            <strong>Did the unit pass the test?</strong>
          </p>

          <div className={styles["buttons-container"]}>
            <CustomButton
              text="No"
              variant="contained"
              color="primary"
              onClick={handleNext}
            />
            <CustomButton
              text="Yes: End Activation"
              variant="contained"
              color="primary"
              onClick={handleEndActivation}
            />
          </div>
        </>
      ),
    },
    {
      title: "Shaken",
      content: (
        <p>
          <strong>
            Unit becomes <CustomTooltip keyword={shaken} /> 🚩
          </strong>
        </p>
      ),
    },
  ];

  const completedMessage = (
    <CustomButton
      text="End Activation"
      variant="contained"
      onClick={handleEndActivation}
    />
  );

  return <CustomStepper steps={steps} completedMessage={completedMessage} />;
}
