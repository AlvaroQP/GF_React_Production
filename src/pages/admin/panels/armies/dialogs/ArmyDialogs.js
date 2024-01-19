import CustomDialog from "../../../../../components/ui/dialog/CustomDialog";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArmyForm from "../form/ArmyForm";

export default function ArmyDialogs({
  openDialogs,
  handleCloseDialog,
  armyDetails,
  handleDeleteArmy,
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
        open={openDialogs["newArmy"]}
        onClose={() => handleCloseDialog("newArmy")}
      >
        {closeButton("newArmy")}
        <DialogContent>
          <ArmyForm handleClose={() => handleCloseDialog("newArmy")} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDialogs["editArmy"]}
        onClose={() => handleCloseDialog("editArmy")}
      >
        {closeButton("editArmy")}
        <DialogContent>
          <ArmyForm
            id={armyDetails.id}
            handleClose={() => handleCloseDialog("editArmy")}
          />
        </DialogContent>
      </Dialog>

      <CustomDialog
        open={openDialogs["deleteArmy"]}
        handleClose={() => handleCloseDialog("deleteArmy")}
        title="Delete Army"
        description={`Are you sure you want to delete '${armyDetails.name}'?`}
        acceptText="Delete"
        cancelText="Cancel"
        acceptAction={handleDeleteArmy}
      />
    </>
  );
}
