import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import {  createStyles, makeStyles } from "@material-ui/core/styles";
import { getDatabase, ref, set } from "firebase/database";
import {saveUser} from "../helpers/saveUser";
import db from "firebase/firestore";
import {onSnapshot, collection, getFirestore} from "firebase/firestore";
const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: "32px auto"
        },
    })
);

export default function RecipeReviewCard() {
     const classes = useStyles();
    // const [user, setUser] = useState({});
     const db = getFirestore();

useEffect(()=> {
    return onSnapshot(collection(db, "user"), (snapshot =>
        snapshot.docs.map(doc => doc.data())))


    }, [])





    // function writeUserData(userId, name, email, imageUrl) {
    //     const db = getDatabase();
    //     set(ref(db, 'users/' + userId), {
    //         username: name,
    //         email: email,
    //         profile_picture : imageUrl
    //     });
    // }



    return (
        <Card className={classes.card} sx={{ maxWidth: 500 }}>
            <CardHeader
                avatar={
                    <Avatar
                        alt="Remy Sharp"
                        src="https://picsum.photos/64"
                        sx={{ width: 64, height: 64 }}
                    />
                }
                title="Iren Alchynska"
                subheader="March 09, 2003"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://picsum.photos/500/194"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="mailto:email@email.com">
                    <EmailIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}