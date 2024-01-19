import CustomDialog from "../../../../../components/ui/dialog/CustomDialog";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SpellForm from "../form/SpellForm";

export default function SpellDialogs({
  openDialogs,
  handleCloseDialog,
  spellDetails,
  handleDeleteSpell,
}) {
  function closeButton(dialog) {
    return (
      <IconButton
        edge="end"
        color="inherit"
        sx={{ position: "absolute", right: "20px", top: "10px" }}
        onClick={() => handleCloseDialog(dialog)}
      >
        <CloseIcon />
      </IconButton>
    );
  }

  return (
    <>
      <Dialog
        open={openDialogs["newSpell"]}
        onClose={() => handleCloseDialog("newSpell")}
      >
        {closeButton("newSpell")}
        <DialogContent>
          <SpellForm handleClose={() => handleCloseDialog("newSpell")} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDialogs["editSpell"]}
        onClose={() => handleCloseDialog("editSpell")}
      >
        {closeButton("editSpell")}
        <DialogContent>
          <SpellForm
            id={spellDetails.id}
            handleClose={() => handleCloseDialog("editSpell")}
          />
        </DialogContent>
      </Dialog>

      <CustomDialog
        open={openDialogs["deleteSpell"]}
        handleClose={() => handleCloseDialog("deleteSpell")}
        title="Delete Spell"
        description={`Are you sure you want to delete '${spellDetails.name}'?`}
        acceptText="Delete"
        cancelText="Cancel"
        acceptAction={handleDeleteSpell}
      />
    </>
  );
}
