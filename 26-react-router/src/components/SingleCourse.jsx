import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import courses from '../data/courses';
import { useEffect } from 'react';

const SingleCourse = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const course = courses.find((course) => course.slug === params.slug);
    useEffect(() => {
        if (!course) {
            navigate('..', { relative: 'path' });
        }
    }, [course, navigate]);


    return <>
        <h2>{course?.title}</h2>
        <h3>{course?.slug}</h3>
        <h3>{course?.id}</h3>
        <Link to=".." relative='path'>All courses</Link>
    </>;

};
/*relative='path' переходить на один уровень выше относительно этого пути 
course?.title оператор который позволит избежать ошибок
*/
export default SingleCourse;