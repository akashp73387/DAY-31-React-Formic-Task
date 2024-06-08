import {
  HomeOutlined,
  EditOutlined,
  AppstoreAddOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? "dark" : "light"} className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Dash Board</Link>
      </Menu.Item>
      <Menu.Item key="bookdetails" icon={<DatabaseOutlined />}>
        <Link to="/bookdetails"> Manage Books</Link>
      </Menu.Item>
      <Menu.Item key="create" icon={<AppstoreAddOutlined />}>
        <Link to="/create">Add Books</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
