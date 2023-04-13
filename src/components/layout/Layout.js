import MainHeader from './MainHeader';


const Layout = (props) => {
    return ( 
        <div>
            <MainHeader />
            <main style={{margin:'6rem', textAlign:'center'}}>{props.children}</main>
        </div>
     );
}
 
export default Layout;