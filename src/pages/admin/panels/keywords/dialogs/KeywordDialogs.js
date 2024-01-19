import CustomDialog from "../../../../../components/ui/dialog/CustomDialog";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeywordForm from "../form/KeywordForm";

export default function KeywordDialogs({
  openDialogs,
  handleCloseDialog,
  keywordDetails,
  handleDeleteKeyword,
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
        open={openDialogs["newKeyword"]}
        onClose={() => handleCloseDialog("newKeyword")}
      >
        {closeButton("newKeyword")}
        <DialogContent>
          <KeywordForm handleClose={() => handleCloseDialog("newKeyword")} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDialogs["editKeyword"]}
        onClose={() => handleCloseDialog("editKeyword")}
      >
        {closeButton("editKeyword")}
        <DialogContent>
          <KeywordForm
            id={keywordDetails.id}
            handleClose={() => handleCloseDialog("editKeyword")}
          />
        </DialogContent>
      </Dialog>

      <CustomDialog
        open={openDialogs["deleteKeyword"]}
        handleClose={() => handleCloseDialog("deleteKeyword")}
        title="Delete Keyword"
        description={`Are you sure you want to delete '${keywordDetails.name}'?`}
        acceptText="Delete"
        cancelText="Cancel"
        acceptAction={handleDeleteKeyword}
      />
    </>
  );
}
