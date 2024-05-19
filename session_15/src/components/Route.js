import useNavigation from '../hooks/use-navigation'

function Route({ path, children }) {
  const {currentPath} = useNavigation();
  // show child page
  if (path === currentPath) {
    return children;
  }
  // nothing
  return null;
}

export default Route;