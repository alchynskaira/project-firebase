import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import  {makeStyles} from "@material-ui/core";
// import {deepOrange} from "@mui/material/colors";
// import MailIcon from '@mui/icons-material/Mail';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
//
// // import InstagramIcon from '@mui/icons-material/Instagram';
// // import LinkedInIcon from '@mui/icons-material/LinkedIn';
// // import FacebookIcon from '@mui/icons-material/Facebook';
//
// //import { getDatabase, ref, set } from "firebase/database";
//
//
//
//
// export  const UserCard = () => {
//     const classes = useStyles();
//
//
//     // function writeUserData(userId, name, email, imageUrl) {
//     //     const database = getDatabase();
//     //     set(ref(database, 'users/' + userId), {
//     //         username: name,
//     //         email: email,
//     //         profile_picture : imageUrl
//     //     });
//     // }
//     // writeUserData()
//
//     return (
//         <>
//             <Box className={classes.box}  sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}>
//                 <Card className={classes.card} variant="outlined">
//             <CardContent>
//                 <Avatar  sx={{ backgroundColor: deepOrange[500], width: 100, height:100 }}>I</Avatar>
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className={classes.text}>
//
//                 </Typography>
//                 <Typography variant="h5" component="div" className={classes.text}>
//
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary" className={classes.text}>
//                     <PhoneIphoneIcon className={classes.icon}/>
//                 </Typography>
//                 <Typography variant="body2">
//                  <MailIcon className={classes.icon}/>
//                 </Typography>
//             </CardContent>
//
//                     </Card>
//             </Box>
//         </>
//     );
// };
// import React from "react";
// import {
//     Box,
//     Card,
//     CardContent,
//     Typography,
//     Avatar,
//     CardMedia,
// } from "@material-ui/core";
// import {  createStyles, makeStyles } from "@material-ui/core/styles";
//  import FavoriteIcon from '@mui/icons-material/Favorite';
// import {deepOrange} from "@mui/material/colors";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
                margin: "0 auto",
                marginTop: "50px",
                height: "700px",
                width: '600px',
                backgroundColor:"lightGray",
            },
            card: {
                borderRadius: 15,
                maxWidth: "600px",
                minWidth: "500px",
                height: "700px",
                alignItems: "center",

            },
            image:{
                width: '50px',
                height: '50px',
                marginTop: '50px',
            },

            cardContent: {
                padding: theme.spacing(2, 0, 0, 0),
            },
        },
    })
);

export const  UserCard = () =>  {
    //const classes = useStyles();
    return (
        // <Box className={classes.root}>
        //     <Card className={classes.root}>
        //         <CardContent>
        //             <Avatar sx={{ backgroundColor: deepOrange[500], width: 100, height:100 }} >I</Avatar>
        //             <FavoriteIcon/>
        //             <CardMedia
        //                 style={{ paddingTop: "50%" }}
        //                 image="../image/nature.jpeg"
        //                 title="Background image"
        //             />
        //             <Typography >Card Title</Typography>
        //         </CardContent>
        //     </Card>
        // </Box>
        <div>hello</div>
    );
}



