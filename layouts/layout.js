import Header from '../components/header'; 
import Footer from '../components/footer'; 
import Head from 'next/head'; 
 
const Layout = (props) => (     
<div>         
    <Head>                       
        <meta name="viewport" content="width=device-width, initialscale=1.0" />  
        <link rel="stylesheet" href="/css/bootstrap.css" />   
        </Head>                  
        <Header />   
            {props.children}                                   
        <Footer />
        </div>  
        ) ;
export default Layout;