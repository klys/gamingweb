import React from "react"
import {useLocation, useNavigate} from 'react-router-dom'

const Message = (props) => {
    const navigate = useNavigate();
    function useQuery(){
        const { search } = useLocation();
  
        return React.useMemo(() => new URLSearchParams(search), [search]);
      }

    let query = useQuery();
    return (<div>
        <h1>{query.get("title")}</h1>
        <p>{query.get("message")}</p>
    </div>)
}

export default Message;