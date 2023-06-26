import './Flag.css';

function Flag(props) {

  return (
    <div
      // onClick={ () => console.log(props.name) }
      className={`flag ${ props.orientation }` }
    >
      {
        props.lines.map((line, index) =>
          <div
            key={`${ props.name }Color${ index }`}
            style={{
              backgroundColor: line.color,
              alignItems: line.circle?.verticalPosition,
              justifyContent: line.circle?.horizontalPosition,
            }}
          >
            {
              line.circle &&
                <div
                  className='circle'
                  style={{
                    height: line.circle.size,
                    width: line.circle.size,
                    backgroundColor: line.circle.color,
                  }}
                >
                </div>
            }
          </div>
        )
      }
    </div>
  );
}

export default Flag;
