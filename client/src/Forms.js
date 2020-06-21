import React , {useState}from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Checkbox } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width : '100%',
    backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/background.jpg)',
  },
  image: {
    backgroundImage: 'url(https://image.freepik.com/free-vector/teeth-dental-care-medical-background_1017-17395.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  group: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
}
}));

 const Forms = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location = "/";
  };
  const [inputs, setInputs] = useState({
    name: "",
    address:"",
    age:"",
    sex:"",
    FCSSF:"",
    BREATHING:"",
    ABROAD:"",
    DOMESTIC:"",
    EXPOSURE:"",
    HEALTHCARE:""
  });

  const { name, address, age , sex,FCSSF,BREATHING,ABROAD,DOMESTIC,EXPOSURE,HEALTHCARE} = inputs;

  const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name ,address, age,sex,FCSSF,BREATHING,ABROAD,DOMESTIC,EXPOSURE,HEALTHCARE};
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        },
        
      );
     
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        
        <div className={classes.paper}>
        <header>DENTINIX DENTAL CLINIC</header>
          <img  src="https://fplogoimages.withfloats.com/actual/599008efa26bc60530bfec99.jpg" width ="100px" height = "100px"></img>
          
          <Typography component="h1" variant="h5">
            COVID-19 DECLARATION FORM
          </Typography>
          <form className={classes.form} noValidate onSubmit= {onSubmitForm}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={e=>onChange(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              type="number"
              id="age"
              autoComplete="age"
              value={age}
              onChange={e=>onChange(e)}
            />
            <FormControl variant="outlined" className={classes.form} fullWidth required>
        <InputLabel>Sex</InputLabel>
        <Select
          labelId="sex"
          id="sex"
          value={sex}
          onChange={e => onChange(e)}
          label="sex"
          name="sex"
          
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"others"}>Others</MenuItem>
          
        </Select>
        
      </FormControl>
      <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          margin="normal"
              required
              fullWidth
          rows={4}
          defaultValue=""
          variant="outlined"
          name="address"
          value={address}
              onChange={e=>onChange(e)}
        />
              <FormControl component="fieldset">
        <FormLabel component="legend"> Q1.. Do you have symptoms of Fever, Cough, Sneezing, Sore throat, Fatigue, Myalgia</FormLabel>
        <RadioGroup aria-label="gender" name="FCSSF" value={FCSSF} onChange={e => onChange(e)} className={classes.group}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Q2.. Do you have difficulty in breathing?</FormLabel>
        <RadioGroup aria-label="gender" name="BREATHING" value={BREATHING} onChange={e => onChange(e)} className={classes.group}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Q3.. Have you travelled outside the country in past 30 days?</FormLabel>
        <RadioGroup aria-label="gender" name="ABROAD" value={ABROAD} onChange={e => onChange(e)} className={classes.group}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Q4.. Have you travelled inside India to other cities in past 15 days?</FormLabel>
        <RadioGroup aria-label="gender" name="DOMESTIC" value={DOMESTIC} onChange={e => onChange(e)} className={classes.group}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Q5..Have you been exposed to confirmed OR suspicious COVID-19 patient in last 15 days?</FormLabel>
        <RadioGroup aria-label="gender" name="EXPOSURE" value={EXPOSURE} onChange={e => onChange(e)} className={classes.group}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Q6.. Have you visited healthcare facility in past 15 days?</FormLabel>
        <RadioGroup aria-label="gender" name="HEALTHCARE" value={HEALTHCARE} onChange={e => onChange(e)} className={classes.group}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <br></br>

    <h6 style ={{textAlign : "justify"}}>  I have come to <b>Dentinix Multispecialty Dental Clinic</b> for an<b> emergency treatment</b>. In wake of current COVID-19 pandemic, doctor reserves right to treat, defer or refer me accordingly. If I happen to be asymptomatic carrier or an undiagnosed patient with COVID-19 disease, it may endanger doctors and clinic staff. It is my duty and responsibility to take appropriate precaution and follow the protocol prescribed by the Clinic. 

I also know and understand that I may get infection from dental hospital/clinic or from Doctor and I will take every precaution to prevent this from happening, but I will not hold doctors or staff accountable if such infection occurs to me or accompanying person with me. </h6>


<b>I confirm and agree that the details given by me are true to best of my knowledge and I can be held accountable if situation arises.
<br></br><Checkbox required/> 
I agree to all terms and conditions mentioned above. </b>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClickOpen}
            >
              Sign In
            </Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Record Saved Successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>

          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        
       <h1 style = {{position : "absolute", top : "50%", right :"12%"}}> COVID-19 DECLARATION</h1>
       <h4 style = {{position : "absolute", top : "170%", left :"75%"}}><b>ADDRESS :</b></h4>
       <h5 style = {{position : "absolute", top : "175%", left :"75%"}}> Off Kasavanahalli Main Road,</h5>
       <h5 style = {{position : "absolute", top : "180%", left :"75%"}}>Norbert Church Rd, Kasavanahalli,</h5>
       <h4 style = {{position : "absolute", top : "185%", left :"75%"}}><b>Bengaluru Karnataka 560035</b></h4>
        </Grid>
    </Grid>
  );
}
export default Forms;