import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import courses from '../data/courses';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
    const sortedCourses = [...courses];

    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses;
    }

    sortedCourses.sort((a, b) => a[key] > b[key] ? 1 : -1);
    return sortedCourses;
}

const Courses = () => {

    const location = useLocation();
    const query = queryString.parse(location.search);
    const navigate = useNavigate();
    const [sortKey, setSortKey] = useState(query.sort);
    //sortCourses(courses, sortKey);

    /* console.log(sortCourses(courses, sortKey)); */

    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(courses, sortKey)
    );

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigate('.');
            setSortKey();
            setSortedCourses([...courses]);
        }
    }, [sortKey, navigate]);

    return (<>
        <p style={{ fontSize: '2.5em', marginTop: '20px', marginBottom: '20px', fontWeight: 'bolder'}}>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</p >
        {
            sortedCourses.map((course) => (
                <div>
                    <Link
                        to={course.slug}
                        /*to={course.id.toString()}*/
                        key={course.id}
                        className="courseLink">
                        {course.title}
                    </Link>
                </div>
                
            ))
        }
    </>);
};

export default Courses;