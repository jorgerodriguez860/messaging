import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MoreInfoDialog({open, selectedMarker, setOpen}) {

    const [participantList, setParticipantList] = useState([])

    const handleClose = () => {
        setOpen(false);
    };

    //UseEffect Hook
    useEffect(() => {
        // console.log('useeffect')
  
        const apiCall = async() => {
  
          await fetch(`/eventparticipants?event_id=${selectedMarker.id}`)
          .then((response) => response.json())
          .then((data) => {
              setParticipantList(data)
            //   console.log(data)
          })
        }

        apiCall()  

    }, [open])
    // console.log('moreinfodialog')
    
    
    return (
        <>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle component={'span'}><h1>{selectedMarker.title}</h1></DialogTitle>
            <DialogContent>
            <DialogContentText component={'span'} variant={'body2'} id="alert-dialog-slide-description">
                <h2>Description:</h2>
                <h3>{selectedMarker.description}</h3>
                

                <h2>Participants:</h2>
                <ul>
                    {participantList.map((participantObj, index) => {
                        return <li key={index}>{participantObj.user_id}</li>
                    })}
                </ul>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default MoreInfoDialog