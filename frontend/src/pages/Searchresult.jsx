import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container ,Row,Col} from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard';
import tour from '../assets/data/tours';
import Newsletter from '../shared/Newsletter';
const SearchResult = () => {
    const location=useLocation()
    const [data] =useState(location.state)
    console.log(data);
  return (<>
<CommonSection title={'Tour Search Result'}/>
<section>
    <Container>
    <Row>
        {
           data.length ===0? <h4 className='text-center'>No Tour Found</h4> : data?.map(tour=><Col lg='3' className='mb-4' key={tour._id}><TourCard tour={tour}/></Col>)
        }
    </Row>
    </Container>
</section>
<Newsletter/>
  </>)
};

export default SearchResult;
