import "antd/dist/antd.css";
import "./App.css";
import {Menu} from "antd";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: "row"}}>
        <Menu items={[
        { label: "Roles"},
        { label: "User groups" },
        { label: "Departments" },
        { label: "Hierarchy" },
        { label: "Locations" },
        { label: "Users" }
    ]}
        ></Menu>
    <div>Content</div>
    </div>
    );
}
function content() {
    return <div>
        <Routes>
            <Route path="/" element={<div>Roles</div>}></Route>
            <Route path="/User groups" element={<div>User groups</div>}></Route>
            <Route path="/Departments" element={<div>Departments</div>}></Route>
            <Route path="/Hierarchy" element={<div>Hierarchy</div>}></Route>
            <Route path="/Locations" element={<div>Locations</div>}></Route>
            <Route path="/Users" element={<div>Users</div>}></Route>
        </Routes>
    </div>
};

export default form;
