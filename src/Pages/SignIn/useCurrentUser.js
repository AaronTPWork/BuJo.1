import { useGlobalValues } from '../../Stores/GlobalValues';

const useCurrentUser = () => {
  const {
    currentUser,
    actions: { setCurrentUser },
  } = useGlobalValues();

  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
