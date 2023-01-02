export type MenuItem = {
  icon?: string;
  label: string;
  link?: string;
  value?: () => React.ReactNode;
};

const items = [
  { icon: 'dashboard', label: 'Dashboard', link: '/' },
  { icon: 'double-bust', label: 'Leads', link: '/leads' },
  { icon: 'business', label: 'Locations', link: '/locations' },
  { icon: 'bust', label: 'Machines', link: '/machines' },
  { icon: 'route', label: 'Routes', link: '/routes' },
  { icon: 'warning', label: 'Issues', link: '/issues' },
  { icon: 'thumb-up-rounded', label: 'Suggest', link: '/suggest' },
  { icon: 'bust', label: 'Users', link: '/users' },
];

export default items;
