import {styled , Box , Button} from '@mui/material';

export const CustomizedButton =  styled(Button)`
  background-color: #133331;
  color: #ccbb88 ;
  :hover {
    color:#1555bd;
    
    background-color: #ffff66;
  }
`;

/* 
import {CustomizedButton} from '../StyledComponents'
 <CustomizedButton>Click me </CustomizedButton>
*/