import { useNavigate, useParams } from 'react-router-dom';

function URLParams() {
  const navigate = useNavigate();
  const { param } = useParams();

  return (
    <>
      <h3> The inserted param in URL is { param } </h3>
      <button onClick={ () => navigate('/flags') }>
        Go to flags page
      </button>
    </>
  );
}

export default URLParams;
