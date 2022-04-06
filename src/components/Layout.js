import Navbar from './Navbar';

export default function Layout(props){
    return (
        <div>
        <Navbar/>
        <div className='container py-4'>
            {props.children}
        </div> 
        </div>
    )
}