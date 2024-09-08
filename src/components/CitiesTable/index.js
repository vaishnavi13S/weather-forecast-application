import { Link } from 'react-router-dom';

import './index.css'

const CitiesTable = (props) => {
    const {cities} = props;
    

    return(
        <div className='table-container'>
            <table>
                <thead>
                <tr>
                    <th>City Name</th>
                    <th>Country Name</th>
                    <th>Timezone</th>
                    
                </tr>
                </thead>
                <tbody>
                {
                    cities.map((city) => (

                        <tr>
                            
                            <td>
                                <Link to={`/weather/${city.name}`} className='link'>
                                {city.name}
                                </Link>
                            </td>
                            <td>{city.countryName}</td>
                            <td>{city.timezone}</td>
                            
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default CitiesTable