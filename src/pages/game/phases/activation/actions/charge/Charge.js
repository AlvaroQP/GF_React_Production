import React, { useState } from "react";
import CustomTooltip from "../../../../../../components/ui/tooltip/CustomTooltip";
import CustomStepper from "../../../../../../components/ui/stepper/CustomStepper";
import CustomButton from "../../../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../../../components/ui/divider/CustomDivider";
import {
  ap,
  banner,
  battleHaste,
  blast,
  canticleMegaphone,
  celestialInfantry,
  coherency,
  corrosive,
  counter,
  dangerousTerrain,
  deadly,
  difficultTerrain,
  explode,
  fast,
  fatigue,
  fear,
  fearless,
  flying,
  frenzy,
  furious,
  gloomProtocol,
  grim,
  hero,
  impact,
  inhibitorDrone,
  lance,
  limited,
  magma,
  medicalTraining,
  movementAndCoherency,
  meleeAttacks,
  meleeResolution,
  noRetreat,
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
  shaken,
  shieldWall,
  slayer,
  slow,
  strider,
  strikeBack,
  swift,
  takedown,
  tough,
  veteranInfantry,
  veteranWalker,
  warChant,
  warHymns,
} from "../../../../utilities/tooltip-content/TooltipContent";
import { useGame } from "../../../../../../context/game/GameProvider";
import { useStepper } from "../../../../../../context/stepper/StepperProvider";
import styles from "./Charge.module.css";

