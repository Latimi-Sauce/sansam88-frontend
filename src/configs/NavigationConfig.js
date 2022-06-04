import { DashboardOutlined, FileTextOutlined, LineChartOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboard",
    breadcrumb: false,
    submenu: [
      {
        key: "dashboard",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "sidenav.dashboard.default",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const salesNavTree = [
  {
    key: "sales",
    path: `${APP_PREFIX_PATH}/sales`,
    title: "sidenav.sales",
    breadcrumb: false,
    submenu: [
      {
        key: "default",
        path: `${APP_PREFIX_PATH}/sales/default`,
        title: "sidenav.sales.default",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sale-create",
        path: `${APP_PREFIX_PATH}/sales/create`,
        title: "sidenav.sales.create",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...salesNavTree];

export default navigationConfig;
