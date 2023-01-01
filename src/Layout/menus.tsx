export type MenuItem = {
  icon?: string;
  label: string;
  link?: string;
  value?: () => React.ReactNode;
};

const items = [
  { icon: 'report', label: 'Download Requests', link: '/download-requests' },
  { icon: 'books', label: 'Resumes', link: '/resumes' },
  { icon: 'double-bust', label: 'Users', link: '/users' },
];

export default items;
