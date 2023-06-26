import './Flags.css';
import Flag from '../../components/Flag/Flag.jsx';
import flagsConfig from './config.js';

function Flags() {

  return (
    <>
      <h1> React components </h1>
      <div className='flags-container'>
        { flagsConfig.map(flagConfig =>
          <Flag
            key={ flagConfig.id }
            { ...flagConfig }
          />
        ) }
      </div>
    </>
  );
}

export default Flags;
