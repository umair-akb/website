import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import Container1 from '../components/photos/Container1'
import Container2 from '../components/photos/Container2'
import Container3 from '../components/photos/Container3'
import Container4 from '../components/photos/Container4'

const Photos = () => {
    return ( 
        <>
            <TopBar />
            <Container1 id='1' />
            <Container2 id='2' />
            <Container3 id='3' />
            <Container4 id='4' />
            <Footer />
        </>
     );
}
 
export default Photos;