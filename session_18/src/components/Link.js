import classnames from 'classnames';
import useNavigation from "../hooks/use-navigation"

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classnames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  )

  const handleClick = (e) => {
    // ctrl or command
    if (e.ctrlKey || e.metaKey) {
      return
    }
    e.preventDefault();

    navigate(to)
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link