export default function Charge({ handleEndActivation }) {
  const { playerA, playerB } = useGame();
  const { handleNext, moveToStep } = useStepper();
  const [isShaken, setIsShaken] = useState(false);

  function handleShakenUnitTrue() {
    setIsShaken(true);
    handleNext();
  }

  function handleShakenUnitFalse() {
    setIsShaken(false);
    handleNext();
  }

  function handleMoveToStep(step) {
    moveToStep(step);
  }

  const steps = [
    {
      title: "Charge",
      content: (
        <>
          <ol>
            <li>
              <p>
                <strong>Check Keywords Before Charging</strong>
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

              {(playerA.army.name === "DAO Union" ||
                playerB.army.name === "DAO Union") && (
                <p>
                  {" "}
                  <strong>DAO Union: </strong>
                  <CustomTooltip keyword={inhibitorDrone} />
                </p>
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
                <strong>Charge (12'')</strong>
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
      title: "Close in",
      content: (
        <ol>
          <li>
            <p>
              <strong>Charging Unit:</strong> Get into base contact or as close
              as possible.
            </p>
          </li>
          <p>
            <li>
              <strong>Defending Unit:</strong> Move up to 3'' to get into base
              contact or as close as possible.
            </li>
          </p>
        </ol>
      ),
    },
    {
      title: "Melee",
      content: (
        <ol>
          <li>
            <strong>Check Keywords Before Attacking</strong>
            <ul>
              <li>
                <p>
                  <CustomTooltip keyword={ap} /> |{" "}
                  <CustomTooltip keyword={blast} /> |{" "}
                  <CustomTooltip keyword={counter} /> |{" "}
                  <CustomTooltip keyword={deadly} /> |{" "}
                  <CustomTooltip keyword={furious} /> |{" "}
                  <CustomTooltip keyword={impact} /> |{" "}
                  <CustomTooltip keyword={lance} /> |{" "}
                  <CustomTooltip keyword={limited} /> |{" "}
                  <CustomTooltip keyword={poison} /> |{" "}
                  <CustomTooltip keyword={reliable} /> |{" "}
                  <CustomTooltip keyword={rending} />
                </p>
              </li>

              {(playerA.army.name === "Alien Hives" ||
                playerB.army.name === "Alien Hives") && (
                <li>
                  <p>
                    <strong>Alien Hives: </strong>
                    <CustomTooltip keyword={corrosive} /> |{" "}
                    <CustomTooltip keyword={takedown} />
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
                    <CustomTooltip keyword={veteranWalker} /> |{" "}
                    <CustomTooltip keyword={warChant} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Blessed Sisters" ||
                playerB.army.name === "Blessed Sisters") && (
                <li>
                  <p>
                    <strong>Blessed Sisters: </strong>
                    <CustomTooltip keyword={celestialInfantry} /> |{" "}
                    <CustomTooltip keyword={frenzy} /> |{" "}
                    <CustomTooltip keyword={protectedBS} /> |{" "}
                    <CustomTooltip keyword={shieldWall} /> |{" "}
                    <CustomTooltip keyword={warHymns} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "DAO Union" ||
                playerB.army.name === "DAO Union") && (
                <li>
                  <p>
                    <strong>DAO Union: </strong>
                    <CustomTooltip keyword={shieldWall} />
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
                    <CustomTooltip keyword={veteranWalker} /> |{" "}
                    <CustomTooltip keyword={warChant} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Dwarf Guilds" ||
                playerB.army.name === "Dwarf Guilds") && (
                <li>
                  <p>
                    <strong>Dwarf Guilds: </strong>
                    <CustomTooltip keyword={magma} /> |{" "}
                    <CustomTooltip keyword={shieldWall} /> |{" "}
                    <CustomTooltip keyword={slayer} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Robot Legions" ||
                playerB.army.name === "Robot Legions") && (
                <li>
                  <p>
                    <strong>Robot Legions: </strong>

                    <CustomTooltip keyword={shieldWall} />
                  </p>
                </li>
              )}
            </ul>
          </li>
          <CustomDivider />
          <li>
            <p>
              <CustomTooltip keyword={fatigue} />/
              <CustomTooltip keyword={shaken} /> unit? 🚩 {""}
              <em>(need 6s to hit)</em>
            </p>
          </li>
          <CustomDivider />
          <li>
            <p>
              <strong>Determine</strong> {""}
              <CustomTooltip keyword={meleeAttacks} />.
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
                <em>(check keywords that modify regeneration).</em>
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
                    <CustomTooltip keyword={regenProtocol} />
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
          <li>
            <p>
              <strong>Charging unit gets</strong>{" "}
              <CustomTooltip keyword={fatigue} />. 🚩
            </p>
          </li>
          <CustomDivider />
          <li>
            <p className={styles["strike-back-p"]}>
              <strong>
                Enemy may choose to <CustomTooltip keyword={strikeBack} />.{" "}
              </strong>{" "}
            </p>
            <ul>
              <li>
                <p>
                  If the enemy strikes back, it gets{" "}
                  <CustomTooltip keyword={fatigue} />. 🚩
                </p>
              </li>
            </ul>
            <CustomDivider />
          </li>
          <li>
            <p>
              <strong>Melee Resolution</strong>
            </p>
            <ol>
              <li>
                <p>
                  <strong>Check:</strong> {""}
                  <CustomTooltip keyword={fear} />.
                </p>
              </li>
              <CustomDivider />
              <li>
                <p>
                  <strong>Check:</strong> {""}
                  <CustomTooltip keyword={meleeResolution} />.
                </p>
              </li>
              <CustomDivider />
              <li>
                <p>
                  <strong>Is the loser</strong> {""}
                  <CustomTooltip keyword={shaken} /> 🚩? {""}
                  <strong>Auto-fails the morale test.</strong>
                </p>

                <div className={styles["buttons-container"]}>
                  <CustomButton
                    text="No"
                    variant="contained"
                    color="primary"
                    onClick={handleShakenUnitFalse}
                  />
                  <CustomButton
                    text="Yes"
                    variant="contained"
                    color="primary"
                    onClick={handleShakenUnitTrue}
                  />
                </div>
              </li>
            </ol>
          </li>
        </ol>
      ),
    },
    {
      title: isShaken ? "Loser Check" : "Melee Morale Test",
      content: isShaken ? (
        <>
          <p>
            <strong>
              Loser unit &lt;= 50% of its starting size or Tough value?{" "}
            </strong>
          </p>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="Yes: Routed (Remove it from play) 💀"
              variant="contained"
              color="error"
              onClick={() => handleMoveToStep(6)}
            />
            <CustomButton
              text="No: Remains Shaken 🚩"
              variant="contained"
              color="success"
              onClick={() => handleMoveToStep(6)}
            />
          </div>
        </>
      ) : (
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
                <strong>Loser takes a Melee Morale Test (Quality).</strong>
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
                  text="Yes"
                  variant="contained"
                  color="primary"
                  onClick={() => handleMoveToStep(6)}
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
          <p>
            <strong>Check keywords:</strong>
          </p>
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
              text="Yes"
              variant="contained"
              color="primary"
              onClick={() => handleMoveToStep(6)}
            />
          </div>
        </>
      ),
    },
    {
      title: "Loser Unit Check",
      content: (
        <>
          <p>
            <strong>
              Loser unit &lt;= 50% of its starting size or Tough value?{" "}
            </strong>
          </p>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="Yes: Routed (Remove it from play) 💀"
              variant="contained"
              color="error"
              onClick={() => handleMoveToStep(6)}
            />
            <CustomButton
              text="No: It is Shaken 🚩"
              variant="contained"
              color="success"
              onClick={() => handleMoveToStep(6)}
            />
          </div>
        </>
      ),
    },
    {
      title: "Any Unit Destroyed?",
      content: (
        <div>
          <strong>
            Any of the two units destroyed (by casualties or routing)?
          </strong>
          <ul>
            <li>
              <p>
                <strong>Yes:</strong> The other may move by up to 3''.
              </p>
            </li>
            <li>
              <p>
                <strong>No:</strong> The charging unit must move back by 1'' (if
                possible).
              </p>
            </li>
          </ul>
        </div>
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
