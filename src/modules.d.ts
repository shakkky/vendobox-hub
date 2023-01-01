declare module 'rl-react-helmet' {
  function ReactHelmet({
    encodeSpecialCharacters,
    titleTemplate,
    defaultTitle,
    onChangeClientState,
    children,
  }: {
    encodeSpecialCharacters?: boolean;
    titleTemplate?: string;
    defaultTitle?: string;
    onChangeClientState?: (newState: unknown) => void;
    children: React.ReactNode;
  }): JSX.Element;
  export default ReactHelmet;
}

const OAuth2Login = (props: {
  id: string;
  authorizationUrl: string;
  clientId: string;
  redirectUri: string;
  responseType: string;
  scope: string;
  buttonText: string;
  isCrossOrigin: 'true' | 'false';
  onFailure?: () => void;
  onSuccess?: () => void;
}) => JSX.Element;
declare module 'react-simple-oauth2-login' {
  export default OAuth2Login;
}
