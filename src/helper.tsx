import { login_authUser } from 'schema/login';

const getUserSession = (): login_authUser | null => {
  try {
    const json = localStorage.getItem('user') ?? 'null';
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
};

type MinimalUser = { role?: Maybe<{ code: Maybe<string> }> };

const getRole = (user?: Maybe<MinimalUser>) => user?.role?.code ?? '';

const hasRole = (user: Maybe<MinimalUser> = null, role: string | string[]) => {
  const testUser = user ? user : getUserSession();

  if (!testUser) return false;

  if (typeof role === 'string') {
    return role === getRole(testUser);
  }

  if (Array.isArray(role) && role.length > 0) {
    return role.includes(getRole(testUser));
  }

  throw new Error(`Unsupported role defined as ${role}`);
};

const isAdmin = (user?: Maybe<MinimalUser>) => hasRole(user, ['ADMIN']);

const isCurrentUser = (user?: Maybe<{ id?: Maybe<number> }>) => {
  const currentUser = getUserSession();
  if (user && user.id && currentUser && currentUser.id) {
    return user.id === currentUser.id;
  }
  return false;
};

const isUrlImage = (url: string): boolean => {
  const regex = /\.(?:jpg|gif|png|jpeg)$/;
  return regex.test(url);
};

export { getUserSession, getRole, hasRole, isAdmin, isCurrentUser, isUrlImage };
