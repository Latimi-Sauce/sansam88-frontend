import {
  DashboardOutlined,
  FileAddOutlined,
  FormOutlined,
  ShoppingCartOutlined,
  LineChartOutlined,
  TeamOutlined,
  UserAddOutlined,
  WalletOutlined,
  CalendarOutlined,
  DropboxOutlined,
  MedicineBoxOutlined,
  MessageOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboards",
    breadcrumb: false,
    submenu: [
      {
        key: "dashboards-default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "sidenav.dashboards.default",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "dashboards-wallet",
        path: `${APP_PREFIX_PATH}/dashboards/wallet`,
        title: "sidenav.dashboards.wallet",
        icon: WalletOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const salesNavTree = [
  {
    key: "store",
    title: "sidenav.store",
    breadcrumb: false,
    submenu: [
      {
        key: "sales",
        title: "sidenav.sales",
        icon: LineChartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "sales-default",
            path: `${APP_PREFIX_PATH}/sales/default`,
            title: "sidenav.sales.default",
            icon: LineChartOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "sales-create",
            path: `${APP_PREFIX_PATH}/sales/create`,
            title: "sidenav.sales.create",
            icon: FormOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "customers",
        path: `${APP_PREFIX_PATH}/customers`,
        title: "sidenav.customers",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "customers-default",
            path: `${APP_PREFIX_PATH}/customers/default`,
            title: "sidenav.customers.default",
            icon: TeamOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "customers-create",
            path: `${APP_PREFIX_PATH}/customers/create`,
            title: "sidenav.customers.create",
            icon: UserAddOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "products",
        path: `${APP_PREFIX_PATH}/products`,
        title: "sidenav.products",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "products-default",
            path: `${APP_PREFIX_PATH}/products/default`,
            title: "sidenav.products.default",
            icon: ShoppingCartOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "products-create",
            path: `${APP_PREFIX_PATH}/products/create`,
            title: "sidenav.products.create",
            icon: FileAddOutlined,
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "products-category",
            path: `${APP_PREFIX_PATH}/products/category`,
            title: "sidenav.products.category",
            icon: TagsOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
    ],
  },
];

const extraNavTree = [
  {
    key: "events",
    path: `${APP_PREFIX_PATH}/events`,
    title: "sidenav.events",
    breadcrumb: false,
    submenu: [
      {
        key: "farms",
        path: `${APP_PREFIX_PATH}/farms`,
        title: "sidenav.farms",
        icon: AppstoreOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "farms-default",
            path: `${APP_PREFIX_PATH}/farms/default`,
            title: "sidenav.farms.default",
            icon: AppstoreOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "farms-create",
            path: `${APP_PREFIX_PATH}/farms/create`,
            title: "sidenav.farms.create",
            icon: AppstoreAddOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
    ],
  },
  {
    key: "calendar",
    path: `${APP_PREFIX_PATH}/events/calendar`,
    title: "sidenav.events.calendar",
    icon: CalendarOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "events-delivery",
    path: `${APP_PREFIX_PATH}/events/delivery`,
    title: "sidenav.events.delivery",
    icon: DropboxOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "delivery-create",
    path: `${APP_PREFIX_PATH}/events/delivery/create`,
    title: "sidenav.events.delivery.create",
    icon: MedicineBoxOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "events-sns",
    path: `${APP_PREFIX_PATH}/events/sns`,
    title: "sidenav.events.sns",
    icon: MessageOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree, ...salesNavTree, ...extraNavTree];

export default navigationConfig;