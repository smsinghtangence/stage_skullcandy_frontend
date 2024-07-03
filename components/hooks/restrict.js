import { useRouter,useSearchParams  } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
const restrict = () => {
    const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
    useSelector((state) => state.auth);
    const router = useRouter();
    if(!users?.id)
        {
            router.push('/');
        }
};

export default restrict;