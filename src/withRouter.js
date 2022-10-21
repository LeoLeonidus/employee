import { useNavigate , useParams} from 'react-router-dom';
/*
export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const params = useParams();

        return (
            <Component
                navigate={navigate}
                params={params}
                {...props}
            />
        );
    };

    return Wrapper;
};
*/
export const withRouter = WrappedComponent => props => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <WrappedComponent
            {...props}
            params={params}
            navigate={navigate}
        />
    );
};