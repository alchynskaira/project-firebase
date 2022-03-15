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



const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
             margin: "32px auto",
        },
        bcgImage: {
            opacity: "0.10",
            zIndex: "0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "centre",
           height:"100%",

        },
        content: {
            backgroundImage: "url(https://picsum.photos/500/194)",
            width:"100%",
           marginBottom:"15px",
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
         fontSize: "18px",
         fontWeight: "500",
            color: "white",
        },
        profileButton:{
            marginLeft: '90px',
            backgroundColor:"white",

        },
        icons: {
            color: "darkgray",

        }
    })
);

export default function UserCard() {
    const classes = useStyles();
    const [user, setUser] = useState({});
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem( "userData"));
        console.log(userData)
     db.collection('user').doc(userData.uid).get().then(snapshot => {
             console.log(snapshot.data(), "data")
         setUser(snapshot.data())
     }

        )

    // const unsubscribe =
    //     db.collection("user").onSnapshot(el => {
    //          el.docs.forEach(doc => {
    //             setUser(doc.data());
    //             console.log(doc.data(), user.id);
    //
    //         })
    //     })
        //return () => unsubscribe();
    }, [])


    console.log(user, "user");

    return (
        <div>
            {/*{ modalOpen && <Modal onClose={setModalOpen}/>}*/}

                    <Card className={classes.card} sx={{maxWidth: 400, maxHeight: 800}} key={user?.id}>
                        <div className={classes.content}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    className="avatar"
                                    alt="Remy Sharp"
                                    src={user?.avatar}
                                    sx={{width: 68, height: 68}}
                                />
                            }
                        />
                            <CardContent >
                                <Typography variant="body2" color="text.secondary" className={classes.title}>
                                    {user?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={classes.title}>
                                    Profession: {user?.profession}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={classes.title}>
                                    Birthday: {user?.birthday}
                                </Typography>
                            </CardContent>
                        </div>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" className={classes.icons}>
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton aria-label="mailto:email@email.com" className={classes.icons}>
                                <EmailIcon/>
                            </IconButton>
                            <Button variant="contained" size="small" className={classes.profileButton} onClick={() => setModalOpen(true)}>
                                Update user
                            </Button>
                        </CardActions>
                    </Card>

        </div>

    )

}