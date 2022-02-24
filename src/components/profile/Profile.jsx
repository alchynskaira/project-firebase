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
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {getDatabase, ref, set} from "firebase/database";
import {saveUser} from "../helpers/saveUser";
import {db} from "../../firebaseConfig";
import {onSnapshot, collection, getFirestore} from "firebase/firestore";

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: "32px auto"
        },
    })
);

export default function UserCard() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);


    useEffect(() => {
        let users= [];
        db.collection("user").onSnapshot(el => {
            console.log(el, "el")
            el.docs.forEach(per => {
                console.log(per, "per")
                users.push((per.data()))
            })
            })
           setUsers(users);
    }, [])

    console.log(users)
    return (
        <div>
            {users && users.map(user => {
                return (
                    <Card className={classes.card} sx={{maxWidth: 500}} key={user.id}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user.avatar}
                                    sx={{width: 64, height: 64}}
                                />
                            }
                        />

                        <CardMedia
                            component="img"
                            height="194"
                            image="https://picsum.photos/500/194"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography>
                               Name: {user.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Birthday:  {user.birthday}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Age: {user.age}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Profession: {user.profession}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton aria-label="mailto:email@email.com">
                                <EmailIcon/>
                            </IconButton>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    )

}