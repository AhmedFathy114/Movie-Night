import { useNavigate } from "react-router-dom";

export function useMoveBack() {
    const navigate = useNavigate();
    function handleBack() {
        navigate(-1);
    }

    return { handleBack };
}
