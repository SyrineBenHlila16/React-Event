import Events from "./Events";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";

// function Event({ name,description,  imageUrl, price, nbTickets, nbParticipants }) {

function Event({ event , showAlert}) {
   const [eventInfo, setEventInfo] = React.useState(event);
  const handleBuy = () => {
    // if (eventInfo.nbTickets > 0) {
      setEventInfo(prev => ({
        ...prev,
        nbTickets: prev.nbTickets - 1,
        nbParticipants: prev.nbParticipants + 1
      })
    );
    showAlert(); //appel parent > fils
    }
const handleLike = () => {
  setEventInfo(prevEventInfo => {
    return {
      ...prevEventInfo,
      likes: !prevEventInfo.likes
    };
  });
}

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={`src/Composants_fonctionnels/images/${eventInfo.nbTickets === 0 ? "sold_out.png" : eventInfo.img}`}
                title="events"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                    {eventInfo.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Description: {eventInfo.description}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: {eventInfo.price} DT
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Number of Tickets: {eventInfo.nbTickets}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Number of Participants: {eventInfo.nbParticipants}
                </Typography>
               
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleBuy} disabled={eventInfo.nbTickets === 0 ? true : false}>Book an event</Button>
                <Button size="small" onClick={handleLike}> {eventInfo.likes ? 'Dislike' : 'Like'}</Button>
            </CardActions>
        </Card>
    );
}
export default Event;
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Box, Chip, Stack, Divider } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// import PeopleIcon from '@mui/icons-material/People';
// import React from 'react';

// function Event({ event }) {
 
//   return (
//     <Card 
//       sx={{ 
//         maxWidth: 400,
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'transform 0.2s, box-shadow 0.2s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: 6,
//         }
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="200"
//         image={`src/Composants_fonctionnels/images/${event.img}`}
//         alt={event.name}
//         sx={{ objectFit: 'cover' }}
//       />
      
//       <CardContent sx={{ flexGrow: 1, pb: 1 }}>
//         <Typography 
//           gutterBottom 
//           variant="h5" 
//           component="h2"
//           sx={{ 
//             fontWeight: 600,
//             mb: 2,
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             display: '-webkit-box',
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: 'vertical',
//           }}
//         >
//           {event.name}
//         </Typography>
        
//         <Typography 
//           variant="body2" 
//           color="text.secondary"
//           sx={{ 
//             mb: 2,
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             display: '-webkit-box',
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: 'vertical',
//           }}
//         >
//           {event.description}
//         </Typography>

//         <Divider sx={{ my: 2 }} />

//         <Stack spacing={1.5}>
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Typography variant="subtitle1" color="primary" fontWeight={600}>
//               Prix
//             </Typography>
//             <Chip 
//               label={`${event.price} DT`} 
//               color="primary" 
//               size="small"
//               sx={{ fontWeight: 600 }}
//             />
//           </Box>

//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Box display="flex" alignItems="center" gap={0.5}>
//               <ConfirmationNumberIcon fontSize="small" color="action" />
//               <Typography variant="body2" color="text.secondary">
//                 Tickets
//               </Typography>
//             </Box>
//             <Typography variant="body2" fontWeight={500}>
//               {event.nbTickets}
//             </Typography>
//           </Box>

//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Box display="flex" alignItems="center" gap={0.5}>
//               <PeopleIcon fontSize="small" color="action" />
//               <Typography variant="body2" color="text.secondary">
//                 Participants
//               </Typography>
//             </Box>
//             <Typography variant="body2" fontWeight={500}>
//               {event.nbParticipants}
//             </Typography>
//           </Box>
//         </Stack>
//       </CardContent>

//       <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
//         <Button 
//           size="small" 
//           startIcon={<FavoriteIcon />}
//           sx={{ minWidth: 80 }}
//         >
//           {event.likes}
//         </Button>
//         <Button 
//           size="small" 
//           startIcon={<ShareIcon />}
//         >
//           Partager
//         </Button>
//         <Button 
//           size="small" 
//           variant="contained"
//           sx={{ ml: 'auto' }}
//         >
//           En savoir plus
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default Event;