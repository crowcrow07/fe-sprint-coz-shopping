import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionsModal({
  imgSelector,
  titleSelector,
  onClickBookMark,
  isBookMarked,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="absolute m-2 cursor-pointer">
      <OpenWithIcon
        onClick={handleOpen}
        sx={{ color: "white", fontSize: 40, opacity: 0.5 }}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CloseIcon
              className="absolute top-5 right-5 cursor-pointer"
              sx={{ color: "white", fontSize: 40 }}
              onClick={handleClose}
            />
            <div className="flex items-center absolute bottom-5 left-5 text-white text-2xl cursor-default font-bold">
              {titleSelector}

              <StarIcon
                onClick={() => {
                  onClickBookMark();
                }}
                className="drop-shadow-lg cursor-pointer"
                sx={{
                  color: isBookMarked ? "#FFD361" : "#DFDFDF",
                  fontSize: 40,
                }}
              />
            </div>

            <img
              className="p-0 w-full h-full rounded-2xl"
              src={imgSelector}
              alt="이미지"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 744,
  height: 480,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: 0,
  borderRadius: 10,
};
