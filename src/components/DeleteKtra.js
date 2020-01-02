import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
// import FavouriteBorder from "@material-ui/icons/FavoriteBorder";
// import FavouriteIcon from "@material-ui/icons/Favorite";
import { style } from "../helpers/MuiStyleCss";
import MyBtn from "../helpers/MuiBtn";
import { useDispatch } from "react-redux";
import { deleteKtra } from "../redux/actions/DataActions";

const useStyles = makeStyles({
    deleteButton:{
        top: '5%',
        right: 0,
        position: 'absolute'
    }
});
export default function DeleteKtra({ktraId}) {
    const classes = useStyles();
    let dispatch = useDispatch();
    const [state, setState] = useState({open:false})
    const handleOpen = () =>{
        setState({
            ...state,
            open:true
        })
    }
    const handleClose = () =>{
        setState({
            ...state,
            open:false
        })
    }
    const ktraDelete = () =>{
        dispatch(deleteKtra(ktraId))
        setState({
            ...state,
            open:false
        })
    }
    return (
        <div>
            <MyBtn title="Delete Ktra"
            placement="top"
            btnClass={classes.deleteButton}
            onClick={handleOpen}
            child={<DeleteOutline color="secondary"/>}/>
            <Dialog 
            open={state.open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            >
                <DialogTitle>
                    Are You sure You Really Want to Delete ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={ktraDelete} color="inherit">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
