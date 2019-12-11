import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {white, green, pink, lightgrey} from "../Utils/colors"
 const CustomButton = withStyles({
  root: {
    margin:5,
    color:lightgrey,
    fontWeight:'bold',
    background: green,//'linear-gradient(45deg, #0E7373 40%, #EDF5E1 90%)', 
    '&:hover': {
      background: 'linear-gradient(20deg, #EDF5E1 10%, #F26D85 90%)',
      color:green,
    },
  },
})(Button);
export default CustomButton