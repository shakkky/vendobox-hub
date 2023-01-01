import GraphQLErrors from '../Components/GraphQLErrors';
import { useAppContext } from '../app-context';

function GraphQLErrorWidget(): JSX.Element | null {
  const { apiErrors } = useAppContext();
  if (!apiErrors) return null;
  return <GraphQLErrors errors={apiErrors} />;
}

export default GraphQLErrorWidget;
