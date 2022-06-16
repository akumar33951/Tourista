import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectList({onChildClick}) {
  const classes = useStyles();
  const [tag_id, setTag] = React.useState('');

  useEffect(() => {
    {onChildClick(tag_id)};
  }, [tag_id]
  );

  const handleChange = (event) => {
    setTag(event.target.value);// function(){
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={tag_id}
          onChange={handleChange}
          label="Tag"
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={1}>Family</MenuItem>
          <MenuItem value={2}>Friends</MenuItem>
          <MenuItem value={3}>Couple</MenuItem>
          <MenuItem value={4}>Night Out</MenuItem>
          <MenuItem value={5}>Adventure Sport</MenuItem>
          <MenuItem value={6}>Shopping</MenuItem>
          <MenuItem value={7}>Explore</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}