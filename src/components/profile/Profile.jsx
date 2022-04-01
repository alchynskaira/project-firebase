import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {Button} from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Modal from "../modal/Modal";
import {db} from "../helpers/firebase/firebaseConfig";
import {useAlertContext} from "../helpers/alertContextProvider";
import AlertMessage from "../helpers/alert/AlertMessage";


const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: "32px auto",
            height: "500px"
        },
        bcgImage: {
            opacity: "0.10",
            zIndex: "0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "centre",
            width: "100%",

        },
        content: {
            backgroundImage: "url(https://picsum.photos/600/900)",
            width:"100%",
            color: "white",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
        data: {
            zIndex: "2",
            color: "darkgray",
            fontSize: "18px",
            fontWeight: "500",
        },
        headerBox: {
            display: "flex",

        },
        title: {
         fontSize: "20px",
         fontWeight: "600",
            color: "#363636",
            marginBottom: "20px",
        },
        profileButton:{
            margin: 'auto',
            marginTop: "40px",
            backgroundColor:"#1976d2",
            width: "200px",
            height: "50px",
            fontWeight:"500",
            fontSize: "16px",
            color: "white",
            '&:hover': {
                backgroundColor: "rgb(22, 106, 197)",
            }
        },
        icons: {
            color: "darkgray",
        },
        cardContent: {
            marginBottom: '30px',
            textAlign: "center",
        },
        avatar: {
            margin: "0",
            width: "120px",
            height: "120px"
        },
        cardHeader: {
            width: "120px",
            height: "120px"
        }
    })
);

export default function UserCard() {
    const classes = useStyles();
    const { showAlert } = useAlertContext();
    const [user, setUser] = useState({});
    const [modalOpen, setModalOpen] = useState(false);


    const getUserData = () => {

    const userData = JSON.parse(localStorage.getItem( "userData"));

    db.collection('user').doc(userData.uid).get().then(snapshot => {
            const userData = snapshot.data();
            const date = userData.birthday.toDate();
            userData.birthday = ("0" + date.getDate()).slice(-2) + "." +
                ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();

            setUser(userData);
        }
    ).catch((error) => {
        showAlert('error', 'Something went wrong, cannot get current user!');
        console.error("Error adding document: ", error);
    });
}

    useEffect(() => {
        getUserData();
    }, [])


    const onModalClose = () => {
        getUserData();
        setModalOpen(false);
    }

    return (

        <div>
            <AlertMessage/>
            { modalOpen && <Modal onClose={onModalClose}/> }
                    <Card className={classes.card} sx={{maxWidth: 600, maxHeight: 800}} key={user?.id}>
                        <div className={classes.content}>
                        <CardHeader className={classes.cardHeader}
                            avatar={
                                <Avatar
                                    className={classes.avatar}
                                    alt="Remy Sharp"
                                    src={user?.avatar}
                                    sx={{width: 120, height: 120}}
                                />
                            }
                        />
                            <CardContent  className={classes.cardContent}>
                                <Typography variant="body2" color="text.secondary" className={classes.title}>
                                   Name: {user?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={classes.title}>
                                    Profession: {user?.profession}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={classes.title}>
                                    Date of birth: {user?.birthday}
                                </Typography>
                            </CardContent>
                        </div>
                        <CardActions disableSpacing>
                            <Button  variant="contained" size="large" className={classes.profileButton}  onClick={() => setModalOpen(true)}>
                                Update user
                            </Button>
                        </CardActions>
                    </Card>

        </div>

    )

}