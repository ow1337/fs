import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/userAPI';

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchUser = async () => {
        try {
          await getUser();
          setLoading(false);
        } catch (error) {
          console.error(error);
          navigate('/');
        }
      };
      fetchUser();
    }, [navigate]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
