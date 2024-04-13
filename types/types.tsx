export type SideBarItems = {
  title: string;
  path: string;
  icon?: JSX.Element;
  subIcon?: JSX.Element;
  subMenu?: boolean;
  subMenuItems?: SideBarItems[];
};
