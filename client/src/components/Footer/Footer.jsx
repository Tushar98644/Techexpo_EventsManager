import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1',marginTop:"7vw" }}>
            <MDBContainer className='p-4'>
                <section className=''>
                    <MDBRow>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='https://github.com/Tushar98644'>
                    Tushar
                </a>
            </div>
        </MDBFooter>

    );
}

export default Footer;