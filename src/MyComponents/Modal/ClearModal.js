import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #D1D5DB',
  boxShadow: 24,
  p: 4,
};

export default function ClearModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="pl-2">
       <Button onClick={handleOpen} className="action !border-gray-300 hover:!border-black !text-gray-600 !border-solid !border-2 ml-4 primary !px-3 hover:!text-white hover:!bg-black !font-semibold !text-sm">Clear</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          aria-buttonsby="modal-modal-content"
          BackdropProps={{
            sx: {
              backgroundColor: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(10.7px)'
            },
          }}
        >
        <Box sx={style} className="rounded-md">
          <Typography className="!font-semibold" id="modal-modal-title" variant="h6" component="h2">
            Clear
          </Typography>
          <Typography className="pb-4 text-gray-500" id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure to clear all the selected options?
          </Typography>
          <Typography id="modal-modal-content" className="flex justify-end">
            <Button onClick={handleClose} className="border-black ml-4 !px-3 !text-white !bg-black !font-semibold !min-w-20" >OK</Button>
            <Button onClick={handleClose} className="!text-black !ml-2 !font-semibold !border-gray-300 !border-2 !border-solid !min-w-20" >CANCEL</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}