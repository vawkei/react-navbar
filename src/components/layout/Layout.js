import MainHeader from './MainHeader';
//import MainFooter from "./MainFooter"

const Layout = (props) => {
    return ( 
        <div>
            <MainHeader />
            <main style={{margin:'6rem', textAlign:'center'}}>{props.children}</main>
            {/* <MainFooter /> */}
        </div>
     );
}
 
export default Layout;