import './Flags.css';
import Flag from '../Flag/Flag.jsx';
import flagsConfig from './config.js';

function Flags() {
  console.log('render FlagSSS');

  return (
    <>
      <h1> React components </h1>
      <div className='flags-container'>
        { flagsConfig.map(flagConfig =>
          <Flag
            key={ flagConfig.id }
            { ...flagConfig }
            onClickHandler={
              () => flagConfig.orientation === 'vertical'
                ?
                console.error(flagConfig.name)
                :
                console.log(flagConfig.name)
            }
          />
        )}
      </div>
    </>
  );
}

export default Flags;
