import classes from './DrawerToggleButton.module.css'
const DrawerToggleButton = (props) => {
    return ( 
        <button className={classes.toggleButton} onClick={props.lipps}>
            <div className={classes.toggleLine}/>
            <div className={classes.toggleLine}/>
            <div className={classes.toggleLine}/>
        </button>
     );
}
 
export default DrawerToggleButton;