import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import Stack from 'react-bootstrap/Stack';

const Layout = ({children}) => {
    return(<div>
        <Navbar/>
        <Stack direction="horizontal" gap={3}>
            <div className="p-2"><Sidebar/></div>
            <div>{children}</div>
        </Stack>
        
    </div>)
}

export default Layout;